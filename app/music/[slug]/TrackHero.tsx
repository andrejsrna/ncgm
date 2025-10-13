'use client';

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { FaPlay, FaDownload } from "react-icons/fa";
import type { MusicData } from "@/app/hooks/useMusicQuery";
import dynamic from "next/dynamic";

const SectionSkeleton = () => (
  <div className="relative rounded-lg border border-red-900/30 bg-black/80 p-6">
    <div className="h-4 w-1/3 bg-red-900/20 animate-pulse rounded mb-4" />
    <div className="h-8 w-full bg-red-900/10 animate-pulse rounded" />
  </div>
);

const StreamingPlatformsSection = dynamic(
  () => import("./StreamingPlatformsSection"),
  { loading: () => <SectionSkeleton /> }
);

const DownloadSection = dynamic(
  () => import("./DownloadSection"),
  { loading: () => <SectionSkeleton /> }
);

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

  return (
    <header className="mb-20">
      <nav aria-label="Breadcrumb" className="mb-6">
        <Link
          href="/music"
          className="inline-flex items-center gap-2 rounded-full border border-red-900/40 bg-black/60 px-4 py-2 text-xs font-mono uppercase tracking-wider text-red-400 transition-colors duration-200 hover:border-red-700 hover:text-red-300"
        >
          <FaArrowLeft className="text-red-400" />
          Back to Music Library
        </Link>
      </nav>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,4fr)] lg:items-center">
        <aside className="order-2 lg:order-1">
          <div className="relative mx-auto flex max-w-[420px] flex-col items-center text-center">
            <div className="absolute -inset-x-6 inset-y-12 rounded-full bg-red-900/10 blur-3xl" />
            <div className="relative w-full overflow-hidden rounded-3xl border border-red-900/40 bg-black/80 shadow-[0_0_80px_-20px_rgba(248,113,113,0.4)]">
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
                <div className="flex h-full min-h-[360px] w-full items-center justify-center bg-gradient-to-br from-red-950 via-black to-red-900">
                  <span className="text-sm font-mono uppercase tracking-[0.4em] text-red-200/60">
                    No Artwork
                  </span>
                </div>
              )}
            </div>
          </div>
        </aside>

        <section className="order-1 space-y-6 text-left lg:order-2">
          {track.genre?.Genres && (
            <p className="inline-flex items-center gap-2 rounded-full border border-red-900/40 bg-red-950/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-red-300">
              {track.genre.Genres}
            </p>
          )}

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {track.Title}
          </h1>

          <p className="max-w-xl text-base text-red-100/80 sm:text-lg">
            {track.Description ||
              `Listen to ${track.Title} by No Copyright Gaming Music. Download royalty-free electronic music designed for streamers, creators, and game studios.`}
          </p>

          <div className="flex flex-wrap gap-4">
            {primaryStream && (
              <a
                href={primaryStream}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-3 rounded-full bg-red-500 px-6 py-3 font-semibold text-black transition hover:bg-red-400"
              >
                <FaPlay />
                Stream Instantly
              </a>
            )}
            {primaryDownload && (
              <a
                href={primaryDownload}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-3 rounded-full border border-red-500/60 px-6 py-3 font-semibold text-red-200 transition hover:border-red-400 hover:text-white"
              >
                <FaDownload />
                Buy & Download
              </a>
            )}
          </div>

          {track.createdAt && (
            <p className="text-xs uppercase tracking-[0.35em] text-red-400/70">
              Released{" "}
              <time dateTime={track.createdAt}>
                {new Date(track.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </p>
          )}

          <StreamingPlatformsSection track={track} />
          <DownloadSection track={track} />
        </section>
      </div>
    </header>
  );
}
