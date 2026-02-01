'use client';

import { usePathname } from 'next/navigation';

const quickLinks = [
  {
    href: 'https://youtube.com/channel/UCWVxIOcVIyuXJ0yCIevHS2w/',
    label: 'NJK Music YouTube',
  },
  {
    href: 'https://open.spotify.com/artist/0N0TGSkeeLoh5G7QTJ226Q?si=qF3oTBsERP6EOBvhZ7_AlA',
    label: 'Chill Music Motif Spotify',
  },
  {
    href: 'https://open.spotify.com/artist/702mas8Kyj9BGvD6dZGML8?si=YLtxCd8hQd2ODGYRVuceYw',
    label: 'No Copyright Gaming Music Spotify',
  },
];

export default function QuickLinksBar() {
  const pathname = usePathname();
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

  return (
    <div
      className={`sticky top-16 z-30 border-b backdrop-blur ${
        isDarkRoute
          ? 'border-white/10 bg-slate-950/80 supports-[backdrop-filter]:bg-slate-950/45'
          : 'border-border/80 bg-white/70'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-3 gap-y-1 px-4 py-2 text-xs sm:px-6 lg:px-8">
        <span className={`${isDarkRoute ? 'text-slate-300' : 'text-slate-600'}`}>Quick links:</span>
        {quickLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`underline-offset-4 transition hover:underline ${
              isDarkRoute ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

