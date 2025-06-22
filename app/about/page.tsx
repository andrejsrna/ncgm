import { Metadata } from 'next';
import Link from 'next/link';
import { FaServer, FaShieldAlt, FaCode, FaNetworkWired, FaTerminal, FaLongArrowAltRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Core Protocol | Neural Copyright Gaming Matrix',
  description: 'Access the mainframe. Discover the neural network behind the sonic revolution.',
};

const missionPoints = [
  {
    title: "Neural Audio Core",
    description: "Advanced sonic algorithms engineered for maximum digital impact across all content matrices.",
    icon: <FaServer className="w-8 h-8" />
  },
  {
    title: "Creator Protocol",
    description: "Empowering digital architects with quantum-secured audio deployment systems.",
    icon: <FaCode className="w-8 h-8" />
  },
  {
    title: "Secure Distribution",
    description: "Military-grade licensing protocols ensuring protected data transmission.",
    icon: <FaShieldAlt className="w-8 h-8" />
  }
];

const features = [
  {
    title: "Quantum Database",
    points: [
      "Neural-enhanced audio core",
      "High-fidelity data streams",
      "Real-time sonic updates",
      "Multi-genre matrices"
    ],
    icon: <FaNetworkWired className="w-8 h-8" />
  },
  {
    title: "Security Protocol",
    points: [
      "Quantum attribution system",
      "Monetization clearance",
      "Cross-platform integration",
      "Perpetual access codes"
    ],
    icon: <FaShieldAlt className="w-8 h-8" />
  },
  {
    title: "Neural Interface",
    points: [
      "Instant data extraction",
      "Technical matrix support",
      "Protocol guidelines",
      "Neural ID protection"
    ],
    icon: <FaTerminal className="w-8 h-8" />
  }
];

const values = [
  {
    title: "Core Integrity",
    description: "Maintaining quantum-level standards in sonic selection and technical protocols.",
    icon: <FaServer className="w-6 h-6" />
  },
  {
    title: "Neural Clarity",
    description: "Transparent protocols, secure licensing, open neural pathways.",
    icon: <FaNetworkWired className="w-6 h-6" />
  },
  {
    title: "System Support",
    description: "Dedicated neural network for creator success protocols.",
    icon: <FaTerminal className="w-6 h-6" />
  },
  {
    title: "Digital Evolution",
    description: "Continuous system upgrades based on neural feedback loops.",
    icon: <FaCode className="w-6 h-6" />
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-black to-black" />
        
        {/* Noir Grid Pattern */}
        <div 
          className="absolute inset-0 mix-blend-color-burn opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.7) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      {/* Hero section */}
      <div className="relative border-b border-red-900/20">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="relative text-5xl font-bold font-mono text-center mb-6">
            <span className="absolute -left-0.5 -top-0.5 text-red-600 opacity-80 blur-[1px] select-none">
              Neural Copyright Matrix
            </span>
            <span className="relative text-white">
              Neural Copyright Matrix
            </span>
          </h1>
          <p className="text-red-200/70 text-center max-w-2xl mx-auto font-mono">
            Empowering digital architects with quantum-secured audio protocols since 2023.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        {/* Mission section */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold font-mono text-red-500 text-center mb-16">
            <span className="text-xs text-red-800 block">[DIRECTIVE]</span>
            Core Protocol
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {missionPoints.map((point) => (
              <div
                key={point.title}
                className="group relative"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-red-800/50 via-red-600/50 to-red-800/50 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                <div className="relative p-8 bg-black border border-red-900/30">
                  <div className="text-red-500 mb-6">{point.icon}</div>
                  <h3 className="text-xl font-mono font-medium text-red-400 mb-3">{point.title}</h3>
                  <p className="font-mono text-red-200/70">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features section */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold font-mono text-red-500 text-center mb-16">
            <span className="text-xs text-red-800 block">[SYSTEMS]</span>
            Neural Network Access
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-red-800/50 via-red-600/50 to-red-800/50 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                <div className="relative p-8 bg-black border border-red-900/30">
                  <div className="text-red-500 mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-mono font-medium text-red-400 mb-4">{feature.title}</h3>
                  <ul className="space-y-3">
                    {feature.points.map((point, index) => (
                      <li key={index} className="font-mono text-red-200/70 flex items-center">
                        <span className="text-red-800 mr-2">&gt;</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values section */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold font-mono text-red-500 text-center mb-16">
            <span className="text-xs text-red-800 block">[CORE]</span>
            System Values
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group relative"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-red-800/50 via-red-600/50 to-red-800/50 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                <div className="relative p-6 bg-black border border-red-900/30 text-center">
                  <div className="text-red-500 mb-4">{value.icon}</div>
                  <h3 className="text-lg font-mono font-medium text-red-400 mb-2">{value.title}</h3>
                  <p className="font-mono text-sm text-red-200/70">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="relative mb-32">
          <div className="absolute -inset-px bg-gradient-to-r from-red-900/50 via-red-800/30 to-red-900/50 blur" />
          <div className="relative bg-black border border-red-900/30 p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-mono font-medium text-red-400 mb-6">
                Neural Copyright Gaming Matrix
              </h2>
              <div className="space-y-6 font-mono text-red-200/70">
                <p>
                  Initialized in 2023, the Neural Copyright Gaming Matrix has evolved into a 
                  quantum-secured source of high-fidelity audio protocols for digital architects 
                  worldwide. Our neural network bridges the gap between sonic engineers and content 
                  creators through secure licensing protocols and advanced support systems.
                </p>
                <p>
                  Operating from our core nexus in Bratislava, Slovakia, we maintain global neural 
                  pathways across all major content matrices. Our directive remains focused on 
                  maintaining quantum-level standards in sonic curation and technical protocols.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div className="text-center">
          <h2 className="text-2xl font-mono font-medium text-red-400 mb-6">
            <span className="text-xs text-red-800 block">[CONNECT]</span>
            Initialize Neural Link
          </h2>
          <p className="font-mono text-red-200/70 mb-8">
            Access our support matrix for direct neural interface connection.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-70 group-hover:opacity-100 blur transition-opacity duration-500" />
              <div className="relative flex items-center bg-black px-8 py-4 font-mono">
                <span className="text-red-400 group-hover:text-red-300 transition-colors">
                  Neural Link
                </span>
                <FaLongArrowAltRight className="ml-2 text-red-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link
              href="/help"
              className="group relative inline-flex items-center"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-red-900/50 to-red-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center px-8 py-4 bg-black border border-red-900/30 font-mono">
                <span className="text-red-200/70 group-hover:text-red-200 transition-colors">
                  Support Matrix
                </span>
                <FaLongArrowAltRight className="ml-2 text-red-800 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 