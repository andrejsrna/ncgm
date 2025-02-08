import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Purchase Issues & Solutions | No Copyright Gaming Music',
  description: 'Find solutions to common purchase issues and problems when buying music through our partner platforms.',
};

const commonIssues = [
  {
    category: "Payment Issues",
    problems: [
      {
        title: "Payment Declined",
        description: "Your payment method was declined by the store.",
        solutions: [
          "Verify your card has sufficient funds",
          "Check if your card allows international purchases",
          "Try a different payment method",
          "Contact your bank to authorize the transaction"
        ],
        urgent: true
      },
      {
        title: "Payment Stuck Processing",
        description: "Payment appears to be processing but doesn't complete.",
        solutions: [
          "Wait 15 minutes before trying again",
          "Check your email for confirmation",
          "Don't submit multiple payments",
          "Contact the store's support if persists"
        ],
        urgent: false
      }
    ]
  },
  {
    category: "Download Problems",
    problems: [
      {
        title: "Download Fails",
        description: "Unable to download purchased tracks.",
        solutions: [
          "Check your internet connection",
          "Clear browser cache and cookies",
          "Try a different browser",
          "Use the store's desktop app if available"
        ],
        urgent: true
      },
      {
        title: "Corrupt Files",
        description: "Downloaded files are corrupted or won't play.",
        solutions: [
          "Download the file again",
          "Try a different download location",
          "Check if your device supports the format",
          "Contact store support for fresh download links"
        ],
        urgent: true
      }
    ]
  },
  {
    category: "Account Issues",
    problems: [
      {
        title: "Can't Create Account",
        description: "Unable to create an account on the store platform.",
        solutions: [
          "Try a different email address",
          "Check if email confirmation is required",
          "Ensure password meets requirements",
          "Clear browser data and try again"
        ],
        urgent: false
      },
      {
        title: "Purchase Not Showing",
        description: "Completed purchase not appearing in account.",
        solutions: [
          "Allow up to 24 hours for processing",
          "Check spam folder for receipts",
          "Verify the purchase email matches account email",
          "Contact store support with transaction ID"
        ],
        urgent: false
      }
    ]
  }
];

const emergencyContacts = [
  {
    platform: "Beatport",
    support: "support@beatport.com",
    response: "24-48 hours",
    url: "https://beatport.com/support"
  },
  {
    platform: "iTunes",
    support: "Through Apple Support",
    response: "24-72 hours",
    url: "https://support.apple.com/itunes"
  },
  {
    platform: "Amazon Music",
    support: "Through Amazon Help",
    response: "12-24 hours",
    url: "https://music.amazon.com/support"
  }
];

export default function PurchaseIssuesPage() {
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
            Purchase Issues & Solutions
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Find solutions to common problems when purchasing music through our partner platforms.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Emergency notice */}
        <div className="bg-red-900/20 rounded-xl p-6 mb-12 border border-red-700/30">
          <div className="flex items-start">
            <div className="text-2xl mr-4">⚠️</div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Payment Emergency?</h2>
              <p className="text-gray-400">
                If you&apos;ve been charged multiple times or experiencing serious payment issues,
                contact the store&apos;s support immediately using the emergency contacts below.
              </p>
            </div>
          </div>
        </div>

        {/* Issues sections */}
        <div className="space-y-16">
          {commonIssues.map((section) => (
            <section key={section.category}>
              <h2 className="text-2xl font-semibold text-white mb-8">{section.category}</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {section.problems.map((problem) => (
                  <div
                    key={problem.title}
                    className={`bg-gray-800/30 rounded-xl p-6 ${
                      problem.urgent ? 'border border-red-500/30' : ''
                    }`}
                  >
                    {problem.urgent && (
                      <div className="text-red-400 text-sm font-medium mb-2">
                        Urgent Issue
                      </div>
                    )}
                    <h3 className="text-xl font-medium text-white mb-2">{problem.title}</h3>
                    <p className="text-gray-400 mb-4">{problem.description}</p>
                    <div className="space-y-2">
                      {problem.solutions.map((solution, index) => (
                        <div key={index} className="flex items-start">
                          <span className="text-blue-400 mr-2">{index + 1}.</span>
                          <p className="text-gray-400 text-sm">{solution}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Emergency contacts */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Emergency Contacts</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {emergencyContacts.map((contact) => (
              <div
                key={contact.platform}
                className="bg-gray-800/30 rounded-xl p-6"
              >
                <h3 className="text-xl font-medium text-white mb-4">{contact.platform}</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-400">
                    Support: {contact.support}
                  </p>
                  <p className="text-sm text-gray-400">
                    Response time: {contact.response}
                  </p>
                  <a
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm inline-block mt-2"
                  >
                    Visit Support Page →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still need help */}
        <div className="mt-16 p-8 bg-blue-900/20 rounded-xl border border-blue-700/30 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-gray-400 mb-8">
            If you&apos;re still experiencing issues, our support team is here to help guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/help/purchase-guide"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              View Purchase Guide
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