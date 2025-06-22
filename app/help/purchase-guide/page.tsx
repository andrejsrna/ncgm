import { Metadata } from 'next';
import Link from 'next/link';
import { FaChevronLeft, FaShoppingCart, FaDownload, FaGamepad, FaCreditCard, FaBolt, FaEnvelope, FaExclamationTriangle, FaAmazon } from 'react-icons/fa';
import { SiApplemusic, SiBeatport } from 'react-icons/si';

export const metadata: Metadata = {
  title: 'Signal Acquisition Protocol | No Copyright Gaming Music',
  description: 'Neural interface guide for signal acquisition through authorized network nodes.',
};

const purchaseSteps = [
  {
    title: "Node Selection",
    description: "Initialize preferred marketplace node from available signal sources.",
    details: [
      "Beatport - Maximum fidelity data streams",
      "Neural Apple Link - iOS ecosystem optimization",
      "Amazon Matrix - Prime protocol integration",
      "Additional nodes per signal pattern"
    ],
    icon: <FaShoppingCart className="w-8 h-8" />
  },
  {
    title: "Resource Exchange",
    description: "Execute marketplace node transaction protocols.",
    details: [
      "Neural profile initialization",
      "Signal pattern selection",
      "Resource allocation method",
      "Transaction execution"
    ],
    icon: <FaCreditCard className="w-8 h-8" />
  },
  {
    title: "Data Extraction",
    description: "Access and extract acquired signal patterns.",
    details: [
      "Format protocol selection",
      "Local node transfer",
      "Transaction verification storage",
      "Secure data archival"
    ],
    icon: <FaDownload className="w-8 h-8" />
  },
  {
    title: "Matrix Integration",
    description: "Initialize signal integration with proper attribution protocols.",
    details: [
      "Content matrix fusion",
      "Attribution protocol execution",
      "Verification data storage",
      "Usage protocol compliance"
    ],
    icon: <FaGamepad className="w-8 h-8" />
  }
];

const platforms = [
  {
    name: "Beatport",
    icon: <SiBeatport className="w-8 h-8" />,
    features: [
      "Maximum fidelity data streams",
      "Professional signal matrix",
      "Enhanced metadata protocols",
      "Multi-resource exchange options"
    ],
    recommended: true
  },
  {
    name: "Neural Apple Link",
    icon: <SiApplemusic className="w-8 h-8" />,
    features: [
      "iOS ecosystem fusion",
      "Rapid acquisition protocols",
      "Automated sync matrix",
      "Mobile node optimization"
    ],
    recommended: false
  },
  {
    name: "Amazon Matrix",
    icon: <FaAmazon className="w-8 h-8" />,
    features: [
      "Prime protocol benefits",
      "Optimized extraction",
      "Multi-format protocols",
      "Accelerated exchange"
    ],
    recommended: false
  }
];

export default function PurchaseGuidePage() {
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
              Signal Acquisition Protocol
            </span>
          </h1>
          <p className="text-red-200/70 text-center max-w-2xl mx-auto font-light tracking-wider">
            Execute this protocol sequence to acquire and extract signals through authorized network nodes.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        {/* Steps section */}
        <div className="mb-32">
          <h2 className="text-3xl font-mono font-bold text-red-500 tracking-wider mb-16">Acquisition Sequence</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {purchaseSteps.map((step, index) => (
              <div
                key={step.title}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative h-full bg-black border border-red-900/30 p-8">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-red-900/80 border border-red-500/30 flex items-center justify-center text-red-500 font-mono font-bold">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <div className="text-red-500 mb-6">{step.icon}</div>
                  <h3 className="text-xl font-mono font-bold text-red-500 mb-4">{step.title}</h3>
                  <p className="text-red-200/70 mb-6 tracking-wide">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="text-red-200/70 text-sm tracking-wide flex items-center">
                        <span className="text-red-500 mr-2">›</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platforms comparison */}
        <div className="mb-32">
          <h2 className="text-3xl font-mono font-bold text-red-500 tracking-wider mb-16">Network Nodes</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className={`relative h-full bg-black border border-red-900/30 p-8 ${
                  platform.recommended ? 'ring-2 ring-red-500' : ''
                }`}>
                  {platform.recommended && (
                    <div className="text-red-500 text-sm font-mono mb-3">
                      Optimal Node
                    </div>
                  )}
                  <div className="text-red-500 mb-6">{platform.icon}</div>
                  <h3 className="text-xl font-mono font-bold text-red-500 mb-6">{platform.name}</h3>
                  <ul className="space-y-3">
                    {platform.features.map((feature, i) => (
                      <li key={i} className="text-red-200/70 text-sm tracking-wide flex items-center">
                        <span className="text-red-500 mr-2">›</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips section */}
        <div className="relative mb-32">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-12">
            <h2 className="text-3xl font-mono font-bold text-red-500 tracking-wider mb-12">Protocol Optimization</h2>
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FaExclamationTriangle className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-mono font-bold text-red-500">Pre-Acquisition</h3>
                </div>
                <ul className="space-y-3">
                  <li className="text-red-200/70 text-sm tracking-wide flex items-center">
                    <FaBolt className="w-4 h-4 text-red-500 mr-3" />
                    Verify format protocol requirements
                  </li>
                  <li className="text-red-200/70 text-sm tracking-wide flex items-center">
                    <FaBolt className="w-4 h-4 text-red-500 mr-3" />
                    Review neural license matrix
                  </li>
                  <li className="text-red-200/70 text-sm tracking-wide flex items-center">
                    <FaBolt className="w-4 h-4 text-red-500 mr-3" />
                    Confirm node compatibility
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FaExclamationTriangle className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-mono font-bold text-red-500">Post-Acquisition</h3>
                </div>
                <ul className="space-y-3">
                  <li className="text-red-200/70 text-sm tracking-wide flex items-center">
                    <FaBolt className="w-4 h-4 text-red-500 mr-3" />
                    Archive transaction verification
                  </li>
                  <li className="text-red-200/70 text-sm tracking-wide flex items-center">
                    <FaBolt className="w-4 h-4 text-red-500 mr-3" />
                    Execute data redundancy protocols
                  </li>
                  <li className="text-red-200/70 text-sm tracking-wide flex items-center">
                    <FaBolt className="w-4 h-4 text-red-500 mr-3" />
                    Verify signal integrity pre-integration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Help section */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-12 text-center">
            <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-6">
              Acquisition Support Required?
            </h2>
            <p className="text-red-200/70 mb-12 font-light tracking-wide max-w-2xl mx-auto">
              Our neural support network stands ready to assist with acquisition protocol anomalies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/help/purchase-issues"
                className="group relative inline-flex"
              >
                <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative flex items-center gap-2 px-6 py-3 bg-black border border-red-500/30">
                  <FaExclamationTriangle className="w-5 h-5 text-red-500" />
                  <span className="font-mono text-red-500">Known Anomalies</span>
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