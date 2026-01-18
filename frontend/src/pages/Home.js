import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import PricingCard from '../components/PricingCard';
import { 
  FaTv, FaMobileAlt, FaGlobe, FaSignal, FaFilm, FaFutbol,
  FaHeadset, FaBolt, FaShieldAlt, FaInfinity
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('/api/plans')
      .then(res => res.json())
      .then(data => {
        const popularPlans = [
          data.personal.find(p => p.popular),
          data.personal[0],
          data.personal.find(p => p.duration === 3) || data.personal[1]
        ].filter(Boolean);
        setPlans(popularPlans);
      })
      .catch(() => {
        // Fallback if API fails
        setPlans([
          { id: '12months', name: '12 Months', price: 70, duration: 12, connections: 1, channels: 20000, vod: true, quality: '4K/HD', support: '24/7', popular: true, savings: '61%' },
          { id: '1month', name: '1 Month', price: 15, duration: 1, connections: 1, channels: 20000, vod: true, quality: '4K/HD', support: '24/7' },
          { id: '3months', name: '3 Months', price: 30, duration: 3, connections: 1, channels: 20000, vod: true, quality: '4K/HD', support: '24/7', savings: '33%' }
        ]);
      });
  }, []);

  const features = [
    {
      icon: FaTv,
      title: '20,000+ Channels',
      description: 'Access to premium live TV channels from around the world including sports, news, movies, and entertainment.'
    },
    {
      icon: FaFilm,
      title: '50,000+ VOD',
      description: 'Massive library of movies, TV series, and on-demand content updated regularly with latest releases.'
    },
    {
      icon: FaSignal,
      title: '4K/HD Quality',
      description: 'Crystal clear picture quality with support for 4K Ultra HD and Full HD streaming on all devices.'
    },
    {
      icon: FaBolt,
      title: 'Instant Activation',
      description: 'Get started immediately after purchase. No waiting, no delays - your account is ready in seconds.'
    },
    {
      icon: FaShieldAlt,
      title: '99.9% Uptime',
      description: 'Reliable service with guaranteed uptime. Watch your favorite content without interruptions.'
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description: 'Round-the-clock customer support via WhatsApp. We\'re here to help whenever you need us.'
    }
  ];

  const highlights = [
    { icon: FaFutbol, title: 'Live Sports', description: 'Premier League, La Liga, NFL, NBA, UFC, Boxing & More' },
    { icon: FaGlobe, title: 'International', description: 'Channels from USA, UK, Canada, Europe, Asia & More' },
    { icon: FaMobileAlt, title: 'All Devices', description: 'Works on Smart TV, Android, iOS, Firestick, MAG & More' },
    { icon: FaInfinity, title: 'Unlimited', description: 'Unlimited streaming with no data caps or restrictions' }
  ];

  return (
    <div className="home">
      <Hero />
      
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our IPTV Service?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="highlights-section">
        <div className="container">
          <h2 className="section-title">What's Included</h2>
          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <highlight.icon className="highlight-icon" />
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-preview">
        <div className="container">
          <h2 className="section-title">Popular Plans</h2>
          <p className="section-subtitle">Choose the perfect plan for your needs</p>
          <div className="pricing-grid">
            {plans.map(plan => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
          <div className="pricing-cta">
            <Link to="/plans" className="btn-view-all">
              View All Plans
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Streaming?</h2>
            <p>Join thousands of satisfied customers and experience the best IPTV service</p>
            <div className="cta-buttons">
              <Link to="/free-trial" className="btn btn-primary">
                Start Free Trial
              </Link>
              <button 
                className="btn btn-secondary"
                onClick={() => window.open('https://wa.me/447869678788', '_blank')}
              >
                Contact Us on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
