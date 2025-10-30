import { Metadata } from 'next';
import Link from 'next/link';
import { FaChevronLeft, FaYoutube, FaTwitch, FaHashtag, FaCode, FaExclamationTriangle, FaShieldAlt, FaEnvelope, FaCheck, FaTimes } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Neural Attribution Matrix | No Copyright Gaming Music',
  description: 'Neural protocol guide for signal source attribution across digital matrices.',
};

const platforms = [
  {
    name: "YouTube Matrix",
    icon: <FaYoutube className="w-8 h-8" />,
    format: "Signal: [Pattern ID] by Neural Core NCGM (njkmusic.com) - Acquired via [Node]",
    location: "Signal description matrix",
    example: {
      title: "Neural Gaming Sequence",
      description: "Signal: Neon Protocol by Neural Core NCGM (njkmusic.com) - Acquired via Beatport Node",
      tips: [
        "Initialize at matrix entry point",
        "Enable neural link to core domain",
        "Include all pattern identifiers"
      ]
    }
  },
  {
    name: "Twitch Neural Grid",
    icon: <FaTwitch className="w-8 h-8" />,
    format: "!signal protocol or neural panel with: Signals from Neural Core NCGM (njkmusic.com)",
    location: "Stream neural panels or command matrix",
    example: {
      title: "Live Neural Stream",
      description: "!signal → Active Pattern: Cyber Protocol by Neural Core NCGM - Licensed via njkmusic.com",
      tips: [
        "Configure automated !signal protocol",
        "Initialize dedicated signal panel",
        "Maintain real-time pattern updates"
      ]
    }
  },
  {
    name: "Social Neural Network",
    icon: <FaHashtag className="w-8 h-8" />,
    format: "⚡: [Pattern ID] - Neural Core NCGM",
    location: "Neural feed or response matrix",
    example: {
      title: "Neural Grid Transmission",
      description: "⚡: Midnight Protocol - Neural Core NCGM\nLicensed via njkmusic.com",
      tips: [
        "Utilize neural marker for visibility",
        "Maintain protocol consistency",
        "Link to official neural nodes"
      ]
    }
  }
];

const commonMistakes = [
  {
    mistake: "Node Source Missing",
    correct: "Include acquisition node identifier",
    wrong: "Signal: Neural Pattern by Core NCGM",
    right: "Signal: Neural Pattern by Core NCGM - Acquired via Beatport Node"
  },
  {
    mistake: "Invalid Neural Link",
    correct: "Use authorized domain: njkmusic.com",
    wrong: "Signal from ncgm.com",
    right: "Signal from njkmusic.com"
  },
  {
    mistake: "Incomplete Neural Tag",
    correct: "Include all required neural markers",
    wrong: "Signal by NCGM",
    right: "Signal: [Pattern ID] by Neural Core NCGM (njkmusic.com) - Acquired via [Node]"
  }
];

export default function AttributionPage() {
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
              Neural Attribution Matrix
            </span>
          </h1>
          <p className="text-red-200/70 text-center max-w-2xl mx-auto font-light tracking-wider">
            Protocol guide for proper signal source attribution across digital matrices.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        {/* Quick reference */}
        <div className="relative mb-32">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-8">
            <div className="flex items-center gap-4 mb-6">
              <FaCode className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-mono font-bold text-red-500">Core Protocol Reference</h2>
            </div>
            <div className="bg-black/50 p-6 border border-red-500/20">
              <code className="text-sm text-red-200/70 font-mono">
                Signal: [Pattern ID] by Neural Core NCGM (njkmusic.com) - Acquired via [Node]
              </code>
            </div>
          </div>
        </div>

        {/* Platform-specific guides */}
        <div className="space-y-32">
          {platforms.map((platform) => (
            <section key={platform.name}>
              <div className="flex items-center gap-4 mb-16">
                <div className="text-red-500">{platform.icon}</div>
                <h2 className="text-3xl font-mono font-bold text-red-500 tracking-wider">
                  {platform.name}
                </h2>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                  <div className="relative h-full bg-black border border-red-900/30 p-8">
                    <h3 className="text-xl font-mono font-bold text-red-500 mb-6">Protocol & Location</h3>
                    <p className="text-red-200/70 mb-3 tracking-wide">Protocol Format:</p>
                    <div className="bg-black/50 p-4 border border-red-500/20 mb-6">
                      <code className="text-sm text-red-200/70 font-mono">{platform.format}</code>
                    </div>
                    <p className="text-red-200/70 mb-3 tracking-wide">Neural Placement:</p>
                    <p className="text-sm text-red-200/70 font-mono">{platform.location}</p>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                  <div className="relative h-full bg-black border border-red-900/30 p-8">
                    <h3 className="text-xl font-mono font-bold text-red-500 mb-6">Neural Example</h3>
                    <div className="space-y-6">
                      <p className="text-red-200/70 text-sm tracking-wide">Pattern: {platform.example.title}</p>
                      <div className="bg-black/50 p-4 border border-red-500/20">
                        <code className="text-sm text-red-200/70 font-mono">{platform.example.description}</code>
                      </div>
                      <div>
                        <p className="text-red-200/70 mb-3 tracking-wide">Protocol Tips:</p>
                        <ul className="space-y-3">
                          {platform.example.tips.map((tip, index) => (
                            <li key={index} className="text-sm text-red-200/70 tracking-wide flex items-center gap-3">
                              <FaCheck className="w-4 h-4 text-red-500 flex-shrink-0" />
                              <span className="font-mono">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Common mistakes */}
        <div className="mt-32">
          <h2 className="text-3xl font-mono font-bold text-red-500 tracking-wider mb-16">Protocol Anomalies</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {commonMistakes.map((item) => (
              <div key={item.mistake} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative h-full bg-black border border-red-900/30 p-8">
                  <h3 className="text-xl font-mono font-bold text-red-500 mb-4">{item.mistake}</h3>
                  <p className="text-red-200/70 mb-6 text-sm tracking-wide">{item.correct}</p>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <FaTimes className="w-4 h-4 text-red-500" />
                        <p className="text-red-500 text-xs font-mono">Invalid Protocol:</p>
                      </div>
                      <p className="text-red-200/70 text-sm tracking-wide font-mono">{item.wrong}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <FaCheck className="w-4 h-4 text-red-500" />
                        <p className="text-red-500 text-xs font-mono">Valid Protocol:</p>
                      </div>
                      <p className="text-red-200/70 text-sm tracking-wide font-mono">{item.right}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warning notice */}
        <div className="relative mt-32">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-12 text-center">
            <div className="flex justify-center mb-6">
              <FaExclamationTriangle className="w-12 h-12 text-red-500" />
            </div>
            <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-6">
              Critical Protocol Notice
            </h2>
            <p className="text-red-200/70 mb-12 tracking-wide max-w-2xl mx-auto">
              Neural attribution protocols are required to maintain signal usage license.
              Protocol violations may trigger automated copyright protection systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/license"
                className="group relative inline-flex"
              >
                <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative flex items-center gap-2 px-6 py-3 bg-black border border-red-500/30">
                  <FaShieldAlt className="w-5 h-5 text-red-500" />
                  <span className="font-mono text-red-500">Review License Matrix</span>
                </div>
              </Link>
              <a
                href="mailto:support@njkmusic.com"
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