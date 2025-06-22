'use client';

import Link from 'next/link';
import { FaCheck, FaCircle, FaUserShield, FaDatabase, FaKey } from 'react-icons/fa';
import { RiShieldKeyholeFill, RiLockPasswordFill, RiFingerprint2Fill } from 'react-icons/ri';
import { MdSecurity, MdPrivacyTip } from 'react-icons/md';

export default function PrivacyPage() {
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
              Neural Data Protection Protocol
            </span>
          </h1>
          <p className="text-red-200/70 text-center max-w-2xl mx-auto font-light tracking-wider">
            Our advanced neural protocols ensure maximum security for your digital identity matrix.
            Discover how we encrypt, process, and safeguard your neural patterns.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-4xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        {/* Last updated notice */}
        <div className="text-sm text-red-300/50 mb-12 font-mono">
          Neural Protocol Version: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>

        {/* Quick navigation */}
        <div className="group relative mb-12">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75"></div>
          <div className="relative bg-black border border-red-900/30 p-8">
            <h2 className="text-xl font-mono font-bold text-red-500 mb-6">Neural Protocol Index</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="#information-collection" className="group flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
                <FaCircle className="w-1.5 h-1.5" />
                <span className="font-mono">01. Neural Data Collection</span>
              </Link>
              <Link href="#information-usage" className="group flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
                <FaCircle className="w-1.5 h-1.5" />
                <span className="font-mono">02. Neural Processing Matrix</span>
              </Link>
              <Link href="#information-sharing" className="group flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
                <FaCircle className="w-1.5 h-1.5" />
                <span className="font-mono">03. Data Distribution Grid</span>
              </Link>
              <Link href="#data-security" className="group flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
                <FaCircle className="w-1.5 h-1.5" />
                <span className="font-mono">04. Security Protocols</span>
              </Link>
              <Link href="#your-rights" className="group flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
                <FaCircle className="w-1.5 h-1.5" />
                <span className="font-mono">05. User Access Rights</span>
              </Link>
              <Link href="#contact-us" className="group flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
                <FaCircle className="w-1.5 h-1.5" />
                <span className="font-mono">06. Neural Support Link</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Privacy content sections */}
        <div className="space-y-32">
          <section id="information-collection" className="relative">
            <div className="flex items-center gap-4 mb-8">
              <FaDatabase className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider">01. Neural Data Collection</h2>
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="text-red-200/70 mb-6 tracking-wide">
                Our neural matrix collects the following identity patterns:
              </p>
              <ul className="text-red-200/70 space-y-3">
                <li className="flex items-center gap-3">
                  <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                  <span>Neural signature (name) and quantum address (email)</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                  <span>Neural profile configuration and preferences</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                  <span>Usage patterns and neural interface interactions</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                  <span>Technical neural signatures (IP matrix, browser configuration)</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="information-usage" className="relative">
            <div className="flex items-center gap-4 mb-8">
              <RiFingerprint2Fill className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider">02. Neural Processing Matrix</h2>
            </div>
            <div className="prose prose-invert max-w-none">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                  <div className="relative h-full bg-black border border-red-900/30 p-6">
                    <h3 className="text-lg font-mono font-bold text-red-500 mb-3">Service Matrix</h3>
                    <p className="text-sm text-red-200/70 tracking-wide">
                      Neural pattern maintenance, transaction processing, and notification distribution
                    </p>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                  <div className="relative h-full bg-black border border-red-900/30 p-6">
                    <h3 className="text-lg font-mono font-bold text-red-500 mb-3">Neural Link</h3>
                    <p className="text-sm text-red-200/70 tracking-wide">
                      Updates, support protocols, and promotional signal transmission
                    </p>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                  <div className="relative h-full bg-black border border-red-900/30 p-6">
                    <h3 className="text-lg font-mono font-bold text-red-500 mb-3">Enhancement Protocol</h3>
                    <p className="text-sm text-red-200/70 tracking-wide">
                      Service optimization, feature development, and neural interface enhancement
                    </p>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                  <div className="relative h-full bg-black border border-red-900/30 p-6">
                    <h3 className="text-lg font-mono font-bold text-red-500 mb-3">Security Matrix</h3>
                    <p className="text-sm text-red-200/70 tracking-wide">
                      Anomaly detection, threat prevention, and security protocol enforcement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="information-sharing" className="relative">
            <div className="flex items-center gap-4 mb-8">
              <FaUserShield className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider">03. Data Distribution Grid</h2>
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="text-red-200/70 mb-6 tracking-wide">
                Your neural patterns remain encrypted. Limited distribution to:
              </p>
              <ul className="text-red-200/70 space-y-3">
                <li className="flex items-center gap-3">
                  <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                  <span>Authorized service matrix operators</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                  <span>Neural enforcement protocols when required</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                  <span>Third-party nodes with explicit authorization</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="data-security" className="relative">
            <div className="flex items-center gap-4 mb-8">
              <RiLockPasswordFill className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider">04. Security Protocols</h2>
            </div>
            <div className="prose prose-invert max-w-none">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
                <div className="relative bg-black border border-red-900/30 p-8">
                  <h3 className="text-xl font-mono font-bold text-red-500 mb-6">Neural Security Matrix</h3>
                  <ul className="text-red-200/70 space-y-3">
                    <li className="flex items-center gap-3">
                      <FaCheck className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span>Quantum encryption protocols</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span>Regular security grid scans</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span>Neural data vault protocols</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span>Access matrix control system</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="your-rights" className="relative">
            <div className="flex items-center gap-4 mb-8">
              <FaKey className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider">05. User Access Rights</h2>
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="text-red-200/70 mb-6 tracking-wide">
                Your neural access protocols include:
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                  <div className="relative bg-black border border-red-900/30 p-6">
                    <div className="flex items-center gap-3">
                      <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                      <p className="text-red-200/70 tracking-wide">Neural data access</p>
                    </div>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                  <div className="relative bg-black border border-red-900/30 p-6">
                    <div className="flex items-center gap-3">
                      <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                      <p className="text-red-200/70 tracking-wide">Pattern correction</p>
                    </div>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                  <div className="relative bg-black border border-red-900/30 p-6">
                    <div className="flex items-center gap-3">
                      <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                      <p className="text-red-200/70 tracking-wide">Data purge request</p>
                    </div>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                  <div className="relative bg-black border border-red-900/30 p-6">
                    <div className="flex items-center gap-3">
                      <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                      <p className="text-red-200/70 tracking-wide">Processing override</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact-us" className="relative">
            <div className="flex items-center gap-4 mb-8">
              <MdSecurity className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider">06. Neural Support Link</h2>
            </div>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
              <div className="relative bg-black border border-red-900/30 p-8">
                <p className="text-red-200/70 mb-6 tracking-wide">
                  For neural protocol inquiries, establish contact through:
                </p>
                <div className="space-y-4">
                  <p className="text-red-200/70 tracking-wide flex items-center gap-2">
                    <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                    Neural Link: <a href="mailto:privacy@nocopyrightgamingmusic.com" className="text-red-400 hover:text-red-300 transition-colors">
                      privacy@nocopyrightgamingmusic.com
                    </a>
                  </p>
                  <p className="text-red-200/70 tracking-wide flex items-center gap-2">
                    <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                    Neural Hub: Enhold s.r.o., Drobného 1900/2 841 02 Bratislava - mestská časť Dúbravka
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Neural Cookie Protocol */}
        <div className="relative mt-32">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-12 text-center">
            <div className="flex justify-center mb-6">
              <RiShieldKeyholeFill className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-6">
              Neural Cookie Protocol
            </h2>
            <p className="text-red-200/70 mb-12 font-light tracking-wide max-w-2xl mx-auto">
              Our neural interface utilizes encrypted cookies to enhance your digital experience.
              By continuing to interface with our neural grid, you accept our cookie protocols.
            </p>
            <Link
              href="/cookies"
              className="group relative inline-flex"
            >
              <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative flex items-center gap-2 px-6 py-3 bg-black border border-red-500/30">
                <MdPrivacyTip className="w-5 h-5 text-red-500" />
                <span className="font-mono text-red-500">Access Cookie Matrix</span>
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