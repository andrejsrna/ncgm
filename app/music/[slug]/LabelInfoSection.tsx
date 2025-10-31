import Link from "next/link";
import { FiTag } from "react-icons/fi";
import type { MusicData } from "@/app/hooks/useMusicQuery";
import { PRIMARY_LABEL, getLabelDefinition } from "@/lib/site";

interface LabelInfoSectionProps {
  label: MusicData["label"];
}

export default function LabelInfoSection({ label }: LabelInfoSectionProps) {
  const fallbackLabel = label ?? PRIMARY_LABEL;
  const labelSlug = fallbackLabel.slug ?? PRIMARY_LABEL.slug;
  const definition = getLabelDefinition(labelSlug) ?? PRIMARY_LABEL;
  const labelName = fallbackLabel.name ?? definition.name;
  const labelShort = fallbackLabel.short ?? definition.short ?? labelName;
  const highlights = definition.highlights?.slice(0, 2);

  if (!labelName) {
    return null;
  }

  return (
    <section
      aria-labelledby="label-info"
      className="rounded-3xl border border-border bg-white p-6 shadow-soft"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="rounded-2xl bg-primary/10 p-3 text-primary">
            <FiTag className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <h2
              id="label-info"
              className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500"
            >
              Released under {labelShort}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              This drop is part of the {labelName} roster — {definition.tagline}.
            </p>
          </div>
        </div>

        <Link
          href={`/labels/${labelSlug}`}
          className="inline-flex items-center rounded-full border border-border bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 transition hover:border-primary hover:text-primary"
        >
          Explore label catalog
        </Link>
      </div>

      {highlights && highlights.length > 0 && (
        <ul className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
