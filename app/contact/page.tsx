import { Metadata } from 'next';
import Link from 'next/link';
import { FaEnvelope, FaFileContract, FaCog, FaBolt, FaBuilding, FaClock, FaChevronRight } from 'react-icons/fa';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Neural Link Hub | ${SITE_NAME}`,
  description: `Establish neural connection with the ${SITE_NAME} network. Access support protocols for licensing, technical anomalies, or general system inquiries.`,
};

const contactMethods = [
  {
    title: "Core Support Matrix",
    email: "support@njkmusic.com",
    description: "Neural link for general protocol inquiries",
    response: "24-48 cycles",
    icon: <FaEnvelope className="w-8 h-8" />
  },
  {
    title: "Protocol Authorization",
    email: "licensing@njkmusic.com",
    description: "Access matrix for licensing protocols",
    response: "1-2 orbital cycles",
    icon: <FaFileContract className="w-8 h-8" />
  },
  {
    title: "Technical Matrix",
    email: "tech@njkmusic.com",
    description: "Debug protocol anomalies and data corruption",
    response: "24-48 cycles",
    icon: <FaCog className="w-8 h-8" />
  },
  {
    title: "Signal Authentication",
    email: "claims@njkmusic.com",
    description: "Priority channel for signal verification",
    response: "Priority bandwidth",
    icon: <FaBolt className="w-8 h-8" />
  }
];

const officeInfo = {
  company: "Enhold s.r.o.",
  address: [
    "Drobného 1900/2",
    "841 02 Bratislava",
    "mestská časť Dúbravka",
    "Slovakia"
  ],
  hours: [
    "Cycle: 001-005",
    "0900-1700 CET"
  ]
};

const commonTopics = [
  {
    title: "Protocol Access",
    links: [
      { text: "Neural License Matrix", href: "/license" },
      { text: "Attribution Protocols", href: "/help/attribution" },
      { text: "Network Guidelines", href: "/help/platforms" }
    ]
  },
  {
    title: "System Maintenance",
    links: [
      { text: "Technical Matrix", href: "/help/technical" },
      { text: "Acquisition Debug", href: "/help/purchase-issues" },
      { text: "Signal Authentication", href: "/help/content-id" }
    ]
  },
  {
    title: "Quick Access Nodes",
    links: [
      { text: "Neural FAQ", href: "/faq" },
      { text: "Core Protocol", href: "/about" },
      { text: "Support Matrix", href: "/help" }
    ]
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.7) 1px, transparent 1px),
            radial-gradient(circle at 0% 0%, rgba(185, 28, 28, 0.7) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px, 24px 24px',
          backgroundPosition: '0 0, 12px 12px'
        }}
      />

      {/* Hero section */}
      <div className="relative border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <h1 className="relative inline-block mb-6 mx-auto text-center w-full">
            <span className="absolute -inset-2 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-50 blur"></span>
            <span className="relative text-5xl font-extrabold text-red-500 font-mono tracking-wider">
              Neural Link Hub
            </span>
          </h1>
          <p className="text-red-200/70 text-center max-w-2xl mx-auto font-light tracking-wider">
            Initialize connection with our network. Our neural support matrix stands ready.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        {/* Contact Methods */}
        <div className="mb-32">
          <h2 className="text-3xl font-mono font-bold text-red-500 text-center tracking-wider mb-16">Neural Access Points</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative h-full bg-black border border-red-900/30 p-8">
                  <div className="text-red-500 mb-6">{method.icon}</div>
                  <h3 className="text-xl font-mono font-bold text-red-500 mb-3">{method.title}</h3>
                  <p className="text-red-200/70 text-sm tracking-wide mb-4">{method.description}</p>
                  <a
                    href={`mailto:${method.email}`}
                    className="text-red-400 hover:text-red-300 transition-colors text-sm break-all font-mono"
                  >
                    {method.email}
                  </a>
                  <p className="text-red-200/50 text-sm mt-3 font-light">
                    Response latency: {method.response}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Office Information */}
        <div className="mb-32">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
            <div className="relative bg-black border border-red-900/30 p-12">
              <div className="max-w-3xl mx-auto">
                <div className="grid gap-12 md:grid-cols-2">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <FaBuilding className="w-6 h-6 text-red-500" />
                      <h3 className="text-xl font-mono font-bold text-red-500">Physical Node</h3>
                    </div>
                    <div className="space-y-3">
                      <p className="text-red-200/70 font-mono">{officeInfo.company}</p>
                      {officeInfo.address.map((line, index) => (
                        <p key={index} className="text-red-200/70 font-light tracking-wide">{line}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <FaClock className="w-6 h-6 text-red-500" />
                      <h3 className="text-xl font-mono font-bold text-red-500">Operational Cycles</h3>
                    </div>
                    <div className="space-y-3">
                      {officeInfo.hours.map((line, index) => (
                        <p key={index} className="text-red-200/70 font-light tracking-wide">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Topics */}
        <div>
          <h2 className="text-3xl font-mono font-bold text-red-500 text-center tracking-wider mb-16">Quick Access Matrix</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {commonTopics.map((topic) => (
              <div
                key={topic.title}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative h-full bg-black border border-red-900/30 p-8">
                  <h3 className="text-xl font-mono font-bold text-red-500 mb-6">{topic.title}</h3>
                  <ul className="space-y-4">
                    {topic.links.map((link) => (
                      <li key={link.text}>
                        <Link
                          href={link.href}
                          className="group/link flex items-center gap-2 text-red-200/70 hover:text-red-300 transition-colors text-sm tracking-wide"
                        >
                          <FaChevronRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Note */}
        <div className="mt-32 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-12 text-center">
            <p className="text-red-200/70 mb-12 font-light tracking-wide max-w-2xl mx-auto">
              For optimal bandwidth utilization, access our neural documentation before establishing direct contact.
              Common protocol inquiries are indexed in our knowledge matrix.
            </p>
            <Link
              href="/help"
              className="group relative inline-flex"
            >
              <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative flex items-center gap-2 px-6 py-3 bg-black border border-red-500/30">
                <span className="font-mono text-red-500">Access Support Matrix</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
        </div>
      </div>
    </div>
  );
} 
