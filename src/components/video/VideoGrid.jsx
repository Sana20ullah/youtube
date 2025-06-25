import React from "react";
import { Link } from "react-router-dom";
import videoData from "../Data/VideoData";
import "./VideoGrid.css";

const VideoGrid = ({ searchTerm = "" }) => {
  const uploadedVideos = JSON.parse(localStorage.getItem("videoData")) || [];
  const combinedVideos = [...videoData, ...uploadedVideos];

  const filteredVideos = searchTerm.trim()
    ? combinedVideos.filter((video) =>
        video.title.toLowerCase().startsWith(searchTerm.toLowerCase().trim())
      )
    : combinedVideos;

  return (
    <div
      className="video-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1rem",
      }}
    >
      {filteredVideos.map((video, index) => {
        const videoId = video.videoUrl.includes("v=")
          ? video.videoUrl.split("v=")[1]
          : video.videoUrl;

        return (
          <Link
            key={index}
            to={`/watch/${encodeURIComponent(videoId)}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="video-card" style={{ cursor: "pointer" }}>
              <img
                src={video.thumbnail}
                alt="thumbnail"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h4>{video.title}</h4>
              <p>{video.channel}</p>
              <small>{video.views} • {video.time}</small>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default VideoGrid;
