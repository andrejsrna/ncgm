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
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Support when you need it</h2>
          <p className="text-sm text-slate-600 sm:text-base">
            Whether you&apos;re planning a release or need a quick clarification, our team is here to help.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {supportOptions.map((option) => (
            <Link
              key={option.title}
              href={option.href}
              className="group rounded-2xl border border-border bg-slate-50 p-6 text-left shadow-sm transition hover:border-primary hover:bg-white hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  {option.icon}
                </div>
                <span className="text-sm font-medium text-primary/70 group-hover:text-primary">View</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">{option.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{option.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Quick contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-2 text-primary transition hover:text-primary/80"
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
