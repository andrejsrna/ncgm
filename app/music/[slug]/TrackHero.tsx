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
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to music
        </Link>
      </nav>

      <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:p-10">
        <section className="order-2 flex flex-col gap-6 lg:order-1">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            {labelName && (
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200 backdrop-blur">
                {labelShort ?? labelName} Label
              </span>
            )}
            {track.genre?.Genres && (
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200 backdrop-blur">
                {track.genre.Genres}
              </span>
            )}
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {track.Title}
            </h1>
            <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
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
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:opacity-90"
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
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/0 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur transition hover:bg-white/5"
              >
                <FiDownload className="h-4 w-4" />
                Download
              </a>
            )}
          </div>

          {publishedDate && (
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
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
          <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft backdrop-blur">
            {coverUrl ? (
              <Image
                src={coverUrl}
                alt={`${track.Title} cover art`}
                fill
                sizes="(min-width: 1024px) 448px, 100vw"
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full min-h-[320px] w-full items-center justify-center bg-white/5 text-sm font-medium uppercase tracking-[0.3em] text-slate-300">
                No artwork
              </div>
            )}
          </div>
        </aside>
      </div>
    </header>
  );
}
