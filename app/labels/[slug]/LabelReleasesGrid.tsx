'use client';

import { useMemo, useState } from 'react';
import type { MusicData } from '@/app/hooks/useMusicQuery';
import MusicCard from '@/app/music/MusicCard';

type Props = {
  releases: MusicData[];
};

export default function LabelReleasesGrid({ releases }: Props) {
  const [page, setPage] = useState(1);
  const perPage = 12;
  const totalPages = Math.max(1, Math.ceil(releases.length / perPage));
  const currentPage = Math.min(page, totalPages);

  const pagedReleases = useMemo(() => {
    const startIndex = (currentPage - 1) * perPage;
    return releases.slice(startIndex, startIndex + perPage);
  }, [currentPage, releases]);

  if (releases.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {pagedReleases.map((track) => (
          <MusicCard key={track.documentId ?? track.slug} track={track} />
        ))}
      </div>

      {releases.length > perPage && (
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            disabled={currentPage === 1}
            className="rounded-full border border-white/15 bg-white/0 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 shadow-soft backdrop-blur transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            Page {currentPage} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
            disabled={currentPage === totalPages}
            className="rounded-full border border-white/15 bg-white/0 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 shadow-soft backdrop-blur transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

