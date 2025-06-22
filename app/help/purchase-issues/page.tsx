import { Metadata } from 'next';
import Link from 'next/link';
import { FaChevronLeft, FaExclamationTriangle, FaShieldAlt, FaDownload, FaUserCircle, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import { SiApplemusic, SiBeatport } from 'react-icons/si';
import { RiAmazonFill } from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'System Anomaly Matrix | No Copyright Gaming Music',
  description: 'Neural protocol error resolution matrix for signal acquisition anomalies.',
};

const commonIssues = [
  {
    category: "Resource Exchange Anomalies",
    icon: <FaShieldAlt className="w-6 h-6" />,
    problems: [
      {
        title: "Exchange Protocol Rejected",
        description: "Neural exchange protocol rejected by marketplace node.",
        solutions: [
          "Verify resource allocation capacity",
          "Enable international exchange protocols",
          "Initialize alternate exchange method",
          "Contact neural bank for protocol authorization"
        ],
        urgent: true
      },
      {
        title: "Protocol Execution Suspended",
        description: "Exchange protocol stuck in initialization loop.",
        solutions: [
          "Allow 15-minute buffer for neural sync",
          "Monitor neural inbox for verification",
          "Avoid multiple protocol executions",
          "Contact node support for protocol reset"
        ],
        urgent: false
      }
    ]
  },
  {
    category: "Data Extraction Failures",
    icon: <FaDownload className="w-6 h-6" />,
    problems: [
      {
        title: "Neural Link Disrupted",
        description: "Signal extraction protocol failure detected.",
        solutions: [
          "Verify neural connection stability",
          "Clear neural cache protocols",
          "Initialize alternate browser matrix",
          "Execute desktop node protocol if available"
        ],
        urgent: true
      },
      {
        title: "Signal Corruption Detected",
        description: "Extracted data patterns show corruption markers.",
        solutions: [
          "Reinitialize extraction protocol",
          "Modify data storage parameters",
          "Verify format compatibility matrix",
          "Request fresh neural link from node support"
        ],
        urgent: true
      }
    ]
  },
  {
    category: "Neural Profile Errors",
    icon: <FaUserCircle className="w-6 h-6" />,
    problems: [
      {
        title: "Profile Initialization Failed",
        description: "Unable to establish neural profile in marketplace matrix.",
        solutions: [
          "Attempt alternate neural signature",
          "Verify confirmation protocols",
          "Adjust encryption parameters",
          "Reset neural cache and reinitialize"
        ],
        urgent: false
      },
      {
        title: "Signal Acquisition Unverified",
        description: "Completed exchange not registered in neural profile.",
        solutions: [
          "Allow 24-hour sync period",
          "Check neural spam filters",
          "Verify neural signature match",
          "Contact support with exchange hash"
        ],
        urgent: false
      }
    ]
  }
];

const emergencyContacts = [
  {
    platform: "Beatport Neural Node",
    icon: <SiBeatport className="w-8 h-8" />,
    support: "support@beatport.com",
    response: "24-48 cycles",
    url: "https://beatport.com/support"
  },
  {
    platform: "Neural Apple Link",
    icon: <SiApplemusic className="w-8 h-8" />,
    support: "Via Apple Neural Matrix",
    response: "24-72 cycles",
    url: "https://support.apple.com/itunes"
  },
  {
    platform: "Amazon Neural Grid",
    icon: <RiAmazonFill className="w-8 h-8" />,
    support: "Via Amazon Neural Hub",
    response: "12-24 cycles",
    url: "https://music.amazon.com/support"
  }
];

