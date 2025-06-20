// src/components/VideoPlayer.jsx
import React from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";
import Naver from "../Navbar/Navbar"
const VideoPlayer = ({ url, onClose }) => {
  return (
    <div className="player-overlay" onClick={onClose}>
      <div className="player-wrapper" onClick={(e) => e.stopPropagation()}>
        <ReactPlayer url={url} controls playing width="100%" height="100%" />
      </div>
    </div>
  );
};

export default VideoPlayer;
