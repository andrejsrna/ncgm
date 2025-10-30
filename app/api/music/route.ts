import { NextResponse } from "next/server";
import { getMusicData } from "@/app/hooks/useMusicQuery";

const DEFAULT_COUNT = 3;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const requestedCount = parseInt(searchParams.get("count") || "", 10);
    const count = Number.isFinite(requestedCount)
      ? Math.max(1, requestedCount)
      : DEFAULT_COUNT;

    const tracks = await getMusicData();
    const shuffled = shuffle(tracks).slice(0, Math.min(count, tracks.length));

    return NextResponse.json({ tracks: shuffled });
  } catch (error) {
    console.error("Failed to load music data:", error);
    return NextResponse.json(
      { error: "Failed to load music data" },
      { status: 500 }
    );
  }
}

function shuffle<T>(items: T[]): T[] {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
