'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Music', href: '/music' },
  { name: 'Labels', href: '/labels' },
  { name: 'News', href: '/news' },
  { name: 'Help', href: '/help' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isDarkRoute =
    pathname === '/' ||
    pathname === '/about' ||
    pathname.startsWith('/music') ||
    pathname.startsWith('/labels') ||
    pathname.startsWith('/news') ||
    pathname.startsWith('/help') ||
    pathname.startsWith('/faq') ||
    pathname.startsWith('/license') ||
    pathname.startsWith('/cookies') ||
    pathname.startsWith('/dmca') ||
    pathname.startsWith('/privacy') ||
    pathname.startsWith('/terms') ||
    pathname.startsWith('/ai-usage') ||
    pathname.startsWith('/contact');

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur ${
        isDarkRoute
          ? 'border-white/10 bg-slate-950/80 supports-[backdrop-filter]:bg-slate-950/45'
          : 'border-border/80 bg-white/70'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={`inline-flex items-center gap-2 text-lg font-semibold ${
            isDarkRoute ? 'text-white' : 'text-slate-900'
          }`}
        >
          <span className="relative h-7 w-7 overflow-hidden rounded-md border border-white/10 bg-white/5">
            <Image src="/njk.jpg" alt="NJK Music logo" fill sizes="28px" className="object-cover" />
          </span>
          <span>NJK Music</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                isActive(item.href)
                  ? isDarkRoute
                    ? 'text-cyan-200'
                    : 'text-primary'
                  : isDarkRoute
                    ? 'text-slate-300 hover:text-white'
                    : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-md border p-2 transition md:hidden ${
            isDarkRoute
              ? 'border-white/15 bg-white/5 text-slate-200 hover:bg-white/10'
              : 'border-border bg-white text-slate-600 hover:bg-slate-50'
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          className={`border-t md:hidden ${
            isDarkRoute ? 'border-white/10 bg-slate-950/95' : 'border-border/80 bg-white'
          }`}
        >
          <nav className="space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive(item.href)
                    ? isDarkRoute
                      ? 'bg-white/10 text-cyan-200'
                      : 'bg-primary/10 text-primary'
                    : isDarkRoute
                      ? 'text-slate-200 hover:bg-white/5 hover:text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
