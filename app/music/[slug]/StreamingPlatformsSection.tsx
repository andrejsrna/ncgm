import { FaSpotify, FaApple, FaYoutube, FaDeezer } from "react-icons/fa";
import { SiTidal, SiPandora } from "react-icons/si";
import type { MusicData } from "@/app/hooks/useMusicQuery";

interface StreamingPlatformsSectionProps {
  track: MusicData;
}

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

  const links = [
    { name: "Spotify", url: track.Spotify, icon: <FaSpotify className="h-5 w-5 text-emerald-500" /> },
    { name: "Apple Music", url: track.AppleMusic, icon: <FaApple className="h-5 w-5 text-slate-200" /> },
    { name: "YouTube Music", url: track.YouTubeMusic, icon: <FaYoutube className="h-5 w-5 text-rose-600" /> },
    { name: "Deezer", url: track.Deezer, icon: <FaDeezer className="h-5 w-5 text-emerald-500" /> },
    { name: "Tidal", url: track.Tidal, icon: <SiTidal className="h-5 w-5 text-sky-500" /> },
    { name: "Pandora", url: track.Pandora, icon: <SiPandora className="h-5 w-5 text-slate-500" /> },
  ].filter((link) => link.url);

  return (
    <section
      aria-labelledby="streaming-options"
      className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur"
    >
      <h2 id="streaming-options" className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
        Stream on your platform
      </h2>
      <p className="mt-2 text-xs text-slate-300">
        Drive plays and discoverability across the services you already use.
      </p>

      <ul className="mt-4 grid grid-cols-1 gap-3 text-sm text-slate-300 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/0 px-4 py-3 backdrop-blur transition hover:bg-white/5"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
