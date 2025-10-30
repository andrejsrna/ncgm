'use client';

import { useMemo, useState } from "react";
import MusicCard from "@/app/music/MusicCard";
import type { MusicData } from "@/app/hooks/useMusicQuery";
import { slugify } from "@/lib/utils";

interface GenreFilter {
  label: string;
  count: number;
}

interface LabelFilter {
  label: string;
  slug: string;
  count: number;
}

interface MusicBrowserProps {
  tracks: MusicData[];
  genres: GenreFilter[];
  labels: LabelFilter[];
}

export default function MusicBrowser({ tracks, genres, labels }: MusicBrowserProps) {
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const [selectedLabel, setSelectedLabel] = useState<string>("all");

  const filteredTracks = useMemo(() => {
    return tracks.filter((track) => {
      const genreName = track.genre?.Genres?.trim();
      const matchesGenre = selectedGenre === "all" || genreName === selectedGenre;

      const trackLabelSlug =
        track.label?.slug ?? (track.label?.name ? slugify(track.label.name) : "");
      const matchesLabel = selectedLabel === "all" || trackLabelSlug === selectedLabel;

      return matchesGenre && matchesLabel;
    });
  }, [selectedGenre, selectedLabel, tracks]);

  return (
    <section className="space-y-10">
      <div className="space-y-8">
        {labels.length > 0 && (
          <FilterGroup
            title="Browse by label"
            subtitle={
              selectedLabel === "all"
                ? `${tracks.length} total releases`
                : `${filteredTracks.length} release${filteredTracks.length === 1 ? "" : "s"} selected`
            }
            chips={[
              {
                key: "all",
                label: "All labels",
                count: tracks.length,
                active: selectedLabel === "all",
                onSelect: () => setSelectedLabel("all"),
              },
              ...labels.map((label) => ({
                key: label.slug,
                label: label.label,
                count: label.count,
                active: selectedLabel === label.slug,
                onSelect: () => setSelectedLabel(label.slug),
              })),
            ]}
          />
        )}

        <FilterGroup
          title="Browse by genre"
          subtitle={`${filteredTracks.length} track${filteredTracks.length === 1 ? "" : "s"} ready to download`}
          chips={[
            {
              key: "all",
              label: "All genres",
              count: tracks.length,
              active: selectedGenre === "all",
              onSelect: () => setSelectedGenre("all"),
            },
            ...genres.map((genre) => ({
              key: genre.label,
              label: genre.label,
              count: genre.count,
              active: selectedGenre === genre.label,
              onSelect: () => setSelectedGenre(genre.label),
            })),
          ]}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTracks.length > 0 ? (
          filteredTracks.map((track) => (
            <MusicCard key={track.documentId ?? track.slug} track={track} />
          ))
        ) : (
          <p className="col-span-full rounded-2xl border border-border bg-white p-8 text-center text-sm text-slate-500 shadow-sm">
            No tracks found for this combination yet. Try adjusting your filters or check back soon.
          </p>
        )}
      </div>
    </section>
  );
}

interface FilterGroupProps {
  title: string;
  subtitle?: string;
  chips: Array<{
    key: string;
    label: string;
    count: number;
    active: boolean;
    onSelect: () => void;
  }>;
}

function FilterGroup({ title, subtitle, chips }: FilterGroupProps) {
  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          {title}
        </span>
        {subtitle && <span className="text-xs text-slate-500">{subtitle}</span>}
      </div>
      <div className="flex flex-wrap gap-3">
        {chips.map(({ key, ...chip }) => (
          <FilterChip key={key} {...chip} />
        ))}
      </div>
    </div>
  );
}

interface FilterChipProps {
  label: string;
  count: number;
  active: boolean;
  onSelect: () => void;
}

function FilterChip({ label, count, active, onSelect }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-white text-slate-600 hover:border-primary hover:text-primary"
      }`}
    >
      <span>{label}</span>
      <span className={`rounded-full px-2 py-0.5 text-[10px] ${active ? "bg-white/20" : "bg-slate-100 text-slate-500"}`}>
        {count}
      </span>
    </button>
  );
}
