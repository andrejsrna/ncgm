export const SITE_NAME = "NJK Music";
export const SITE_DOMAIN = "njkmusic.com";
export const SITE_DESCRIPTION =
  "NJK Music curates in-house label moods with creator-ready soundscapes for streamers, studios, and storytellers.";

export interface LabelDefinition {
  slug: string;
  name: string;
  short?: string;
  tagline: string;
  description: string;
  heroImage?: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  highlights: string[];
  callouts: {
    title: string;
    detail: string;
  }[];
}

export const LABEL_DEFINITIONS: Record<string, LabelDefinition> = {
  "no-copyright-gaming-music": {
    slug: "no-copyright-gaming-music",
    name: "No Copyright Gaming Music",
    short: "NCGM",
    tagline: "Stream-Safe Power Tracks for the Gaming Universe",
    description:
      "No Copyright Gaming Music delivers adrenaline-fueled soundtracks engineered for streamers, esports orgs, and content studios. Every release is cleared for monetisation, giving creators a reliable source of high-octane, copyright-free music.",
    heroImage: "/logo.png",
    seo: {
      title: "No Copyright Gaming Music Label | NJK Music",
      description:
        "Browse the complete No Copyright Gaming Music catalog – stream-safe, royalty-free releases designed for gamers, streamers, and digital storytellers.",
      keywords: [
        "no copyright gaming music",
        "ncgm label",
        "royalty free gaming music",
        "stream safe music",
        "gaming label",
      ],
    },
    highlights: [
      "Royalty-free catalogue engineered for Twitch, YouTube, and esports productions",
      "High-impact EDM, synthwave, hip hop, phonk, and cinematic cues for digital storytellers",
      "Creator-friendly licensing with lifetime usage and monetisation approved worldwide",
    ],
    callouts: [
      { title: "Launch Year", detail: "2018" },
      { title: "Releases", detail: "40+ curated drops" },
      { title: "Focus", detail: "Gaming, Esports, Streaming" },
    ],
  },
  "calm-spirit-music": {
    slug: "calm-spirit-music",
    name: "Calm Spirit Music",
    short: "CSM",
    tagline: "Mindful soundscapes for meditation, yoga, and deep focus",
    description:
      "Calm Spirit Music delivers serene, restorative compositions for meditation guides, wellness studios, and creators who need soothing background scores. Each release balances ambient textures with gentle rhythms to help audiences disconnect from stress and reconnect with calm.",
    seo: {
      title: "Calm Spirit Music Label | NJK Music",
      description:
        "Explore Calm Spirit Music releases—soothing, stream-safe ambient and meditation tracks for wellness creators, spas, and mindfulness apps.",
      keywords: [
        "calm spirit music",
        "meditation music label",
        "relaxing ambient music",
        "yoga background music",
        "wellness soundtrack",
      ],
    },
    highlights: [
      "Guided-meditation ready beds crafted for wellness studios and mindfulness apps",
      "Gentle ambient textures ideal for yoga flows, breathwork, and deep focus sessions",
      "Stream-safe licensing for creators, therapists, and live wellness broadcasts",
    ],
    callouts: [
      { title: "Launch Year", detail: "2025" },
      { title: "Releases", detail: "1st healing drop" },
      { title: "Focus", detail: "Meditation, Wellness, Relaxation" },
    ],
  },
  "jazz-and-bass": {
    slug: "jazz-and-bass",
    name: "Jazz & Bass",
    short: "J&B",
    tagline: "Funky liquid drum & bass with jazz-soaked grooves",
    description:
      "Jazz & Bass blends upright bass loops, brushed drums, and velvet keys with rolling liquid drum & bass percussion. These releases are licensed for traditional distribution but remain copyrighted for social media platforms, so creators must secure clearance before featuring them in monetised content.",
    seo: {
      title: "Jazz & Bass Label | Liquid Drum and Bass for Creators",
      description:
        "Discover Jazz & Bass releases—funky liquid drum & bass infused with jazz instrumentation. Rights-managed catalogue for sync, ads, and premium storytelling.",
      keywords: [
        "liquid drum and bass",
        "jazz drum and bass label",
        "jazz and bass music",
        "funky liquid dnb",
        "rights managed drum and bass",
      ],
    },
    highlights: [
      "Liquid DnB arrangements layered with horns, Rhodes, and upright bass motifs",
      "Copyrighted catalogue requiring bespoke licensing for reels, shorts, and live streams",
      "Perfect for sync deals, brand ads, nightlife recaps, and fashion reels once cleared",
    ],
    callouts: [
      { title: "Launch Year", detail: "2025" },
      { title: "Releases", detail: "Debut set dropping soon" },
      { title: "Rights", detail: "Copyrighted / Rights-managed" },
      { title: "Focus", detail: "Liquid DnB, Funk, Jazz Fusion" },
    ],
  },
};

export const PRIMARY_LABEL = LABEL_DEFINITIONS["no-copyright-gaming-music"];

export const SITE_AUTHOR = {
  name: SITE_NAME,
  url: `https://${SITE_DOMAIN}`,
};

export const LABEL_LIST = Object.values(LABEL_DEFINITIONS);

export function getLabelDefinition(slug: string): LabelDefinition | undefined {
  return LABEL_DEFINITIONS[slug];
}
