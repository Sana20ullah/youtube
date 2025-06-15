import React, { useState } from "react";
import "./Navbar.css";
import Header from "../header/Header";
import {
  FaBars,
  FaSearch,
  FaMicrophone,
  FaPlus,
  FaBell,
  FaYoutube,
  FaTimes,
} from "react-icons/fa";
import HamburgerMenu from "../hamburger/Hamburger";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchMode, setSearchMode] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleSearchIconClick = () => setSearchMode(true);
  const handleCloseSearch = () => setSearchMode(false);

  return (
    <>
      <nav className={`navbar ${searchMode ? "search-mode" : ""}`}>
       
        {/* Left Section */}
        <div className="navbar-left">
          <button className="icon-button hamburger-icon" onClick={toggleMenu}>
            <FaBars />
          </button>
          <FaYoutube className="youtube-icon" />
          <div className="logo">
            <span className="youtube">
              YouTube<sup className="sa">SA</sup>
            </span>
          </div>
        </div>

        {/* Center Section */}
        <div className="navbar-center">
          <div className="search-wrapper">
            <input type="text" placeholder="Search" />
          </div>
          <div className="search-icon-fa">
            <FaSearch />
          </div>
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          <button className="icon-button bg-button">
            <FaMicrophone />
          </button>
          <button className="create-button">
            <FaPlus />
            <span>Create</span>
          </button>
          <button className="icon-button">
            <FaBell />
          </button>
          <img
            src="https://via.placeholder.com/32"
            alt="Profile"
            className="profile"
          />
        </div>

        {/* Mobile Search Toggle */}
        {!searchMode ? (
          <button
            className="mobile-only-search"
            onClick={handleSearchIconClick}
          >
            <FaSearch />
          </button>
        ) : (
          <button
            className="mobile-only-search remove-icon"
            onClick={handleCloseSearch}
          >
            <FaTimes />
          </button>
        )}

         {/* Header inside Navbar */}
        <div className="navbar-header">
          <Header />
        </div>

      </nav>

      <HamburgerMenu isOpen={menuOpen} />
    </>
  );
};

export default Navbar;
