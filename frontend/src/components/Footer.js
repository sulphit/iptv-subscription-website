import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaEnvelope, FaCopyright } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">IPTV<span className="logo-accent">Premium</span></h3>
            <p className="footer-description">
              Premium IPTV subscription service with 20,000+ channels, 50,000+ VOD content,
              and 99.9% uptime guarantee. Instant activation and 24/7 support.
            </p>
            <div className="footer-social">
              <a 
                href="https://wa.me/447869678788" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/plans">IPTV Plans</Link></li>
              <li><Link to="/channels">Channels & Content</Link></li>
              <li><Link to="/devices">Devices & Setup</Link></li>
              <li><Link to="/free-trial">Free Trial</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li>
                <a href="https://wa.me/447869678788" target="_blank" rel="noopener noreferrer">
                  WhatsApp Support
                </a>
              </li>
              <li><Link to="/devices">Setup Guides</Link></li>
              <li><Link to="/channels">Channel List</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <FaCopyright /> {currentYear} IPTV Premium. All rights reserved.
          </div>
          <div className="footer-disclaimer">
            <p>
              This service is provided for educational and personal use only. 
              Users are responsible for ensuring compliance with local laws and regulations.
            </p>
          </div>
          <div className="footer-admin">
            <p>Website Owner & Admin</p>
            <p>Contact: <a href="https://wa.me/447869678788" target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
