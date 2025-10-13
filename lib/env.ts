const fallbackSiteUrl = "https://nocopyrightgamingmusic.com";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallbackSiteUrl;

export const SITE_URL = rawSiteUrl.replace(/\/$/, "");

export const getCanonicalUrl = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
};
