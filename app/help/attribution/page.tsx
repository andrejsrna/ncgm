import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Attribution Guide | No Copyright Gaming Music',
  description: 'Learn how to properly credit and attribute music from No Copyright Gaming Music in your content.',
};

const platforms = [
  {
    name: "YouTube",
    format: "Music: [Song Title] by No Copyright Gaming Music (nocopyrightgamingmusic.com) - Purchased through [Store]",
    location: "Video description",
    example: {
      title: "Epic Gaming Montage",
      description: "Music: Neon Nights by No Copyright Gaming Music (nocopyrightgamingmusic.com) - Purchased through Beatport",
      tips: [
        "Place at the beginning of description",
        "Make the website URL clickable",
        "Include all song titles used"
      ]
    }
  },
  {
    name: "Twitch",
    format: "!song command or panel with: Music from No Copyright Gaming Music (nocopyrightgamingmusic.com)",
    location: "Stream panels or chat commands",
    example: {
      title: "Live Stream",
      description: "!song → Now Playing: Cyber Drive by No Copyright Gaming Music - Licensed through nocopyrightgamingmusic.com",
      tips: [
        "Set up automatic !song command",
        "Create dedicated music info panel",
        "Update song info regularly"
      ]
    }
  },
  {
    name: "Social Media",
    format: "🎵: [Song Title] - No Copyright Gaming Music",
    location: "Post caption or comments",
    example: {
      title: "Instagram Reel",
      description: "🎵: Midnight Rush - No Copyright Gaming Music\nLicensed through nocopyrightgamingmusic.com",
      tips: [
        "Use music emoji for visibility",
        "Keep format consistent",
        "Tag our official accounts"
      ]
    }
  }
];

const commonMistakes = [
  {
    mistake: "Missing Purchase Source",
    correct: "Include where you purchased the track",
    wrong: "Music: Epic Track by No Copyright Gaming Music",
    right: "Music: Epic Track by No Copyright Gaming Music - Purchased through Beatport"
  },
  {
    mistake: "Incorrect Website URL",
    correct: "Always use nocopyrightgamingmusic.com",
    wrong: "Music from ncgm.com",
    right: "Music from nocopyrightgamingmusic.com"
  },
  {
    mistake: "Incomplete Attribution",
    correct: "Include all required elements",
    wrong: "Music by NCGM",
    right: "Music: [Song Title] by No Copyright Gaming Music (nocopyrightgamingmusic.com) - Purchased through [Store]"
  }
];

export default function AttributionPage() {
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
            Attribution Guide
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Learn how to properly credit our music in your content across different platforms.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Quick reference */}
        <div className="bg-blue-900/20 rounded-xl p-6 mb-16 border border-blue-700/30">
          <h2 className="text-xl font-semibold text-white mb-4">Quick Reference Format</h2>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <code className="text-sm text-gray-300">
              Music: [Song Title] by No Copyright Gaming Music (nocopyrightgamingmusic.com) - Purchased through [Store]
            </code>
          </div>
        </div>

        {/* Platform-specific guides */}
        <div className="space-y-16">
          {platforms.map((platform) => (
            <section key={platform.name}>
              <h2 className="text-2xl font-semibold text-white mb-8">
                {platform.name} Attribution
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-gray-800/30 rounded-xl p-6">
                  <h3 className="text-lg font-medium text-white mb-4">Format & Location</h3>
                  <p className="text-gray-400 mb-2">Format:</p>
                  <div className="bg-gray-800/50 p-3 rounded-lg mb-4">
                    <code className="text-sm text-gray-300">{platform.format}</code>
                  </div>
                  <p className="text-gray-400 mb-2">Where to place:</p>
                  <p className="text-sm text-gray-300">{platform.location}</p>
                </div>
                <div className="bg-gray-800/30 rounded-xl p-6">
                  <h3 className="text-lg font-medium text-white mb-4">Example</h3>
                  <div className="space-y-4">
                    <p className="text-gray-400 text-sm">Title: {platform.example.title}</p>
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <code className="text-sm text-gray-300">{platform.example.description}</code>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-400 mb-2">Tips:</p>
                      <ul className="space-y-2">
                        {platform.example.tips.map((tip, index) => (
                          <li key={index} className="text-sm text-gray-400 flex items-center">
                            <span className="text-green-400 mr-2">✓</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Common mistakes */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Common Mistakes to Avoid</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {commonMistakes.map((item) => (
              <div key={item.mistake} className="bg-gray-800/30 rounded-xl p-6">
                <h3 className="text-lg font-medium text-white mb-4">{item.mistake}</h3>
                <p className="text-gray-400 mb-4 text-sm">{item.correct}</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-red-400 text-xs mb-1">❌ Wrong:</p>
                    <p className="text-gray-400 text-sm">{item.wrong}</p>
                  </div>
                  <div>
                    <p className="text-green-400 text-xs mb-1">✓ Correct:</p>
                    <p className="text-gray-400 text-sm">{item.right}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warning notice */}
        <div className="mt-16 p-8 bg-yellow-900/20 rounded-xl border border-yellow-700/30 text-center">
          <h2 className="text-xl font-semibold text-white mb-4">
            ⚠️ Important Notice
          </h2>
          <p className="text-gray-400 mb-6">
            Proper attribution is required to maintain your license to use our music. 
            Failure to provide correct attribution may result in copyright claims.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/license"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Review License Terms
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