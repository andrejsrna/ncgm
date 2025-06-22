'use client';

import Link from 'next/link';
import { FaCircle, FaServer } from 'react-icons/fa';
import { RiShieldKeyholeFill, RiFingerprint2Fill, RiRadarFill } from 'react-icons/ri';
import { MdMemory } from 'react-icons/md';

const trackingProtocols = [
  {
    icon: <RiFingerprint2Fill className="w-6 h-6 text-red-500" />,
    title: "Core Neural Protocols",
    description: "Essential neural tracking patterns required for matrix navigation and secure zone access within the digital grid.",
    required: true
  },
  {
    icon: <RiRadarFill className="w-6 h-6 text-red-500" />,
    title: "Neural Performance Matrix",
    description: "Anonymous neural pattern analysis to optimize user interface dynamics and digital pathways.",
    required: false
  },
  {
    icon: <MdMemory className="w-6 h-6 text-red-500" />,
    title: "Neural Memory Patterns",
    description: "Digital synapse configuration storage for enhanced neural interface customization (identity matrix, language protocols, regional nodes).",
    required: false
  }
];

const protocolInfo = [
  {
    title: "Neural Tracking Definition",
    content: "Neural tracking protocols are quantum-state data fragments embedded in your local neural interface matrix. These digital synapses enhance your connection to our grid by maintaining neural pattern recognition and interface preferences."
  },
  {
    title: "Implementation Protocol",
    content: "Our neural grid utilizes tracking protocols to optimize your digital consciousness stream, analyze neural traffic patterns, and map user origin nodes. This data synthesis enables continuous service enhancement and targeted content delivery."
  },
  {
    title: "Neural Override Options",
    content: "You maintain sovereign control over neural tracking acceptance or rejection. While most neural interfaces default to protocol acceptance, you can modify your interface settings to override specific tracking patterns."
  }
];

export default function CookiesPage() {
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

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-block mb-6">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-50 blur-lg"></div>
                <div className="relative p-4 bg-black border border-red-900/30">
                  <RiShieldKeyholeFill className="w-12 h-12 text-red-500" />
                </div>
              </div>
            </div>
            <h1 className="relative inline-block mb-6">
              <span className="absolute -inset-2 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-50 blur"></span>
              <span className="relative text-5xl font-extrabold text-red-500 font-mono tracking-wider">
                Neural Tracking Protocol
              </span>
            </h1>
            <p className="text-xl text-red-200/70 max-w-2xl mx-auto font-light tracking-wider">
              Maintaining transparency in our neural pattern monitoring systems.
            </p>
          </div>

          {/* Protocol Types Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {trackingProtocols.map((type) => (
              <div
                key={type.title}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative h-full bg-black border border-red-900/30 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    {type.icon}
                    <h3 className="text-xl font-mono font-bold text-red-500">{type.title}</h3>
                  </div>
                  <p className="text-red-200/70 mb-6 tracking-wide">{type.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    {type.required ? (
                      <div className="relative inline-flex">
                        <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 blur"></div>
                        <div className="relative px-3 py-1 bg-black border border-red-500/30">
                          <span className="font-mono text-red-500">CORE PROTOCOL</span>
                        </div>
                      </div>
                    ) : (
                      <div className="relative inline-flex">
                        <div className="absolute -inset-0.5 bg-red-900/20 opacity-75 blur"></div>
                        <div className="relative px-3 py-1 bg-black border border-red-900/30">
                          <span className="font-mono text-red-200/70">OPTIONAL PROTOCOL</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Information */}
          <div className="space-y-24">
            {protocolInfo.map((info) => (
              <div key={info.title} className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <FaCircle className="w-1.5 h-1.5 text-red-500" />
                  <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider">{info.title}</h2>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
                  <div className="relative bg-black border border-red-900/30 p-8">
                    <p className="text-red-200/70 tracking-wide leading-relaxed">
                      {info.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Neural Support Section */}
          <div className="mt-24 text-center">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
              <div className="relative bg-black border border-red-900/30 p-12">
                <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-6">
                  Neural Protocol Inquiries
                </h2>
                <p className="text-red-200/70 mb-12 tracking-wide max-w-2xl mx-auto">
                  For questions regarding our neural tracking implementation, establish direct contact with our security division.
                </p>
                <Link
                  href="mailto:privacy@nocopyrightgamingmusic.com"
                  className="group relative inline-flex"
                >
                  <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                  <div className="relative flex items-center gap-2 px-6 py-3 bg-black border border-red-500/30">
                    <FaServer className="w-5 h-5 text-red-500" />
                    <span className="font-mono text-red-500">Connect to Security Division</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
        </div>
      </section>
    </div>
  );
} 