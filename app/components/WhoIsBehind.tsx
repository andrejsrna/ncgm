// components/WhoIsBehind.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaSoundcloud, FaYoutube } from 'react-icons/fa';

const socialLinks = [
  { name: 'SoundCloud', url: 'https://soundcloud.com/asana_dnb', icon: <FaSoundcloud className="h-5 w-5 text-orange-500" /> },
  { name: 'Instagram', url: 'https://instagram.com/asana.dnb', icon: <FaInstagram className="h-5 w-5 text-rose-500" /> },
  { name: 'YouTube', url: 'https://www.youtube.com/@asana7958', icon: <FaYoutube className="h-5 w-5 text-rose-600" /> },
];

export default function WhoIsBehind() {
  return (
    <section className="bg-transparent py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="flex flex-col items-center gap-6 lg:items-start">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border border-white/10 bg-white/5">
              <Image
                src="/asana-profile.jpeg"
                alt="Asana profile"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-semibold text-white">Andrej “Asana” Srna</h2>
              <p className="mt-2 text-sm text-slate-300">
                CEO of NJK Music, producer, and label manager across multiple imprints. Building creator-first catalogs
                that blend drum &amp; bass energy, cinematic textures, and gaming culture into stream-ready releases.
              </p>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/0 backdrop-blur transition hover:border-fuchsia-300/60 hover:bg-white/5"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-5 text-sm leading-relaxed text-slate-300">
            <p>
              As CEO of NJK Music, I oversee multiple labels and shape the direction of our releases—from A&amp;R and
              production to branding and distribution. The goal is simple: give creators reliable, high-energy music
              they can use anywhere, with clear licensing and instant access.
            </p>
            <p>
              I produce as Asana and build each catalog with modern content workflows in mind—loopable arrangements,
              dynamic builds, and a sound that fits streams, edits, and campaigns. Every label under NJK Music has its
              own mood, but the same creator-safe foundation.
            </p>
            <p>
              Looking for something specific? I&apos;m always open to collaboration or licensing conversations.
              Let&apos;s build the soundtrack for your next release.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
