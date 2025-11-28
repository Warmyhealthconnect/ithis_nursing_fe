import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const academicsRef = useRef(null);
  const admissionRef = useRef(null);
  const annexureRef = useRef(null);


  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!menuOpen) {
      // menu closed, collapse all
      academicsRef.current?.removeAttribute("open");
      admissionRef.current?.removeAttribute("open");
      annexureRef.current?.removeAttribute("open");
    }
  }, [menuOpen]);


  function toggleDropdown(ref) {
    const isOpen = ref.current.hasAttribute("open");

    // close all
    academicsRef.current?.removeAttribute("open");
    admissionRef.current?.removeAttribute("open");
    annexureRef.current?.removeAttribute("open");

    // re-open the clicked one if it was closed
    if (!isOpen) {
      ref.current.setAttribute("open", "");
    }
  }



  return (
    <header className={`header ${!isHome ? "transparent-header" : ""}`}>

      {/* Left Side Logo */}
      <Link to={'/'} className="logo">
        <img src="/HeaderImg/HeaderLogo.png" className="img-fluid" alt="Logo" />
      </Link>

      {/* Right Side Buttons + Hamburger */}
      <div className="header-right">
        <div className="header-buttons">
          <a
            href="/ithis_new.pdf"
            download
            className="btn btn-primary"
            style={{ textDecoration: "none" }}
          >
            Download Prospectus
          </a>
          {/* <a
            href=""

            className="btn btn-primary"
            style={{ textDecoration: "none" }}
          >
            Download Prospectus
          </a> */}

          <Link to={'/admission'} className="btn btn-secondary">Apply Now</Link>
          {/* <Link to={'/payu'}>Pay</Link> */}

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
      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        {/* Academics Dropdown */}
        <details ref={academicsRef} onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleDropdown(academicsRef)
        }}>
          <summary>Academics<span className="arrow"><i class="fa-solid fa-chevron-left"></i></span></summary>
          <div className="dropdown-links">
            <Link  to="/academics/nursing" onClick={() => setMenuOpen(false)}>BSC Nursing</Link>
            {/* <Link to="/academics/pg">Postgraduate</Link>
            <Link to="/academics/research">Research</Link> */}
          </div>
        </details>

        {/* Departments Dropdown */}
        {/* <details  onClick={(e) => e.stopPropagation()}>
          <summary>Departments<span className="arrow"><i class="fa-solid fa-chevron-left"></i></span></summary>
          <div className="dropdown-links"> */}
        {/* <Link to="/departments">Computer Science</Link>
            <Link to="/departments">Electrical</Link>
            <Link to="/departments">Mechanical</Link> */}
        {/* </div>
        </details> */}

        {/* Admission Dropdown */}
        <details ref={admissionRef} onClick={(e) => {
          e.preventDefault();
          e.stopPropagation()
          toggleDropdown(admissionRef)
        }}>
          <summary>
            Admission
            <span className="arrow">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </summary>
          <div className="dropdown-links">
            <Link to="/admission" onClick={() => setMenuOpen(false)}>Criteria</Link>
            <Link to="/admission" onClick={() => setMenuOpen(false)}>Process</Link>
            <Link to="/admission" onClick={() => setMenuOpen(false)}>Fee Structure</Link>
            <Link to="/list/joined" onClick={() => setMenuOpen(false)}>Joined Students</Link>
            <Link to="/list/not-joined" onClick={() => setMenuOpen(false)}>Non-joined Students</Link>
            <Link to="/info" onClick={() => setMenuOpen(false)} className="with-badge">
              Spot Admission
            </Link>
          </div>
        </details>

        {/* Annexure Dropdown */}
        <details ref={annexureRef} onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleDropdown(annexureRef)
        }}>
          <summary>Annexure <span className="arrow"><i class="fa-solid fa-chevron-left"></i></span></summary>
          <div className="dropdown-links">
            <Link to="/annexure/a">Annexure-x</Link>
            <Link to="/annexure/b">Annexure-x1</Link>
            <Link to="/annexure/b">Anti-Ragging Undrtaking - Parent</Link>
            <Link to="/annexure/b">Anti-Ragging Undrtaking - Student</Link>
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
          <a href='/ithis.pdf' download >
            <span className="mobile-download">Download Prospectus</span>
          </a>
        </button>

        {/* Footer */}
        <div className="mobile-menu-footer">
          © 2025 ithis college of nursing. All rights reserved.
        </div>
      </nav>
    </header>
  );
}

export default Header;
