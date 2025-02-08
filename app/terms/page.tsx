import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | No Copyright Gaming Music',
  description: 'Terms and conditions for using No Copyright Gaming Music platform and services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero section */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Please read these terms carefully before using our platform.
            By using our services, you agree to these terms.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Last updated notice */}
        <div className="text-sm text-gray-500 mb-12">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>

        {/* Agreement notice */}
        <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-6 mb-12">
          <p className="text-gray-300">
            By accessing or using No Copyright Gaming Music, you agree to be bound by these Terms of Service 
            and all applicable laws and regulations. If you do not agree with any of these terms, you are 
            prohibited from using or accessing this site.
          </p>
        </div>

        {/* Terms sections */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">1. Account Terms</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <div className="bg-gray-800/30 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-4">Account Creation and Maintenance</h3>
                <ul className="text-gray-400 space-y-2 list-disc pl-6">
                  <li>You must be 13 years or older to use this service</li>
                  <li>You must provide accurate and complete information</li>
                  <li>You are responsible for maintaining account security</li>
                  <li>You must notify us of any security breaches</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">2. Acceptable Use</h2>
            <div className="prose prose-invert max-w-none">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-green-900/20 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-4">Permitted Uses</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>✓ Personal content creation</li>
                    <li>✓ Gaming-related content</li>
                    <li>✓ Educational purposes</li>
                    <li>✓ Non-commercial projects</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-4">Prohibited Uses</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>✗ Illegal activities</li>
                    <li>✗ Hate speech or harassment</li>
                    <li>✗ Unauthorized distribution</li>
                    <li>✗ Commercial exploitation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">3. Content Rights</h2>
            <div className="bg-gray-800/30 p-6 rounded-lg">
              <p className="text-gray-400 mb-4">
                All music and content provided through our platform is subject to our licensing terms. 
                While the music is free to use, certain restrictions apply:
              </p>
              <ul className="text-gray-400 space-y-2 list-disc pl-6">
                <li>You must provide proper attribution as specified</li>
                <li>You cannot claim ownership of our music</li>
                <li>You cannot sell or redistribute our music as standalone files</li>
                <li>You cannot use our music in NFTs or similar digital assets</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">4. Service Modifications</h2>
            <div className="bg-gray-800/30 p-6 rounded-lg">
              <p className="text-gray-400">
                We reserve the right to modify or discontinue our service at any time, with or without notice. 
                We shall not be liable to you or any third party for any modification, suspension, or 
                discontinuance of the service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">5. Termination</h2>
            <div className="bg-gray-800/30 p-6 rounded-lg">
              <p className="text-gray-400 mb-4">
                We may terminate or suspend your account and access to our services immediately, without 
                prior notice or liability, for any reason, including:
              </p>
              <ul className="text-gray-400 space-y-2 list-disc pl-6">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activities</li>
                <li>Abusive behavior towards other users</li>
                <li>Non-compliance with attribution requirements</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">6. Contact Information</h2>
            <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-6">
              <p className="text-gray-400 mb-4">
                For any questions regarding these Terms of Service, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-400">
                  Email: <a href="mailto:terms@nocopyrightgamingmusic.com" className="text-blue-400 hover:text-blue-300">
                    terms@nocopyrightgamingmusic.com
                  </a>
                </p>
                <p className="text-gray-400">
                  Address: Enhold s.r.o., Drobného 1900/2 841 02 Bratislava - mestská časť Dúbravka
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Updates notice */}
        <div className="mt-16 p-8 bg-yellow-900/20 rounded-xl border border-yellow-700/30 text-center">
          <h2 className="text-xl font-semibold text-white mb-4">
            Terms Updates
          </h2>
          <p className="text-gray-400 mb-6">
            We may update these terms from time to time. We will notify you of any changes by posting 
            the new terms on this page and updating the &quot;Last updated&quot; date.
          </p>
          <a
            href="/privacy"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            View Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
} 