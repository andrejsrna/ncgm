import { Metadata } from "next";
import Link from "next/link";
import {
  FaHeadphones,
  FaHandshake,
  FaRegLightbulb,
  FaShieldAlt,
  FaSpotify,
  FaUsers,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "About NJK Music | Creator-Ready Label Moods & Licensing",
  description:
    "Meet the NJK Music team crafting stream-safe releases for gamers, studios, and storytellers across the globe.",
};

const missionHighlights = [
  {
    title: "Creator-First Music",
    description:
      "We build in-house label moods and releases designed to clear straight into streams, broadcasts, and client work.",
    icon: FaHeadphones,
  },
  {
    title: "Trusted Licensing",
    description:
      "Clear, transparent usage rights give partners and creators confidence to publish without takedowns.",
    icon: FaShieldAlt,
  },
  {
    title: "Collaborative Roster",
    description:
      "Producers, sound designers, and curators collaborate on every release so the catalogue stays versatile.",
    icon: FaHandshake,
  },
];

const pillars = [
  {
    title: "Label Craft",
    points: [
      "Genre-focused label moods with distinctive identities",
      "Release roadmaps planned months in advance",
      "Sonic direction guided by creator feedback",
    ],
  },
  {
    title: "Distribution & Support",
    points: [
      "Streaming platform delivery and metadata management",
      "Self-serve downloads for quick creator workflows",
      "Direct support for bespoke licensing requests",
    ],
  },
  {
    title: "Growth Partnerships",
    points: [
      "Sync-ready releases for agencies and studios",
      "Co-branded campaigns with creators and esports orgs",
      "Custom score production and sound design",
    ],
  },
];

const stats = [
  { label: "Label moods in the roster", value: "3+" },
  { label: "Creator-friendly releases", value: "75+" },
  { label: "Global markets reached", value: "190+" },
  { label: "Licensing partners", value: "40+" },
];

const timeline = [
  {
    year: "2018",
    title: "NJK Music launches",
    description:
      "The first catalogues release under No Copyright Gaming Music with a mission to keep gamers monetized.",
  },
  {
    year: "2021",
    title: "Global Distribution",
    description:
      "Streaming partnerships and DSP distribution come online, opening catalogues to new listeners worldwide.",
  },
  {
    year: "2024",
    title: "Label Expansion",
    description:
      "Creator feedback informs new wellness and jazz-driven labels to support a wider set of storytelling moments.",
  },
  {
    year: "Today",
    title: "Rights-Managed Innovation",
    description:
      "We serve both rights-managed and stream-safe releases, giving partners more flexibility for premium projects.",
  },
];

const values = [
  {
    title: "Curate with care",
    description:
      "Every release is vetted for quality, metadata accuracy, and clarity of use before it hits the catalogue.",
    icon: FaRegLightbulb,
  },
  {
    title: "Support the creator",
    description:
      "From quick answers about licensing to bespoke stems, our support team speaks creator workflow.",
    icon: FaUsers,
  },
  {
    title: "Protect the catalogue",
    description:
      "Whether stream-safe or rights-managed, our contracts and systems protect artists and partners equally.",
    icon: FaShieldAlt,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-16 rounded-3xl border border-border bg-white p-10 shadow-sm">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-600">
            About NJK Music
          </span>
          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start">
            <div className="space-y-5">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                From gaming beats to rights-managed jazz, we soundtrack creators.
              </h1>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                NJK Music curates label moods tailored to streamers, studios, and storytellers. Our catalogue
                combines stream-safe releases with rights-managed drops, so you can find the right fit for highlights,
                campaigns, or long-form productions—without guesswork.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-800"
                >
                  Connect with us
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/music"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-600 transition hover:bg-slate-100"
                >
                  Explore releases
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
            <div className="grid gap-4 rounded-2xl border border-dashed border-border/80 bg-slate-50 p-6 text-sm text-slate-600 sm:grid-cols-2">
              {stats.map((item) => (
                <div key={item.label} className="space-y-1">
                  <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    {item.label}
                  </span>
                  <span className="block text-2xl font-bold text-slate-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="mb-16">
          <div className="grid gap-6 sm:grid-cols-3">
            {missionHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mb-16 rounded-3xl border border-border bg-white p-10 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
            <div className="space-y-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-600">
                What Guides Us
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Label moods built on clarity, creativity, and community.
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Our team blends music supervision, production, and creator success know-how. We obsess over how a track
                feels in a highlight reel, how quickly a streamer can clear usage, and how to keep our roster inspired.
                It’s why NJK Music sits at the intersection of creator culture and professional audio production.
              </p>
              <ul className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
                {values.map((value) => {
                  const Icon = value.icon;
                  return (
                    <li key={value.title} className="rounded-2xl border border-dashed border-border/80 bg-slate-50 p-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary">
                          <Icon className="h-4 w-4" />
                        </span>
                        <p className="font-semibold text-slate-900">{value.title}</p>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{value.description}</p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="space-y-6">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="rounded-2xl border border-border bg-white/80 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16 rounded-3xl border border-border bg-white p-10 shadow-sm">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-600">
                Our Story
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Built in Bratislava, broadcasting worldwide.
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                NJK Music started in 2018 with a simple goal: help gamers soundtrack their content without copyright
                claims. Since then, we’ve grown into a studio working with curators, producers, and partners across
                Europe and North America. Today our mission extends beyond gaming—we develop labels for mindfulness,
                liquid jazz, and more, always with the same commitment to licensing clarity.
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                From our HQ in Bratislava, we manage releases across DSPs, deliver stems to studios, and support creators
                who need reliable music they can publish anywhere. If you need something bespoke, our team is ready to
                collaborate.
              </p>
            </div>
            <div className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
              {timeline.map((entry) => (
                <div key={entry.year} className="rounded-2xl border border-dashed border-border/80 bg-slate-50 p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{entry.year}</span>
                  <h3 className="mt-2 text-base font-semibold text-slate-900">{entry.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{entry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-border bg-white p-10 shadow-sm">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-600">
                Get in touch
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Let’s build the soundtrack for your next story.
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Whether you’re launching a Twitch channel, producing a documentary, or planning a brand activation, we
                can help you find the right label match and licensing path. Reach out for bespoke stems, custom music
                briefs, or to join our roster of creators and partners.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-800"
              >
                Contact team
              </Link>
              <Link
                href="/help"
                className="inline-flex items-center justify-center rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-600 transition hover:bg-slate-100"
              >
                Visit help centre
              </Link>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-slate-100 px-3 py-1">
              <FaSpotify className="h-4 w-4 text-emerald-500" />
              Streaming ready
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-slate-100 px-3 py-1">
              <FaShieldAlt className="h-4 w-4 text-primary" />
              Licensing support
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-slate-100 px-3 py-1">
              <FaUsers className="h-4 w-4 text-primary/70" />
              Creator community
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
