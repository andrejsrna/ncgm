export default function MusicProfile() {
    return (
      <section className="bg-gray-900 text-white py-10 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Listen to Our Music</h2>
          <p className="text-gray-400 mb-8">
            Discover our latest releases and playlists on Spotify and Apple Music.
          </p>
  
          {/* Spotify Embed */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Spotify</h3>
            <iframe
              src="https://open.spotify.com/embed/artist/702mas8Kyj9BGvD6dZGML8"
              width="100%"
              height="380"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
          {/* Apple Music Embed */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Apple Music</h3>
            <iframe
              src="https://embed.music.apple.com/us/artist/no-copyright-gaming-music/1699748922"
              width="100%"
              height="450"
              allow="autoplay *; encrypted-media *;"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
  