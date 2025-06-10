import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Let's explore the world together 🌏</h2>
        <p>Follow us on your favorite platforms and never miss a destination update.</p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook">🌐</a>
          <a href="#" aria-label="Instagram">📸</a>
          <a href="#" aria-label="YouTube">🎥</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">
          &copy; 2025 Trawel. Made with ❤️ for curious souls.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
