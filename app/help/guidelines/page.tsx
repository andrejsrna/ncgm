'use client';

import Link from 'next/link';
import { FaChevronLeft, FaCheck, FaTimes, FaCircle, FaChevronRight, FaHeadphones, FaGamepad, FaCrosshairs, FaExclamationTriangle } from 'react-icons/fa';
import { RiVideoFill, RiPencilRuler2Fill, RiSettings5Fill, RiShieldKeyholeFill } from 'react-icons/ri';

const protocols = [
  {
    sector: "Signal Integration",
    icon: <RiVideoFill className="w-8 h-8" />,
    directives: [
      {
        title: "Authorized Signal Paths",
        items: [
          "Neural gaming streams",
          "Digital consciousness logs",
          "Background signal patterns",
          "Personal neural projects",
          "Knowledge matrix uploads"
        ],
        type: "allowed"
      },
      {
        title: "Restricted Operations",
        items: [
          "Signal pattern redistribution",
          "Neural compilation creation",
          "Digital asset tokenization",
          "Unauthorized signal amplification",
          "Pattern ownership claims"
        ],
        type: "prohibited"
      }
    ]
  },
  {
    sector: "Neural Attribution",
    icon: <RiPencilRuler2Fill className="w-8 h-8" />,
    directives: [
      {
        title: "Required Neural Markers",
        items: [
          "Signal pattern designation",
          "Core matrix link (nocopyrightgamingmusic.com)",
          "Acquisition node reference",
          "Protocol-compliant formatting",
          "High-visibility placement"
        ],
        type: "required"
      },
      {
        title: "Integration Protocols",
        items: [
          "Signal matrix descriptions",
          "Stream data panels",
          "Neural credit sequences",
          "Social node captions",
          "Terminal credit markers"
        ],
        type: "info"
      }
    ]
  },
  {
    sector: "Technical Protocols",
    icon: <RiSettings5Fill className="w-8 h-8" />,
    directives: [
      {
        title: "Authorized Modifications",
        items: [
          "Amplitude calibration",
          "Basic signal processing",
          "Transition algorithms",
          "Duration optimization",
          "Signal harmonization"
        ],
        type: "allowed"
      },
      {
        title: "Restricted Operations",
        items: [
          "Unauthorized pattern remixing",
          "Derivative signal creation",
          "Core pattern alteration",
          "Neural marker removal",
          "Metadata manipulation"
        ],
        type: "prohibited"
      }
    ]
  }
];

const signalStandards = [
  {
    title: "Signal Fidelity",
    description: "Maintain optimal neural signal clarity in your matrix",
    requirements: [
      "Use source-quality patterns",
      "Neural amplitude calibration",
      "Clean signal integration",
      "Zero pattern corruption"
    ],
    icon: <FaHeadphones className="w-8 h-8" />
  },
  {
    title: "Matrix Integration",
    description: "Optimize signal pattern synchronization",
    requirements: [
      "Precise amplitude ratios",
      "Strategic pattern selection",
      "Professional phase transitions",
      "Neural synchronization"
    ],
    icon: <FaGamepad className="w-8 h-8" />
  },
  {
    title: "Protocol Execution",
    description: "Maintain strict neural protocol standards",
    requirements: [
      "Clear attribution markers",
      "Professional signal editing",
      "Consistent neural quality",
      "Node compliance verification"
    ],
    icon: <FaCrosshairs className="w-8 h-8" />
  }
];

export default function GuidelinesPage() {
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
              Neural Signal Protocol Matrix
            </span>
          </h1>
          <p className="text-red-200/70 text-center max-w-2xl mx-auto font-light tracking-wider">
            Core protocols for neural signal integration across digital matrices.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        {/* Protocol sections */}
        <div className="space-y-32">
          {protocols.map((section) => (
            <section key={section.sector}>
              <div className="flex items-center gap-4 mb-12">
                <div className="text-red-500">{section.icon}</div>
                <h2 className="text-3xl font-mono font-bold text-red-500 tracking-wider">
                  {section.sector} Protocols
                </h2>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                {section.directives.map((directive) => (
                  <div
                    key={directive.title}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                    <div className="relative h-full bg-black border border-red-900/30 p-8">
                      <h3 className="text-xl font-mono font-bold text-red-500 mb-6">{directive.title}</h3>
                      <ul className="space-y-3">
                        {directive.items.map((item, index) => (
                          <li key={index} className="text-red-200/70 text-sm flex items-center gap-3">
                            {directive.type === 'prohibited' ? (
                              <FaTimes className="w-4 h-4 text-red-500 flex-shrink-0" />
                            ) : directive.type === 'allowed' ? (
                              <FaCheck className="w-4 h-4 text-red-500 flex-shrink-0" />
                            ) : directive.type === 'required' ? (
                              <FaCircle className="w-2 h-2 text-red-500 flex-shrink-0" />
                            ) : (
                              <FaChevronRight className="w-3 h-3 text-red-500 flex-shrink-0" />
                            )}
                            <span className="tracking-wide">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Signal Standards */}
        <div className="mt-32">
          <h2 className="text-3xl font-mono font-bold text-red-500 tracking-wider mb-12">Neural Signal Standards</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {signalStandards.map((standard) => (
              <div
                key={standard.title}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative h-full bg-black border border-red-900/30 p-8">
                  <div className="text-red-500 mb-6">{standard.icon}</div>
                  <h3 className="text-xl font-mono font-bold text-red-500 mb-4">{standard.title}</h3>
                  <p className="text-red-200/70 text-sm mb-6 tracking-wide">{standard.description}</p>
                  <ul className="space-y-3">
                    {standard.requirements.map((req, index) => (
                      <li key={index} className="text-red-200/70 text-sm flex items-center gap-3">
                        <span className="text-red-500 font-mono">{(index + 1).toString().padStart(2, '0')}</span>
                        <span className="tracking-wide">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Critical Notice */}
        <div className="relative mt-32">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <FaExclamationTriangle className="w-8 h-8 text-red-500" />
              </div>
              <h2 className="text-2xl font-mono font-bold text-red-500 mb-6">
                Protocol Compliance Alert
              </h2>
              <p className="text-red-200/70 tracking-wide">
                Strict adherence to these protocols ensures optimal neural signal integration and maintains 
                matrix integrity across all nodes. Protocol violations may result in immediate license 
                termination or signal interference claims.
              </p>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="relative mt-32">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-12 text-center">
            <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-6">
              Neural Protocol Assistance
            </h2>
            <p className="text-red-200/70 mb-12 font-light tracking-wide max-w-2xl mx-auto">
              Our neural support matrix stands ready to assist with protocol interpretation.
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
                  <FaChevronRight className="w-5 h-5 text-red-500" />
                  <span className="font-mono text-red-500">Initialize Support</span>
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