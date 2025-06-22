// components/WhoIsBehind.jsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaSoundcloud, FaYoutube } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';

const socialLinks = [
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/asana_dnb',
    icon: <FaSoundcloud />,
    color: '#ff5500',
    hoverColor: '#ff7733'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/asana.dnb',
    icon: <FaInstagram />,
    color: '#E4405F',
    hoverColor: '#e95f78'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@asana7958',
    icon: <FaYoutube />,
    color: '#FF0000',
    hoverColor: '#ff3333'
  }
];

export default function WhoIsBehind() {
  return (
    <section className="py-24 bg-black relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-noise opacity-[0.15]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>
      
      {/* Halftone Pattern */}
      <div 
        className="absolute inset-0 mix-blend-soft-light opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.9) 2px, transparent 2px),
            radial-gradient(circle at 0% 0%, rgba(185, 28, 28, 0.9) 2px, transparent 2px)
          `,
          backgroundSize: '24px 24px, 24px 24px',
          backgroundPosition: '0 0, 12px 12px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-full bg-red-900/20 mb-4">
            <FiUser className="w-6 h-6 text-red-500" />
          </div>
          <h2 
            className="text-4xl font-bold text-white mb-6 tracking-tight"
            style={{ 
              textShadow: '2px 2px 0px rgba(185, 28, 28, 0.3)'
            }}
          >
            The Mind Behind the Machine
          </h2>
          <p className="text-lg text-red-200/70 max-w-2xl mx-auto font-light tracking-wide">
            Where digital rhythms meet human creativity. The architect of your sonic escape.
          </p>
        </div>

        <div className="relative">
          {/* Card Container */}
          <div className="group relative">
            {/* Card Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-900 to-red-800 opacity-75 blur transition duration-500"></div>
            
            {/* Card Content */}
            <div className="relative bg-black border border-red-900/30 overflow-hidden">
              <div className="flex flex-col md:flex-row items-center md:items-stretch p-8 md:p-12">
                {/* Profile Image Column */}
                <div className="md:w-1/3 flex flex-col items-center md:items-start mb-8 md:mb-0">
                  <div className="relative group/img">
                    {/* Image Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-800 to-red-600 rounded-full opacity-75 group-hover/img:opacity-100 transition duration-300 blur"></div>
                    
                    {/* Image Container */}
                    <div className="relative">
                      <div className="relative rounded-full overflow-hidden">
                        <Image
                          src="/asana-profile.jpeg"
                          alt="Asana - Drum and Bass DJ and Producer"
                          width={250}
                          height={250}
                          className="rounded-full brightness-90 saturate-75"
                        />
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-transparent mix-blend-overlay"></div>
                        
                        {/* Halftone Pattern */}
                        <div className="absolute inset-0 mix-blend-soft-light opacity-30"
                             style={{
                               backgroundImage: `radial-gradient(circle at 30% 107%, rgba(185, 28, 28, 0.8) 1px, transparent 1px)`,
                               backgroundSize: '3px 3px'
                             }} />
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4 mt-8">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/social relative"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover/social:opacity-100 blur transition duration-300"
                             style={{ 
                               backgroundImage: `linear-gradient(to right, ${social.color}, ${social.hoverColor})`
                             }}></div>
                        <div className="relative p-3 bg-black border"
                             style={{ borderColor: `${social.color}40` }}>
                          <span className="text-xl transition-colors duration-300"
                                style={{ 
                                  color: social.color,
                                }}>
                            {social.icon}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Content Column */}
                <div className="md:w-2/3 md:pl-12">
                  <div className="space-y-6">
                    <div className="prose prose-invert">
                      <p className="text-lg text-red-200/90 font-light leading-relaxed">
                        Greetings, digital wanderer. I&apos;m <span className="text-red-400 font-medium">Asana</span>,
                        weaving sonic landscapes in the realm of Drum and Bass. At the helm of
                        <span className="text-red-400 font-medium"> DnB Doctor</span>,
                        I orchestrate the future sounds of Neurofunk.
                      </p>

                      <p className="text-lg text-red-200/90 font-light leading-relaxed">
                        Beyond the studio, I traverse the digital plains of gaming. This project emerged
                        from a vision to empower fellow gamers with unrestricted soundscapes, enhancing
                        their digital narratives through streams and content.
                      </p>

                      <p className="text-lg text-red-200/90 font-light leading-relaxed">
                        The fusion of electronic rhythms and virtual worlds has been my odyssey. Welcome to
                        <span className="text-red-400 font-medium"> No Copyright Gaming Music</span>,
                        where sound meets the digital frontier.
                      </p>
                    </div>

                    <div className="pt-6">
                      <Link
                        href="/about"
                        className="group relative inline-block"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-800 to-red-600 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                        <div className="relative flex items-center gap-2 px-8 py-4 bg-black border border-red-800/50 group-hover:border-red-600/50 transition-colors duration-500">
                          <span className="text-red-400 font-medium tracking-wide">Decode Our Story</span>
                          <svg
                            className="w-5 h-5 text-red-500 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
