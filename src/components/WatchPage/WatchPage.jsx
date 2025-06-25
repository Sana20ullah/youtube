import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import staticVideos from "../Data/VideoData";
import "./WatchPage.css";
import Comments from "../comment/Comment";
import comments from "../comment/CommentData";
import { getYouTubeId } from "../youtubeId/YoutubeId"; // Make sure this file exists

const WatchPage = () => {
  const { id } = useParams();

  // Merge videos from localStorage and static list
  const localVideos = JSON.parse(localStorage.getItem("videoData")) || [];
  const combinedVideos = [...staticVideos, ...localVideos];

  // Try to find video using YouTube ID
  let currentVideo = combinedVideos.find((v) => {
    const videoId = getYouTubeId(v.videoUrl);
    return videoId && encodeURIComponent(videoId) === id;
  });

  // If not found, try by direct ID (for uploaded files)
  if (!currentVideo) {
    currentVideo = combinedVideos.find((v) => v.id === id);
  }

  if (!currentVideo) {
    return <div>Video not found.</div>;
  }

  // Filter related videos
  const relatedVideos = combinedVideos.filter((v) => {
    const videoId = getYouTubeId(v.videoUrl);
    const linkId = videoId ? encodeURIComponent(videoId) : v.id;
    return linkId !== id;
  });

  // Choose how to display the video (ReactPlayer or <video>)
  const isLocalFile = currentVideo.videoUrl.startsWith("blob:");

  return (
    <div className="watch-container">
      <div className="video-player-section">
        {currentVideo.videoUrl && currentVideo.videoUrl.trim() !== "" ? (
          isLocalFile ? (
            <video
              src={currentVideo.videoUrl}
              controls
              style={{ width: "100%", height: "400px" }}
            />
          ) : (
            <ReactPlayer
              url={currentVideo.videoUrl}
              controls
              width="100%"
              height="400px"
            />
          )
        ) : (
          <div
            style={{
              height: "400px",
              background: "#eee",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>No video available</p>
          </div>
        )}

        <div className="video-actions">
          <h3 className="video-top-title">{currentVideo.title}</h3>
          <div className="video-action-row">
            <div className="left-info">
              <img
                src={
                  currentVideo.profilePic &&
                  currentVideo.profilePic.trim() !== ""
                    ? currentVideo.profilePic
                    : "https://placehold.co/40x40?text=NA"
                }
                alt="Channel"
              />
              <div>
                <p className="channel-name">{currentVideo.channel}</p>
                <button className="subscribe-btn">Subscribe</button>
                <p className="video-stats">
                  {currentVideo.views} • {currentVideo.time}
                </p>
              </div>
            </div>
            <div className="right-actions">
              <button className="action-btn">👍 11M</button>
              <button className="action-btn">👎</button>
              <button className="action-btn">🔗 Share</button>
              <button className="action-btn">⬇️ Download</button>
              <button className="action-btn">⋯</button>
            </div>
          </div>
        </div>

        <div className="video-description">
          <p className="description-text">{currentVideo.description}</p>
        </div>

        <Comments videoId={currentVideo.id || getYouTubeId(currentVideo.videoUrl)} />

      </div>

      <aside className="related-videos">
        <h3>Up Next</h3>
        {relatedVideos.map((video) => {
          const videoId = getYouTubeId(video.videoUrl);
          const linkId = videoId ? encodeURIComponent(videoId) : video.id;

          return (
            <Link
              key={video.id}
              to={`/watch/${linkId}`}
              className="related-video-link"
            >
              <img
                src={
                  video.thumbnail ||
                  "https://placehold.co/200x120?text=No+Thumbnail"
                }
                alt={video.title}
              />
              <div>
                <h4>{video.title}</h4>
                <p>{video.channel}</p>
                <small>
                  {video.views} • {video.time}
                </small>
              </div>
            </Link>
          );
        })}
      </aside>
    </div>
  );
};

export default WatchPage;
