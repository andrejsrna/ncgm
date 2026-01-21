function coerceUrl(input: string): URL | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  try {
    return new URL(trimmed);
  } catch {
    try {
      return new URL(`https://${trimmed}`);
    } catch {
      return null;
    }
  }
}

function extractSrcFromIframeHtml(html: string): string | null {
  const match = html.match(/\ssrc=(?:"([^"]+)"|'([^']+)')/i);
  return (match?.[1] ?? match?.[2] ?? null)?.trim() || null;
}

function isYouTubeHost(host: string): boolean {
  const normalized = host.toLowerCase();
  return (
    normalized === "youtu.be" ||
    normalized === "youtube.com" ||
    normalized === "www.youtube.com" ||
    normalized === "m.youtube.com" ||
    normalized === "music.youtube.com"
  );
}

function normalizeVideoId(candidate: string | null): string | null {
  const id = candidate?.trim();
  if (!id) return null;
  return /^[a-zA-Z0-9_-]{6,}$/.test(id) ? id : null;
}

function normalizePlaylistId(candidate: string | null): string | null {
  const id = candidate?.trim();
  if (!id) return null;
  return /^[a-zA-Z0-9_-]{6,}$/.test(id) ? id : null;
}

export function getYouTubeEmbedUrl(source: string): string | null {
  const trimmed = source.trim();
  if (!trimmed) return null;

  const extracted = trimmed.startsWith("<") ? extractSrcFromIframeHtml(trimmed) : null;
  const url = coerceUrl(extracted ?? trimmed);
  if (!url || !isYouTubeHost(url.hostname)) return null;

  const videoIdFromShort = url.hostname.toLowerCase() === "youtu.be"
    ? normalizeVideoId(url.pathname.replace(/^\/+/, "").split("/")[0] ?? null)
    : null;

  const path = url.pathname.replace(/\/+$/, "");
  const playlistId = normalizePlaylistId(url.searchParams.get("list"));

  if (playlistId && (path === "/playlist" || !url.searchParams.get("v"))) {
    return `https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}`;
  }

  if (videoIdFromShort) {
    return `https://www.youtube-nocookie.com/embed/${videoIdFromShort}`;
  }

  if (path === "/watch") {
    const videoId = normalizeVideoId(url.searchParams.get("v"));
    if (!videoId) return null;
    return `https://www.youtube-nocookie.com/embed/${videoId}`;
  }

  const embedMatch = path.match(/^\/embed\/([^/]+)$/);
  if (embedMatch) {
    const videoId = normalizeVideoId(embedMatch[1] ?? null);
    return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : null;
  }

  const shortsMatch = path.match(/^\/shorts\/([^/]+)$/);
  if (shortsMatch) {
    const videoId = normalizeVideoId(shortsMatch[1] ?? null);
    return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : null;
  }

  if (playlistId) {
    return `https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}`;
  }

  return null;
}

