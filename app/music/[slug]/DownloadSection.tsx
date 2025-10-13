'use client';

import { SiBeatport, SiBandcamp } from "react-icons/si";
import { FaDownload } from "react-icons/fa";
import type { MusicData } from "@/app/hooks/useMusicQuery";

interface DownloadSectionProps {
  track: MusicData;
}

export default function DownloadSection({ track }: DownloadSectionProps) {
  if (!track.Beatport && !track.Bandcamp) {
    return null;
  }

  return (
    <section aria-labelledby="download-options" className="space-y-4">
      <div className="flex items-center gap-3">
        <FaDownload className="text-red-400" aria-hidden />
        <h2 id="download-options" className="text-sm font-semibold uppercase tracking-[0.35em] text-red-300">
          Purchase & Download
        </h2>
      </div>
      <p className="max-w-md text-sm text-red-200/70">
        Secure high-resolution WAV and MP3 files ready for streaming overlays, trailers, and monetized content.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        {track.Beatport && (
          <a
            href={track.Beatport}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="group flex-1 rounded-2xl border border-red-700/60 bg-red-950/50 px-5 py-4 text-left transition hover:border-red-400 hover:bg-red-900/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-red-200">
                <SiBeatport className="text-2xl" aria-hidden />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.4em]">Beatport</p>
                  <p className="text-xs text-red-200/70">Royalty-free licensing & stems</p>
                </div>
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-red-300/80">Shop</span>
            </div>
          </a>
        )}

        {track.Bandcamp && (
          <a
            href={track.Bandcamp}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="group flex-1 rounded-2xl border border-red-700/60 bg-red-950/50 px-5 py-4 text-left transition hover:border-red-400 hover:bg-red-900/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-red-200">
                <SiBandcamp className="text-2xl" aria-hidden />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.4em]">Bandcamp</p>
                  <p className="text-xs text-red-200/70">Support the artist directly</p>
                </div>
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-red-300/80">Explore</span>
            </div>
          </a>
        )}
      </div>
    </section>
  );
}
