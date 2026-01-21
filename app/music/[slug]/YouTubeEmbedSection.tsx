import { getYouTubeEmbedUrl } from "@/app/lib/youtubeEmbed";

interface YouTubeEmbedSectionProps {
  source: string;
}

export default function YouTubeEmbedSection({ source }: YouTubeEmbedSectionProps) {
  const embedUrl = getYouTubeEmbedUrl(source);

  if (!embedUrl) {
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
        <div className="relative aspect-video w-full">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={embedUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      <p className="mt-4 text-xs uppercase tracking-[0.25em] text-slate-400">
        Tip: Need offline files? Check the download section for the matching masters.
      </p>
    </section>
  );
}
