import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white py-20 px-5">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img
          src="/logo.png" // Nahraďte cestu k vášmu logu
          alt="No Copyright Gaming Music Logo"
          className="w-24 h-24"
        />
      </div>

      {/* Obsah */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          No Copyright Gaming Music
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
        Discover free music for your gaming projects, streams, and videos.
        Everything is 100% legal and worry-free.
        </p>

        {/* Tlačidlá */}
        <div className="flex justify-center gap-4">
        <a href="https://open.spotify.com/artist/702mas8Kyj9BGvD6dZGML8?si=SznV9ijiTMW3JH-0wvx6rw" className="no-underline">
          <Button variant="destructive" className="px-6 py-3 text-lg" >
          Explore Music
          </Button>
          </a>
          <a href="#more" className="no-underline">

          <Button variant="secondary" className="px-6 py-3 text-lg">
          Learn More
          </Button>
          </a>
        </div>
      </div>

      {/* Dekoratívne pozadie */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-transparent to-gray-900 opacity-50"></div>
    </section>
  );
}
