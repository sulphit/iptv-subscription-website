import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaCheckCircle, FaRocket } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content fade-in">
          <div className="hero-badge">
            <FaRocket /> Instant Activation • 99.9% Uptime
          </div>
          <h1 className="hero-title">
            Premium <span className="gradient-text">IPTV Subscription</span>
            <br />
            Watch 20,000+ Channels in 4K/HD
          </h1>
          <p className="hero-description">
            Experience the best IPTV service with 20,000+ live channels, 50,000+ VOD content,
            premium sports, movies, and TV series. Instant activation, 24/7 support, and
            compatible with all devices.
          </p>
          <div className="hero-features">
            <div className="hero-feature">
              <FaCheckCircle className="feature-icon" />
              <span>20,000+ Live Channels</span>
            </div>
            <div className="hero-feature">
              <FaCheckCircle className="feature-icon" />
              <span>50,000+ VOD Content</span>
            </div>
            <div className="hero-feature">
              <FaCheckCircle className="feature-icon" />
              <span>4K/HD Quality</span>
            </div>
            <div className="hero-feature">
              <FaCheckCircle className="feature-icon" />
              <span>99.9% Uptime</span>
            </div>
          </div>
          <div className="hero-cta">
            <Link to="/free-trial" className="btn btn-primary">
              <FaPlay /> Start Free Trial
            </Link>
            <Link to="/plans" className="btn btn-secondary">
              View Plans
            </Link>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-number">99.9%</span>
              <span className="trust-label">Uptime</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">10,000+</span>
              <span className="trust-label">Happy Users</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">24/7</span>
              <span className="trust-label">Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
