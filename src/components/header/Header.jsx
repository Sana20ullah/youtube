import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './header.css';

const categories = [
  "All", "Node.js", "Web Development", "Martial", "Arts", "Movies", "Gaming", "Airplane", "Live",
  "Action thrillers", "Shelters", "Podcasts", "AI", "Sci-fi films", "RC aircraft", "Mixes",
  "Video editing software", "Architects", "History", "Recently uploads", "Watched"
];

const Header = ({ menuOpen }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 200;
    if (direction === 'left') container.scrollLeft -= scrollAmount;
    else container.scrollLeft += scrollAmount;
  };

  return (
    <div className={`header-container ${menuOpen ? 'shrink' : ''}`}>
      <button className="scroll-btn left" onClick={() => scroll('left')}>
        <ChevronLeft size={24} />
      </button>

      <div className="scroll-wrapper" ref={scrollRef}>
        {categories.map((name, index) => (
          <button key={index} className="category-button">
            {name}
          </button>
        ))}
      </div>

      <button className="scroll-btn right" onClick={() => scroll('right')}>
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Header;
