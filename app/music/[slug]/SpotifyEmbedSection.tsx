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
      className="rounded-3xl border border-border bg-white p-6 shadow-soft"
    >
      <h2 id="spotify-embed" className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
        Preview on Spotify
      </h2>
      <p className="mt-2 text-xs text-slate-500">
        Press play to preview the track before downloading or adding it to your playlist.
      </p>
      <div className="mt-5 overflow-hidden rounded-2xl border border-border">
        <div dangerouslySetInnerHTML={{ __html: embedHtml }} />
      </div>
    </section>
  );
}
