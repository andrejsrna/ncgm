'use client';

import { useMemo, useState } from "react";
import MusicCard from "@/app/music/MusicCard";
import type { MusicData } from "@/app/hooks/useMusicQuery";
import { cn } from "@/lib/utils";

interface GenreFilter {
  label: string;
  count: number;
}

interface MusicBrowserProps {
  tracks: MusicData[];
  genres: GenreFilter[];
}

export default function MusicBrowser({ tracks, genres }: MusicBrowserProps) {
  const [selectedGenre, setSelectedGenre] = useState<string>("all");

  const filteredTracks = useMemo(() => {
    if (selectedGenre === "all") {
      return tracks;
    }
    return tracks.filter((track) => track.genre?.Genres?.trim() === selectedGenre);
  }, [selectedGenre, tracks]);

  return (
    <section aria-label="Browse tracks" className="space-y-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="text-xs uppercase tracking-[0.35em] text-red-300">
            Browse by genre
          </span>
          <span className="text-xs text-red-200/70">
            {filteredTracks.length} track{filteredTracks.length === 1 ? "" : "s"} ready to download
          </span>
        </div>

        <div className="flex flex-wrap gap-3">
          <GenreChip
            label="All downloads"
            count={tracks.length}
            active={selectedGenre === "all"}
            onSelect={() => setSelectedGenre("all")}
          />
          {genres.map((genre) => (
            <GenreChip
              key={genre.label}
              label={genre.label}
              count={genre.count}
              active={selectedGenre === genre.label}
              onSelect={() => setSelectedGenre(genre.label)}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTracks.map((track) => (
          <MusicCard key={track.documentId} track={track} />
        ))}
        {filteredTracks.length === 0 && (
          <p className="col-span-full rounded-xl border border-red-900/40 bg-black/60 p-8 text-center text-sm text-red-200/70">
            No tracks found for this genre yet. Try another filter or check back after the next release.
          </p>
        )}
      </div>
    </section>
  );
}

interface GenreChipProps {
  label: string;
  count: number;
  active: boolean;
  onSelect: () => void;
}

function GenreChip({ label, count, active, onSelect }: GenreChipProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition",
        active
          ? "border-red-500/70 bg-red-500 text-black shadow-[0_0_25px_rgba(248,113,113,0.45)]"
          : "border-red-900/60 bg-black/60 text-red-200/80 hover:border-red-600 hover:text-white"
      )}
    >
      <span>{label}</span>
      <span
        className={cn(
          "rounded-full px-2 py-0.5 text-[10px]",
          active ? "bg-black/20 text-black" : "bg-red-900/60 text-red-200/80"
        )}
      >
        {count}
      </span>
    </button>
  );
}
