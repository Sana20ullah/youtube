import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./UploadVideo.css";
import { getYouTubeId } from "../youtubeId/YoutubeId";

const UploadVideo = ({ onClose, user }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    videoFile: null,
    id: "",
    thumbnail: "",
    displayTitle: "",
    channel: "",
    videoUrl: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { videoUrl, videoFile, title } = formData;

    if (!videoUrl && !videoFile) {
      alert("❌ Please provide either a YouTube URL or upload a video file.");
      return;
    }

    if (videoUrl && videoFile) {
      alert("❌ Please provide only one: a YouTube URL or a video file.");
      return;
    }

    let finalVideoUrl = "";
    let thumbnail = "";

    if (videoUrl) {
      const videoId = getYouTubeId(videoUrl);
      if (!videoId) {
        alert("❌ Invalid YouTube URL.");
        return;
      }

      finalVideoUrl = `https://www.youtube.com/watch?v=${videoId}`;
      thumbnail = `https://i.ytimg.com/vi/${videoId}/hq720.jpg`;
    } else if (videoFile) {    finalVideoUrl = URL.createObjectURL(videoFile);

      thumbnail = formData.thumbnail || "https://placehold.co/200x120?text=Video";
    }

    const newVideo = {
      id: formData.id || String(Date.now()),
      title,
      displayTitle: formData.displayTitle || title,
      thumbnail,
      channel: formData.channel || user?.fullName || "Unknown",
      videoUrl: finalVideoUrl,
      description: formData.description,
      views: "0 views",
      time: "Just now",
      profile: `https://placehold.co/40x40?text=${user?.fullName?.slice(0, 2) || "U"}`,
      profilePic: "default_profile.jpg",
    };

    const existing = JSON.parse(localStorage.getItem("videoData")) || [];
    existing.push(newVideo);
    localStorage.setItem("videoData", JSON.stringify(existing));

    alert("✅ Video uploaded successfully!");
    if (onClose) onClose();
    navigate("/");
  };

  return (
    <div className="upload-container">
      <FaTimes
        className="close-icon"
        onClick={onClose}
        style={{ cursor: "pointer", position: "absolute", top: 10, right: 10 }}
      />
      <h2>
        Upload Video as <span style={{ color: "blue" }}>{user?.fullName}</span>
      </h2>

      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Video Title" onChange={handleChange} />
        <input name="videoFile" type="file" accept="video/*" onChange={handleChange} />
        <input name="id" type="number" placeholder="ID" onChange={handleChange} />
        <input name="thumbnail" placeholder="Thumbnail Link" onChange={handleChange} />
        <input name="displayTitle" placeholder="Display Title" onChange={handleChange} />
        <input name="channel" placeholder="Channel Name" onChange={handleChange} />
        <input name="videoUrl" placeholder="Video URL (YouTube only)" onChange={handleChange} />
        <textarea name="description" placeholder="Description" rows="4" onChange={handleChange} />
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default UploadVideo;
