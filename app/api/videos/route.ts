import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://www.youtube.com/feeds/videos.xml?channel_id=UC-pq4UjDuxghKsEYmSlQ5HA",
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );
    if (!res.ok) {
      throw new Error("Failed to fetch RSS feed");
    }
    const xmlText = await res.text();
    
    // Parse <entry> blocks using regex
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    const entries: { id: string; title: string; youtubeId: string }[] = [];
    
    let match;
    while ((match = entryRegex.exec(xmlText)) !== null && entries.length < 3) {
      const entryContent = match[1];
      const videoIdMatch = /<yt:videoId>([^<]+)<\/yt:videoId>/.exec(entryContent);
      const titleMatch = /<title>([^<]+)<\/title>/.exec(entryContent);
      
      if (videoIdMatch && titleMatch) {
        entries.push({
          id: videoIdMatch[1],
          title: titleMatch[1].replace(/<!\[CDATA\[(.*?)\]\]>/, "$1"), // Handle CDATA wrapping if present
          youtubeId: videoIdMatch[1],
        });
      }
    }
    
    return NextResponse.json(entries);
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    // Return empty array on error, client will fallback to default videos
    return NextResponse.json([]);
  }
}
