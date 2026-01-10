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
      className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur"
    >
      <div className="space-y-3">
        <h2
          id="youtube-embed"
          className="text-lg font-semibold tracking-tight text-white md:text-2xl"
        >
          Watch &amp; Listen
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
          Play the official YouTube version, share it with friends, or drop it into your content workflow—staying
          release-ready the moment you press play.
        </p>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-xl shadow-slate-900/30">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <div className="absolute inset-0 h-full w-full" dangerouslySetInnerHTML={{ __html: embedHtml }} />
        </div>
      </div>

      <p className="mt-4 text-xs uppercase tracking-[0.25em] text-slate-400">
        Tip: Need offline files? Check the download section for the matching masters.
      </p>
    </section>
  );
}
