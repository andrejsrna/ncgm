'use client';

import Link from "next/link";
import Image from "next/image";
import { FaSpotify, FaApple, FaYoutube, FaAmazon } from "react-icons/fa";
import type { MusicData } from "@/app/hooks/useMusicQuery";
import { resolveStrapiImageUrl, slugify } from "@/lib/utils";

interface MusicCardProps {
  track: MusicData;
}

export default function MusicCard({ track }: MusicCardProps) {
  const imageUrl = resolveStrapiImageUrl(track?.Cover);
  const labelSlug =
    track.label?.slug ?? (track.label?.name ? slugify(track.label.name) : undefined);
  const summary = track.Description ?? track.Content;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:shadow-md">
      {imageUrl && (
        <div className="relative aspect-square w-full">
          <Image
            src={imageUrl}
            alt={track.Title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-2">
          <Link href={`/music/${track.slug}`} className="block">
            <h2 className="text-lg font-semibold text-slate-900 transition hover:text-primary">
              {track.Title}
            </h2>
          </Link>

          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
            {labelSlug && track.label?.name && (
              <Link
                href={`/labels/${labelSlug}`}
                className="rounded-full bg-primary/10 px-2.5 py-1 text-primary transition hover:bg-primary/20"
              >
                {track.label.short ?? track.label.name}
              </Link>
            )}

            {track.genre?.Genres && (
              <span className="rounded-full bg-slate-100 px-2.5 py-1">
                {track.genre.Genres}
              </span>
            )}
          </div>
        </div>

        {summary && (
          <p className="line-clamp-3 text-sm text-slate-600">
            {summary.replace(/<[^>]+>/g, "")}
          </p>
        )}

        <div className="mt-auto space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Available on
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm text-slate-600">
            {track.Spotify && (
              <a
                href={track.Spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-primary"
              >
                <FaSpotify className="h-4 w-4 text-emerald-500" />
                Spotify
              </a>
            )}
            {track.AppleMusic && (
              <a
                href={track.AppleMusic}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-primary"
              >
                <FaApple className="h-4 w-4 text-slate-700" />
                Apple Music
              </a>
            )}
            {track.YouTubeMusic && (
              <a
                href={track.YouTubeMusic}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-primary"
              >
                <FaYoutube className="h-4 w-4 text-rose-600" />
                YouTube
              </a>
            )}
            {track.Amazon && (
              <a
                href={track.Amazon}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-primary"
              >
                <FaAmazon className="h-4 w-4 text-amber-500" />
                Amazon
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
