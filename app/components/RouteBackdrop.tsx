'use client';

import { usePathname } from 'next/navigation';
import HomeBackdrop from '@/app/components/HomeBackdrop';

export default function RouteBackdrop() {
  const pathname = usePathname();

  const shouldShow =
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

  if (!shouldShow) {
    return null;
  }

  return (
    <HomeBackdrop className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" />
  );
}
