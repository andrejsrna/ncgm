import { Metadata } from 'next';
import { FaCheck, FaExclamationTriangle, FaTimes, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Neural License Matrix | No Copyright Gaming Music',
  description: 'Access protocol terms and conditions for utilizing No Copyright Gaming Music in your digital matrix.',
};

export default function LicensePage() {
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
              Neural License Matrix
            </span>
          </h1>
          <p className="text-red-200/70 text-center max-w-2xl mx-auto font-light tracking-wider">
            Access protocol specifications for neural content integration.
            Optimized for creator-matrix compatibility.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-4xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        {/* License summary */}
        <div className="relative mb-24">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-12">
            <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-12">Protocol Summary</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-800 to-green-600 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative h-full bg-black border border-green-900/30 p-8">
                  <div className="text-green-500 mb-6"><FaCheck className="w-6 h-6" /></div>
                  <h3 className="text-lg font-mono font-bold text-green-500 mb-4">Authorized Protocols</h3>
                  <ul className="space-y-3 text-green-200/70 text-sm tracking-wide">
                    <li>Neural Broadcasts (YouTube)</li>
                    <li>Live Data Streams (Twitch)</li>
                    <li>Social Networks</li>
                    <li>Audio Transmissions</li>
                  </ul>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-800 to-yellow-600 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative h-full bg-black border border-yellow-900/30 p-8">
                  <div className="text-yellow-500 mb-6"><FaExclamationTriangle className="w-6 h-6" /></div>
                  <h3 className="text-lg font-mono font-bold text-yellow-500 mb-4">Attribution Matrix</h3>
                  <ul className="space-y-3 text-yellow-200/70 text-sm tracking-wide">
                    <li>Signal Identifier</li>
                    <li>Neural Network Link</li>
                  </ul>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 to-red-600 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative h-full bg-black border border-red-900/30 p-8">
                  <div className="text-red-500 mb-6"><FaTimes className="w-6 h-6" /></div>
                  <h3 className="text-lg font-mono font-bold text-red-500 mb-4">Restricted Access</h3>
                  <ul className="space-y-3 text-red-200/70 text-sm tracking-wide">
                    <li>Signal Redistribution</li>
                    <li>NFT Generation</li>
                    <li>Commercial Broadcasts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed terms */}
        <div className="space-y-24">
          <section className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-25 blur"></div>
            <div className="relative bg-black border border-red-900/30 p-12">
              <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-8">1. Protocol Authorization</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-red-200/70 tracking-wide">
                  Upon data acquisition from No Copyright Gaming Music (NCGM), 
                  you are granted a global, non-exclusive, zero-cost protocol authorization 
                  for content integration, subject to the parameters outlined in this matrix.
                </p>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-25 blur"></div>
            <div className="relative bg-black border border-red-900/30 p-12">
              <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-8">2. Authorized Protocols</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-red-200/70 tracking-wide mb-6">
                  NCGM signal integration authorized for:
                </p>
                <ul className="text-red-200/70 space-y-3 list-disc pl-6 tracking-wide">
                  <li>Neural Broadcasts (YouTube) - monetization enabled</li>
                  <li>Live Data Streams (Twitch) and archived transmissions</li>
                  <li>Social Network Integration (TikTok, Instagram)</li>
                  <li>Audio Transmission Networks</li>
                  <li>Personal Data Nodes</li>
                  <li>Educational Matrix Content</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-25 blur"></div>
            <div className="relative bg-black border border-red-900/30 p-12">
              <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-8">3. Attribution Matrix</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-red-200/70 tracking-wide mb-6">
                  Signal attribution protocol:
                </p>
                <div className="relative mb-6">
                  <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 blur"></div>
                  <div className="relative bg-black border border-red-500/30 p-6">
                    <code className="text-sm font-mono text-red-300">
                      Signal: [Track ID] via No Copyright Gaming Music (nocopyrightgamingmusic.com)
                    </code>
                  </div>
                </div>
                <p className="text-red-200/70 tracking-wide">
                  Embed attribution data in transmission metadata, stream information, or 
                  appropriate credit matrix location.
                </p>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-25 blur"></div>
            <div className="relative bg-black border border-red-900/30 p-12">
              <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-8">4. Access Restrictions</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-red-200/70 tracking-wide mb-6">
                  The following protocols are unauthorized:
                </p>
                <ul className="text-red-200/70 space-y-3 list-disc pl-6 tracking-wide">
                  <li>Signal redistribution as standalone data packets</li>
                  <li>NFT protocol generation from signal data</li>
                  <li>Commercial broadcast integration without explicit authorization</li>
                  <li>Signal ownership claims</li>
                  <li>Metadata/watermark manipulation</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* CTA section */}
        <div className="mt-32 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-6">
                Protocol Clarification Required?
              </h2>
              <p className="text-red-200/70 mb-12 font-light tracking-wide">
                Our neural support network stands ready to assist with license matrix interpretation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/faq"
                  className="group relative inline-flex"
                >
                  <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                  <div className="relative flex items-center gap-2 px-6 py-3 bg-black border border-red-500/30">
                    <FaQuestionCircle className="w-5 h-5 text-red-500" />
                    <span className="font-mono text-red-500">Access FAQ Matrix</span>
                  </div>
                </a>
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