import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="im-footer" role="contentinfo" aria-label="Site footer">
      <div className="im-container">
        <div className="im-grid">
          {/* Column 1 - Main Links */}
          <div className="im-links main-links">
            <nav className="im-nav" aria-label="Main footer navigation">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Department</a>
              <a href="#">Academics</a>
              <a href="#">Admission</a>
            </nav>
          </div>

          {/* Column 2 - Extra Links */}
          <div className="im-links extra-links">
            <nav className="im-nav" aria-label="Additional footer navigation">
              <a href="#">Annexure</a>
              <a href="#">Facilities</a>
              <a href="#">News & Events</a>
              <a href="#">Career</a>
              <a href="#">Contact</a>
            </nav>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="im-contact">
            <div>
              <span className="im-label">Email :</span>{" "}
              <a href="mailto:iletcollgeofnursing@gmail.com">
                iletcollgeofnursing@gmail.com
              </a>
            </div>
            <div>
              <span className="im-label">Phone :</span> +91 79022 88886, +91 79022 88899
            </div>
            <div>
              <span className="im-label">Address :</span> Near Intel City, Oorakam
              Malappuram/Perinthalmanna
            </div>
            <div>
              <span className="im-label">Social :</span> In · Fb
            </div>
          </div>
        </div>

        {/* Bottom Wordmark Row */}
        <div className="im-wordmark">
          <h1>ithismedicity</h1>
        </div>

        {/* Footer Bottom Bar */}
        <div className="im-bottom">
          <div>© {new Date().getFullYear()} ithismedicity. All rights reserved.</div>
          <div>Designed by Warmy health connect</div>
        </div>
      </div>
    </footer>
  );
}
