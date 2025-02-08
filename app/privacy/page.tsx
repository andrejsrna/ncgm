import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | No Copyright Gaming Music',
  description: 'Learn how No Copyright Gaming Music protects and handles your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero section */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            We value your privacy and are committed to protecting your personal information.
            Learn how we collect, use, and safeguard your data.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Last updated notice */}
        <div className="text-sm text-gray-500 mb-12">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>

        {/* Quick navigation */}
        <div className="bg-gray-800/30 rounded-xl p-6 mb-12 border border-gray-700">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Navigation</h2>
          <div className="grid gap-2 md:grid-cols-2">
            <a href="#information-collection" className="text-blue-400 hover:text-blue-300 transition-colors">
              1. Information Collection
            </a>
            <a href="#information-usage" className="text-blue-400 hover:text-blue-300 transition-colors">
              2. How We Use Your Information
            </a>
            <a href="#information-sharing" className="text-blue-400 hover:text-blue-300 transition-colors">
              3. Information Sharing
            </a>
            <a href="#data-security" className="text-blue-400 hover:text-blue-300 transition-colors">
              4. Data Security
            </a>
            <a href="#your-rights" className="text-blue-400 hover:text-blue-300 transition-colors">
              5. Your Rights
            </a>
            <a href="#contact-us" className="text-blue-400 hover:text-blue-300 transition-colors">
              6. Contact Us
            </a>
          </div>
        </div>

        {/* Privacy content sections */}
        <div className="space-y-12">
          <section id="information-collection">
            <h2 className="text-2xl font-semibold text-white mb-6">1. Information Collection</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="text-gray-400 space-y-2 list-disc pl-6">
                <li>Name and email address when you create an account</li>
                <li>Profile information and preferences</li>
                <li>Usage data and interaction with our services</li>
                <li>Technical data such as IP address and browser information</li>
              </ul>
            </div>
          </section>

          <section id="information-usage">
            <h2 className="text-2xl font-semibold text-white mb-6">2. How We Use Your Information</h2>
            <div className="prose prose-invert max-w-none">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-gray-800/30 p-4 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Service Provision</h3>
                  <p className="text-sm text-gray-400">
                    To provide and maintain our services, process transactions, and send notifications
                  </p>
                </div>
                <div className="bg-gray-800/30 p-4 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Communication</h3>
                  <p className="text-sm text-gray-400">
                    To communicate with you about updates, support, and promotional content
                  </p>
                </div>
                <div className="bg-gray-800/30 p-4 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Improvement</h3>
                  <p className="text-sm text-gray-400">
                    To analyze and improve our services, develop new features, and enhance user experience
                  </p>
                </div>
                <div className="bg-gray-800/30 p-4 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Security</h3>
                  <p className="text-sm text-gray-400">
                    To detect, prevent, and address technical issues and security threats
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="information-sharing">
            <h2 className="text-2xl font-semibold text-white mb-6">3. Information Sharing</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="text-gray-400 space-y-2 list-disc pl-6">
                <li>Service providers who assist in operating our platform</li>
                <li>Law enforcement when required by law</li>
                <li>Third parties with your explicit consent</li>
              </ul>
            </div>
          </section>

          <section id="data-security">
            <h2 className="text-2xl font-semibold text-white mb-6">4. Data Security</h2>
            <div className="prose prose-invert max-w-none">
              <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-6">
                <h3 className="text-white font-medium mb-2">Our Security Measures</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>✓ Encryption of sensitive data</li>
                  <li>✓ Regular security assessments</li>
                  <li>✓ Secure data storage practices</li>
                  <li>✓ Access controls and monitoring</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="your-rights">
            <h2 className="text-2xl font-semibold text-white mb-6">5. Your Rights</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 mb-4">
                You have the right to:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-gray-800/30 p-4 rounded-lg">
                  <p className="text-gray-400">• Access your personal data</p>
                </div>
                <div className="bg-gray-800/30 p-4 rounded-lg">
                  <p className="text-gray-400">• Correct inaccurate data</p>
                </div>
                <div className="bg-gray-800/30 p-4 rounded-lg">
                  <p className="text-gray-400">• Request data deletion</p>
                </div>
                <div className="bg-gray-800/30 p-4 rounded-lg">
                  <p className="text-gray-400">• Object to data processing</p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact-us">
            <h2 className="text-2xl font-semibold text-white mb-6">6. Contact Us</h2>
            <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-6">
              <p className="text-gray-400 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-400">
                  Email: <a href="mailto:privacy@nocopyrightgamingmusic.com" className="text-blue-400 hover:text-blue-300">
                    privacy@nocopyrightgamingmusic.com
                  </a>
                </p>
                <p className="text-gray-400">
                  Address: Enhold s.r.o., Drobného 1900/2 841 02 Bratislava - mestská časť Dúbravka
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Cookie notice */}
        <div className="mt-16 p-8 bg-gray-800/30 rounded-xl border border-gray-700 text-center">
          <h2 className="text-xl font-semibold text-white mb-4">
            🍪 Cookie Policy
          </h2>
          <p className="text-gray-400 mb-6">
            We use cookies to enhance your browsing experience. By continuing to use our website,
            you agree to our use of cookies.
          </p>
          <a
            href="/cookies"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Learn More About Cookies
          </a>
        </div>
      </div>
    </div>
  );
} 