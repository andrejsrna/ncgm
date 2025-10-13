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
      className="rounded-3xl border border-red-900/40 bg-black/70 p-6 backdrop-blur-sm"
    >
      <h2 id="spotify-embed" className="text-sm font-semibold uppercase tracking-[0.35em] text-red-300">
        Preview on Spotify
      </h2>
      <p className="mt-2 text-xs text-red-200/70">
        Hit play to experience the track before you download or add it to your playlist.
      </p>
      <div className="mt-5 overflow-hidden rounded-2xl border border-red-900/40">
        <div dangerouslySetInnerHTML={{ __html: embedHtml }} />
      </div>
    </section>
  );
}
