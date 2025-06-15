import React from "react";
import {
  FaHome,
  FaBolt,
  FaYoutube,
  FaHistory,
  FaList,
  FaVideo,
  FaClock,
  FaThumbsUp,
  FaMusic,
  FaBroadcastTower,
  FaGamepad,
  FaBasketballBall,
  FaCog,
  FaFlag,
  FaQuestionCircle,
  FaCommentDots,
  FaChevronRight
} from "react-icons/fa";
import "./Hamburger.css";

export default function Hamburger({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="hamburger-menu">
      <ul>
        <li><FaHome /> <span>Home</span></li>
        <li><FaBolt /> <span>Shorts</span></li>
        <li><FaYoutube /> <span>Subscriptions</span></li>
        <hr />
        <li className="you-section">
          <span>You</span>
          <FaChevronRight className="right-icon" />
        </li>
        <li><FaHistory /> <span>History</span></li>
        <li><FaList /> <span>Playlist</span></li>
        <li><FaVideo /> <span>Your Videos</span></li>
        <li><FaClock /> <span>Watch Later</span></li>
        <li><FaThumbsUp /> <span>Liked Videos</span></li>
        <hr />
        <li className="section-title">Subscriptions</li>
        <li><img src="/logos/aljazeera.png" alt="Al Jazeera" className="logo" /> <span>Al Jazeera English</span></li>
        <li><img src="/logos/indiatoday.png" alt="India Today" className="logo" /> <span>India Today</span></li>
        <li><img src="/logos/cnn.png" alt="CNN" className="logo" /> <span>CNN News</span></li>
        <li><FaChevronRight /> <span>Show More</span></li>
        <hr />
        <li><FaMusic /> <span>Music</span></li>
        <li><FaBroadcastTower /> <span>Live</span></li>
        <li><FaGamepad /> <span>Gaming</span></li>
        <li><FaBasketballBall /> <span>Sports</span></li>
        <hr />
        <li><FaCog /> <span>Settings</span></li>
        <li><FaFlag /> <span>Report</span></li>
        <li><FaQuestionCircle /> <span>Help</span></li>
        <li><FaCommentDots /> <span>Feedback</span></li>
        <hr />
        <li className="footer-text">
          About &bull; Copyright &bull; Policy &bull; Terms &bull; More from YouTube
        </li>
      </ul>
    </div>
  );
}
