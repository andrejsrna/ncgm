// components/Accordion.jsx
'use client';

import { useState } from "react";
import Link from "next/link";
import AccordionItem from "./AccordionItem";
import { FaTerminal, FaArrowRight } from "react-icons/fa";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordions = [
    {
      title: "Why Trust Our Neural Audio Network?",
      content: (
        <>
          <p className="text-red-200/70 mb-6 font-mono">
            Our decentralized audio distribution system ensures maximum security and creative freedom in the digital realm:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-red-500 font-mono mr-3">[01]</span>
              <div>
                <strong className="text-red-400 font-mono">Neural Protection Protocol</strong>
                <p className="text-gray-400 mt-1">Advanced algorithms prevent content strikes and system corruption</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-mono mr-3">[02]</span>
              <div>
                <strong className="text-red-400 font-mono">Quantum Revenue Stream</strong>
                <p className="text-gray-400 mt-1">100% secure profit flow with zero data interference</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-mono mr-3">[03]</span>
              <div>
                <strong className="text-red-400 font-mono">High-Fidelity Neural Codec</strong>
                <p className="text-gray-400 mt-1">Military-grade audio compression for maximum impact</p>
              </div>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "How to Access the Mainframe",
      content: (
        <div className="space-y-6">
          <p className="text-red-200/70 font-mono">
            Connect to our secure data nodes through verified channels:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="https://www.amazon.com/music/player/artists/B0CD2BDVWG/no-copyright-gaming-music"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center p-4 bg-black/30 border border-red-900/30 hover:border-red-600/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-red-500 font-mono mr-3">[AMZ]</span>
              <div>
                <div className="font-mono text-red-400 group-hover:text-red-300 transition-colors">Amazon Protocol</div>
                <div className="text-sm text-gray-500">High-bandwidth data transfer</div>
              </div>
            </a>
            <a
              href="https://music.apple.com/us/artist/no-copyright-gaming-music/1699748922"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center p-4 bg-black/30 border border-red-900/30 hover:border-red-600/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-red-500 font-mono mr-3">[APL]</span>
              <div>
                <div className="font-mono text-red-400 group-hover:text-red-300 transition-colors">Apple Matrix</div>
                <div className="text-sm text-gray-500">Quantum-encrypted audio</div>
              </div>
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "System Security Protocols",
      content: (
        <div className="space-y-4">
          <p className="text-red-200/70 font-mono">
            Our neural network maintains 100% system integrity across all nodes:
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="text-red-500 font-mono mr-3">&gt;</span>
              <span className="text-gray-400">Zero-day exploit protection</span>
            </li>
            <li className="flex items-center">
              <span className="text-red-500 font-mono mr-3">&gt;</span>
              <span className="text-gray-400">Quantum encryption protocols</span>
            </li>
            <li className="flex items-center">
              <span className="text-red-500 font-mono mr-3">&gt;</span>
              <span className="text-gray-400">Neural blockchain verification</span>
            </li>
          </ul>
        </div>
      ),
    }
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-black to-black" />
        <div 
          className="absolute inset-0 mix-blend-color-burn opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.7) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-full bg-red-950/30 mb-4 border border-red-900/30">
            <FaTerminal className="w-6 h-6 text-red-500" />
          </div>
          <h2 className="text-4xl font-bold font-mono text-white mb-4 relative inline-block">
            <span className="absolute -left-0.5 -top-0.5 text-red-600 opacity-80 blur-[1px]">
              System Protocols
            </span>
            System Protocols
          </h2>
          <p className="text-red-200/70 max-w-2xl mx-auto font-mono">
            Access critical information about our neural audio network
          </p>
        </div>

        {/* Accordion Items */}
        <div className="relative mb-16">
          <div className="absolute -inset-px bg-gradient-to-r from-red-900/50 via-red-800/30 to-red-900/50 blur" />
          <div className="relative bg-black/80 backdrop-blur-sm border border-red-900/30">
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
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/faq"
            className="group relative inline-flex items-center px-8 py-4 overflow-hidden"
          >
            <div className="absolute -inset-px bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-70 group-hover:opacity-100 blur transition-opacity duration-500" />
            <div className="relative flex items-center bg-black px-6 py-3 font-mono text-red-400 group-hover:text-red-300 transition-colors">
              <span>Access Full Database</span>
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          <p className="mt-6 text-gray-500 font-mono text-sm">
            Need to establish direct contact?{' '}
            <Link href="/contact" className="text-red-500 hover:text-red-400 transition-colors">
              Initialize communication
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
