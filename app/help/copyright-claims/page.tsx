'use client';

import Link from 'next/link';
import { FaChevronLeft, FaShieldAlt, FaExclamationTriangle, FaFileContract, FaSync, FaClipboard, FaEnvelope, FaCheck, FaExclamationCircle, FaBroadcastTower } from 'react-icons/fa';
import { RiShieldKeyholeFill, RiFileWarningFill, RiFileShieldFill, RiRadarFill } from 'react-icons/ri';
import { SiYoutube, SiTwitch } from 'react-icons/si';

const claimTypes = [
  {
    type: "Neural Stream Protocol",
    icon: <SiYoutube className="w-8 h-8" />,
    scenarios: [
      {
        title: "Pattern Recognition Conflict",
        description: "Automated neural pattern mismatch in signal matrix",
        steps: [
          "Verify neural acquisition logs",
          "Validate attribution protocols",
          "Execute dispute sequence",
          "Upload acquisition verification",
          "Await system scan (24-48h)"
        ],
        severity: "medium",
        icon: <RiShieldKeyholeFill className="w-6 h-6" />
      },
      {
        title: "Manual Override Attempt",
        description: "External entity attempting signal override",
        steps: [
          "Log interference parameters",
          "Initialize emergency protocols",
          "Transmit signal coordinates",
          "Maintain protocol silence",
          "Await core resolution"
        ],
        severity: "high",
        icon: <RiFileWarningFill className="w-6 h-6" />
      }
    ]
  },
  {
    type: "Neural Broadcast Matrix",
    icon: <SiTwitch className="w-8 h-8" />,
    scenarios: [
      {
        title: "Signal Dampening",
        description: "Automated signal suppression in temporal archive",
        steps: [
          "Capture dampening parameters",
          "Verify broadcast markers",
          "Contact node control",
          "Submit neural license key",
          "Request signal restoration"
        ],
        severity: "low",
        icon: <FaBroadcastTower className="w-6 h-6" />
      },
      {
        title: "Neural Rights Alert",
        description: "Formal rights violation detected in matrix",
        steps: [
          "Maintain signal integrity",
          "Initialize core contact",
          "Log all neural alerts",
          "Execute provided protocols",
          "Submit counter-sequence"
        ],
        severity: "high",
        icon: <RiRadarFill className="w-6 h-6" />
      }
    ]
  }
];

const preventionProtocols = [
  {
    title: "Neural Attribution Protocol",
    description: "Maintain precise attribution markers in matrix",
    steps: [
      "Use exact signal identifiers",
      "Include neural core link",
      "Document acquisition node",
      "Maintain protocol consistency",
      "Update on signal changes"
    ],
    icon: <FaFileContract className="w-8 h-8" />
  },
  {
    title: "Neural Documentation",
    description: "Archive all acquisition verification data",
    steps: [
      "Store acquisition logs",
      "Capture license parameters",
      "Archive neural confirmations",
      "Index by timestamp",
      "Backup all verification data"
    ],
    icon: <RiFileShieldFill className="w-8 h-8" />
  },
  {
    title: "Signal Monitoring",
    description: "Maintain active signal matrix surveillance",
    steps: [
      "Scan neural alerts daily",
      "Monitor signal integrity",
      "Review automated protocols",
      "Verify attribution markers",
      "Update as required"
    ],
    icon: <FaSync className="w-8 h-8" />
  }
];

const emergencyProtocols = [
  {
    title: "01 // MAINTAIN STABILITY",
    description: "Execute protocols with precision. Most neural conflicts resolve with proper verification data.",
    icon: <FaShieldAlt className="w-6 h-6" />
  },
  {
    title: "02 // LOG ALL DATA",
    description: "Archive neural interference patterns, acquisition logs, and all relevant transmissions.",
    icon: <FaClipboard className="w-6 h-6" />
  },
  {
    title: "03 // INITIALIZE SUPPORT",
    description: "Establish immediate connection with neural support core with all logged data.",
    icon: <FaEnvelope className="w-6 h-6" />
  },
  {
    title: "04 // AWAIT INSTRUCTIONS",
    description: "Maintain protocol silence and execute provided sequences precisely.",
    icon: <FaExclamationCircle className="w-6 h-6" />
  }
];

