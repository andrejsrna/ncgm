import type { Metadata } from "next";
import Link from "next/link";
import {
  FaBolt,
  FaBuilding,
  FaChevronRight,
  FaClock,
  FaCog,
  FaEnvelope,
  FaFileContract,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact NJK Music | ${SITE_NAME}`,
  description:
    "Reach the NJK Music team for support, licensing guidance, or partnership opportunities. We respond quickly and keep creators moving.",
};

type ContactMethod = {
  title: string;
  email: string;
  description: string;
  responseTime: string;
  icon: IconType;
};

const contactMethods: ContactMethod[] = [
  {
    title: "Creator support",
    email: "support@njkmusic.com",
    description: "Help with downloads, subscriptions, or account access.",
    responseTime: "Replies within 1-2 business days",
    icon: FaEnvelope,
  },
  {
    title: "Licensing requests",
    email: "licensing@njkmusic.com",
    description: "Custom clearances, sync requests, or commercial usage questions.",
    responseTime: "Typically answers within 1 business day",
    icon: FaFileContract,
  },
  {
    title: "Technical assistance",
    email: "tech@njkmusic.com",
    description: "Issues with stems, downloads, or integration with your tools.",
    responseTime: "Replies within 1-2 business days",
    icon: FaCog,
  },
  {
    title: "Content claims",
    email: "claims@njkmusic.com",
    description: "Report Content ID matches or platform strikes for NJK releases.",
    responseTime: "Priority responses within 24 hours",
    icon: FaBolt,
  },
];

const officeInfo = {
  company: "Enhold s.r.o.",
  address: ["Drobneho 1900/2", "841 02 Bratislava", "Dubravka district", "Slovakia"],
  hours: ["Monday to Friday", "09:00-17:00 CET"],
};

const commonTopics = [
  {
    title: "Licensing & usage",
    links: [
      { text: "Music licensing overview", href: "/license" },
      { text: "Attribution guidelines", href: "/help/attribution" },
      { text: "Platform policies", href: "/help/platforms" },
    ],
  },
  {
    title: "Technical help",
    links: [
      { text: "Troubleshooting guide", href: "/help/technical" },
      { text: "Purchase questions", href: "/help/purchase-issues" },
      { text: "Content ID support", href: "/help/content-id" },
    ],
  },
  {
    title: "Get to know NJK",
    links: [
      { text: "About the team", href: "/about" },
      { text: "Creator FAQ", href: "/faq" },
      { text: "Support centre", href: "/help" },
    ],
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto flex min-h-[40vh] max-w-6xl flex-col justify-center gap-6 px-4 py-24 sm:px-6 lg:px-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Get in touch
          </span>
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Contact NJK Music
            </h1>
            <p className="text-base text-slate-600 sm:text-lg">
              Reach out for licensing support, partnerships, creator questions, or anything else. We&apos;ll guide you to the
              right label specialist and keep your projects moving.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <section>
              <div className="mb-6 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Email the right team
                </h2>
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
                  Responsive within 24-48 hrs
                </span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={method.title}
                      className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{method.title}</h3>
                        <p className="mt-2 text-sm text-slate-600">{method.description}</p>
                      </div>
                      <div className="mt-auto space-y-2 text-sm">
                        <a
                          href={`mailto:${method.email}`}
                          className="font-medium text-primary transition hover:text-primary/80"
                        >
                          {method.email}
                        </a>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                          {method.responseTime}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="rounded-3xl border border-dashed border-border bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold text-slate-900">Need something else?</h2>
              <p className="mt-3 text-sm text-slate-600">
                Share as much detail as you can, including links to the platforms or videos affected. Our team routes
                every message to the right specialist and will follow up with next steps.
              </p>
              <Link
                href="mailto:support@njkmusic.com"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                Email support@njkmusic.com
              </Link>
            </section>
          </div>

          <aside className="space-y-6">
            <section className="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <FaBuilding className="h-5 w-5" />
                </span>
                <h2 className="text-lg font-semibold text-slate-900">Registered office</h2>
              </div>
              <div className="mt-6 space-y-2 text-sm text-slate-600">
                <p className="font-medium text-slate-900">{officeInfo.company}</p>
                {officeInfo.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-slate-600">
                <FaClock className="h-4 w-4 text-slate-500" />
                <div>
                  {officeInfo.hours.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-semibold text-slate-900">Press & partnerships</h2>
              <p className="mt-3 text-sm text-slate-600">
                For media features, distribution opportunities, or collaborative releases, reach us directly at{" "}
                <a href="mailto:partnerships@njkmusic.com" className="font-medium text-primary hover:text-primary/80">
                  partnerships@njkmusic.com
                </a>
                .
              </p>
            </section>
          </aside>
        </div>

        <section className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Quick links</h2>
          <p className="mt-2 text-sm text-slate-600">
            Start with these resources if you&apos;re looking for immediate answers.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {commonTopics.map((topic) => (
              <div key={topic.title} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{topic.title}</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {topic.links.map((link) => (
                    <li key={link.text}>
                      <Link
                        href={link.href}
                        className="group/link inline-flex items-center gap-2 text-primary transition hover:text-primary/80"
                      >
                        <FaChevronRight className="h-3 w-3 text-slate-400 transition-transform group-hover/link:translate-x-1" />
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-3xl border border-border bg-white p-8 text-center shadow-sm sm:p-12">
          <p className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
            We partner closely with creators, agencies, and studios around the world. If you need something specific,
            we&apos;re here to help you clear music quickly and confidently.
          </p>
          <Link
            href="/help"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-slate-900 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-white transition hover:bg-slate-800"
          >
            Explore help centre
          </Link>
        </section>
      </div>
    </div>
  );
}
