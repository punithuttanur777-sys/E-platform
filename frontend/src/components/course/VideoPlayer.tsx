"use client";

import { useMemo } from "react";

interface VideoPlayerProps {
  url: string;
  title?: string;
  className?: string;
}

function getVideoType(url: string): "youtube" | "vimeo" | "direct" | null {
  if (!url) return null;
  if (url.includes("youtube.com") || url.includes("youtu.be")) return "youtube";
  if (url.includes("vimeo.com")) return "vimeo";
  if (url.match(/\.(mp4|webm|ogg)(\?|$)/i)) return "direct";
  return null;
}

function getYouTubeEmbedUrl(url: string): string {
  if (url.includes("/embed/")) return url.split("?")[0] + "?rel=0&modestbranding=1";
  let videoId = "";
  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0] || "";
  } else {
    const match = url.match(/[?&]v=([^&]+)/);
    videoId = match?.[1] || "";
  }
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
}

function getVimeoEmbedUrl(url: string): string {
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  const videoId = match?.[1] || "";
  return `https://player.vimeo.com/video/${videoId}`;
}

export function VideoPlayer({ url, title, className = "" }: VideoPlayerProps) {
  const { type, embedUrl } = useMemo(() => {
    const t = getVideoType(url);
    if (t === "youtube") return { type: t, embedUrl: getYouTubeEmbedUrl(url) };
    if (t === "vimeo") return { type: t, embedUrl: getVimeoEmbedUrl(url) };
    return { type: t, embedUrl: url };
  }, [url]);

  if (!url) {
    return (
      <div
        className={`aspect-video flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-900 ${className}`}
      >
        <div className="text-center text-zinc-500 p-6">
          <p className="text-lg">No video for this lesson</p>
          <p className="text-sm mt-1">Add a YouTube, Vimeo, or direct video URL</p>
        </div>
      </div>
    );
  }

  if (type === "youtube" || type === "vimeo") {
    return (
      <div className={`aspect-video overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 ${className}`}>
        <iframe
          src={embedUrl}
          title={title || "Video"}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  if (type === "direct") {
    return (
      <div className={`aspect-video overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-black ${className}`}>
        <video
          src={url}
          controls
          className="w-full h-full"
          playsInline
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return (
    <div
      className={`aspect-video flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-900 ${className}`}
    >
      <div className="text-center text-zinc-500 p-6">
        <p className="text-lg">Unsupported video URL</p>
        <p className="text-sm mt-1">Use YouTube, Vimeo, or direct .mp4/.webm links</p>
      </div>
    </div>
  );
}
