import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Platform Compatibility | No Copyright Gaming Music',
  description: 'Learn where and how you can use No Copyright Gaming Music across different content platforms.',
};

const supportedPlatforms = [
  {
    name: "YouTube",
    icon: "📺",
    status: "Fully Supported",
    features: [
      "Monetization enabled",
      "Content ID cleared",
      "Background music",
      "Gaming content",
      "Tutorials",
      "Vlogs"
    ],
    requirements: [
      "Proper attribution in description",
      "Valid purchase proof",
      "No redistribution of raw files"
    ]
  },
  {
    name: "Twitch",
    icon: "🎮",
    status: "Fully Supported",
    features: [
      "Live streaming",
      "VODs",
      "Clips",
      "Channel points rewards",
      "Stream starting/ending scenes",
      "Background music"
    ],
    requirements: [
      "Attribution in panels or commands",
      "Purchase verification",
      "Regular song info updates"
    ]
  },
  {
    name: "TikTok",
    icon: "📱",
    status: "Supported with Conditions",
    features: [
      "Short-form videos",
      "Live streams",
      "Gaming clips",
      "Transitions",
      "Background music"
    ],
    requirements: [
      "Attribution in video description",
      "No sound extraction",
      "Original purchase proof"
    ]
  },
  {
    name: "Instagram",
    icon: "📸",
    status: "Supported",
    features: [
      "Reels",
      "Stories",
      "IGTV",
      "Posts with audio",
      "Live streams"
    ],
    requirements: [
      "Credit in caption/description",
      "Purchase verification",
      "Platform guidelines compliance"
    ]
  }
];

const restrictedUses = [
  {
    type: "Commercial Advertising",
    status: "Requires Special License",
    description: "Using music in paid advertisements, commercials, or promotional content requires additional licensing.",
    contact: "Contact our licensing team for commercial use permissions."
  },
  {
    type: "Music Distribution",
    status: "Not Permitted",
    description: "Redistributing music files as standalone tracks or in music compilations is prohibited.",
    contact: "This includes uploading to music streaming platforms or file-sharing services."
  },
  {
    type: "NFTs & Digital Assets",
    status: "Not Permitted",
    description: "Creating NFTs or digital assets using our music is not allowed under standard license.",
    contact: "Special permissions are not currently available for NFT projects."
  }
];

export default function PlatformsPage() {
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
            Platform Compatibility
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Discover where you can use our music and understand platform-specific requirements.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Supported Platforms */}
        <div className="space-y-12">
          <h2 className="text-2xl font-semibold text-white mb-8">Supported Platforms</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {supportedPlatforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-gray-800/30 rounded-xl p-6 hover:bg-gray-800/40 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{platform.icon}</span>
                  <div>
                    <h3 className="text-xl font-medium text-white">{platform.name}</h3>
                    <span className={`text-sm ${
                      platform.status === 'Fully Supported' 
                        ? 'text-green-400' 
                        : 'text-yellow-400'
                    }`}>
                      {platform.status}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">Supported Features</h4>
                    <ul className="grid grid-cols-2 gap-2">
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
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restricted Uses */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Restricted Uses</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {restrictedUses.map((use) => (
              <div
                key={use.type}
                className="bg-red-900/20 rounded-xl p-6 border border-red-700/30"
              >
                <h3 className="text-xl font-medium text-white mb-2">{use.type}</h3>
                <div className="text-red-400 text-sm mb-4">{use.status}</div>
                <p className="text-gray-400 text-sm mb-4">{use.description}</p>
                <p className="text-gray-500 text-sm">{use.contact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Help section */}
        <div className="mt-16 p-8 bg-blue-900/20 rounded-xl border border-blue-700/30 text-center">
          <h2 className="text-xl font-semibold text-white mb-4">
            Need Platform-Specific Help?
          </h2>
          <p className="text-gray-400 mb-8">
            Our support team can help you understand platform requirements and resolve any issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/help/attribution"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              View Attribution Guide
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