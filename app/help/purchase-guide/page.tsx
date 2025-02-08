import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Purchase Music | No Copyright Gaming Music',
  description: 'Step-by-step guide on how to purchase music through our partner platforms.',
};

const purchaseSteps = [
  {
    title: "Choose Your Platform",
    description: "Select your preferred music store from the available options on each track.",
    details: [
      "Beatport - Best for high-quality WAV files",
      "iTunes - Convenient for Apple users",
      "Amazon Music - Easy integration with Prime",
      "Other platforms available per track"
    ],
    icon: "🎵"
  },
  {
    title: "Complete Purchase",
    description: "Follow the store's checkout process to buy your selected tracks.",
    details: [
      "Create account if needed",
      "Add track to cart",
      "Select payment method",
      "Complete transaction"
    ],
    icon: "💳"
  },
  {
    title: "Download Music",
    description: "Access and download your purchased tracks from the store.",
    details: [
      "Choose preferred format (if available)",
      "Download to your device",
      "Keep purchase receipt",
      "Store files safely"
    ],
    icon: "⬇️"
  },
  {
    title: "Use in Content",
    description: "Start using the music in your content with proper attribution.",
    details: [
      "Add to your video/stream",
      "Include required attribution",
      "Keep proof of purchase",
      "Follow usage guidelines"
    ],
    icon: "🎮"
  }
];

const platforms = [
  {
    name: "Beatport",
    features: [
      "High-quality WAV files",
      "Professional music platform",
      "Detailed track information",
      "Multiple payment options"
    ],
    recommended: true
  },
  {
    name: "iTunes",
    features: [
      "Easy Apple integration",
      "Quick purchases",
      "Automatic library sync",
      "Mobile-friendly"
    ],
    recommended: false
  },
  {
    name: "Amazon Music",
    features: [
      "Prime member benefits",
      "Easy downloading",
      "Multiple formats",
      "Quick checkout"
    ],
    recommended: false
  }
];

export default function PurchaseGuidePage() {
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
            How to Purchase Music
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Follow this guide to purchase and download music through our partner platforms.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Steps section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Purchase Process</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {purchaseSteps.map((step, index) => (
              <div
                key={step.title}
                className="bg-gray-800/30 rounded-xl p-6 relative"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-medium text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-center">
                      <span className="text-blue-400 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Platforms comparison */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Available Platforms</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className={`bg-gray-800/30 rounded-xl p-6 ${
                  platform.recommended ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {platform.recommended && (
                  <div className="text-blue-400 text-sm font-medium mb-2">
                    Recommended
                  </div>
                )}
                <h3 className="text-xl font-medium text-white mb-4">{platform.name}</h3>
                <ul className="space-y-2">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Tips section */}
        <div className="bg-blue-900/20 rounded-xl p-8 border border-blue-700/30">
          <h2 className="text-2xl font-semibold text-white mb-6">Pro Tips</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-white mb-3">Before Purchase</h3>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm flex items-center">
                  <span className="text-yellow-400 mr-2">⚡</span>
                  Check the format requirements for your content
                </li>
                <li className="text-gray-400 text-sm flex items-center">
                  <span className="text-yellow-400 mr-2">⚡</span>
                  Review the licensing terms
                </li>
                <li className="text-gray-400 text-sm flex items-center">
                  <span className="text-yellow-400 mr-2">⚡</span>
                  Ensure platform compatibility
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-3">After Purchase</h3>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm flex items-center">
                  <span className="text-yellow-400 mr-2">⚡</span>
                  Save your purchase receipt
                </li>
                <li className="text-gray-400 text-sm flex items-center">
                  <span className="text-yellow-400 mr-2">⚡</span>
                  Back up your downloaded files
                </li>
                <li className="text-gray-400 text-sm flex items-center">
                  <span className="text-yellow-400 mr-2">⚡</span>
                  Test the audio before using in content
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Help section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Need Help with Your Purchase?
          </h2>
          <p className="text-gray-400 mb-8">
            Our support team is here to assist you with any questions about the purchase process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/help/purchase-issues"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Common Issues
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