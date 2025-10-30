// data/genres.ts

export interface Genre {
    name: string;
    image: string; // Path to the genre image
    spotifyLink: string; // URL to the Spotify playlist
    description?: string;
  }
  
  export const genres: Genre[] = [
    {
      name: 'Rock',
      image: '/genres/rock.jpeg',
      spotifyLink: 'https://open.spotify.com/playlist/6JmF9Hjfni2Q3fFV8XTnbF?si=4df6e435977740f3',
    },
    {
      name: 'Soundtrack / OST',
      image: '/genres/soundtrack.jpeg',
      spotifyLink: 'https://open.spotify.com/playlist/233KrbnG86TdTif7gi1VbP?si=01b176e606a74106',
    },
    {
      name: 'DnB',
      image: '/genres/dnb.jpeg',
      spotifyLink: 'https://open.spotify.com/playlist/0AHTqy5v90VSELn5PSNHIR?si=a2a9da0cd1ae433c',
    },
    {
      name: 'Chill',
      image: '/genres/chill.jpeg',
      spotifyLink: 'https://open.spotify.com/playlist/4gPzUUBM9CyfM195SP4skO?si=381420d7b2de4917',
    },
    {
      name: 'LoFi',
      image: '/genres/lofi.jpeg',
      spotifyLink: 'https://open.spotify.com/playlist/00qQuYnMQnODrfmK8rpRBe?si=95cdb41074f04dd7',
    },
    {
      name: 'EDM / House',
      image: '/genres/house.jpeg',
      spotifyLink: 'https://open.spotify.com/playlist/4nicLfX3n4otvGU5SjoZFb?si=757cc5b97bd443d2',
    },
    {
      name: 'Trap',
      image: '/genres/trap.jpeg',
      spotifyLink: 'https://open.spotify.com/playlist/54JLrR0nhbE8BWnJoBkZas?si=dab43f751c9f4120',
    },
    {
      name: 'Dubstep / Riddim',
      image: '/genres/dubstep.jpeg',
      spotifyLink: 'https://open.spotify.com/playlist/4o0c9SzWosfoShPOVPcPNa?si=8ec39d8f3e854f92',
    },
    {
      name: 'Techno',
      image: '/genres/techno.jpeg',
      spotifyLink: 'https://open.spotify.com/playlist/4JarxYpGaTmGGJiITjnebi?si=ca46836165cc4270',
    },
    {
      name: 'Synthwave',
      image: '/genres/synthwave.jpeg',
      spotifyLink: 'https://open.spotify.com/playlist/160KDFKSAlX8lr0cxfLCfC?si=226020640c474ab5',
    },
  ];
  
