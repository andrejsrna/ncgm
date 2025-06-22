import { Metadata } from 'next';
import { FaQuestionCircle, FaEnvelope, FaChevronRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Neural FAQ Matrix | No Copyright Gaming Music',
  description: 'Access the knowledge matrix for No Copyright Gaming Music protocol inquiries.',
};

const faqs = [
  {
    category: "System Core",
    questions: [
      {
        q: "What is the NCGM Protocol?",
        a: "No Copyright Gaming Music operates as a neural hub for gaming-optimized audio signals. Our matrix curates and indexes combat-ready soundtracks through verified digital marketplaces, enabling content architects to acquire and integrate authorized audio patterns."
      },
      {
        q: "Neural Interface Protocol?",
        a: "We establish neural links to authorized digital marketplaces like Beatport, iTunes, and other data streams. Upon signal acquisition, integrate the audio patterns following our attribution matrix protocols."
      },
      {
        q: "Signal Acquisition Requirements?",
        a: "Affirmative. Signal patterns require acquisition through authorized marketplace nodes (Beatport, iTunes, etc.). This ensures proper resource allocation to signal architects while maintaining optimal data integrity and legal compliance matrices."
      }
    ]
  },
  {
    category: "Access Protocols",
    questions: [
      {
        q: "Monetization Matrix Compatibility?",
        a: "Affirmative. Post-signal acquisition through our network nodes, integration is authorized for monetized neural broadcasts (YouTube), data streams (Twitch), and other content matrices."
      },
      {
        q: "Multi-node Integration Capacity?",
        a: "Affirmative. Post-acquisition, signal patterns can be integrated across unlimited nodes, provided proper attribution protocols are maintained."
      },
      {
        q: "Access Restrictions?",
        a: "Affirmative. Signal redistribution, NFT protocol generation, and unauthorized ownership claims are prohibited. Acquisition grants content integration authorization only. Access full protocol specifications in the Neural License Matrix."
      }
    ]
  },
  {
    category: "Data Acquisition",
    questions: [
      {
        q: "Signal Acquisition Protocols?",
        a: "Each signal pattern in our matrix includes direct acquisition links to various digital marketplaces. Initialize the acquisition sequence through your preferred marketplace node."
      },
      {
        q: "Data Format Specifications?",
        a: "Format specifications vary by acquisition node. Beatport provides high-fidelity WAV and MP3 data streams. Other nodes may offer different format protocols."
      },
      {
        q: "Signal Storage Architecture?",
        a: "Negative. Our systems do not maintain signal storage protocols. We operate as a neural hub, providing curated indices and marketplace node links for direct signal acquisition."
      }
    ]
  },
  {
    category: "Neural Rights Matrix",
    questions: [
      {
        q: "Signal Authentication Protocols?",
        a: "Negative. Acquired signals through authorized nodes with proper attribution protocols are cleared for content matrix integration. Maintain proper attribution to prevent system conflicts."
      },
      {
        q: "Attribution Protocol Specifications?",
        a: "Embed the following in your transmission metadata: 'Signal: [Pattern ID] via No Copyright Gaming Music (nocopyrightgamingmusic.com) - Acquired via [Node ID]'"
      },
      {
        q: "Authentication Conflict Resolution?",
        a: "Maintain acquisition verification data and establish contact with our support matrix. Provide transmission details and acquisition proof for conflict resolution protocols."
      }
    ]
  }
];

export default function FaqPage() {
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
              Neural FAQ Matrix
            </span>
          </h1>
          <p className="text-red-200/70 text-center max-w-2xl mx-auto font-light tracking-wider">
            Access the knowledge base for protocol inquiries and system specifications.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-4xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        {/* Quick links */}
        <div className="relative mb-24">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-12">
            <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-8">Access Nodes</h2>
            <div className="flex flex-wrap gap-6">
              {faqs.map((category) => (
                <a
                  key={category.category}
                  href={`#${category.category.toLowerCase()}`}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                  <div className="relative flex items-center gap-2 px-6 py-3 bg-black border border-red-500/30">
                    <FaChevronRight className="w-4 h-4 text-red-500" />
                    <span className="font-mono text-red-500">{category.category}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ sections */}
        <div className="space-y-24">
          {faqs.map((category) => (
            <section
              key={category.category}
              id={category.category.toLowerCase()}
              className="scroll-mt-20"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-25 blur"></div>
                <div className="relative bg-black border border-red-900/30 p-12">
                  <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-12">
                    {category.category} Protocols
                  </h2>
                  <div className="space-y-8">
                    {category.questions.map((faq, index) => (
                      <div
                        key={index}
                        className="group relative"
                      >
                        <div className="absolute -inset-0.5 bg-red-500/20 opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                        <div className="relative bg-black border border-red-900/30 p-8">
                          <h3 className="text-lg font-mono font-bold text-red-500 mb-4">
                            {faq.q}
                          </h3>
                          <p className="text-red-200/70 tracking-wide font-light">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Contact section */}
        <div className="mt-32 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-6">
                Additional Protocol Inquiries?
              </h2>
              <p className="text-red-200/70 mb-12 font-light tracking-wide">
                Unable to locate required data? Our neural support network awaits your signal.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="group relative inline-flex"
                >
                  <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                  <div className="relative flex items-center gap-2 px-6 py-3 bg-black border border-red-500/30">
                    <FaQuestionCircle className="w-5 h-5 text-red-500" />
                    <span className="font-mono text-red-500">Access Support Matrix</span>
                  </div>
                </a>
                <a
                  href="mailto:support@nocopyrightgamingmusic.com"
                  className="group relative inline-flex"
                >
                  <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                  <div className="relative flex items-center gap-2 px-6 py-3 bg-black border border-red-500/30">
                    <FaEnvelope className="w-5 h-5 text-red-500" />
                    <span className="font-mono text-red-500">Neural Link</span>
                  </div>
                </a>
              </div>
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