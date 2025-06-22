import { Metadata } from 'next';
import Link from 'next/link';
import { FaEnvelope, FaFileAlt, FaQuestionCircle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'System Support | No Copyright Gaming Music',
  description: 'Access system protocols, troubleshooting guides, and neural support networks for No Copyright Gaming Music.',
};

const guides = [
  {
    category: "System Initialization",
    articles: [
      {
        title: "Data Acquisition Protocol",
        description: "Access protocols for track acquisition through partner networks",
        icon: "🛒",
        link: "/help/purchase-guide"
      },
      {
        title: "Attribution Matrix",
        description: "Neural pathways for content crediting",
        icon: "✍️",
        link: "/help/attribution"
      },
      {
        title: "Network Compatibility",
        description: "Authorized distribution channels",
        icon: "🎮",
        link: "/help/platforms"
      }
    ]
  },
  {
    category: "Signal Processing",
    articles: [
      {
        title: "Content ID Matrix",
        description: "Navigate copyright algorithms and ID matches",
        icon: "📝",
        link: "/help/content-id"
      },
      {
        title: "Revenue Protocols",
        description: "Monetization algorithms and procedures",
        icon: "💰",
        link: "/help/monetization"
      },
      {
        title: "Network Protocols",
        description: "Platform-specific usage matrices",
        icon: "📋",
        link: "/help/guidelines"
      }
    ]
  },
  {
    category: "System Diagnostics",
    articles: [
      {
        title: "Transaction Debug",
        description: "Common acquisition and download anomalies",
        icon: "🔧",
        link: "/help/purchase-issues"
      },
      {
        title: "Copyright Override",
        description: "False claim resolution protocols",
        icon: "⚠️",
        link: "/help/copyright-claims"
      },
      {
        title: "Technical Matrix",
        description: "System anomalies and solutions",
        icon: "🔨",
        link: "/help/technical"
      }
    ]
  }
];

const quickLinks = [
  {
    title: "License Matrix",
    description: "Access music licensing protocols",
    icon: <FaFileAlt className="w-6 h-6" />,
    link: "/license"
  },
  {
    title: "Neural FAQ",
    description: "Common query responses",
    icon: <FaQuestionCircle className="w-6 h-6" />,
    link: "/faq"
  },
  {
    title: "Support Link",
    description: "Connect with our network",
    icon: <FaEnvelope className="w-6 h-6" />,
    link: "/contact"
  }
];

export default function HelpPage() {
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
              System Support Matrix
            </span>
          </h1>
          <p className="text-red-200/70 text-center max-w-2xl mx-auto font-light tracking-wider">
            Access neural pathways, system protocols, and support networks to optimize your experience.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        {/* Quick links */}
        <div className="mb-24">
          <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-12">Quick Access Nodes</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="group relative h-full"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500 animate-pulse-slow"></div>
                <div className="relative h-full bg-black border border-red-900/30 p-8 flex flex-col">
                  <div className="text-red-500 mb-6">{link.icon}</div>
                  <h3 className="text-lg font-mono font-bold text-red-500 mb-3">{link.title}</h3>
                  <p className="text-red-200/70 text-sm font-light tracking-wide">{link.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Help guides */}
        <div className="space-y-24">
          {guides.map((section) => (
            <section key={section.category}>
              <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-12">{section.category}</h2>
              <div className="grid gap-8 md:grid-cols-3">
                {section.articles.map((article) => (
                  <Link
                    key={article.title}
                    href={article.link}
                    className="group relative h-full"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500 animate-pulse-slow"></div>
                    <div className="relative h-full bg-black border border-red-900/30 p-8 flex flex-col">
                      <div className="text-3xl mb-6">{article.icon}</div>
                      <h3 className="text-lg font-mono font-bold text-red-500 mb-3">{article.title}</h3>
                      <p className="text-red-200/70 text-sm font-light tracking-wide">{article.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact support */}
        <div className="mt-32 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-6">
                Additional Support Required?
              </h2>
              <p className="text-red-200/70 mb-12 font-light tracking-wide">
                Our neural support network stands ready to assist with system anomalies and inquiries.
                Average response time: 24 cycles.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="mailto:support@nocopyrightgamingmusic.com"
                  className="group relative inline-flex"
                >
                  <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                  <div className="relative flex items-center gap-2 px-6 py-3 bg-black border border-red-500/30">
                    <FaEnvelope className="w-5 h-5 text-red-500" />
                    <span className="font-mono text-red-500">Neural Link</span>
                  </div>
                </a>
                <Link
                  href="/contact"
                  className="group relative inline-flex"
                >
                  <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                  <div className="relative flex items-center gap-2 px-6 py-3 bg-black border border-red-500/30">
                    <span className="font-mono text-red-500">Access Support Matrix</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
      </div>
    </div>
  );
} 