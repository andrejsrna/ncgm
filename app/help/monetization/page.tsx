import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Monetization Guide | No Copyright Gaming Music',
  description: 'Learn how to monetize content using No Copyright Gaming Music across different platforms.',
};

const platforms = [
  {
    name: "YouTube",
    icon: "📺",
    status: "Full Monetization",
    features: [
      "AdSense revenue",
      "Channel memberships",
      "Super Chat",
      "Merchandise shelf",
      "YouTube Premium revenue"
    ],
    requirements: [
      "Valid music purchase",
      "Proper attribution",
      "Monetization eligibility",
      "No third-party claims"
    ],
    tips: [
      "Keep purchase receipts accessible",
      "Update video descriptions promptly",
      "Monitor Content ID claims",
      "Follow YouTube guidelines"
    ]
  },
  {
    name: "Twitch",
    icon: "🎮",
    status: "Full Monetization",
    features: [
      "Bits revenue",
      "Subscriptions",
      "Ads revenue",
      "Channel points",
      "Donations"
    ],
    requirements: [
      "Affiliate/Partner status",
      "Music attribution",
      "Purchase verification",
      "VOD compliance"
    ],
    tips: [
      "Set up !song command",
      "Display music credits",
      "Keep stream info updated",
      "Archive purchase proofs"
    ]
  },
  {
    name: "Facebook Gaming",
    icon: "👾",
    status: "Supported",
    features: [
      "Stars revenue",
      "Subscription revenue",
      "In-stream ads",
      "Supporter badges"
    ],
    requirements: [
      "Level Up eligibility",
      "Music credits in stream",
      "Valid licensing proof",
      "Platform compliance"
    ],
    tips: [
      "Add music info to stream",
      "Keep documentation ready",
      "Follow platform rules",
      "Regular info updates"
    ]
  }
];

const bestPractices = [
  {
    title: "Documentation",
    description: "Keep all purchase receipts and licensing information organized and easily accessible",
    icon: "📄",
    steps: [
      "Save purchase confirmations",
      "Store platform-specific documentation",
      "Maintain attribution records",
      "Archive licensing emails"
    ]
  },
  {
    title: "Attribution",
    description: "Ensure proper music credits are visible and up-to-date across all content",
    icon: "✍️",
    steps: [
      "Follow attribution guidelines",
      "Update all video descriptions",
      "Include stream information",
      "Maintain consistent format"
    ]
  },
  {
    title: "Compliance",
    description: "Stay compliant with platform-specific monetization requirements",
    icon: "✅",
    steps: [
      "Review platform guidelines",
      "Monitor policy changes",
      "Update content as needed",
      "Address issues promptly"
    ]
  }
];

export default function MonetizationPage() {
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
            Monetization Guide
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Learn how to properly monetize your content while using our music across different platforms.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Platform Guides */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Platform-Specific Guidelines</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-gray-800/30 rounded-xl p-6 hover:bg-gray-800/40 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{platform.icon}</span>
                  <div>
                    <h3 className="text-xl font-medium text-white">{platform.name}</h3>
                    <span className="text-green-400 text-sm">{platform.status}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-medium mb-2">Monetization Features</h4>
                    <ul className="space-y-1">
                      {platform.features.map((feature, index) => (
                        <li key={index} className="text-gray-400 text-sm flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-2">Requirements</h4>
                    <ul className="space-y-1">
                      {platform.requirements.map((req, index) => (
                        <li key={index} className="text-gray-400 text-sm flex items-center">
                          <span className="text-blue-400 mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-2">Pro Tips</h4>
                    <ul className="space-y-1">
                      {platform.tips.map((tip, index) => (
                        <li key={index} className="text-gray-400 text-sm flex items-center">
                          <span className="text-yellow-400 mr-2">⚡</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Best Practices</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {bestPractices.map((practice) => (
              <div
                key={practice.title}
                className="bg-gray-800/30 rounded-xl p-6"
              >
                <div className="text-3xl mb-4">{practice.icon}</div>
                <h3 className="text-xl font-medium text-white mb-2">{practice.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{practice.description}</p>
                <ul className="space-y-2">
                  {practice.steps.map((step, index) => (
                    <li key={index} className="text-gray-400 text-sm flex items-center">
                      <span className="text-blue-400 mr-2">{index + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-blue-900/20 rounded-xl p-8 border border-blue-700/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-white mb-4 text-center">
              Important Monetization Notes
            </h2>
            <div className="space-y-4 text-gray-400 text-center">
              <p>
                While our music is cleared for monetization, each platform has its own specific 
                requirements and guidelines. Always ensure you meet the platform&apos;s eligibility 
                criteria before enabling monetization.
              </p>
              <p>
                Keep your licensing documentation and purchase receipts readily available in case 
                of any monetization-related inquiries or issues.
              </p>
            </div>
          </div>
        </div>

        {/* Help section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Need Help With Monetization?
          </h2>
          <p className="text-gray-400 mb-8">
            Our support team can help you understand monetization requirements and resolve any issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/help/content-id"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Content ID Guide
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