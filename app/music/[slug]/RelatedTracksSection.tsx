import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export interface RelatedTrackItem {
  slug: string;
  title: string;
  labelName: string;
  labelSlug: string;
  genre?: string | null;
  coverUrl: string;
}

interface RelatedTracksSectionProps {
  tracks: RelatedTrackItem[];
  heading?: string;
}

export default function RelatedTracksSection({
  tracks,
  heading = "Related tracks",
}: RelatedTracksSectionProps) {
  if (!tracks.length) {
    return null;
  }

  return (
    <section
      aria-labelledby="related-tracks"
      className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <h2
            id="related-tracks"
            className="text-base font-semibold uppercase tracking-[0.3em] text-slate-200"
          >
            {heading}
          </h2>
          <p className="max-w-2xl text-sm text-slate-300">
            More picks from the catalog—same vibe, same label, or close neighbors.
          </p>
        </div>

        <Link
          href="/music"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/0 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur transition hover:bg-white/5"
        >
          Browse all
          <FiArrowUpRight aria-hidden className="h-4 w-4 text-cyan-200" />
        </Link>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track) => (
          <Link
            key={track.slug}
            href={`/music/${track.slug}`}
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:bg-black/30"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <Image
                src={track.coverUrl}
                alt={`${track.title} cover`}
                fill
                sizes="64px"
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-white">
                {track.title}
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-300">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5">
                  {track.labelName}
                </span>
                {track.genre ? (
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5">
                    {track.genre}
                  </span>
                ) : null}
              </div>
            </div>

            <FiArrowUpRight
              aria-hidden
              className="h-5 w-5 text-slate-400 transition group-hover:text-cyan-200"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

