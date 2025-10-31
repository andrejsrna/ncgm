"use client";

import { useState } from "react";
import Link from "next/link";
import AccordionItem from "./AccordionItem";

const accordions = [
  {
    title: "Why choose NJK Music releases?",
    content: (
      <div className="space-y-3 text-sm text-slate-600">
        <p>
          Every track is designed for creators who need dependable, stream-safe audio across multiple platforms.
          You get high-quality masters, transparent licensing, and a catalogue curated by producers.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Royalty-free usage across live streams, video content, and client projects</li>
          <li>Fast access to high-quality WAV and MP3 downloads</li>
          <li>Regular updates with new moods across our NJK label family</li>
        </ul>
      </div>
    ),
  },
  {
    title: "How do I credit the No Copyright Gaming Music label?",
    content: (
      <div className="space-y-3 text-sm text-slate-600">
        <p>
          Simply include the label name and link back to NJK Music whenever your format allows.
          Detailed examples are available in our attribution guide.
        </p>
        <Link href="/help/attribution" className="text-primary transition hover:underline">
          Review attribution examples
        </Link>
      </div>
    ),
  },
  {
    title: "What formats and stems are included?",
    content: (
      <div className="space-y-3 text-sm text-slate-600">
        <p>
          Releases include WAV and MP3 files by default. Some tracks offer extended assets such as loops or stems.
          Check each release page for specific download options.
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
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Frequently asked questions</h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Still have questions? Explore the FAQ or reach out to our team for personalised help.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-white shadow-sm">
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

        <div className="mt-8 text-center text-sm text-slate-600">
          Need a direct answer?{" "}
          <Link href="/contact" className="text-primary transition hover:underline">
            Contact support
          </Link>
        </div>
      </div>
    </section>
  );
}
