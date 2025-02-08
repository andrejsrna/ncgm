import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | No Copyright Gaming Music',
  description: 'Frequently asked questions about using No Copyright Gaming Music for your content.',
};

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is No Copyright Gaming Music?",
        a: "No Copyright Gaming Music is a platform that curates and lists gaming-friendly music available through various music marketplaces. We help content creators find the right music while ensuring proper licensing and usage rights."
      },
      {
        q: "How does it work?",
        a: "We provide links to purchase music through established platforms like Beatport, iTunes, and other digital music stores. Once purchased, you can use the music in your content following our attribution guidelines."
      },
      {
        q: "Do I need to pay for the music?",
        a: "Yes, the music needs to be purchased through the provided store links (Beatport, iTunes, etc.). This ensures proper compensation for artists while maintaining high-quality standards and legal compliance."
      }
    ]
  },
  {
    category: "Usage Rights",
    questions: [
      {
        q: "Can I use purchased music in monetized videos?",
        a: "Yes, once you've purchased the music through our partner platforms, you can use it in monetized YouTube videos, Twitch streams, and other content platforms."
      },
      {
        q: "Can I use the music in multiple videos?",
        a: "Yes, after purchasing a track, you can use it in as many videos as you want, as long as you provide proper attribution."
      },
      {
        q: "Are there any restrictions on usage?",
        a: "Yes, you cannot resell the music, use it in NFTs, or claim it as your own. The purchase grants you a license for content creation use only. Check our License Terms for full details."
      }
    ]
  },
  {
    category: "Purchase & Download",
    questions: [
      {
        q: "Where do I buy the music?",
        a: "Each track on our platform includes direct purchase links to various digital music stores like Beatport, iTunes, and others. Simply click your preferred store link to complete your purchase."
      },
      {
        q: "What formats are available?",
        a: "Format availability depends on the store where you purchase. Beatport offers high-quality WAV and MP3 formats, while other platforms may have different format options."
      },
      {
        q: "Do you store any music files?",
        a: "No, we don't host or store any music files on our servers. We provide curated lists and links to official music stores where you can purchase and download the tracks."
      }
    ]
  },
  {
    category: "Copyright & Attribution",
    questions: [
      {
        q: "Will I get copyright claims using purchased music?",
        a: "No, when you purchase through our listed links and provide proper attribution, the music is cleared for content creation use. However, always ensure proper attribution to avoid any issues."
      },
      {
        q: "How do I properly credit the music?",
        a: "Include the following in your video description: 'Music: [Song Title] by No Copyright Gaming Music (nocopyrightgamingmusic.com) - Purchased through [Store Name]'"
      },
      {
        q: "What if I get a false copyright claim?",
        a: "Keep your purchase receipt and contact our support team with your video details and proof of purchase. We'll help guide you through the dispute process."
      }
    ]
  }
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero section */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Find answers to common questions about using our music in your content.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Quick links */}
        <div className="bg-gray-800/30 rounded-xl p-6 mb-12 border border-gray-700">
          <h2 className="text-lg font-semibold text-white mb-4">Categories</h2>
          <div className="flex flex-wrap gap-4">
            {faqs.map((category) => (
              <a
                key={category.category}
                href={`#${category.category.toLowerCase()}`}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
              >
                {category.category}
              </a>
            ))}
          </div>
        </div>

        {/* FAQ sections */}
        <div className="space-y-16">
          {faqs.map((category) => (
            <section
              key={category.category}
              id={category.category.toLowerCase()}
              className="scroll-mt-20"
            >
              <h2 className="text-2xl font-semibold text-white mb-8">
                {category.category} Questions
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/30 rounded-lg p-6 hover:bg-gray-800/40 transition-colors"
                  >
                    <h3 className="text-lg font-medium text-white mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-gray-400">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact section */}
        <div className="mt-16 p-8 bg-blue-900/20 rounded-xl border border-blue-700/30 text-center">
          <h2 className="text-xl font-semibold text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-400 mb-6">
            Can&apos;t find what you&apos;re looking for? We&apos;re here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="mailto:support@nocopyrightgamingmusic.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 