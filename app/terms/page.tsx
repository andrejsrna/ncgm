'use client';

import Link from 'next/link';
import { FaCircle, FaUserLock, FaShieldAlt, FaFileContract, FaUserSlash, FaServer, FaExclamationTriangle } from 'react-icons/fa';
import { RiShieldKeyholeFill, RiFileWarningFill } from 'react-icons/ri';
import { MdGavel } from 'react-icons/md';
import { IoWarning } from 'react-icons/io5';

export default function TermsPage() {
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
              Neural Grid Access Protocol
            </span>
          </h1>
          <p className="text-red-200/70 text-center max-w-2xl mx-auto font-light tracking-wider">
            Review these neural protocols before establishing connection.
            Neural grid access implies protocol acceptance.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-4xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        {/* Protocol Version */}
        <div className="text-sm text-red-300/50 mb-12 font-mono">
          Protocol Version: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>

        {/* Access Agreement */}
        <div className="group relative mb-12">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <RiFileWarningFill className="w-6 h-6 text-red-500" />
              <h2 className="text-xl font-mono font-bold text-red-500">Neural Access Agreement</h2>
            </div>
            <p className="text-red-200/70 tracking-wide">
              By interfacing with No Copyright Gaming Music&apos;s neural grid, you accept binding by these protocols 
              and all applicable digital regulations. Access denial is mandatory upon protocol rejection.
            </p>
          </div>
        </div>

        {/* Terms sections */}
        <div className="space-y-32">
          <section className="relative">
            <div className="flex items-center gap-4 mb-8">
              <FaUserLock className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider">01. Neural Identity Protocols</h2>
            </div>
            <div className="prose prose-invert max-w-none space-y-4">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative bg-black border border-red-900/30 p-8">
                  <h3 className="text-lg font-mono font-bold text-red-500 mb-6">Identity Matrix Requirements</h3>
                  <ul className="text-red-200/70 space-y-3">
                    <li className="flex items-center gap-3">
                      <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                      <span>Neural age verification: minimum 13 cycles required</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                      <span>Accurate neural pattern submission mandatory</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                      <span>Identity matrix security maintenance required</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                      <span>Security breach reporting protocol activation mandatory</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="flex items-center gap-4 mb-8">
              <FaShieldAlt className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider">02. Access Parameters</h2>
            </div>
            <div className="prose prose-invert max-w-none">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                  <div className="relative h-full bg-black border border-red-900/30 p-8">
                    <h3 className="text-lg font-mono font-bold text-red-500 mb-6">Authorized Protocols</h3>
                    <ul className="text-red-200/70 space-y-3">
                      <li className="flex items-center gap-3">
                        <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                        <span>Personal neural synthesis</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                        <span>Gaming matrix integration</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                        <span>Knowledge transfer ops</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                        <span>Non-profit data streams</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                  <div className="relative h-full bg-black border border-red-900/30 p-8">
                    <h3 className="text-lg font-mono font-bold text-red-500 mb-6">Restricted Protocols</h3>
                    <ul className="text-red-200/70 space-y-3">
                      <li className="flex items-center gap-3">
                        <IoWarning className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span>Illegal data streams</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <IoWarning className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span>Neural aggression patterns</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <IoWarning className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span>Unauthorized replication</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <IoWarning className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span>Commercial exploitation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="flex items-center gap-4 mb-8">
              <FaFileContract className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider">03. Neural Pattern Rights</h2>
            </div>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
              <div className="relative bg-black border border-red-900/30 p-8">
                <p className="text-red-200/70 mb-6 tracking-wide">
                  All sonic patterns transmitted through our neural grid are bound by licensing protocols.
                  While access is unrestricted, these protocols must be observed:
                </p>
                <ul className="text-red-200/70 space-y-3">
                  <li className="flex items-center gap-3">
                    <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                    <span>Neural signature attribution required per specifications</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                    <span>Pattern ownership claims prohibited</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                    <span>Raw pattern redistribution restricted</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                    <span>NFT integration protocols denied</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="flex items-center gap-4 mb-8">
              <FaServer className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider">04. Service Matrix Updates</h2>
            </div>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
              <div className="relative bg-black border border-red-900/30 p-8">
                <p className="text-red-200/70 tracking-wide">
                  Neural grid modification or termination rights reserved, with or without prior signal transmission.
                  No liability assumed for matrix alterations, suspensions, or discontinuations.
                </p>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="flex items-center gap-4 mb-8">
              <FaUserSlash className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider">05. Access Termination</h2>
            </div>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
              <div className="relative bg-black border border-red-900/30 p-8">
                <p className="text-red-200/70 mb-6 tracking-wide">
                  Immediate neural access termination protocols may be activated without prior notification for:
                </p>
                <ul className="text-red-200/70 space-y-3">
                  <li className="flex items-center gap-3">
                    <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                    <span>Protocol violation detection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                    <span>Malicious code execution</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                    <span>User hostility patterns</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                    <span>Attribution protocol breach</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="flex items-center gap-4 mb-8">
              <MdGavel className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider">06. Neural Support Vector</h2>
            </div>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
              <div className="relative bg-black border border-red-900/30 p-8">
                <p className="text-red-200/70 mb-6 tracking-wide">
                  For protocol clarification, establish contact through:
                </p>
                <div className="space-y-4">
                  <p className="text-red-200/70 tracking-wide flex items-center gap-3">
                    <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                    Neural Link: <a href="mailto:terms@njkmusic.com" className="text-red-400 hover:text-red-300 transition-colors">
                      terms@njkmusic.com
                    </a>
                  </p>
                  <p className="text-red-200/70 tracking-wide flex items-center gap-3">
                    <FaCircle className="w-1.5 h-1.5 text-red-500 flex-shrink-0" />
                    Neural Hub: Enhold s.r.o., Drobného 1900/2 841 02 Bratislava - mestská časť Dúbravka
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Protocol Updates Notice */}
        <div className="relative mt-32">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-12 text-center">
            <div className="flex justify-center mb-6">
              <FaExclamationTriangle className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-6">
              Protocol Update Matrix
            </h2>
            <p className="text-red-200/70 mb-12 font-light tracking-wide max-w-2xl mx-auto">
              Neural protocols subject to periodic updates. New versions will be transmitted to this node
              with corresponding timestamp modifications.
            </p>
            <Link
              href="/privacy"
              className="group relative inline-flex"
            >
              <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative flex items-center gap-2 px-6 py-3 bg-black border border-red-500/30">
                <RiShieldKeyholeFill className="w-5 h-5 text-red-500" />
                <span className="font-mono text-red-500">Access Data Protection Matrix</span>
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