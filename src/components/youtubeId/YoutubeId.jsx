// youtubeId/YoutubeId.jsx
export function getYouTubeId(url) {
  if (!url || typeof url !== "string") return null;

  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/,  // normal URL
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?&]+)/,   // embed URL
    /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?&]+)/              // short URL
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) return match[1];
  }

  return null;
}
