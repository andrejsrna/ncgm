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
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-3xl border border-border bg-white p-8 shadow-soft lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="flex flex-col items-center gap-6 lg:items-start">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border border-border bg-slate-100">
              <Image
                src="/asana-profile.jpeg"
                alt="Asana profile"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-semibold text-slate-900">Andrej “Asana” Srna</h2>
              <p className="mt-2 text-sm text-slate-600">
                Producer, label lead, and curator of the No Copyright Gaming Music imprint. Blending drum &amp; bass,
                cinematic textures, and gaming culture into stream-ready releases.
              </p>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:border-primary hover:text-primary"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-5 text-sm leading-relaxed text-slate-600">
            <p>
              I lead NJK Music&apos;s No Copyright Gaming Music label with the goal of giving creators reliable,
              high-energy music they can use anywhere. Every track is produced with content workflows in mind—loopable
              arrangements, dynamic builds, and instant clearance.
            </p>
            <p>
              Beyond the label, I produce as Asana and run DnB Doctor, crafting drum &amp; bass and cinematic soundscapes.
              These experiences shape our catalog and keep it focused on modern storytelling.
            </p>
            <p>
              Looking for something specific? I&apos;m always open to collaboration or licensing conversations.
              Let&apos;s build the soundtrack for your next release.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:underline"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
