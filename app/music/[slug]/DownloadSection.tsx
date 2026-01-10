import { SiBeatport, SiBandcamp } from "react-icons/si";
import type { MusicData } from "@/app/hooks/useMusicQuery";

interface DownloadSectionProps {
  track: MusicData;
}

export default function DownloadSection({ track }: DownloadSectionProps) {
  if (!track.Beatport && !track.Bandcamp) {
    return null;
  }

  const links = [
    track.Beatport && {
      name: "Beatport",
      description: "Download extended mixes and stems.",
      url: track.Beatport,
      icon: <SiBeatport className="h-5 w-5 text-emerald-500" />,
    },
    track.Bandcamp && {
      name: "Bandcamp",
      description: "Support the label directly with lossless downloads.",
      url: track.Bandcamp,
      icon: <SiBandcamp className="h-5 w-5 text-slate-200" />,
    },
  ].filter(Boolean) as Array<{ name: string; description: string; url: string; icon: React.ReactNode }>;

  return (
    <section
      aria-labelledby="download-options"
      className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur"
    >
      <h2 id="download-options" className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
        Purchase & download
      </h2>
      <p className="mt-2 text-xs text-slate-300">
        Unlock high-resolution files and stems ready for editing, mastering, and deployment.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/0 p-4 backdrop-blur transition hover:bg-white/5"
          >
            <div className="mt-1">{link.icon}</div>
            <div>
              <p className="text-sm font-semibold text-white">{link.name}</p>
              <p className="mt-1 text-xs text-slate-300">{link.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
