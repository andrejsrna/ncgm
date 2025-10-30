export const SITE_NAME = "NJK Music";
export const SITE_DOMAIN = "njkmusic.com";
export const SITE_DESCRIPTION =
  "NJK Music curates label-driven, creator-ready soundscapes for streamers, studios, and storytellers.";

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
