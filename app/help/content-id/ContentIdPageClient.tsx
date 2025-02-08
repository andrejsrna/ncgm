"use client";

import Link from 'next/link';
import CopyButton from '@/app/components/CopyButton';

const claimTypes = [
  {
    type: "False Content ID Match",
    description: "When YouTube's system incorrectly flags our music in your content",
    steps: [
      "Verify your purchase through official stores",
      "Check that attribution is correct",
      "Use our dispute template",
      "Submit appeal with proof of purchase"
    ],
    urgency: "high"
  },
  {
    type: "Third-Party Claim",
    description: "When another entity claims rights to our music",
    steps: [
      "Document the claim details",
      "Contact our support immediately",
      "Provide video URL and claim info",
      "Wait for our team to resolve"
    ],
    urgency: "high"
  },
  {
    type: "Attribution Issue",
    description: "Claims due to missing or incorrect attribution",
    steps: [
      "Add correct attribution",
      "Update video description",
      "Request claim review",
      "Verify changes are live"
    ],
    urgency: "medium"
  }
];

const preventionTips = [
  {
    title: "Proper Attribution",
    description: "Always include complete and correct attribution in your video description",
    icon: "✍️"
  },
  {
    title: "Purchase Verification",
    description: "Keep your purchase receipts and download confirmations",
    icon: "🧾"
  },
  {
    title: "Platform Guidelines",
    description: "Follow platform-specific music usage guidelines",
    icon: "📋"
  },
  {
    title: "Regular Updates",
    description: "Keep your content information current and accurate",
    icon: "🔄"
  }
];

const disputeTemplate = `
Title: Content ID Dispute - Licensed Music

I have properly licensed this music through No Copyright Gaming Music (nocopyrightgamingmusic.com).

Purchase Details:
- Track purchased from: [Store Name]
- Purchase Date: [Date]
- Order/Transaction ID: [ID]

The music is properly attributed in my video description according to the license terms. I have included all required attribution and maintain proof of purchase.

Please review and release this claim.
`.trim();

export default function ContentIdPageClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero section */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <Link
              href="/help"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              ← Back to Help Center
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Content ID Guide
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Learn how to handle and prevent Content ID claims when using our music.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Prevention Tips */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Prevent Claims Before They Happen</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {preventionTips.map((tip) => (
              <div
                key={tip.title}
                className="bg-gray-800/30 rounded-xl p-6 hover:bg-gray-800/40 transition-colors"
              >
                <div className="text-3xl mb-4">{tip.icon}</div>
                <h3 className="text-lg font-medium text-white mb-2">{tip.title}</h3>
                <p className="text-gray-400 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Claim Types */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Types of Claims & Solutions</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {claimTypes.map((claim) => (
              <div
                key={claim.type}
                className={`bg-gray-800/30 rounded-xl p-6 ${
                  claim.urgency === 'high' ? 'border border-red-500/30' : ''
                }`}
              >
                {claim.urgency === 'high' && (
                  <div className="text-red-400 text-sm font-medium mb-2">
                    High Priority
                  </div>
                )}
                <h3 className="text-xl font-medium text-white mb-3">{claim.type}</h3>
                <p className="text-gray-400 text-sm mb-4">{claim.description}</p>
                <div className="space-y-2">
                  {claim.steps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-blue-400 mr-2">{index + 1}.</span>
                      <p className="text-gray-400 text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dispute Template */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Dispute Template</h2>
          <div className="bg-gray-800/30 rounded-xl p-6">
            <p className="text-gray-400 mb-4">
              Use this template when submitting a Content ID claim dispute:
            </p>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
                {disputeTemplate}
              </pre>
            </div>
            <CopyButton template={disputeTemplate} />
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-900/20 rounded-xl p-8 border border-yellow-700/30">
          <div className="flex items-start max-w-3xl mx-auto">
            <div className="text-2xl mr-4">⚠️</div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Important Notice</h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Never dispute a claim without proper proof of purchase and correct attribution. 
                  False disputes can lead to copyright strikes against your channel.
                </p>
                <p>
                  If you&apos;re unsure about a claim, contact our support team first. We&apos;re here to help 
                  protect your content and resolve claims properly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Help section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Need Help With a Claim?
          </h2>
          <p className="text-gray-400 mb-8">
            Our support team is ready to assist you with Content ID claims and disputes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/help/platforms"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Platform Guidelines
            </Link>
            <a
              href="mailto:support@nocopyrightgamingmusic.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 