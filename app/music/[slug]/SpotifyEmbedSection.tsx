interface SpotifyEmbedSectionProps {
  embedHtml: string;
}

export default function SpotifyEmbedSection({ embedHtml }: SpotifyEmbedSectionProps) {
  if (!embedHtml) {
    return null;
  }

  return (
    <section
      aria-labelledby="spotify-embed"
      className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur"
    >
      <h2 id="spotify-embed" className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200">
        Preview on Spotify
      </h2>
      <p className="mt-2 text-xs text-slate-300">
        Press play to preview the track before downloading or adding it to your library.
      </p>
      <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
        <div dangerouslySetInnerHTML={{ __html: embedHtml }} />
      </div>
    </section>
  );
}
