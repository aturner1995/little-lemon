import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-image"></div>
      <div className="footer-nav">
        <h4 className="fnav-title">Navigation</h4>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
        </ul>
      </div>
      <div className="footer-contact">
        <h4 className="contact-title">Contact</h4>
        <div className="address">
          <address>
            350 Washington St
            <br />
            Boston, MA 02108
            <br />
            <br />
            750-890-4555
            <br />
            <br />
            help@littlelemon.com
          </address>
        </div>
      </div>
      <div className="footer-social">
        <h4 className="social-title">Social</h4>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
