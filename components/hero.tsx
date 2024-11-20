import { Button } from "./ui/button";
import Link from 'next/link'; // Import Link from next/link

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white py-20 px-5">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img
          src="/logo.png" // Replace with the correct path to your logo
          alt="No Copyright Gaming Music Logo"
          className="w-24 h-24"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          No Copyright Gaming Music
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Discover free music for your gaming projects, streams, and videos.
          Everything is 100% legal and worry-free.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          {/* External Link Button */}
          <a
            href="https://open.spotify.com/artist/702mas8Kyj9BGvD6dZGML8?si=SznV9ijiTMW3JH-0wvx6rw"
            className="no-underline"
            target="_blank"
            rel="noopener noreferrer" // Best practice for external links
          >
            <Button variant="destructive" className="px-6 py-3 text-lg">
              Explore Music
            </Button>
          </a>

          {/* Internal Link Button */}
          <Link href="#more" className="no-underline">
            <Button variant="secondary" className="px-6 py-3 text-lg">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-transparent to-gray-900 opacity-50 pointer-events-none z-0"></div>
    </section>
  );
}
