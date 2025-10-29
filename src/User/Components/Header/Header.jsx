import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Left Side Logo */}
      <div className="logo">
        <img src="/HeaderImg/HeaderLogo.png" className="img-fluid" alt="Logo" />
      </div>

      {/* Right Side Buttons + Hamburger */}
      <div className="header-right">
        <div className="header-buttons">
          <button className="btn btn-primary">Download Prospectus</button>
          <button className="btn btn-secondary">Apply Now</button>

          {/* Custom CSS Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Slide-down Menu */}
      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`} onClick={()=>setMenuOpen(!menuOpen)}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        {/* Academics Dropdown */}
        <details  onClick={(e) => e.stopPropagation()}>
          <summary>Academics<span className="arrow"><i class="fa-solid fa-chevron-left"></i></span></summary>
          <div className="dropdown-links">
            <Link to="/academics/ug">Undergraduate</Link>
            <Link to="/academics/pg">Postgraduate</Link>
            <Link to="/academics/research">Research</Link>
          </div>
        </details>

        {/* Departments Dropdown */}
        <details  onClick={(e) => e.stopPropagation()}>
          <summary>Departments<span className="arrow"><i class="fa-solid fa-chevron-left"></i></span></summary>
          <div className="dropdown-links">
            <Link to="/departments">Computer Science</Link>
            <Link to="/departments">Electrical</Link>
            <Link to="/departments">Mechanical</Link>
          </div>
        </details>

        {/* Admission Dropdown */}
        <details  onClick={(e) => e.stopPropagation()}>
          <summary>Admission<span className="arrow"><i class="fa-solid fa-chevron-left"></i></span></summary>
          <div className="dropdown-links">
            <Link to="/admission/criteria">Criteria</Link>
            <Link to="/admission/process">Process</Link>
            <Link to="/admission/fee-structure">Fee Structure</Link>
          </div>
        </details>

        {/* Annexure Dropdown */}
        <details  onClick={(e) => e.stopPropagation()}>
          <summary>Annexure <span className="arrow"><i class="fa-solid fa-chevron-left"></i></span></summary>
          <div className="dropdown-links">
            <Link to="/annexure/a">Annexure A</Link>
            <Link to="/annexure/b">Annexure B</Link>
          </div>
        </details>

        <Link to="/facilities">Facilities</Link>
        <Link to="/news-events">News & Events</Link>
        <Link to="/affiliations">Affiliations</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/career">Career</Link>
        <Link to="/contact">Contact</Link>

        {/* Show this only in mobile view */}
        <button className="btn btn-primary mobile-prospectus-btn">
          Download Prospectus
        </button>

        {/* Footer */}
        <div className="mobile-menu-footer">
          © 2025 Your Institute Name. All rights reserved.
        </div>
      </nav>
    </header>
  );
}

export default Header;
