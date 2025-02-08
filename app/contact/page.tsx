import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | No Copyright Gaming Music',
  description: 'Get in touch with No Copyright Gaming Music. Contact our support team for help with licensing, technical issues, or general inquiries.',
};

const contactMethods = [
  {
    title: "General Support",
    email: "support@nocopyrightgamingmusic.com",
    description: "For general inquiries and assistance",
    response: "24-48 hours",
    icon: "📧"
  },
  {
    title: "Licensing",
    email: "licensing@nocopyrightgamingmusic.com",
    description: "For licensing and usage rights questions",
    response: "1-2 business days",
    icon: "📜"
  },
  {
    title: "Technical Support",
    email: "tech@nocopyrightgamingmusic.com",
    description: "For technical issues and file problems",
    response: "24-48 hours",
    icon: "🔧"
  },
  {
    title: "Content Claims",
    email: "claims@nocopyrightgamingmusic.com",
    description: "For copyright claims and Content ID issues",
    response: "Priority support",
    icon: "⚡"
  }
];

const officeInfo = {
  company: "Enhold s.r.o.",
  address: [
    "Drobného 1900/2",
    "841 02 Bratislava",
    "mestská časť Dúbravka",
    "Slovakia"
  ],
  hours: [
    "Monday - Friday",
    "9:00 - 17:00 CET"
  ]
};

const commonTopics = [
  {
    title: "Licensing Help",
    links: [
      { text: "License Terms", href: "/license" },
      { text: "Attribution Guide", href: "/help/attribution" },
      { text: "Platform Guidelines", href: "/help/platforms" }
    ]
  },
  {
    title: "Technical Support",
    links: [
      { text: "Technical Guide", href: "/help/technical" },
      { text: "Purchase Issues", href: "/help/purchase-issues" },
      { text: "Content ID Help", href: "/help/content-id" }
    ]
  },
  {
    title: "Quick Links",
    links: [
      { text: "FAQ", href: "/faq" },
      { text: "About Us", href: "/about" },
      { text: "Help Center", href: "/help" }
    ]
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero section */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Get in touch with our team. We&apos;re here to help you with any questions or concerns.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Contact Methods */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Contact Methods</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="bg-gray-800/30 rounded-xl p-6 hover:bg-gray-800/40 transition-colors"
              >
                <div className="text-3xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{method.description}</p>
                <a
                  href={`mailto:${method.email}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm break-all"
                >
                  {method.email}
                </a>
                <p className="text-gray-500 text-sm mt-2">
                  Response time: {method.response}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Office Information */}
        <div className="mb-20">
          <div className="bg-blue-900/20 rounded-xl p-8 border border-blue-700/30">
            <div className="max-w-3xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Office Address</h3>
                  <div className="space-y-2">
                    <p className="text-gray-400 font-medium">{officeInfo.company}</p>
                    {officeInfo.address.map((line, index) => (
                      <p key={index} className="text-gray-400">{line}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    {officeInfo.hours.map((line, index) => (
                      <p key={index} className="text-gray-400">{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Topics */}
        <div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Quick Help Topics</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {commonTopics.map((topic) => (
              <div
                key={topic.title}
                className="bg-gray-800/30 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{topic.title}</h3>
                <ul className="space-y-2">
                  {topic.links.map((link) => (
                    <li key={link.text}>
                      <Link
                        href={link.href}
                        className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Support Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-8">
            For fastest support, please check our help documentation before contacting us. 
            Many common questions are already answered in our guides.
          </p>
          <Link
            href="/help"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Help Center
          </Link>
        </div>
      </div>
    </div>
  );
} 