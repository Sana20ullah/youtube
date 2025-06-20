import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import videoData from "../Data/VideoData";
import "./WatchPage.css";
import Comments from "../comment/Comment";
import comments from "../comment/CommentData";  // <-- Import comment data here

function getYouTubeVideoId(url) {
  const regExp = /v=([^&]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

const WatchPage = () => {
  const { id } = useParams();

  const currentVideo = videoData.find(
    (v) => getYouTubeVideoId(v.videoUrl) === id
  );

  if (!currentVideo) {
    return <div>Video not found.</div>;
  }

  const relatedVideos = videoData.filter(
    (v) => getYouTubeVideoId(v.videoUrl) !== id
  );

  return (
    <div className="watch-container">
      <div className="video-player-section">
        <ReactPlayer
          url={currentVideo.videoUrl}
          controls
          width="100%"
          height="400px"
        />

        <div className="video-actions">
          <h3 className="video-top-title">{currentVideo.title}</h3>

          <div className="video-action-row">
            <div className="left-info">
              <img
                src={currentVideo.profilePic}
                alt="Channel"
                className="channel-pic"
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

        {/* Description */}
        <div className="video-description">
          <p className="description-text">{currentVideo.description}</p>
        </div>

        {/* Render Comments */}
        <Comments comments={comments} />
      </div>

      <aside className="related-videos">
        <h3>Up Next</h3>
        {relatedVideos.map((video) => {
          const videoId = getYouTubeVideoId(video.videoUrl);
          return (
            <Link
              key={video.id}
              to={`/watch/${encodeURIComponent(videoId)}`}
              className="related-video-link"
            >
              <img src={video.thumbnail} alt={video.title} />
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
