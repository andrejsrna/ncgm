import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Platform Guidelines | No Copyright Gaming Music',
  description: 'Detailed guidelines and requirements for using No Copyright Gaming Music on different content platforms.',
};

const guidelines = [
  {
    platform: "Content Creation",
    icon: "🎥",
    rules: [
      {
        title: "Permitted Uses",
        items: [
          "Gaming videos and streams",
          "Video blogs and tutorials",
          "Background music for content",
          "Personal projects",
          "Educational content"
        ],
        type: "allowed"
      },
      {
        title: "Prohibited Uses",
        items: [
          "Reselling or redistributing tracks",
          "Creating music compilations",
          "NFT or digital asset creation",
          "Commercial advertising without license",
          "Claiming ownership of music"
        ],
        type: "prohibited"
      }
    ]
  },
  {
    platform: "Attribution",
    icon: "✏️",
    rules: [
      {
        title: "Required Elements",
        items: [
          "Song title and artist name",
          "Website link (nocopyrightgamingmusic.com)",
          "Purchase platform mention",
          "Proper formatting",
          "Visible placement"
        ],
        type: "required"
      },
      {
        title: "Placement Guidelines",
        items: [
          "Video descriptions",
          "Stream information panels",
          "Credit sections",
          "Social media captions",
          "End credits where applicable"
        ],
        type: "info"
      }
    ]
  },
  {
    platform: "Technical Usage",
    icon: "⚙️",
    rules: [
      {
        title: "Allowed Modifications",
        items: [
          "Volume adjustment",
          "Basic audio editing",
          "Fading in/out",
          "Length trimming",
          "Basic mixing"
        ],
        type: "allowed"
      },
      {
        title: "Prohibited Modifications",
        items: [
          "Remixing without permission",
          "Creating derivative works",
          "Altering core composition",
          "Removing watermarks",
          "Changing metadata"
        ],
        type: "prohibited"
      }
    ]
  }
];

const qualityStandards = [
  {
    title: "Audio Quality",
    description: "Maintain high audio standards in your content",
    requirements: [
      "Use original quality files",
      "Proper volume balancing",
      "Clean audio mixing",
      "No distortion or artifacts"
    ],
    icon: "🎧"
  },
  {
    title: "Content Integration",
    description: "Integrate music appropriately with your content",
    requirements: [
      "Suitable volume levels",
      "Appropriate song selection",
      "Professional transitions",
      "Proper synchronization"
    ],
    icon: "🎮"
  },
  {
    title: "Professional Presentation",
    description: "Maintain professional standards in your content",
    requirements: [
      "Clear attribution",
      "Professional editing",
      "Consistent quality",
      "Platform compliance"
    ],
    icon: "🎯"
  }
];

export default function GuidelinesPage() {
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
            Platform Guidelines
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Comprehensive guidelines for using our music across different content platforms.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Guidelines sections */}
        <div className="space-y-16">
          {guidelines.map((section) => (
            <section key={section.platform}>
              <div className="flex items-center mb-8">
                <span className="text-3xl mr-3">{section.icon}</span>
                <h2 className="text-2xl font-semibold text-white">
                  {section.platform} Guidelines
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {section.rules.map((rule) => (
                  <div
                    key={rule.title}
                    className="bg-gray-800/30 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-medium text-white mb-4">{rule.title}</h3>
                    <ul className="space-y-2">
                      {rule.items.map((item, index) => (
                        <li key={index} className="text-gray-400 text-sm flex items-center">
                          <span className={`mr-2 ${
                            rule.type === 'prohibited' ? 'text-red-400' : 
                            rule.type === 'allowed' ? 'text-green-400' :
                            rule.type === 'required' ? 'text-blue-400' :
                            'text-yellow-400'
                          }`}>
                            {rule.type === 'prohibited' ? '✗' :
                             rule.type === 'allowed' ? '✓' :
                             rule.type === 'required' ? '•' : '↳'}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Quality Standards */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Quality Standards</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {qualityStandards.map((standard) => (
              <div
                key={standard.title}
                className="bg-gray-800/30 rounded-xl p-6"
              >
                <div className="text-3xl mb-4">{standard.icon}</div>
                <h3 className="text-xl font-medium text-white mb-2">{standard.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{standard.description}</p>
                <ul className="space-y-2">
                  {standard.requirements.map((req, index) => (
                    <li key={index} className="text-gray-400 text-sm flex items-center">
                      <span className="text-blue-400 mr-2">{index + 1}.</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-16 p-8 bg-blue-900/20 rounded-xl border border-blue-700/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-semibold text-white mb-4">
              Compliance Note
            </h2>
            <p className="text-gray-400">
              Following these guidelines ensures proper usage of our music and helps maintain 
              high-quality standards across all content platforms. Failure to comply may result 
              in license termination or content claims.
            </p>
          </div>
        </div>

        {/* Help section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Need Clarification?
          </h2>
          <p className="text-gray-400 mb-8">
            Our support team is here to help you understand and follow these guidelines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/help/attribution"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Attribution Guide
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