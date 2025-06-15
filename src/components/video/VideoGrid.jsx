
import React from "react";
import "./VideoGrid.css";

const videoData = [
  {
    thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "React Tutorial for Beginners",
    channel: "CodeMaster",
    views: "3.9K views",
    time: "3 years ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "Learn React in 15 Minutes",
    channel: "React Ninja",
    views: "12K views",
    time: "2 years ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/tgbNymZ7vqY/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "Advanced React Projects",
    channel: "DevPro",
    views: "9K views",
    time: "1 year ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "React Tutorial for Beginners",
    channel: "CodeMaster",
    views: "3.9K views",
    time: "3 years ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "Learn React in 15 Minutes",
    channel: "React Ninja",
    views: "12K views",
    time: "2 years ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/tgbNymZ7vqY/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "Advanced React Projects",
    channel: "DevPro",
    views: "9K views",
    time: "1 year ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "React Tutorial for Beginners",
    channel: "CodeMaster",
    views: "3.9K views",
    time: "3 years ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "Learn React in 15 Minutes",
    channel: "React Ninja",
    views: "12K views",
    time: "2 years ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/tgbNymZ7vqY/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "Advanced React Projects",
    channel: "DevPro",
    views: "9K views",
    time: "1 year ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "React Tutorial for Beginners",
    channel: "CodeMaster",
    views: "3.9K views",
    time: "3 years ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "Learn React in 15 Minutes",
    channel: "React Ninja",
    views: "12K views",
    time: "2 years ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/tgbNymZ7vqY/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "Advanced React Projects",
    channel: "DevPro",
    views: "9K views",
    time: "1 year ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "React Tutorial for Beginners",
    channel: "CodeMaster",
    views: "3.9K views",
    time: "3 years ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "Learn React in 15 Minutes",
    channel: "React Ninja",
    views: "12K views",
    time: "2 years ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/tgbNymZ7vqY/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "Advanced React Projects",
    channel: "DevPro",
    views: "9K views",
    time: "1 year ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "React Tutorial for Beginners",
    channel: "CodeMaster",
    views: "3.9K views",
    time: "3 years ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "Learn React in 15 Minutes",
    channel: "React Ninja",
    views: "12K views",
    time: "2 years ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/tgbNymZ7vqY/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "Advanced React Projects",
    channel: "DevPro",
    views: "9K views",
    time: "1 year ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "React Tutorial for Beginners",
    channel: "CodeMaster",
    views: "3.9K views",
    time: "3 years ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "Learn React in 15 Minutes",
    channel: "React Ninja",
    views: "12K views",
    time: "2 years ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/tgbNymZ7vqY/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "Advanced React Projects",
    channel: "DevPro",
    views: "9K views",
    time: "1 year ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "React Tutorial for Beginners",
    channel: "CodeMaster",
    views: "3.9K views",
    time: "3 years ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "Learn React in 15 Minutes",
    channel: "React Ninja",
    views: "12K views",
    time: "2 years ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/tgbNymZ7vqY/hq720.jpg",
    profile: "https://via.placeholder.com/40",
    title: "Advanced React Projects",
    channel: "DevPro",
    views: "9K views",
    time: "1 year ago",
  },
  // Add more items as needed
];

const VideoGrid = () => {
  return (
    <div className="video-grid">
      {videoData.map((video, index) => (
        <div className="video-card" key={index}>
          <img src={video.thumbnail} alt="Video Thumbnail" className="thumbnail" />
          <div className="video-info">
            <img src={video.profile} alt="Profile" className="profile-img" />
            <div className="text-info">
              <h4 className="video-title">{video.title}</h4>
              <p className="channel-name">{video.channel}</p>
              <div className="meta-info">
                <span>{video.views}</span>
                <span className="dot">•</span>
                <span>{video.time}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