export default function PurchaseIssuesPage() {
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
          <div className="flex items-center justify-center mb-12">
            <Link
              href="/help"
              className="group relative inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
            >
              <FaChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="font-mono">Return to Support Matrix</span>
            </Link>
          </div>
          <h1 className="relative inline-block mb-6 mx-auto text-center w-full">
            <span className="absolute -inset-2 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-50 blur"></span>
            <span className="relative text-5xl font-extrabold text-red-500 font-mono tracking-wider">
              System Anomaly Matrix
            </span>
          </h1>
          <p className="text-red-200/70 text-center max-w-2xl mx-auto font-light tracking-wider">
            Neural protocol error resolution matrix for marketplace signal acquisition anomalies.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        {/* Emergency notice */}
        <div className="relative mb-32">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-8">
            <div className="flex items-start gap-6">
              <FaExclamationTriangle className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-mono font-bold text-red-500 mb-3">Critical Exchange Error?</h2>
                <p className="text-red-200/70 tracking-wide">
                  For multiple resource deductions or critical exchange anomalies,
                  establish immediate neural link with node support using emergency protocols below.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Issues sections */}
        <div className="space-y-32">
          {commonIssues.map((section) => (
            <section key={section.category}>
              <div className="flex items-center gap-4 mb-16">
                <div className="text-red-500">{section.icon}</div>
                <h2 className="text-3xl font-mono font-bold text-red-500 tracking-wider">{section.category}</h2>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                {section.problems.map((problem) => (
                  <div
                    key={problem.title}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                    <div className={`relative h-full bg-black border border-red-900/30 p-8 ${
                      problem.urgent ? 'ring-2 ring-red-500' : ''
                    }`}>
                      {problem.urgent && (
                        <div className="text-red-500 text-sm font-mono mb-3 flex items-center gap-2">
                          <FaExclamationTriangle className="w-4 h-4" />
                          Critical Anomaly
                        </div>
                      )}
                      <h3 className="text-xl font-mono font-bold text-red-500 mb-3">{problem.title}</h3>
                      <p className="text-red-200/70 mb-6 tracking-wide">{problem.description}</p>
                      <div className="space-y-3">
                        {problem.solutions.map((solution, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="text-red-500 font-mono">{(index + 1).toString().padStart(2, '0')}</span>
                            <p className="text-red-200/70 text-sm tracking-wide">{solution}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Emergency contacts */}
        <div className="mt-32">
          <h2 className="text-3xl font-mono font-bold text-red-500 tracking-wider mb-16">Emergency Protocols</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {emergencyContacts.map((contact) => (
              <div
                key={contact.platform}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative h-full bg-black border border-red-900/30 p-8">
                  <div className="text-red-500 mb-6">{contact.icon}</div>
                  <h3 className="text-xl font-mono font-bold text-red-500 mb-6">{contact.platform}</h3>
                  <div className="space-y-3">
                    <p className="text-sm text-red-200/70 tracking-wide">
                      Neural Link: {contact.support}
                    </p>
                    <p className="text-sm text-red-200/70 tracking-wide">
                      Response Matrix: {contact.response}
                    </p>
                    <a
                      href={contact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-red-500 hover:text-red-400 text-sm mt-4"
                    >
                      <span>Access Support Node</span>
                      <FaExternalLinkAlt className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still need help */}
        <div className="relative mt-32">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-12 text-center">
            <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-6">
              Additional Support Required?
            </h2>
            <p className="text-red-200/70 mb-12 font-light tracking-wide max-w-2xl mx-auto">
              Our neural support network remains active to assist with protocol anomaly resolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/help/purchase-guide"
                className="group relative inline-flex"
              >
                <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative flex items-center gap-2 px-6 py-3 bg-black border border-red-500/30">
                  <FaShieldAlt className="w-5 h-5 text-red-500" />
                  <span className="font-mono text-red-500">Access Protocol Guide</span>
                </div>
              </Link>
              <a
                href="mailto:support@nocopyrightgamingmusic.com"
                className="group relative inline-flex"
              >
                <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative flex items-center gap-2 px-6 py-3 bg-black border border-red-500/30">
                  <FaEnvelope className="w-5 h-5 text-red-500" />
                  <span className="font-mono text-red-500">Neural Support Link</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
        </div>
      </div>
    </div>
  );
} 