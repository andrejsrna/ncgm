import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Technical Support | No Copyright Gaming Music',
  description: 'Technical support and troubleshooting guide for using No Copyright Gaming Music.',
};

const commonIssues = [
  {
    category: "Audio Quality",
    icon: "🎧",
    problems: [
      {
        title: "Low Audio Quality",
        symptoms: [
          "Distorted sound",
          "Low bitrate audio",
          "Compression artifacts"
        ],
        solutions: [
          "Verify you downloaded the high-quality version",
          "Check if using correct format (WAV/320kbps MP3)",
          "Re-download from original source",
          "Ensure proper audio export settings"
        ]
      },
      {
        title: "Volume Issues",
        symptoms: [
          "Too quiet/loud",
          "Inconsistent levels",
          "Clipping audio"
        ],
        solutions: [
          "Use audio normalization",
          "Check master volume levels",
          "Apply proper gain staging",
          "Use audio limiters if needed"
        ]
      }
    ]
  },
  {
    category: "File Formats",
    icon: "📁",
    problems: [
      {
        title: "Format Compatibility",
        symptoms: [
          "File won&apos;t play",
          "Editor doesn&apos;t recognize format",
          "Conversion errors"
        ],
        solutions: [
          "Use supported format for your platform",
          "Convert using professional tools",
          "Download correct format version",
          "Update media software/codecs"
        ]
      },
      {
        title: "Metadata Issues",
        symptoms: [
          "Missing track info",
          "Incorrect tags",
          "File organization problems"
        ],
        solutions: [
          "Use metadata editing software",
          "Re-download with full metadata",
          "Manually add correct information",
          "Organize files systematically"
        ]
      }
    ]
  },
  {
    category: "Software Integration",
    icon: "🎮",
    problems: [
      {
        title: "DAW Compatibility",
        symptoms: [
          "Import failures",
          "Plugin conflicts",
          "Playback issues"
        ],
        solutions: [
          "Update DAW software",
          "Check format compatibility",
          "Clear software cache",
          "Use supported sample rate"
        ]
      },
      {
        title: "Streaming Software",
        symptoms: [
          "Audio desync",
          "Streaming artifacts",
          "OBS integration issues"
        ],
        solutions: [
          "Configure correct audio settings",
          "Use appropriate bitrate",
          "Set proper audio buffer",
          "Update streaming software"
        ]
      }
    ]
  }
];

const technicalSpecs = [
  {
    title: "Supported Formats",
    specs: [
      "WAV (48kHz/24-bit)",
      "MP3 (320kbps)",
      "AIFF (48kHz/24-bit)",
      "FLAC (lossless)"
    ],
    icon: "📊"
  },
  {
    title: "System Requirements",
    specs: [
      "Modern web browser",
      "Audio playback capability",
      "Sufficient storage space",
      "Stable internet connection"
    ],
    icon: "💻"
  },
  {
    title: "Software Compatibility",
    specs: [
      "Major DAWs supported",
      "Common video editors",
      "Streaming software",
      "Media players"
    ],
    icon: "🔧"
  }
];

export default function TechnicalPage() {
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
            Technical Support
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Find solutions to technical issues and learn about our supported formats and specifications.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Technical Specifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Technical Specifications</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {technicalSpecs.map((spec) => (
              <div
                key={spec.title}
                className="bg-gray-800/30 rounded-xl p-6"
              >
                <div className="text-3xl mb-4">{spec.icon}</div>
                <h3 className="text-xl font-medium text-white mb-4">{spec.title}</h3>
                <ul className="space-y-2">
                  {spec.specs.map((item, index) => (
                    <li key={index} className="text-gray-400 text-sm flex items-center">
                      <span className="text-blue-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Common Issues */}
        <div className="space-y-16">
          {commonIssues.map((category) => (
            <section key={category.category}>
              <div className="flex items-center mb-8">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h2 className="text-2xl font-semibold text-white">
                  {category.category} Issues
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {category.problems.map((problem) => (
                  <div
                    key={problem.title}
                    className="bg-gray-800/30 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-medium text-white mb-4">{problem.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-medium mb-2">Symptoms:</h4>
                        <ul className="space-y-1">
                          {problem.symptoms.map((symptom, index) => (
                            <li key={index} className="text-gray-400 text-sm flex items-center">
                              <span className="text-red-400 mr-2">⚠</span>
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Solutions:</h4>
                        <ul className="space-y-1">
                          {problem.solutions.map((solution, index) => (
                            <li key={index} className="text-gray-400 text-sm flex items-center">
                              <span className="text-green-400 mr-2">✓</span>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Help section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Still Having Issues?
          </h2>
          <p className="text-gray-400 mb-8">
            Our technical support team is here to help you resolve any technical problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/help/platforms"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Platform Guidelines
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