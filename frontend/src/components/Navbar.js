import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/447869678788', '_blank');
  };

  const closeMenu = () => {
    setIsOpen(false);
    setMegaMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">IPTV<span className="logo-accent">Premium</span></span>
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>
            Home
          </Link>
          <div 
            className="nav-link mega-menu-trigger"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            Plans
            {megaMenuOpen && (
              <div className="mega-menu" onMouseEnter={() => setMegaMenuOpen(true)} onMouseLeave={() => setMegaMenuOpen(false)}>
                <div className="mega-menu-content">
                  <div className="mega-menu-section">
                    <h3>Subscription Plans</h3>
                    <Link to="/plan/1month" onClick={closeMenu}>1 Month - £15</Link>
                    <Link to="/plan/3months" onClick={closeMenu}>3 Months - £30</Link>
                    <Link to="/plan/6months" onClick={closeMenu}>6 Months - £40</Link>
                    <Link to="/plan/9months" onClick={closeMenu}>9 Months - £50</Link>
                    <Link to="/plan/12months" onClick={closeMenu}>12 Months - £70</Link>
                  </div>
                  <div className="mega-menu-section">
                    <h3>Other</h3>
                    <Link to="/plan/business" onClick={closeMenu}>Business / Hotel IPTV</Link>
                    <Link to="/plans" onClick={closeMenu}>View All Plans</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link to="/channels" className={`nav-link ${location.pathname === '/channels' ? 'active' : ''}`} onClick={closeMenu}>
            Channels
          </Link>
          <Link to="/devices" className={`nav-link ${location.pathname === '/devices' ? 'active' : ''}`} onClick={closeMenu}>
            Devices
          </Link>
          <Link to="/free-trial" className={`nav-link ${location.pathname === '/free-trial' ? 'active' : ''}`} onClick={closeMenu}>
            Free Trial
          </Link>
          <button className="nav-cta whatsapp-btn" onClick={handleWhatsAppClick}>
            <FaWhatsapp /> WhatsApp
          </button>
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
