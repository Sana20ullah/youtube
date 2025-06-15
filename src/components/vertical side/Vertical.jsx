// Vertical.jsx
import React from "react";
import { FaHome, FaBolt, FaYoutube, FaUser } from "react-icons/fa";
import "./vertical.css";

export default function Vertical() {
  return (
    <div className="sidebar">
      <div className="icon-box">
        <FaHome className="sidebar-icon" title="Home" />
        <FaBolt className="sidebar-icon" title="Shorts" />
        <FaYoutube className="sidebar-icon" title="Subscriptions" />
        <FaUser className="sidebar-icon" title="You" />
      </div>
    </div>
  );
}
