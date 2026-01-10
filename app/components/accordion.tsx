"use client";

import { useState } from "react";
import Link from "next/link";
import AccordionItem from "./AccordionItem";

const accordions = [
  {
    title: "What is NJK Music?",
    content: (
      <div className="space-y-3 text-sm text-slate-300">
        <p>
          NJK Music is a multi-label music brand built for creators. We release across different label moods and genres,
          so you can find the right energy for streams, edits, and client work.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Multiple labels and curated moods under one roof</li>
          <li>Clear licensing guidance for modern content workflows</li>
          <li>Regular updates with new releases across the roster</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Can I use NJK Music in monetized videos and streams?",
    content: (
      <div className="space-y-3 text-sm text-slate-300">
        <p>
          In most cases, yes. Our releases are designed for creator use cases, but rules can vary by label, track, and
          platform. Always check the release page and our guidelines for the most accurate usage details.
        </p>
        <Link href="/help/monetization" className="text-cyan-300 transition hover:text-cyan-200">
          Review monetization guidelines
        </Link>
      </div>
    ),
  },
  {
    title: "Do I need to credit NJK Music or the label?",
    content: (
      <div className="space-y-3 text-sm text-slate-300">
        <p>
          If attribution is required, include the artist/label name and link back to NJK Music whenever possible.
          The exact wording can differ by release, so use the template from our attribution guide.
        </p>
        <Link href="/help/attribution" className="text-cyan-300 transition hover:text-cyan-200">
          See attribution templates
        </Link>
      </div>
    ),
  },
  {
    title: "What formats are available for downloads?",
    content: (
      <div className="space-y-3 text-sm text-slate-300">
        <p>
          Releases include WAV and MP3 by default. Some tracks include extended assets like loops or stems.
          Check each release page for what&apos;s included.
        </p>
      </div>
    ),
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-transparent py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-white">Frequently asked questions</h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Still have questions? Explore the FAQ or reach out to our team for personalised help.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 shadow-sm backdrop-blur">
          {accordions.map((accordion, index) => (
            <AccordionItem
              key={accordion.title}
              id={index}
              title={accordion.title}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
              content={accordion.content}
            />
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-slate-300">
          Need a direct answer?{" "}
          <Link href="/contact" className="text-cyan-300 transition hover:text-cyan-200">
            Contact support
          </Link>
        </div>
      </div>
    </section>
  );
}
