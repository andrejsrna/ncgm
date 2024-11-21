// components/WhoIsBehind.jsx
'use client';

import React from 'react';
import Image from 'next/image';

export default function WhoIsBehind() {
  return (
    <section className="py-12 bg-destructive text-white">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start">
        {/* Profile Image */}
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-8">
          <Image
            src="/asana-profile.jpeg" // Replace with your image path
            alt="Asana - Drum and Bass DJ and Producer"
            width={200}
            height={200}
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Bio Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Who is Behind the Project</h2>
          <p className="text-lg mb-4">
            Hi there! I&apos;m <strong>Asana</strong>, a passionate Drum and Bass DJ and Producer. I manage the label
            <strong> DnB Doctor</strong>, a cutting-edge record label devoted to the exhilarating world of Neurofunk Drum and Bass. 
          </p>
          <p className="text-lg mb-4">
            When I&apos;m not immersed in the world of music production, you&apos;ll find me indulging in my love for gaming. I started this project as a way to support my gamer friends, providing them with legal and worry-free music to elevate their streams, videos, and gaming sessions.
          </p>
          <p className="text-lg">
            Combining my two passions—music and gaming—has been an incredible journey, and I&apos;m excited to continue growing this community. Thank you for being a part of <strong>No Copyright Gaming Music</strong>!
          </p>
        </div>
      </div>
    </section>
  );
}