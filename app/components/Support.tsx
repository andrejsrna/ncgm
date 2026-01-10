'use client';

import Link from 'next/link';
import { FiHelpCircle, FiMail, FiHeadphones } from 'react-icons/fi';

const supportOptions = [
  {
    title: 'Help centre',
    description: 'Answers to licensing, usage, and technical FAQs.',
    href: '/help',
    icon: <FiHelpCircle className="h-5 w-5" />,
  },
  {
    title: 'Contact support',
    description: 'Reach our team for project-specific questions.',
    href: '/contact',
    icon: <FiHeadphones className="h-5 w-5" />,
  },
];

const quickLinks = [
  {
    title: 'support@njkmusic.com',
    href: 'mailto:support@njkmusic.com',
    icon: <FiMail className="h-5 w-5" />,
  },
];

export default function Support() {
  return (
    <section className="bg-transparent py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-white">Support when you need it</h2>
          <p className="text-sm text-slate-300 sm:text-base">
            Whether you&apos;re planning a release or need a quick clarification, our team is here to help.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {supportOptions.map((option) => (
            <Link
              key={option.title}
              href={option.href}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-sm backdrop-blur transition hover:border-cyan-300/60 hover:bg-white/10 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-full bg-white/5 p-3 text-cyan-200">
                  {option.icon}
                </div>
                <span className="text-sm font-medium text-slate-300 group-hover:text-cyan-200">View</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{option.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{option.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
            Quick contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-2 text-cyan-300 transition hover:text-cyan-200"
                >
                  {link.icon}
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
