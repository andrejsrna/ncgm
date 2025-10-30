'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Music', href: '/music' },
  { name: 'Labels', href: '/labels' },
  { name: 'News', href: '/news' },
  { name: 'Mixes', href: '/mixes' },
  { name: 'Help', href: '/help' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-white/70 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          NJK Music
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                isActive(item.href)
                  ? 'text-primary'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-border bg-white p-2 text-slate-600 transition hover:bg-slate-50 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/80 bg-white md:hidden">
          <nav className="space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive(item.href)
                    ? 'bg-primary/10 text-primary'
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
