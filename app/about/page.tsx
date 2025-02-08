import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | No Copyright Gaming Music',
  description: 'Learn about No Copyright Gaming Music, our mission, and our commitment to providing high-quality music for content creators.',
};

const missionPoints = [
  {
    title: "Quality Music",
    description: "We curate and provide high-quality music specifically designed for gaming content creators.",
    icon: "🎵"
  },
  {
    title: "Creator Support",
    description: "We empower content creators with hassle-free music licensing and clear usage rights.",
    icon: "🎮"
  },
  {
    title: "Fair Licensing",
    description: "We ensure fair compensation for artists while keeping music accessible for creators.",
    icon: "⚖️"
  }
];

const features = [
  {
    title: "Curated Selection",
    points: [
      "Gaming-focused music library",
      "High-quality audio formats",
      "Regular new releases",
      "Multiple genres available"
    ],
    icon: "🎼"
  },
  {
    title: "Clear Licensing",
    points: [
      "Simple attribution requirements",
      "Monetization allowed",
      "Platform-wide coverage",
      "Perpetual license"
    ],
    icon: "📜"
  },
  {
    title: "Creator Tools",
    points: [
      "Easy download system",
      "Technical support",
      "Usage guidelines",
      "Content ID protection"
    ],
    icon: "🛠️"
  }
];

const values = [
  {
    title: "Quality",
    description: "We maintain high standards in music selection and technical quality.",
    icon: "⭐"
  },
  {
    title: "Transparency",
    description: "Clear terms, straightforward licensing, and open communication.",
    icon: "🔍"
  },
  {
    title: "Support",
    description: "Dedicated to helping creators succeed with their content.",
    icon: "🤝"
  },
  {
    title: "Innovation",
    description: "Continuously improving our service and adapting to creator needs.",
    icon: "💡"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero section */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            About No Copyright Gaming Music
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Empowering content creators with high-quality music solutions since 2023.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Mission section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Mission</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {missionPoints.map((point) => (
              <div
                key={point.title}
                className="bg-gray-800/30 rounded-xl p-8 text-center hover:bg-gray-800/40 transition-colors"
              >
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{point.title}</h3>
                <p className="text-gray-400">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What We Offer</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-800/30 rounded-xl p-8 hover:bg-gray-800/40 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.points.map((point, index) => (
                    <li key={index} className="text-gray-400 flex items-center">
                      <span className="text-blue-400 mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Values section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-gray-800/30 rounded-xl p-6 text-center hover:bg-gray-800/40 transition-colors"
              >
                <div className="text-3xl mb-3">{value.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-blue-900/20 rounded-xl p-8 border border-blue-700/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">
              No Copyright Gaming Music
            </h2>
            <div className="space-y-4 text-gray-400">
              <p>
                Founded in 2023, No Copyright Gaming Music has grown to become a trusted source 
                of high-quality music for content creators worldwide. Our platform bridges the gap 
                between musicians and content creators, providing clear licensing and professional support.
              </p>
              <p>
                Based in Bratislava, Slovakia, we operate globally, serving creators across all major 
                content platforms. Our team is dedicated to maintaining the highest standards in music 
                curation and technical quality.
              </p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 mb-8">
            Have questions about our company or services? We&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/help"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Support Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 