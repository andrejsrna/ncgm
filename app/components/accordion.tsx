// components/Accordion.jsx
'use client';

import { useState } from "react";
import Link from "next/link";
import AccordionItem from "./AccordionItem";
import { FaQuestionCircle, FaArrowRight } from "react-icons/fa";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Zredukujeme počet FAQ na hlavnej stránke
  const accordions = [
    {
      title: "Why Use Copyright-Free Music for Your Content?",
      icon: "🎵",
      content: (
        <>
          <p className="text-gray-300 mb-4">
            Using copyrighted music can lead to significant legal and financial issues. Here&apos;s why our copyright-free music is the perfect solution:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <div>
                <strong className="text-white">Avoid Copyright Strikes</strong>
                <p className="text-gray-400 text-sm">No more worries about content takedowns or channel strikes</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <div>
                <strong className="text-white">Safe Monetization</strong>
                <p className="text-gray-400 text-sm">Keep 100% of your revenue without claims</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <div>
                <strong className="text-white">High-Quality Audio</strong>
                <p className="text-gray-400 text-sm">Professional-grade music for your content</p>
              </div>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Where to Buy Full-Quality Tracks",
      icon: "🛒",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Get high-resolution audio files from our official stores:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="https://www.amazon.com/music/player/artists/B0CD2BDVWG/no-copyright-gaming-music"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors"
            >
              <span className="text-2xl mr-3">🎵</span>
              <div>
                <div className="font-medium text-white">Amazon Music</div>
                <div className="text-sm text-gray-400">High-quality MP3s</div>
              </div>
            </a>
            <a
              href="https://music.apple.com/us/artist/no-copyright-gaming-music/1699748922"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors"
            >
              <span className="text-2xl mr-3">🎧</span>
              <div>
                <div className="font-medium text-white">iTunes</div>
                <div className="text-sm text-gray-400">Premium audio files</div>
              </div>
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Will My Content Be Monetization Restricted?",
      icon: "💰",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            No! Our music is 100% safe for monetization on all platforms:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-400">
              <span className="text-green-400 mr-2">•</span>
              No Content ID claims or strikes
            </li>
            <li className="flex items-center text-gray-400">
              <span className="text-green-400 mr-2">•</span>
              Keep all your revenue
            </li>
            <li className="flex items-center text-gray-400">
              <span className="text-green-400 mr-2">•</span>
              Clear licensing terms
            </li>
          </ul>
        </div>
      ),
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 rounded-full bg-blue-500/10 mb-4">
            <FaQuestionCircle className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get quick answers to common questions about using our music in your content.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 mb-12">
          {accordions.map((accordion, index) => (
            <AccordionItem
              key={index}
              id={index}
              title={accordion.title}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
              content={accordion.content}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/faq"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            View All FAQs
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            Still have questions?{' '}
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
