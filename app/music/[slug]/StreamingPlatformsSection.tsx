'use client';

import { FaSpotify, FaApple, FaYoutube, FaDeezer } from "react-icons/fa";
import { SiTidal, SiPandora } from "react-icons/si";
import type { MusicData } from "@/app/hooks/useMusicQuery";
import clsx from "clsx";

interface StreamingPlatformsSectionProps {
  track: MusicData;
}

const baseLinkStyles =
  "group relative flex items-center justify-between gap-3 rounded-xl border border-red-900/50 bg-black/70 px-4 py-3 transition hover:border-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

const iconClass = "text-lg transition-transform duration-200 group-hover:scale-110";

export default function StreamingPlatformsSection({ track }: StreamingPlatformsSectionProps) {
  if (
    !track.Spotify &&
    !track.AppleMusic &&
    !track.YouTubeMusic &&
    !track.Deezer &&
    !track.Tidal &&
    !track.Pandora
  ) {
    return null;
  }

  return (
    <section aria-labelledby="streaming-options" className="space-y-4">
      <div>
        <h2 id="streaming-options" className="text-sm font-semibold uppercase tracking-[0.35em] text-red-300">
          Stream on Your Platform
        </h2>
        <p className="mt-1 text-sm text-red-200/70">
          Choose the channel where you want to drive plays for this release.
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2" aria-label="Streaming platform links">
        {track.Spotify && (
          <li>
            <a
              href={track.Spotify}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={`Listen to ${track.Title} on Spotify`}
              className={clsx(baseLinkStyles, "hover:bg-green-500/10")}
            >
              <div className="flex items-center gap-3 text-green-400">
                <FaSpotify className={iconClass} />
                <span className="text-sm font-semibold">Spotify</span>
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-green-200/70">Boost Streams</span>
            </a>
          </li>
        )}

        {track.AppleMusic && (
          <li>
            <a
              href={track.AppleMusic}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={`Listen to ${track.Title} on Apple Music`}
              className={clsx(baseLinkStyles, "hover:bg-red-500/10")}
            >
              <div className="flex items-center gap-3 text-red-300">
                <FaApple className={iconClass} />
                <span className="text-sm font-semibold">Apple Music</span>
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-red-200/70">Creator Safe</span>
            </a>
          </li>
        )}

        {track.YouTubeMusic && (
          <li>
            <a
              href={track.YouTubeMusic}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={`Listen to ${track.Title} on YouTube Music`}
              className={clsx(baseLinkStyles, "hover:bg-red-500/10")}
            >
              <div className="flex items-center gap-3 text-red-400">
                <FaYoutube className={iconClass} />
                <span className="text-sm font-semibold">YouTube Music</span>
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-red-200/70">For Video</span>
            </a>
          </li>
        )}

        {track.Deezer && (
          <li>
            <a
              href={track.Deezer}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={`Listen to ${track.Title} on Deezer`}
              className={clsx(baseLinkStyles, "hover:bg-red-400/10")}
            >
              <div className="flex items-center gap-3 text-red-200">
                <FaDeezer className={iconClass} />
                <span className="text-sm font-semibold">Deezer</span>
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-red-200/70">Global Reach</span>
            </a>
          </li>
        )}

        {track.Tidal && (
          <li>
            <a
              href={track.Tidal}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={`Listen to ${track.Title} on Tidal`}
              className={clsx(baseLinkStyles, "hover:bg-red-400/10")}
            >
              <div className="flex items-center gap-3 text-red-200">
                <SiTidal className={iconClass} />
                <span className="text-sm font-semibold">Tidal</span>
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-red-200/70">Hi-Fi Audio</span>
            </a>
          </li>
        )}

        {track.Pandora && (
          <li>
            <a
              href={track.Pandora}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={`Listen to ${track.Title} on Pandora`}
              className={clsx(baseLinkStyles, "hover:bg-red-400/10")}
            >
              <div className="flex items-center gap-3 text-red-200">
                <SiPandora className={iconClass} />
                <span className="text-sm font-semibold">Pandora</span>
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-red-200/70">Radio Mode</span>
            </a>
          </li>
        )}
      </ul>
    </section>
  );
}
