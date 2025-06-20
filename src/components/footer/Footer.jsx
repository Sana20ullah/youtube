// src/components/MobileFooter.jsx
import React from 'react';
import './Footer.css';
import { Home, Video, Plus, Bell, User } from 'lucide-react'; // You can replace these with your preferred icons

const Footer = () => {
  return (
    <footer className="mobile-footer">
      <Home className="footer-icon" />
      <Video className="footer-icon" />
      <div className="footer-plus">
        <Plus className="footer-plus-icon" />
      </div>
      <Bell className="footer-icon" />
      <User className="footer-icon" />
    </footer>
  );
};

export default Footer;
