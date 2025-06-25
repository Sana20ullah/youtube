import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🧭 for navigation
import "./Navbar.css";
import Header from "../header/Header";
import {
  FaBars,
  FaSearch,
  FaPlus,
  FaBell,
  FaYoutube,
  FaTimes,
} from "react-icons/fa";
import HamburgerMenu from "../hamburger/Hamburger";
import MicInput from "./MicInput";
import Register from "../Login/Register";

const Navbar = ({ setSearchTerm, user, setUser, setShowUpload }) => {


  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchMode, setSearchMode] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showRegister, setShowRegister] = useState(false);
 const [showLogin, setShowLogin] = useState(false);


  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleSearchIconClick = () => setSearchMode(true);
  const handleCloseSearch = () => setSearchMode(false);


  const handleSearch = () => {
    setSearchTerm(inputValue);
  };

  const handleMicResult = (text) => {
    setInputValue(text);
    setSearchTerm(text);
    setSearchMode(true);
  };

const handleUploadClick = () => {
  if (user) {
    setShowUpload(true); // 👈 trigger popup
  } else {
    navigate("/register");
  }
};



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
            <input
              type="text"
              placeholder="Search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
          </div>
          <div className="search-icon-fa" onClick={handleSearch}>
            <FaSearch />
          </div>
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          <MicInput onResult={handleMicResult} />
          <button className="create-button" onClick={handleUploadClick}>
            <FaPlus />
            <span>{user ? "Upload" : "Create"}</span>
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
            className="mobile-only-search search-icon"
            onClick={handleSearchIconClick}
          >
            <FaSearch />
          </button>
        ) : (
          <>
            <button
              className="mobile-only-search remove-icon"
              onClick={handleCloseSearch}
            >
              <FaTimes />
            </button>
            <button
              className="mobile-only-search search-icon"
              onClick={handleSearch}
            >
              <FaSearch />
            </button>
            <span className="mobile-only-search mic-icon">
              <MicInput onResult={handleMicResult} />
            </span>
          </>
        )}

        {/* Header inside Navbar */}
        <div className="navbar-header">
          <Header />
        </div>
      </nav>

      {/* Show Register Page */}
      {showRegister && (
        <Register
          setUser={(newUser) => {
            setUser(newUser);         // 👈 save user after register
            setShowRegister(false);   // close modal
          }}
          onClose={() => setShowRegister(false)}
        />
      )}

      <HamburgerMenu isOpen={menuOpen} />
    </>
  );
};

export default Navbar;
