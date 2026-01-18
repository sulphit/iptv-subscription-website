import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PricingCard from '../components/PricingCard';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './Plans.css';

const Plans = () => {
  const [plansData, setPlansData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetch('/api/plans')
      .then(res => res.json())
      .then(data => setPlansData(data))
      .catch(() => {
        // Fallback data
        setPlansData({
          personal: [
            { id: '1month', name: '1 Month', price: 15, duration: 1, connections: 1, channels: 20000, vod: true, quality: '4K/HD', support: '24/7' },
            { id: '3months', name: '3 Months', price: 30, duration: 3, connections: 1, channels: 20000, vod: true, quality: '4K/HD', support: '24/7', savings: '33%' },
            { id: '6months', name: '6 Months', price: 40, duration: 6, connections: 1, channels: 20000, vod: true, quality: '4K/HD', support: '24/7', savings: '56%' },
            { id: '9months', name: '9 Months', price: 50, duration: 9, connections: 1, channels: 20000, vod: true, quality: '4K/HD', support: '24/7', savings: '63%' },
            { id: '12months', name: '12 Months', price: 70, duration: 12, connections: 1, channels: 20000, vod: true, quality: '4K/HD', support: '24/7', savings: '61%', popular: true }
          ],
          business: [
            { id: 'business', name: 'Business / Hotel IPTV', price: 99.99, duration: 1, connections: 10, channels: 20000, vod: true, quality: '4K/HD', support: '24/7', custom: true }
          ],
          addons: [
            { id: 'extra-connection', name: 'Extra Connection', price: 4.99 },
            { id: 'adult-content', name: 'Adult Content', price: 2.99 },
            { id: 'premium-sports', name: 'Premium Sports', price: 3.99 }
          ]
        });
      });

    // Scroll to anchor if present
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [location]);

  if (!plansData) {
    return <div className="loading">Loading plans...</div>;
  }

  const comparisonData = [
    { feature: 'Channels', '1month': '20,000+', '3months': '20,000+', '6months': '20,000+', '9months': '20,000+', '12months': '20,000+' },
    { feature: 'Connections', '1month': '1', '3months': '1', '6months': '1', '9months': '1', '12months': '1' },
    { feature: 'VOD Library', '1month': '50,000+', '3months': '50,000+', '6months': '50,000+', '9months': '50,000+', '12months': '50,000+' },
    { feature: 'Quality', '1month': '4K/HD', '3months': '4K/HD', '6months': '4K/HD', '9months': '4K/HD', '12months': '4K/HD' },
    { feature: 'Support', '1month': '24/7', '3months': '24/7', '6months': '24/7', '9months': '24/7', '12months': '24/7' },
    { feature: 'EPG', '1month': 'Yes', '3months': 'Yes', '6months': 'Yes', '9months': 'Yes', '12months': 'Yes' },
    { feature: 'Catch-up TV', '1month': 'Yes', '3months': 'Yes', '6months': 'Yes', '9months': 'Yes', '12months': 'Yes' }
  ];

  return (
    <div className="plans-page">
      <section className="plans-hero">
        <div className="container">
          <h1 className="page-title">IPTV Subscription Plans</h1>
          <p className="page-subtitle">Choose the perfect plan for your streaming needs</p>
        </div>
      </section>

      <section id="personal" className="plans-section">
        <div className="container">
          <h2 className="section-title">Subscription Plans</h2>
          <p className="section-description">Choose the duration that works best for you</p>
          <div className="pricing-grid">
            {plansData.personal.map(plan => (
              <PricingCard key={plan.id} plan={plan} type="personal" />
            ))}
          </div>
        </div>
      </section>

      <section id="business" className="plans-section">
        <div className="container">
          <h2 className="section-title">Business & Hotel IPTV</h2>
          <p className="section-description">Custom solutions for businesses, hotels, and commercial establishments</p>
          <div className="pricing-grid">
            {plansData.business.map(plan => (
              <PricingCard key={plan.id} plan={plan} type="business" />
            ))}
          </div>
        </div>
      </section>

      <section className="comparison-section">
        <div className="container">
          <h2 className="section-title">Plan Comparison</h2>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>1 Month</th>
                  <th>3 Months</th>
                  <th>6 Months</th>
                  <th>9 Months</th>
                  <th>12 Months</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index}>
                    <td className="feature-name">{row.feature}</td>
                    <td>{row['1month']}</td>
                    <td>{row['3months']}</td>
                    <td>{row['6months']}</td>
                    <td>{row['9months']}</td>
                    <td>{row['12months']}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="plans-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Not Sure Which Plan to Choose?</h2>
            <p>Contact us on WhatsApp and we'll help you find the perfect plan</p>
            <button 
              className="btn btn-primary"
              onClick={() => window.open('https://wa.me/447869678788', '_blank')}
            >
              Chat with Us on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
