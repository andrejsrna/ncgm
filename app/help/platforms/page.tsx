'use client';

import Link from 'next/link';
import { FaChevronLeft, FaCheck, FaCircle, FaShieldAlt, FaLock } from 'react-icons/fa';
import { SiYoutube, SiTwitch, SiTiktok, SiInstagram } from 'react-icons/si';
import { RiShieldKeyholeFill, RiFileShieldLine, RiAlertFill } from 'react-icons/ri';

const neuralNodes = [
  {
    name: "Neural Stream Protocol",
    icon: <SiYoutube className="w-8 h-8" />,
    status: "Full Neural Integration",
    features: [
      "Signal amplification enabled",
      "Pattern recognition cleared",
      "Neural background sync",
      "Gaming matrix integration",
      "Knowledge transfer protocols",
      "Neural stream sync"
    ],
    requirements: [
      "Neural attribution markers",
      "Valid signal acquisition proof",
      "No raw data redistribution"
    ]
  },
  {
    name: "Neural Broadcast Matrix",
    icon: <SiTwitch className="w-8 h-8" />,
    status: "Full Neural Integration",
    features: [
      "Real-time signal streaming",
      "Temporal archives",
      "Neural fragments",
      "Credit matrix rewards",
      "Signal transition protocols",
      "Background neural sync"
    ],
    requirements: [
      "Attribution in neural panels",
      "Signal verification",
      "Regular matrix updates"
    ]
  },
  {
    name: "Quantum Signal Grid",
    icon: <SiTiktok className="w-8 h-8" />,
    status: "Conditional Integration",
    features: [
      "Quantum-form signals",
      "Neural streams",
      "Gaming fragments",
      "Signal transitions",
      "Background neural sync"
    ],
    requirements: [
      "Neural attribution markers",
      "No signal extraction",
      "Original acquisition proof"
    ]
  },
  {
    name: "Visual Neural Matrix",
    icon: <SiInstagram className="w-8 h-8" />,
    status: "Neural Integration Active",
    features: [
      "Neural reels",
      "Temporal fragments",
      "Extended neural grid",
      "Signal-enhanced posts",
      "Real-time neural streams"
    ],
    requirements: [
      "Neural credits in signal",
      "Acquisition verification",
      "Grid protocol compliance"
    ]
  }
];

const restrictedProtocols = [
  {
    type: "Commercial Signal Boost",
    status: "Enhanced Protocol Required",
    description: "Signal amplification in paid neural broadcasts requires advanced licensing protocols.",
    contact: "Interface with our licensing matrix for commercial signal permissions.",
    icon: <RiShieldKeyholeFill className="w-8 h-8" />
  },
  {
    type: "Signal Distribution",
    status: "Protocol Violation",
    description: "Redistributing neural patterns as standalone signals or in pattern compilations is prohibited.",
    contact: "This includes uploads to signal streaming matrices or data-sharing networks.",
    icon: <RiFileShieldLine className="w-8 h-8" />
  },
  {
    type: "Digital Asset Integration",
    status: "Protocol Violation",
    description: "Creating digital assets using our neural patterns is not permitted under standard protocol.",
    contact: "Enhanced permissions are not currently available for digital asset projects.",
    icon: <RiAlertFill className="w-8 h-8" />
  }
];

export default function PlatformsPage() {
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
          <div className="flex items-center justify-center mb-12">
            <Link
              href="/help"
              className="group relative inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
            >
              <FaChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="font-mono">Return to Support Matrix</span>
            </Link>
          </div>
          <h1 className="relative inline-block mb-6 mx-auto text-center w-full">
            <span className="absolute -inset-2 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-50 blur"></span>
            <span className="relative text-5xl font-extrabold text-red-500 font-mono tracking-wider">
              Neural Network Compatibility Matrix
            </span>
          </h1>
          <p className="text-red-200/70 text-center max-w-2xl mx-auto font-light tracking-wider">
            Access the neural network compatibility matrix for signal distribution across digital nodes.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        {/* Neural Nodes */}
        <div className="mb-32">
          <h2 className="text-3xl font-mono font-bold text-red-500 tracking-wider mb-12">Neural Integration Nodes</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {neuralNodes.map((node) => (
              <div
                key={node.name}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative h-full bg-black border border-red-900/30 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-red-500">{node.icon}</div>
                    <div>
                      <h3 className="text-xl font-mono font-bold text-red-500">{node.name}</h3>
                      <span className="text-red-400/70 text-sm font-mono">{node.status}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-mono font-bold text-red-500 mb-4">Neural Features</h4>
                      <ul className="grid grid-cols-2 gap-3">
                        {node.features.map((feature, index) => (
                          <li key={index} className="text-red-200/70 text-sm flex items-center gap-3">
                            <FaCheck className="w-4 h-4 text-red-500 flex-shrink-0" />
                            <span className="tracking-wide">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-mono font-bold text-red-500 mb-4">Protocol Requirements</h4>
                      <ul className="space-y-2">
                        {node.requirements.map((req, index) => (
                          <li key={index} className="text-red-200/70 text-sm flex items-center gap-3">
                            <FaCircle className="w-2 h-2 text-red-500 flex-shrink-0" />
                            <span className="tracking-wide">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restricted Protocols */}
        <div className="mb-32">
          <h2 className="text-3xl font-mono font-bold text-red-500 tracking-wider mb-12">Restricted Neural Protocols</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {restrictedProtocols.map((protocol) => (
              <div
                key={protocol.type}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative h-full bg-black border border-red-900/30 p-8">
                  <div className="text-red-500 mb-6">{protocol.icon}</div>
                  <div className="flex items-center gap-2 mb-4">
                    <FaLock className="w-4 h-4 text-red-500" />
                    <h3 className="text-xl font-mono font-bold text-red-500">{protocol.type}</h3>
                  </div>
                  <div className="text-red-400/70 text-sm font-mono mb-4">{protocol.status}</div>
                  <p className="text-red-200/70 text-sm mb-4 tracking-wide">{protocol.description}</p>
                  <p className="text-red-300/50 text-sm tracking-wide">{protocol.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Matrix */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-12 text-center">
            <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-6">
              Neural Protocol Support
            </h2>
            <p className="text-red-200/70 mb-12 font-light tracking-wide max-w-2xl mx-auto">
              Our neural support matrix stands ready to assist with protocol optimization and anomaly resolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/help/attribution"
                className="group relative inline-flex"
              >
                <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative flex items-center gap-2 px-6 py-3 bg-black border border-red-500/30">
                  <RiShieldKeyholeFill className="w-5 h-5 text-red-500" />
                  <span className="font-mono text-red-500">Attribution Matrix</span>
                </div>
              </Link>
              <Link
                href="/contact"
                className="group relative inline-flex"
              >
                <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative flex items-center gap-2 px-6 py-3 bg-black border border-red-500/30">
                  <FaShieldAlt className="w-5 h-5 text-red-500" />
                  <span className="font-mono text-red-500">Neural Support</span>
                </div>
              </Link>
            </div>
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