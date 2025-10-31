import type { Metadata } from "next";
import Link from "next/link";
import {
  FaBalanceScale,
  FaBug,
  FaChalkboardTeacher,
  FaEnvelope,
  FaFileContract,
  FaHeadset,
  FaPlay,
  FaQuestionCircle,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Help Centre | ${SITE_NAME}`,
  description:
    "Browse licensing guidance, troubleshooting tips, and platform playbooks for NJK Music. Find answers fast or contact the team for hands-on support.",
};

type QuickLink = {
  title: string;
  description: string;
  href: string;
  icon: IconType;
};

type HelpArticle = {
  title: string;
  description: string;
  href: string;
  icon: IconType;
};

type HelpCategory = {
  title: string;
  description: string;
  articles: HelpArticle[];
};

const quickLinks: QuickLink[] = [
  {
    title: "Licensing overview",
    description: "Understand how NJK Music clears tracks for streamers and clients.",
    href: "/license",
    icon: FaFileContract,
  },
  {
    title: "Creator FAQ",
    description: "Answers to the questions we hear most from our label community and fans.",
    href: "/faq",
    icon: FaQuestionCircle,
  },
  {
    title: "Contact support",
    description: "Email the team for one-on-one help with releases or claims.",
    href: "/contact",
    icon: FaEnvelope,
  },
];

const helpCategories: HelpCategory[] = [
  {
    title: "Start with licensing",
    description: "Set expectations for commercial use, attribution, and platform policies.",
    articles: [
      {
        title: "Music licensing guide",
        description: "Review when you need additional clearance and how to request it.",
        href: "/license",
        icon: FaBalanceScale,
      },
      {
        title: "Attribution checklist",
        description: "Follow recommended credit formats for YouTube, Twitch, and client work.",
        href: "/help/attribution",
        icon: FaChalkboardTeacher,
      },
      {
        title: "Platform usage playbook",
        description: "See what is approved across streaming, social, and broadcast channels.",
        href: "/help/platforms",
        icon: FaPlay,
      },
    ],
  },
  {
    title: "Stay monetized",
    description: "Keep your videos claim-free and react quickly to Content ID matches.",
    articles: [
      {
        title: "Content ID support",
        description: "Learn how claims occur and how to dispute them with our team.",
        href: "/help/content-id",
        icon: FaShieldAlt,
      },
      {
        title: "Monetization tips",
        description: "Best practices for ad safe uploads and keeping your revenue flowing.",
        href: "/help/monetization",
        icon: FaHeadset,
      },
      {
        title: "Usage guidelines",
        description: "Clarify limits for paid ads, sponsorships, and agency deliverables.",
        href: "/help/guidelines",
        icon: FaFileContract,
      },
    ],
  },
  {
    title: "Fix an issue",
    description: "Run through solutions for technical glitches or purchase questions.",
    articles: [
      {
        title: "Download troubleshooting",
        description: "Resolve broken links, missing stems, or slow delivery speeds.",
        href: "/help/technical",
        icon: FaTools,
      },
      {
        title: "Order support",
        description: "Get help with failed transactions or missing invoices.",
        href: "/help/purchase-issues",
        icon: FaBug,
      },
      {
        title: "Copyright disputes",
        description: "Report false claims or takedowns so we can unlock your content.",
        href: "/help/copyright-claims",
        icon: FaShieldAlt,
      },
    ],
  },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto flex min-h-[40vh] max-w-6xl flex-col justify-center gap-6 px-4 py-24 sm:px-6 lg:px-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Help centre
          </span>
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              How can we help?
            </h1>
            <p className="text-base text-slate-600 sm:text-lg">
              Explore guides curated by the NJK Music label team. Whether you are clearing a sponsorship, filing a claim,
              or setting up distribution, you will find the steps to keep projects on track.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <section>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Start here
            </h2>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
              Most requested resources
            </span>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900">{link.title}</h3>
                    <p className="text-sm text-slate-600">{link.description}</p>
                  </div>
                  <span className="mt-auto text-sm font-medium text-primary transition group-hover:text-primary/80">
                    Open guide
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-20 space-y-16">
          {helpCategories.map((category) => (
            <div key={category.title} className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{category.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{category.description}</p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {category.articles.map((article) => {
                  const Icon = article.icon;
                  return (
                    <Link
                      key={article.title}
                      href={article.href}
                      className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-slate-900">{article.title}</h3>
                        <p className="text-sm text-slate-600">{article.description}</p>
                      </div>
                      <span className="mt-auto text-sm font-medium text-primary transition group-hover:text-primary/80">
                        View article
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-20 rounded-3xl border border-border bg-white p-8 shadow-sm sm:p-12">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FaHeadset className="h-6 w-6" />
            </span>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Prefer to talk to someone?
              </h2>
              <p className="text-sm text-slate-600 sm:text-base">
                Share links, timestamps, and any claim IDs in your message so we can respond quickly. Most requests are
                answered within 24 to 48 hours on business days.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:support@njkmusic.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                Email support
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-slate-900 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-white transition hover:bg-slate-800"
              >
                View contact page
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
