'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    if (!accepted) {
      setStatus('error');
      setMessage('Please accept the privacy notice.');
      return;
    }

    try {
      setStatus('loading');
      setMessage(null);

      const response = await fetch('/api/newsletters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Unable to subscribe at the moment.');
      }

      setStatus('success');
      setMessage('Thanks for subscribing!');
      setEmail('');
      setAccepted(false);
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error ? error.message : 'Unable to subscribe at the moment.'
      );
    }
  };

  return (
    <footer className="border-t border-border/80 bg-white">
      <div className="mx-auto flex flex-col gap-12 px-4 py-12 sm:px-6 lg:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">Stay in the loop</h2>
          <p className="text-sm text-slate-600">
            Get occasional updates about new releases, label news, and curated resources
            for creators.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
              </button>
            </div>

            <label className="flex items-start gap-2 text-xs text-slate-600">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(event) => setAccepted(event.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border border-border text-primary focus:ring-primary/40"
              />
              I agree to the{' '}
              <Link href="/privacy" className="underline underline-offset-4">
                privacy policy
              </Link>
              .
            </label>

            {message && (
              <p
                className={`text-xs ${
                  status === 'success' ? 'text-emerald-600' : 'text-rose-600'
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>

        <div className="grid flex-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/music" className="transition hover:text-slate-900">
                  Music Library
                </Link>
              </li>
              <li>
                <Link href="/labels/no-copyright-gaming-music" className="transition hover:text-slate-900">
                  NCGM Label
                </Link>
              </li>
              <li>
                <Link href="/mixes" className="transition hover:text-slate-900">
                  Mixes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Support
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/help" className="transition hover:text-slate-900">
                  Help Centre
                </Link>
              </li>
              <li>
                <Link href="/license" className="transition hover:text-slate-900">
                  Licensing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-slate-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/terms" className="transition hover:text-slate-900">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition hover:text-slate-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="transition hover:text-slate-900">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border/80">
        <div className="mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} NJK Music. All rights reserved.</p>
          <p>Built for creators, streamers, and teams everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
