import { Metadata } from 'next';
import { FaCookie, FaShieldAlt, FaCog, FaUserShield, FaInfoCircle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Cookie Policy | No Copyright Gaming Music',
  description: 'Learn about how we use cookies to enhance your experience on No Copyright Gaming Music.',
};

const cookieTypes = [
  {
    icon: <FaCog className="w-6 h-6 text-blue-400" />,
    title: "Essential Cookies",
    description: "These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.",
    required: true
  },
  {
    icon: <FaUserShield className="w-6 h-6 text-green-400" />,
    title: "Performance Cookies",
    description: "Help us understand how visitors interact with our website by collecting and reporting information anonymously.",
    required: false
  },
  {
    icon: <FaShieldAlt className="w-6 h-6 text-purple-400" />,
    title: "Functionality Cookies",
    description: "Enable the website to remember choices you make (such as your username, language or the region you are in) for enhanced functionality.",
    required: false
  }
];

const cookieInfo = [
  {
    title: "What Are Cookies?",
    content: "Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site."
  },
  {
    title: "How We Use Cookies",
    content: "We use cookies to enhance your browsing experience, analyze site traffic, and understand where our audience is coming from. This helps us improve our services and provide more relevant content."
  },
  {
    title: "Your Choices",
    content: "You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer."
  }
];

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block p-3 rounded-full bg-blue-500/10 mb-4">
              <FaCookie className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We value your privacy and want to be transparent about the cookies we use.
            </p>
          </div>

          {/* Cookie Types Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {cookieTypes.map((type) => (
              <div
                key={type.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="flex items-center gap-4 mb-4">
                  {type.icon}
                  <h3 className="text-xl font-semibold text-white">{type.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{type.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  {type.required ? (
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">
                      Required
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-gray-700/50 text-gray-400">
                      Optional
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Information */}
          <div className="space-y-12">
            {cookieInfo.map((info) => (
              <div key={info.title} className="max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <FaInfoCircle className="w-5 h-5 text-blue-400" />
                  <h2 className="text-2xl font-semibold text-white">{info.title}</h2>
                </div>
                <p className="text-gray-400 leading-relaxed pl-8">
                  {info.content}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Questions About Our Cookie Policy?
              </h2>
              <p className="text-gray-400 mb-6">
                If you have any questions about our use of cookies, please don&apos;t hesitate to contact us.
              </p>
              <a
                href="mailto:privacy@nocopyrightgamingmusic.com"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                Contact Privacy Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 