import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Copyright Claims Guide | No Copyright Gaming Music',
  description: 'Learn how to handle and resolve copyright claims when using No Copyright Gaming Music in your content.',
};

const claimTypes = [
  {
    type: "YouTube Claims",
    icon: "📺",
    scenarios: [
      {
        title: "Content ID Match",
        description: "Automated claim by YouTube&apos;s Content ID system",
        steps: [
          "Verify your purchase receipt",
          "Check attribution in description",
          "Use our dispute template",
          "Include proof of purchase",
          "Wait for review (usually 24-48h)"
        ],
        severity: "medium"
      },
      {
        title: "Manual Claim",
        description: "Claim submitted manually by another party",
        steps: [
          "Document claim details",
          "Contact our support immediately",
          "Provide video URL and claim info",
          "Do not dispute without our guidance",
          "Await our resolution"
        ],
        severity: "high"
      }
    ]
  },
  {
    type: "Twitch VOD Muting",
    icon: "🎮",
    scenarios: [
      {
        title: "Audio Muting",
        description: "Twitch automatically mutes portions of your VOD",
        steps: [
          "Screenshot muted segments",
          "Verify stream attribution",
          "Contact Twitch support",
          "Provide license proof",
          "Request unmuting"
        ],
        severity: "low"
      },
      {
        title: "DMCA Notification",
        description: "Formal DMCA notice received for your content",
        steps: [
          "Do not delete content immediately",
          "Contact our support first",
          "Document all notifications",
          "Follow our DMCA guidance",
          "Submit counter-notification"
        ],
        severity: "high"
      }
    ]
  }
];

const preventionSteps = [
  {
    title: "Proper Attribution",
    description: "Always include complete and correct attribution",
    steps: [
      "Use exact song titles",
      "Include our website link",
      "Mention purchase platform",
      "Keep format consistent",
      "Update if changes made"
    ],
    icon: "✍️"
  },
  {
    title: "Documentation",
    description: "Maintain proper records of your purchases",
    steps: [
      "Save purchase receipts",
      "Screenshot license details",
      "Store email confirmations",
      "Organize by date",
      "Back up all proofs"
    ],
    icon: "📄"
  },
  {
    title: "Regular Monitoring",
    description: "Keep track of your content&apos;s status",
    steps: [
      "Check notifications daily",
      "Monitor content status",
      "Review automated claims",
      "Verify attribution regularly",
      "Update as needed"
    ],
    icon: "👀"
  }
];

const emergencySteps = [
  {
    title: "1. Stay Calm",
    description: "Don&apos;t panic or make hasty decisions. Most claims can be resolved quickly with proper documentation."
  },
  {
    title: "2. Document Everything",
    description: "Take screenshots of claims, gather purchase receipts, and save all relevant communication."
  },
  {
    title: "3. Contact Support",
    description: "Reach out to our support team immediately with all documentation and details."
  },
  {
    title: "4. Follow Instructions",
    description: "Wait for our guidance and follow the provided steps exactly."
  }
];

export default function CopyrightClaimsPage() {
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
            Copyright Claims Guide
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Learn how to handle and resolve copyright claims across different platforms.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Emergency Steps */}
        <div className="mb-16">
          <div className="bg-red-900/20 rounded-xl p-8 border border-red-700/30">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="text-2xl mr-3">🚨</span>
              Emergency Steps
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {emergencySteps.map((step) => (
                <div key={step.title} className="bg-gray-800/30 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Claim Types */}
        <div className="space-y-16 mb-16">
          {claimTypes.map((platform) => (
            <section key={platform.type}>
              <div className="flex items-center mb-8">
                <span className="text-3xl mr-3">{platform.icon}</span>
                <h2 className="text-2xl font-semibold text-white">
                  {platform.type}
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {platform.scenarios.map((scenario) => (
                  <div
                    key={scenario.title}
                    className={`bg-gray-800/30 rounded-xl p-6 ${
                      scenario.severity === 'high' ? 'border border-red-500/30' :
                      scenario.severity === 'medium' ? 'border border-yellow-500/30' :
                      ''
                    }`}
                  >
                    {scenario.severity === 'high' && (
                      <div className="text-red-400 text-sm font-medium mb-2">
                        High Priority
                      </div>
                    )}
                    <h3 className="text-xl font-medium text-white mb-2">{scenario.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{scenario.description}</p>
                    <div className="space-y-2">
                      {scenario.steps.map((step, index) => (
                        <div key={index} className="flex items-start">
                          <span className="text-blue-400 mr-2">{index + 1}.</span>
                          <p className="text-gray-400 text-sm">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Prevention Steps */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-8">Prevent Future Claims</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {preventionSteps.map((prevention) => (
              <div
                key={prevention.title}
                className="bg-gray-800/30 rounded-xl p-6"
              >
                <div className="text-3xl mb-4">{prevention.icon}</div>
                <h3 className="text-xl font-medium text-white mb-2">{prevention.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{prevention.description}</p>
                <ul className="space-y-2">
                  {prevention.steps.map((step, index) => (
                    <li key={index} className="text-gray-400 text-sm flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Help section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Need Help With a Claim?
          </h2>
          <p className="text-gray-400 mb-8">
            Our support team is ready to assist you with any copyright claims or disputes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/help/content-id"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Content ID Guide
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