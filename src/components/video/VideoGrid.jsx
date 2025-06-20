import React from "react";
import { Link } from "react-router-dom";
import videoData from "../Data/VideoData"; // Make sure this file exists and exports an array
import "./VideoGrid.css"

const VideoGrid = () => {
  return (
    <div className="video-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1rem" }}>
      {videoData.map((video, index) => (
        <Link
          key={index}
          to={`/watch/${encodeURIComponent(video.videoUrl.split("v=")[1])}`} // Pass video ID in URL param
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="video-card" style={{ cursor: "pointer" }}>
            <img src={video.thumbnail} alt="thumbnail" style={{ width: "100%", borderRadius: "8px" }} />
            <h4>{video.title}</h4>
            <p>{video.channel}</p>
            <small>{video.views} • {video.time}</small>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VideoGrid;
