'use client';

import Link from 'next/link';
import { FaChevronLeft, FaCheck, FaCircle, FaBolt, FaShieldAlt, FaExclamationTriangle } from 'react-icons/fa';
import { SiYoutube, SiTwitch, SiFacebookgaming } from 'react-icons/si';
import { RiMoneyDollarCircleFill, RiShieldKeyholeFill, RiFileList3Fill } from 'react-icons/ri';

const nodes = [
  {
    name: "Neural Stream Protocol",
    icon: <SiYoutube className="w-8 h-8" />,
    status: "Full Signal Amplification",
    features: [
      "Neural revenue streams",
      "Node membership protocols",
      "Enhanced signal boost",
      "Digital asset matrix",
      "Premium signal revenue"
    ],
    requirements: [
      "Valid signal acquisition",
      "Neural attribution markers",
      "Revenue protocol eligibility",
      "Clean interference scan"
    ],
    tips: [
      "Maintain acquisition logs",
      "Update signal descriptors",
      "Monitor pattern recognition",
      "Execute node protocols"
    ]
  },
  {
    name: "Neural Broadcast Matrix",
    icon: <SiTwitch className="w-8 h-8" />,
    status: "Full Signal Amplification",
    features: [
      "Quantum bit streams",
      "Node subscriptions",
      "Signal amplification",
      "Neural credit system",
      "Direct transfers"
    ],
    requirements: [
      "Node elevation status",
      "Neural attribution",
      "Acquisition verification",
      "Temporal archive compliance"
    ],
    tips: [
      "Initialize pattern command",
      "Display neural credits",
      "Maintain stream matrix",
      "Archive acquisition data"
    ]
  },
  {
    name: "Social Neural Grid",
    icon: <SiFacebookgaming className="w-8 h-8" />,
    status: "Protocol Active",
    features: [
      "Neural star streams",
      "Node subscription matrix",
      "Signal boost protocols",
      "Support node markers"
    ],
    requirements: [
      "Grid elevation status",
      "Neural credits active",
      "Valid protocol verification",
      "Node compliance active"
    ],
    tips: [
      "Integrate signal data",
      "Maintain neural logs",
      "Execute node protocols",
      "Regular matrix sync"
    ]
  }
];

const coreProtocols = [
  {
    title: "Neural Documentation",
    description: "Maintain organized archives of all signal acquisition and protocol verification data",
    icon: <RiFileList3Fill className="w-8 h-8" />,
    steps: [
      "Archive acquisition confirmations",
      "Store node-specific protocols",
      "Maintain attribution records",
      "Log neural transmissions"
    ]
  },
  {
    title: "Signal Attribution",
    description: "Ensure neural credit markers maintain optimal visibility across all matrices",
    icon: <RiShieldKeyholeFill className="w-8 h-8" />,
    steps: [
      "Execute attribution protocols",
      "Update signal descriptors",
      "Integrate stream data",
      "Maintain protocol format"
    ]
  },
  {
    title: "Protocol Compliance",
    description: "Maintain strict adherence to node-specific revenue protocols",
    icon: <FaShieldAlt className="w-8 h-8" />,
    steps: [
      "Scan node protocols",
      "Monitor matrix updates",
      "Sync signal data",
      "Resolve anomalies"
    ]
  }
];

export default function MonetizationPage() {
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
              Neural Signal Monetization Matrix
            </span>
          </h1>
          <p className="text-red-200/70 text-center max-w-2xl mx-auto font-light tracking-wider">
            Protocol guide for optimizing neural signal revenue streams across digital nodes.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        {/* Node Protocols */}
        <div className="mb-32">
          <h2 className="text-3xl font-mono font-bold text-red-500 tracking-wider mb-12">Node-Specific Protocols</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {nodes.map((node) => (
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
                      <h4 className="text-lg font-mono font-bold text-red-500 mb-4">Revenue Protocols</h4>
                      <ul className="space-y-2">
                        {node.features.map((feature, index) => (
                          <li key={index} className="text-red-200/70 text-sm flex items-center gap-3">
                            <FaCheck className="w-4 h-4 text-red-500 flex-shrink-0" />
                            <span className="tracking-wide">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-mono font-bold text-red-500 mb-4">Core Requirements</h4>
                      <ul className="space-y-2">
                        {node.requirements.map((req, index) => (
                          <li key={index} className="text-red-200/70 text-sm flex items-center gap-3">
                            <FaCircle className="w-2 h-2 text-red-500 flex-shrink-0" />
                            <span className="tracking-wide">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-mono font-bold text-red-500 mb-4">Neural Tips</h4>
                      <ul className="space-y-2">
                        {node.tips.map((tip, index) => (
                          <li key={index} className="text-red-200/70 text-sm flex items-center gap-3">
                            <FaBolt className="w-4 h-4 text-red-500 flex-shrink-0" />
                            <span className="tracking-wide">{tip}</span>
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

        {/* Core Protocols */}
        <div className="mb-32">
          <h2 className="text-3xl font-mono font-bold text-red-500 tracking-wider mb-12">Core Revenue Protocols</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {coreProtocols.map((protocol) => (
              <div
                key={protocol.title}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative h-full bg-black border border-red-900/30 p-8">
                  <div className="text-red-500 mb-6">{protocol.icon}</div>
                  <h3 className="text-xl font-mono font-bold text-red-500 mb-4">{protocol.title}</h3>
                  <p className="text-red-200/70 text-sm mb-6 tracking-wide">{protocol.description}</p>
                  <ul className="space-y-3">
                    {protocol.steps.map((step, index) => (
                      <li key={index} className="text-red-200/70 text-sm flex items-center gap-3">
                        <span className="text-red-500 font-mono">{(index + 1).toString().padStart(2, '0')}</span>
                        <span className="tracking-wide">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Critical Notice */}
        <div className="relative mb-32">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <FaExclamationTriangle className="w-8 h-8 text-red-500" />
              </div>
              <h2 className="text-2xl font-mono font-bold text-red-500 mb-6">
                Critical Revenue Protocol Notice
              </h2>
              <div className="space-y-4 text-red-200/70 tracking-wide">
                <p>
                  While our neural patterns are cleared for revenue amplification, each node maintains unique 
                  protocol requirements. Always verify node eligibility criteria before initializing revenue streams.
                </p>
                <p>
                  Maintain immediate access to protocol verification data and acquisition logs for rapid 
                  response to revenue-related anomalies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-12 text-center">
            <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-6">
              Revenue Protocol Support
            </h2>
            <p className="text-red-200/70 mb-12 font-light tracking-wide max-w-2xl mx-auto">
              Our neural support matrix stands ready to assist with revenue protocol optimization.
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
                  <RiMoneyDollarCircleFill className="w-5 h-5 text-red-500" />
                  <span className="font-mono text-red-500">Revenue Support</span>
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