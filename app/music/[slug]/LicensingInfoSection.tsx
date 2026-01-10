import Link from "next/link";
import { FiShield } from "react-icons/fi";

interface LicensingInfoSectionProps {
  labelSlug?: string | null;
  labelName?: string | null;
  trackTitle?: string | null;
}

export default function LicensingInfoSection({
  labelSlug,
  labelName,
  trackTitle,
}: LicensingInfoSectionProps) {
  const isRightsManaged = labelSlug === "jazz-and-bass";
  const resolvedLabelName = labelName?.trim() || "the label";

  const checklist = isRightsManaged
    ? [
        "A purchase/licence is required before using this release in any content or campaign",
        "This track is monetized via Content ID—licensed creators should request a channel whitelist",
        "If you still receive a claim, follow the Content ID guide and contact us with the claim details",
        `Credit ${resolvedLabelName} / NJK Music where required`,
      ]
    : [
        "Broadcast-safe WAV and MP3 files included with every download",
        "Unlimited usage across streams, podcasts, and commercial projects",
        "Monetisation cleared for Twitch, YouTube, TikTok, and client work",
        `Credit ${resolvedLabelName} where required`,
      ];

  return (
    <section
      aria-labelledby="licensing-info"
      className="rounded-3xl border border-white/10 bg-white/5 px-6 py-8 shadow-soft backdrop-blur"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-200 backdrop-blur">
            <FiShield className="text-xl" aria-hidden />
          </div>
          <div>
            <h2
              id="licensing-info"
              className="text-base font-semibold uppercase tracking-[0.3em] text-slate-200"
            >
              {isRightsManaged ? "Licensing & clearance" : "Licensing at a glance"}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              {isRightsManaged ? (
                <>
                  This release is part of our rights-managed catalog, so a purchase/licence is
                  required before use. Because it’s monetized with Content ID, creators should{" "}
                  <Link href="/contact" className="text-cyan-200 hover:text-cyan-100">
                    contact us
                  </Link>{" "}
                  to request a whitelist after licensing. See{" "}
                  <Link href="/help/purchase-guide" className="text-cyan-200 hover:text-cyan-100">
                    the purchase guide
                  </Link>{" "}
                  and{" "}
                  <Link href="/help/content-id" className="text-cyan-200 hover:text-cyan-100">
                    the Content ID guide
                  </Link>
                  {trackTitle ? ` for “${trackTitle}”.` : "."}
                </>
              ) : (
                <>
                  Every download unlocks a perpetual, royalty-free licence for creators, teams,
                  and listeners who need clean usage. For attribution details, see{" "}
                  <Link href="/help/attribution" className="text-cyan-200 hover:text-cyan-100">
                    the attribution guide
                  </Link>
                  .
                </>
              )}
            </p>
          </div>
        </div>

        <Link
          href={isRightsManaged ? "/contact" : "/help/attribution"}
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur transition hover:bg-white/5"
        >
          {isRightsManaged ? "Request whitelist" : "View attribution guide"}
        </Link>
      </div>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {checklist.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
            <span className="mt-1 h-2 w-2 rounded-full bg-cyan-200" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
