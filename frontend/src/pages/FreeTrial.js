import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaCheckCircle, FaClock, FaTv } from 'react-icons/fa';
import './FreeTrial.css';

const FreeTrial = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    device: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello! I would like to request a free trial.\n\nName: ${formData.name}\nWhatsApp: ${formData.whatsapp}\nDevice: ${formData.device}`;
    const whatsappUrl = `https://wa.me/447869678788?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', whatsapp: '', device: '' });
      setSubmitted(false);
    }, 5000);
  };

  const devices = [
    'Smart TV',
    'Android TV Box',
    'Android Phone/Tablet',
    'iPhone/iPad',
    'Firestick',
    'MAG Box',
    'Windows PC',
    'macOS',
    'Other'
  ];

  const trialFeatures = [
    {
      icon: FaClock,
      title: '24 Hours',
      description: 'Full access for 24 hours to test our service'
    },
    {
      icon: FaTv,
      title: 'All Channels',
      description: 'Access to all 20,000+ live channels'
    },
    {
      icon: FaCheckCircle,
      title: 'Instant Activation',
      description: 'Get your trial account activated immediately'
    },
    {
      icon: FaRocket,
      title: 'No Credit Card',
      description: 'Free trial, no payment required'
    }
  ];

  return (
    <div className="trial-page">
      <section className="trial-hero">
        <div className="container">
          <h1 className="page-title">Start Your Free Trial</h1>
          <p className="page-subtitle">Experience our premium IPTV service risk-free for 24 hours</p>
        </div>
      </section>

      <section className="trial-features">
        <div className="container">
          <div className="features-grid">
            {trialFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="trial-feature-card">
                  <Icon className="trial-feature-icon" />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="trial-form-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-header">
              <h2>Request Your Free Trial</h2>
              <p>Fill out the form below and we'll activate your trial account via WhatsApp</p>
            </div>

            {submitted ? (
              <div className="success-message">
                <FaCheckCircle className="success-icon" />
                <h3>Request Submitted!</h3>
                <p>We've opened WhatsApp for you. Send the message to complete your trial request.</p>
              </div>
            ) : (
              <form className="trial-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="whatsapp">WhatsApp Number *</label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    placeholder="+1234567890"
                  />
                  <small>Include country code (e.g., +44, +1)</small>
                </div>

                <div className="form-group">
                  <label htmlFor="device">Device Type *</label>
                  <select
                    id="device"
                    name="device"
                    value={formData.device}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your device</option>
                    {devices.map((device, index) => (
                      <option key={index} value={device}>{device}</option>
                    ))}
                  </select>
                </div>

                <div className="trial-limitations">
                  <h4>Trial Limitations:</h4>
                  <ul>
                    <li>24-hour access period</li>
                    <li>All channels and VOD included</li>
                    <li>One trial per user</li>
                    <li>No credit card required</li>
                  </ul>
                </div>

                <button type="submit" className="btn-submit">
                  <FaRocket /> Request Free Trial via WhatsApp
                </button>

                <p className="form-note">
                  By submitting this form, you'll be redirected to WhatsApp to complete your trial request.
                  Our support team will activate your account within minutes.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="trial-conversion">
        <div className="container">
          <div className="conversion-content">
            <h2>Love the Service?</h2>
            <p>After your trial, choose a subscription plan that fits your needs</p>
            <div className="conversion-buttons">
              <Link to="/plans" className="btn btn-primary">
                View Plans
              </Link>
              <button 
                className="btn btn-secondary"
                onClick={() => window.open('https://wa.me/447869678788', '_blank')}
              >
                Chat with Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeTrial;
