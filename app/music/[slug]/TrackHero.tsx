'use client';

import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiHeadphones, FiDownload } from "react-icons/fi";
import type { MusicData } from "@/app/hooks/useMusicQuery";
import { PRIMARY_LABEL } from "@/lib/site";

interface TrackHeroProps {
  track: MusicData;
  coverUrl?: string | null;
}

export default function TrackHero({ track, coverUrl }: TrackHeroProps) {
  const primaryStream =
    track.Spotify ||
    track.AppleMusic ||
    track.YouTubeMusic ||
    track.Deezer ||
    track.Tidal ||
    track.Pandora ||
    "";

  const primaryDownload = track.Beatport || track.Bandcamp || "";
  const labelName = track.label?.name ?? PRIMARY_LABEL.name;
  const labelShort = track.label?.short ?? PRIMARY_LABEL.short;
  const publishedDate = track.publishedAt || track.createdAt;

  return (
    <header className="mb-16">
      <nav aria-label="Breadcrumb" className="mb-6">
        <Link
          href="/music"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-primary"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to music
        </Link>
      </nav>

      <div className="grid gap-10 rounded-3xl border border-border bg-white p-8 shadow-soft lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:p-10">
        <section className="order-2 flex flex-col gap-6 lg:order-1">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            {labelName && (
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary">
                {labelShort ?? labelName} Label
              </span>
            )}
            {track.genre?.Genres && (
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                {track.genre.Genres}
              </span>
            )}
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {track.Title}
            </h1>
            <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
              {track.Description ||
                `Listen to ${track.Title} from the ${labelName} label. Download royalty-free music engineered for streamers, creators, and studios.`}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {primaryStream && (
              <a
                href={primaryStream}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                <FiHeadphones className="h-4 w-4" />
                Stream
              </a>
            )}
            {primaryDownload && (
              <a
                href={primaryDownload}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-primary hover:text-primary"
              >
                <FiDownload className="h-4 w-4" />
                Download
              </a>
            )}
          </div>

          {publishedDate && (
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Released{" "}
              <time dateTime={publishedDate}>
                {new Date(publishedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </p>
          )}

        </section>

        <aside className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-border bg-slate-100 shadow-soft">
            {coverUrl ? (
              <Image
                src={coverUrl}
                alt={`${track.Title} cover art`}
                width={720}
                height={720}
                className="h-full w-full object-cover"
                priority
              />
            ) : (
              <div className="flex h-full min-h-[320px] w-full items-center justify-center bg-slate-200 text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
                No artwork
              </div>
            )}
          </div>
        </aside>
      </div>
    </header>
  );
}
