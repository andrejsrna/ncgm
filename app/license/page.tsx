import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'License Terms | No Copyright Gaming Music',
  description: 'Licensing terms and conditions for using No Copyright Gaming Music in your content.',
};

export default function LicensePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero section */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            License Terms
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Everything you need to know about using our music in your content.
            Simple, clear, and creator-friendly terms.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* License summary */}
        <div className="bg-gray-800/30 rounded-xl p-6 mb-12 border border-gray-700">
          <h2 className="text-2xl font-semibold text-white mb-4">Quick Summary</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <div className="text-green-400 mb-2">✓</div>
              <h3 className="text-white font-medium mb-2">Allowed Uses</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>YouTube Videos</li>
                <li>Twitch Streams</li>
                <li>Social Media</li>
                <li>Podcasts</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <div className="text-yellow-400 mb-2">⚠</div>
              <h3 className="text-white font-medium mb-2">Credit (optional)</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Song Title</li>
                <li>Link to No Copyright Gaming Music</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <div className="text-red-400 mb-2">⨯</div>
              <h3 className="text-white font-medium mb-2">Not Allowed</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Reselling</li>
                <li>NFT Creation</li>
                <li>Commercial Ads</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed terms */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">1. License Grant</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400">
                By downloading or using any music from No Copyright Gaming Music (NCGM), 
                you are granted a worldwide, non-exclusive, royalty-free license to use 
                the music in your content creation, subject to the terms and conditions 
                outlined below.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">2. Permitted Uses</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 mb-4">
                You may use NCGM music in:
              </p>
              <ul className="text-gray-400 space-y-2 list-disc pl-6">
                <li>YouTube videos (including monetized content)</li>
                <li>Twitch streams and VODs</li>
                <li>Social media content (TikTok, Instagram, etc.)</li>
                <li>Podcasts and audio content</li>
                <li>Personal websites and blogs</li>
                <li>Educational content and presentations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">3. Attribution</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 mb-4">
                When using our music, you may provide attribution:
              </p>
              <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700 mb-4">
                <code className="text-sm text-gray-300">
                  Music: [Song Title] by No Copyright Gaming Music (nocopyrightgamingmusic.com)
                </code>
              </div>
              <p className="text-gray-400">
                Place this attribution in your video description, stream info, or other 
                appropriate location where credits are typically displayed.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">4. Restrictions</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 mb-4">
                The following uses are not permitted:
              </p>
              <ul className="text-gray-400 space-y-2 list-disc pl-6">
                <li>Reselling or redistributing the music as standalone files</li>
                <li>Creating NFTs or other digital assets from the music</li>
                <li>Using the music in commercial advertisements without explicit permission</li>
                <li>Claiming ownership or copyright of the music</li>
                <li>Removing or altering embedded metadata or watermarks</li>
              </ul>
            </div>
          </section>
        </div>

        {/* CTA section */}
        <div className="mt-16 p-8 bg-blue-600/10 rounded-xl border border-blue-500/20 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-400 mb-6">
            Our support team is here to help you understand our licensing terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/faq"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Read FAQ
            </a>
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