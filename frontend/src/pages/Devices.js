import React from 'react';
import { 
  FaTv, FaMobileAlt, FaApple, FaFire, FaServer, 
  FaDesktop, FaLaptop, FaDownload, FaCode
} from 'react-icons/fa';
import './Devices.css';

const Devices = () => {
  const devices = [
    {
      icon: FaTv,
      name: 'Smart TV',
      description: 'Samsung, LG, Sony, and other Smart TVs',
      setup: 'Install IPTV app from app store or use built-in player'
    },
    {
      icon: FaMobileAlt,
      name: 'Android',
      description: 'Android TV Box, Android Phone/Tablet',
      setup: 'Download IPTV app from Google Play Store or APK'
    },
    {
      icon: FaApple,
      name: 'iOS',
      description: 'iPhone, iPad, Apple TV',
      setup: 'Install IPTV app from App Store or use GSE Smart IPTV'
    },
    {
      icon: FaFire,
      name: 'Firestick',
      description: 'Amazon Fire TV Stick, Fire TV Cube',
      setup: 'Install IPTV app via Downloader or sideload APK'
    },
    {
      icon: FaServer,
      name: 'MAG',
      description: 'MAG250, MAG254, MAG256, MAG322, MAG324',
      setup: 'Configure portal URL in device settings'
    },
    {
      icon: FaCode,
      name: 'Enigma2',
      description: 'Enigma2 receivers and set-top boxes',
      setup: 'Install IPTV plugin and configure M3U playlist'
    },
    {
      icon: FaDesktop,
      name: 'Windows',
      description: 'Windows PC and Laptop',
      setup: 'Use VLC Media Player, Kodi, or dedicated IPTV app'
    },
    {
      icon: FaLaptop,
      name: 'macOS',
      description: 'MacBook, iMac, Mac Mini',
      setup: 'Use VLC Media Player, IINA, or dedicated IPTV app'
    }
  ];

  return (
    <div className="devices-page">
      <section className="devices-hero">
        <div className="container">
          <h1 className="page-title">Supported Devices & Setup</h1>
          <p className="page-subtitle">Works on all your favorite devices. Easy setup in minutes.</p>
        </div>
      </section>

      <section className="devices-grid-section">
        <div className="container">
          <div className="devices-grid">
            {devices.map((device, index) => {
              const Icon = device.icon;
              return (
                <div key={index} className="device-card">
                  <div className="device-icon-wrapper">
                    <Icon className="device-icon" />
                  </div>
                  <h3 className="device-name">{device.name}</h3>
                  <p className="device-description">{device.description}</p>
                  <div className="device-setup">
                    <strong>Setup:</strong> {device.setup}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="setup-guide-section">
        <div className="container">
          <h2 className="section-title">Setup Guides</h2>
          <div className="setup-steps">
            <div className="setup-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Get Your Credentials</h3>
                <p>After subscription, you'll receive your M3U playlist URL and Xtream Codes API credentials via WhatsApp or email.</p>
              </div>
            </div>
            <div className="setup-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Choose Your Device</h3>
                <p>Select your preferred device from the list above. Our service works on all major platforms and devices.</p>
              </div>
            </div>
            <div className="setup-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Install IPTV App</h3>
                <p>Download and install a compatible IPTV player app for your device. Popular options include TiviMate, IPTV Smarters, VLC, and more.</p>
              </div>
            </div>
            <div className="setup-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Configure & Enjoy</h3>
                <p>Enter your M3U URL or Xtream Codes credentials in the app settings. Start streaming your favorite content immediately!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="formats-section">
        <div className="container">
          <h2 className="section-title">Supported Formats</h2>
          <div className="formats-grid">
            <div className="format-card">
              <FaCode className="format-icon" />
              <h3>M3U Playlist</h3>
              <p>Universal M3U playlist format compatible with all IPTV players. Simply add the URL to your preferred app.</p>
            </div>
            <div className="format-card">
              <FaServer className="format-icon" />
              <h3>Xtream Codes API</h3>
              <p>Full Xtream Codes API support for advanced features like EPG, catch-up TV, and VOD access.</p>
            </div>
            <div className="format-card">
              <FaDownload className="format-icon" />
              <h3>EPG Guide</h3>
              <p>Electronic Program Guide included for easy navigation and program scheduling across all channels.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="apps-section">
        <div className="container">
          <h2 className="section-title">Recommended Apps</h2>
          <div className="apps-list">
            <div className="app-item">
              <h4>TiviMate</h4>
              <p>Best for Android TV - Premium IPTV player with advanced features</p>
            </div>
            <div className="app-item">
              <h4>IPTV Smarters</h4>
              <p>Universal app for Android, iOS, Windows, and macOS</p>
            </div>
            <div className="app-item">
              <h4>VLC Media Player</h4>
              <p>Free and open-source player for all platforms</p>
            </div>
            <div className="app-item">
              <h4>GSE Smart IPTV</h4>
              <p>Popular iOS app with M3U and Xtream Codes support</p>
            </div>
            <div className="app-item">
              <h4>Kodi</h4>
              <p>Media center with IPTV add-ons for advanced users</p>
            </div>
          </div>
        </div>
      </section>

      <section className="devices-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Need Help with Setup?</h2>
            <p>Our support team is available 24/7 to help you get started</p>
            <button 
              className="btn btn-primary"
              onClick={() => window.open('https://wa.me/447869678788', '_blank')}
            >
              Contact Support on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Devices;
