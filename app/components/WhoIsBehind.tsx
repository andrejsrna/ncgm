// components/WhoIsBehind.jsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaSoundcloud, FaYoutube } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/asana_dnb',
    icon: <FaSoundcloud />,
    color: '#ff5500'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/asana.dnb',
    icon: <FaInstagram />,
    color: '#E4405F'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@asana7958',
    icon: <FaYoutube />,
    color: '#FF0000'
  }
];

export default function WhoIsBehind() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          {/* Background accent */}
          <div className="absolute inset-0 bg-blue-500/10 rounded-3xl backdrop-blur-3xl" />

          <div className="relative rounded-3xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center md:items-stretch p-8 md:p-12">
              {/* Profile Image Column */}
              <div className="md:w-1/3 flex flex-col items-center md:items-start mb-8 md:mb-0">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur"></div>
                  <div className="relative">
                    <Image
                      src="/asana-profile.jpeg"
                      alt="Asana - Drum and Bass DJ and Producer"
                      width={250}
                      height={250}
                      className="rounded-full shadow-2xl"
                    />
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 mt-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full transition-transform hover:scale-110"
                      style={{ backgroundColor: `${social.color}20` }}
                    >
                      <span className="text-xl" style={{ color: social.color }}>
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Content Column */}
              <div className="md:w-2/3 md:pl-12">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-white mb-6">
                    Who is Behind the Project
                  </h2>

                  <div className="prose prose-invert">
                    <p className="text-lg text-gray-300">
                      Hi there! I&apos;m <span className="text-blue-400 font-semibold">Asana</span>,
                      a passionate Drum and Bass DJ and Producer. I manage the label
                      <span className="text-purple-400 font-semibold"> DnB Doctor</span>,
                      a cutting-edge record label devoted to the exhilarating world of Neurofunk Drum and Bass.
                    </p>

                    <p className="text-lg text-gray-300">
                      When I&apos;m not immersed in the world of music production, you&apos;ll find me
                      indulging in my love for gaming. I started this project as a way to support my
                      gamer friends, providing them with legal and worry-free music to elevate their
                      streams, videos, and gaming sessions.
                    </p>

                    <p className="text-lg text-gray-300">
                      Combining my two passions—music and gaming—has been an incredible journey, and
                      I&apos;m excited to continue growing this community. Thank you for being a part of
                      <span className="text-blue-400 font-semibold"> No Copyright Gaming Music</span>!
                    </p>
                  </div>

                  <div className="pt-6">
                    <Link
                      href="/about"
                      className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Learn More About Us
                      <svg
                        className="ml-2 w-5 h-5"
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
                    </Link>
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
