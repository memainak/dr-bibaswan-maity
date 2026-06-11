"use client";

import { Play, Youtube } from "lucide-react";
import { SITE, YOUTUBE_VIDEOS } from "@/lib/site-data";
import { useEffect, useState } from "react";

interface VideoItem {
  id: string;
  title: string;
  youtubeId: string;
}

function VideoCard({
  title,
  youtubeId,
}: {
  title: string;
  youtubeId: string;
}) {
  const hasVideo = youtubeId.length > 0;

  return (
    <article className="card overflow-hidden p-0">
      <div className="relative aspect-video w-full bg-slate-900">
        {hasVideo ? (
          <iframe
            title={title}
            src={`https://www.youtube.com/embed/${youtubeId}`}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-800 to-slate-900 px-4 text-center text-white">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600/90 shadow-lg">
              <Play className="ml-1 h-8 w-8 fill-white text-white" aria-hidden />
            </div>
            <p className="text-sm font-medium text-slate-200">
              Video coming soon
            </p>
            <p className="max-w-xs text-xs text-slate-400">
              Subscribe for health tips and clinic updates
            </p>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-slate-900 line-clamp-2 min-h-[3rem]">{title}</h3>
        {!hasVideo && (
          <p className="mt-1 text-xs text-slate-500">Coming soon on YouTube</p>
        )}
      </div>
    </article>
  );
}

export default function Videos() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch("/api/videos");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            // Fill up to 3 slots: use fetched videos, fallback to placeholders if less than 3
            const filledVideos = [...data];
            while (filledVideos.length < 3) {
              const fallbackIdx = filledVideos.length;
              filledVideos.push({
                id: `fallback-${fallbackIdx}`,
                title: YOUTUBE_VIDEOS[fallbackIdx]?.title || "Patient Education & Health Tips",
                youtubeId: YOUTUBE_VIDEOS[fallbackIdx]?.youtubeId || "",
              });
            }
            setVideos(filledVideos.slice(0, 3));
          } else {
            setVideos([...YOUTUBE_VIDEOS]);
          }
        } else {
          setVideos([...YOUTUBE_VIDEOS]);
        }
      } catch (err) {
        console.error("Error fetching videos:", err);
        setVideos([...YOUTUBE_VIDEOS]);
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, []);

  const hasChannel = SITE.youtubeChannelUrl.length > 0;

  return (
    <section id="videos" className="scroll-mt-24 bg-slate-100/80 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Health Videos
          </p>
          <h2 className="section-heading mx-auto mt-2">Watch & Learn</h2>
          <p className="section-subheading mx-auto">
            Educational videos about urological care, treatments, and clinic
            services. More content will be added from our YouTube channel.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx} className="card h-64 animate-pulse bg-white p-0 overflow-hidden">
                  <div className="aspect-video bg-slate-200" />
                  <div className="p-5 space-y-2">
                    <div className="h-4 bg-slate-200 rounded w-3/4" />
                    <div className="h-4 bg-slate-200 rounded w-1/2" />
                  </div>
                </div>
              ))
            : videos.map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  youtubeId={video.youtubeId}
                />
              ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm">
          <Youtube className="h-10 w-10 text-red-600" aria-hidden />
          {hasChannel ? (
            <a
              href={SITE.youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit Our YouTube Channel
            </a>
          ) : (
            <>
              <p className="max-w-md text-sm text-slate-600">
                Our YouTube channel will be linked here soon. Subscribe for
                patient education and clinic updates.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
