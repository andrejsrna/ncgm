import { Metadata } from 'next';
import { FaYoutube, FaApple, FaComments, FaHeart } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Community | No Copyright Gaming Music',
  description: 'Join our vibrant community of content creators and music enthusiasts. Share your creations, get feedback, and connect with fellow creators.',
};

const socialLinks = [
  {
    name: 'YouTube',
    icon: <FaYoutube className="w-6 text-white h-6" />,
    url: 'https://music.youtube.com/channel/UC6FzeY54doTLkzPJYaapmnQ',
    color: 'from-[#FF0000] to-[#CC0000]'
  },
  {
    name: 'Apple Music',
    icon: <FaApple className="w-6 text-white h-6" />,
    url: 'https://music.apple.com/sk/artist/no-copyright-gaming-music/1699748922?l=sk',
    color: 'from-[#9146FF] to-[#6441A5]'
  },
];

const features = [
  {
    icon: <FaComments className="w-8 h-8" />,
    title: 'Community Support',
    description: 'Get help from experienced creators and our dedicated support team.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <FaHeart className="w-8 h-8" />,
    title: 'Share Your Content',
    description: 'Showcase your creations and get featured on our social media channels.',
    color: 'from-pink-500 to-rose-500'
  }
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Join Our Growing Community
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-100">
            Connect with fellow creators, share your work, and be part of something bigger.
          </p>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16 animate-fade-in-up delay-200">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-r ${social.color} p-0.5 rounded-xl group transform hover:scale-105 transition-all duration-300`}
              >
                <div className="bg-gray-900 rounded-xl p-4 h-full">
                  <div className="flex flex-col items-center gap-2">
                    {social.icon}
                    <span className="text-white font-medium">{social.name}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 animate-fade-in-up delay-${index + 1}00`}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 mb-6`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 