import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* --- Column 1: Logo/About --- */}
        <div className="footer-column">
          <img src="/HeaderImg/HeaderLogo.png" alt="Logo" className="footer-logo" />
          <p>
            Our institution is committed to excellence in education, innovation, and research.
            Join us to shape your future with knowledge and purpose.
          </p>
        </div>

        {/* --- Column 2: Quick Links --- */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/admission">Admissions</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* --- Column 3: Departments --- */}
        <div className="footer-column">
          <h4>Departments</h4>
          <Link to="/departments/cse">Computer Science</Link>
          <Link to="/departments/eee">Electrical</Link>
          <Link to="/departments/mech">Mechanical</Link>
          <Link to="/departments/civil">Civil</Link>
        </div>

        {/* --- Column 4: Contact --- */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>📍 Pantheerankavu, Kozhikode, Kerala</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 info@college.edu</p>

          <div className="social-icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Your Institute Name. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
