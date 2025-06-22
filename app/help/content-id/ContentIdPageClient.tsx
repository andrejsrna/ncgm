"use client";

import Link from 'next/link';
import CopyButton from '@/app/components/CopyButton';
import { FaChevronLeft, FaShieldAlt, FaExclamationTriangle, FaFileContract, FaSync, FaClipboard, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import { RiShieldKeyholeFill, RiFileWarningFill, RiFileShieldFill } from 'react-icons/ri';

const claimTypes = [
  {
    type: "Neural Pattern Mismatch",
    description: "System anomaly: incorrect pattern flagging in your signal matrix",
    icon: <RiShieldKeyholeFill className="w-8 h-8" />,
    steps: [
      "Verify acquisition through authorized nodes",
      "Validate neural attribution protocols",
      "Execute dispute protocol template",
      "Submit appeal with acquisition verification"
    ],
    urgency: "high"
  },
  {
    type: "External Node Interference",
    description: "Unauthorized entity claiming neural pattern rights",
    icon: <RiFileWarningFill className="w-8 h-8" />,
    steps: [
      "Log interference parameters",
      "Initialize support protocol immediately",
      "Transmit signal URL and interference data",
      "Await neural core resolution"
    ],
    urgency: "high"
  },
  {
    type: "Attribution Protocol Error",
    description: "Claims due to neural tag malfunction or absence",
    icon: <RiFileShieldFill className="w-8 h-8" />,
    steps: [
      "Reinitialize attribution protocols",
      "Update signal description matrix",
      "Request interference scan",
      "Verify protocol synchronization"
    ],
    urgency: "medium"
  }
];

const preventionTips = [
  {
    title: "Neural Attribution Protocol",
    description: "Maintain complete attribution markers in signal description matrix",
    icon: <FaFileContract className="w-8 h-8" />
  },
  {
    title: "Acquisition Verification",
    description: "Archive neural transaction logs and download confirmations",
    icon: <FaShieldAlt className="w-8 h-8" />
  },
  {
    title: "Node Guidelines",
    description: "Adhere to node-specific signal usage protocols",
    icon: <FaClipboard className="w-8 h-8" />
  },
  {
    title: "Matrix Synchronization",
    description: "Maintain real-time signal matrix accuracy",
    icon: <FaSync className="w-8 h-8" />
  }
];

const disputeTemplate = `
Subject: Neural Pattern Dispute - Licensed Signal Matrix

Neural pattern properly acquired through NCGM Core (nocopyrightgamingmusic.com).

Acquisition Parameters:
- Signal Source Node: [Node ID]
- Acquisition Timestamp: [Timestamp]
- Neural Transaction Hash: [Hash]

Signal properly tagged in matrix description according to neural protocols. All required attribution markers maintained with acquisition verification.

Request immediate interference scan and claim release.
`.trim();

export default function ContentIdPageClient() {
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
              Neural Pattern Protection Matrix
            </span>
          </h1>
          <p className="text-red-200/70 text-center max-w-2xl mx-auto font-light tracking-wider">
            Protocol guide for handling neural pattern protection claims and securing your signal matrix.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        {/* Prevention Tips */}
        <div className="mb-32">
          <h2 className="text-3xl font-mono font-bold text-red-500 tracking-wider mb-16">Preemptive Protection Protocols</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {preventionTips.map((tip) => (
              <div
                key={tip.title}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative h-full bg-black border border-red-900/30 p-8">
                  <div className="text-red-500 mb-6">{tip.icon}</div>
                  <h3 className="text-xl font-mono font-bold text-red-500 mb-4">{tip.title}</h3>
                  <p className="text-red-200/70 text-sm tracking-wide">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Claim Types */}
        <div className="mb-32">
          <h2 className="text-3xl font-mono font-bold text-red-500 tracking-wider mb-16">Interference Types & Resolution Matrix</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {claimTypes.map((claim) => (
              <div
                key={claim.type}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className={`relative h-full bg-black border border-red-900/30 p-8 ${
                  claim.urgency === 'high' ? 'ring-2 ring-red-500' : ''
                }`}>
                  {claim.urgency === 'high' && (
                    <div className="text-red-500 text-sm font-mono mb-3 flex items-center gap-2">
                      <FaExclamationTriangle className="w-4 h-4" />
                      Critical Priority
                    </div>
                  )}
                  <div className="text-red-500 mb-6">{claim.icon}</div>
                  <h3 className="text-xl font-mono font-bold text-red-500 mb-4">{claim.type}</h3>
                  <p className="text-red-200/70 text-sm mb-6 tracking-wide">{claim.description}</p>
                  <div className="space-y-3">
                    {claim.steps.map((step, index) => (
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
        </div>

        {/* Dispute Template */}
        <div className="relative mb-32">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-8">
            <div className="flex items-center gap-4 mb-8">
              <FaClipboard className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-mono font-bold text-red-500">Dispute Protocol Template</h2>
            </div>
            <p className="text-red-200/70 mb-6 tracking-wide">
              Execute this template when initiating a neural pattern dispute:
            </p>
            <div className="bg-black/50 p-6 border border-red-500/20 mb-4">
              <pre className="text-sm text-red-200/70 whitespace-pre-wrap font-mono">
                {disputeTemplate}
              </pre>
            </div>
            <CopyButton template={disputeTemplate} />
          </div>
        </div>

        {/* Important Notice */}
        <div className="relative mb-32">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-8">
            <div className="flex items-start gap-6 max-w-3xl mx-auto">
              <FaExclamationTriangle className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-mono font-bold text-red-500 mb-6">Critical Protocol Notice</h2>
                <div className="space-y-4 text-red-200/70 tracking-wide">
                  <p>
                    Never initiate dispute protocols without proper acquisition verification and neural attribution markers.
                    False dispute attempts may trigger permanent neural protection strikes against your node.
                  </p>
                  <p>
                    If interference patterns are unclear, establish support link first. Our neural core stands ready to
                    protect your signal matrix and resolve interference properly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Help section */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-12 text-center">
            <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-6">
              Neural Support Required?
            </h2>
            <p className="text-red-200/70 mb-12 font-light tracking-wide max-w-2xl mx-auto">
              Our neural support matrix stands ready to assist with interference resolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/help/platforms"
                className="group relative inline-flex"
              >
                <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative flex items-center gap-2 px-6 py-3 bg-black border border-red-500/30">
                  <FaExternalLinkAlt className="w-5 h-5 text-red-500" />
                  <span className="font-mono text-red-500">Node Protocols</span>
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