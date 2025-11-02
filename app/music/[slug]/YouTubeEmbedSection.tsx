interface YouTubeEmbedSectionProps {
  embedHtml: string;
}

export default function YouTubeEmbedSection({ embedHtml }: YouTubeEmbedSectionProps) {
  if (!embedHtml) {
    return null;
  }

  return (
    <section
      aria-labelledby="youtube-embed"
      className="rounded-3xl border border-transparent bg-gradient-to-br from-slate-900/10 via-slate-800/10 to-slate-900/10 p-8 shadow-2xl shadow-slate-900/20 ring-1 ring-slate-200/40"
    >
      <div className="space-y-3">
        <h2
          id="youtube-embed"
          className="text-lg font-semibold tracking-tight text-slate-900 md:text-2xl"
        >
          Watch &amp; Listen
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
          Drop the official YouTube mix straight into your stream overlay, highlight roundup, or launch trailer and stay
          fully cleared for monetized content the moment you press play.
        </p>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/50 bg-slate-950/90 shadow-xl shadow-slate-900/30">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <div className="absolute inset-0 h-full w-full" dangerouslySetInnerHTML={{ __html: embedHtml }} />
        </div>
      </div>

      <p className="mt-4 text-xs uppercase tracking-[0.25em] text-slate-500">
        Pro tip: Need offline stems? Check the download section for Audio Swap-ready files that match this video.
      </p>
    </section>
  );
}
