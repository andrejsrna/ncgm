import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Help Center | No Copyright Gaming Music',
  description: 'Get help with using No Copyright Gaming Music. Find guides, tutorials, and support resources.',
};

const guides = [
  {
    category: "Getting Started",
    articles: [
      {
        title: "How to Purchase Music",
        description: "Learn how to buy tracks through our partner platforms",
        icon: "🛒",
        link: "/help/purchase-guide"
      },
      {
        title: "Attribution Guide",
        description: "Proper ways to credit music in your content",
        icon: "✍️",
        link: "/help/attribution"
      },
      {
        title: "Platform Compatibility",
        description: "Where you can use our music",
        icon: "🎮",
        link: "/help/platforms"
      }
    ]
  },
  {
    category: "Music Usage",
    articles: [
      {
        title: "Content ID Guide",
        description: "Handle copyright claims and Content ID matches",
        icon: "📝",
        link: "/help/content-id"
      },
      {
        title: "Monetization Guide",
        description: "Using music in monetized content",
        icon: "💰",
        link: "/help/monetization"
      },
      {
        title: "Platform Guidelines",
        description: "Platform-specific usage guidelines",
        icon: "📋",
        link: "/help/guidelines"
      }
    ]
  },
  {
    category: "Troubleshooting",
    articles: [
      {
        title: "Purchase Issues",
        description: "Common purchase and download problems",
        icon: "🔧",
        link: "/help/purchase-issues"
      },
      {
        title: "Copyright Claims",
        description: "Resolving false copyright claims",
        icon: "⚠️",
        link: "/help/copyright-claims"
      },
      {
        title: "Technical Support",
        description: "Technical issues and solutions",
        icon: "🔨",
        link: "/help/technical"
      }
    ]
  }
];

const quickLinks = [
  {
    title: "License Terms",
    description: "Review our music licensing terms",
    icon: "📜",
    link: "/license"
  },
  {
    title: "FAQ",
    description: "Frequently asked questions",
    icon: "❓",
    link: "/faq"
  },
  {
    title: "Contact Support",
    description: "Get in touch with our team",
    icon: "📧",
    link: "/contact"
  }
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero section */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Help Center
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Find guides, tutorials, and answers to help you make the most of No Copyright Gaming Music.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Quick links */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Quick Links</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="bg-gray-800/30 rounded-xl p-6 hover:bg-gray-800/40 transition-all hover:transform hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{link.icon}</div>
                <h3 className="text-lg font-medium text-white mb-2">{link.title}</h3>
                <p className="text-gray-400 text-sm">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Help guides */}
        <div className="space-y-16">
          {guides.map((section) => (
            <section key={section.category}>
              <h2 className="text-2xl font-semibold text-white mb-8">{section.category}</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {section.articles.map((article) => (
                  <Link
                    key={article.title}
                    href={article.link}
                    className="bg-gray-800/30 rounded-xl p-6 hover:bg-gray-800/40 transition-all hover:transform hover:-translate-y-1"
                  >
                    <div className="text-3xl mb-4">{article.icon}</div>
                    <h3 className="text-lg font-medium text-white mb-2">{article.title}</h3>
                    <p className="text-gray-400 text-sm">{article.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact support */}
        <div className="mt-16 p-8 bg-blue-900/20 rounded-xl border border-blue-700/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Need More Help?
            </h2>
            <p className="text-gray-400 mb-8">
              Our support team is available to help you with any questions or issues you might have.
              We typically respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@nocopyrightgamingmusic.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Email Support
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 