export default function CopyrightClaimsPage() {
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
              Neural Rights Protection Matrix
            </span>
          </h1>
          <p className="text-red-200/70 text-center max-w-2xl mx-auto font-light tracking-wider">
            Protocol guide for resolving neural pattern rights conflicts and maintaining signal integrity.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        {/* Emergency Protocols */}
        <div className="mb-32">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
            <div className="relative bg-black border border-red-900/30 p-8">
              <h2 className="text-3xl font-mono font-bold text-red-500 tracking-wider mb-12 flex items-center gap-4">
                <FaExclamationTriangle className="w-8 h-8" />
                Emergency Protocols
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {emergencyProtocols.map((protocol) => (
                  <div key={protocol.title} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-50 group-hover:opacity-75 blur transition duration-500"></div>
                    <div className="relative h-full bg-black border border-red-900/30 p-6">
                      <div className="text-red-500 mb-4">{protocol.icon}</div>
                      <h3 className="text-lg font-mono font-bold text-red-500 mb-3">{protocol.title}</h3>
                      <p className="text-red-200/70 text-sm tracking-wide">{protocol.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Claim Types */}
        <div className="space-y-32 mb-32">
          {claimTypes.map((platform) => (
            <section key={platform.type}>
              <div className="flex items-center gap-4 mb-12">
                <div className="text-red-500">{platform.icon}</div>
                <h2 className="text-3xl font-mono font-bold text-red-500 tracking-wider">
                  {platform.type}
                </h2>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                {platform.scenarios.map((scenario) => (
                  <div key={scenario.title} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                    <div className={`relative h-full bg-black border border-red-900/30 p-8 ${
                      scenario.severity === 'high' ? 'ring-2 ring-red-500' : ''
                    }`}>
                      {scenario.severity === 'high' && (
                        <div className="text-red-500 text-sm font-mono mb-3 flex items-center gap-2">
                          <FaExclamationTriangle className="w-4 h-4" />
                          Critical Priority
                        </div>
                      )}
                      <div className="text-red-500 mb-6">{scenario.icon}</div>
                      <h3 className="text-xl font-mono font-bold text-red-500 mb-4">{scenario.title}</h3>
                      <p className="text-red-200/70 text-sm mb-6 tracking-wide">{scenario.description}</p>
                      <div className="space-y-3">
                        {scenario.steps.map((step, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="text-red-500 font-mono">{(index + 1).toString().padStart(2, '0')}</span>
                            <p className="text-red-200/70 text-sm tracking-wide">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Prevention Protocols */}
        <div className="relative">
          <h2 className="text-3xl font-mono font-bold text-red-500 tracking-wider mb-12">Neural Protection Protocols</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {preventionProtocols.map((protocol) => (
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
                        <FaCheck className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span className="tracking-wide">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="relative mt-32">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-12 text-center">
            <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-6">
              Neural Support Required?
            </h2>
            <p className="text-red-200/70 mb-12 font-light tracking-wide max-w-2xl mx-auto">
              Our neural support matrix stands ready to assist with rights protection protocols.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/help/content-id"
                className="group relative inline-flex"
              >
                <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative flex items-center gap-2 px-6 py-3 bg-black border border-red-500/30">
                  <RiShieldKeyholeFill className="w-5 h-5 text-red-500" />
                  <span className="font-mono text-red-500">Pattern Protection</span>
                </div>
              </Link>
              <a
                href="mailto:support@nocopyrightgamingmusic.com"
                className="group relative inline-flex"
              >
                <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative flex items-center gap-2 px-6 py-3 bg-black border border-red-500/30">
                  <FaEnvelope className="w-5 h-5 text-red-500" />
                  <span className="font-mono text-red-500">Neural Support Link</span>
                </div>
              </a>
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