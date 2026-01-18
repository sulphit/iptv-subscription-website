import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaCheck, FaCrown, FaRocket, FaArrowLeft, FaWhatsapp } from 'react-icons/fa';
import './PlanDetail.css';

const PlanDetail = () => {
  const { planId } = useParams();
  const navigate = useNavigate();
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/plans')
      .then(res => res.json())
      .then(data => {
        // Find plan in personal plans
        let foundPlan = data.personal.find(p => p.id === planId);
        
        // If not found, check business plans
        if (!foundPlan) {
          foundPlan = data.business.find(p => p.id === planId);
        }

        if (foundPlan) {
          setPlan(foundPlan);
        }
        setLoading(false);
      })
      .catch(() => {
        // Fallback data
        const fallbackPlans = {
          '1month': { id: '1month', name: '1 Month', price: 15, duration: 1, connections: 1, channels: 20000, vod: true, quality: '4K/HD', support: '24/7' },
          '3months': { id: '3months', name: '3 Months', price: 30, duration: 3, connections: 1, channels: 20000, vod: true, quality: '4K/HD', support: '24/7', savings: '33%' },
          '6months': { id: '6months', name: '6 Months', price: 40, duration: 6, connections: 1, channels: 20000, vod: true, quality: '4K/HD', support: '24/7', savings: '56%' },
          '9months': { id: '9months', name: '9 Months', price: 50, duration: 9, connections: 1, channels: 20000, vod: true, quality: '4K/HD', support: '24/7', savings: '63%' },
          '12months': { id: '12months', name: '12 Months', price: 70, duration: 12, connections: 1, channels: 20000, vod: true, quality: '4K/HD', support: '24/7', savings: '61%', popular: true },
          'business': { id: 'business', name: 'Business / Hotel IPTV', price: 99.99, duration: 1, connections: 10, channels: 20000, vod: true, quality: '4K/HD', support: '24/7', custom: true }
        };
        setPlan(fallbackPlans[planId]);
        setLoading(false);
      });
  }, [planId]);

  if (loading) {
    return <div className="loading">Loading plan details...</div>;
  }

  if (!plan) {
    return (
      <div className="plan-detail-page">
        <div className="container">
          <div className="error-message">
            <h2>Plan not found</h2>
            <Link to="/plans" className="btn btn-primary">View All Plans</Link>
          </div>
        </div>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const message = `Hello! I'm interested in the ${plan.name} plan (£${plan.price}).`;
    window.open(`https://wa.me/447869678788?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="plan-detail-page">
      <section className="plan-detail-hero">
        <div className="container">
          <Link to="/plans" className="back-link">
            <FaArrowLeft /> Back to Plans
          </Link>
          <div className="plan-header">
            {plan.popular && (
              <div className="popular-badge-large">
                <FaCrown /> Most Popular
              </div>
            )}
            {plan.custom && (
              <div className="business-badge-large">
                <FaRocket /> Custom Solution
              </div>
            )}
            <h1 className="plan-title">{plan.name} Plan</h1>
            <div className="plan-price-large">
              <span className="currency">£</span>
              <span className="amount">{plan.price}</span>
              <span className="period">/month</span>
            </div>
            {plan.savings && (
              <div className="savings-badge-large">Save {plan.savings}</div>
            )}
          </div>
        </div>
      </section>

      <section className="plan-details">
        <div className="container">
          <div className="plan-content">
            <div className="plan-features-section">
              <h2>What's Included</h2>
              <div className="features-list">
                <div className="feature-item-large">
                  <FaCheck className="check-icon" />
                  <div>
                    <strong>{plan.channels?.toLocaleString() || '20,000+'}</strong> Live Channels
                    <p>Access to premium channels from around the world</p>
                  </div>
                </div>
                <div className="feature-item-large">
                  <FaCheck className="check-icon" />
                  <div>
                    <strong>{plan.connections}</strong> Connection{plan.connections > 1 ? 's' : ''}
                    <p>Watch on {plan.connections === 1 ? 'your device' : `${plan.connections} devices simultaneously`}</p>
                  </div>
                </div>
                <div className="feature-item-large">
                  <FaCheck className="check-icon" />
                  <div>
                    <strong>{plan.duration}</strong> Month{plan.duration > 1 ? 's' : ''} Access
                    <p>Full access for {plan.duration} month{plan.duration > 1 ? 's' : ''}</p>
                  </div>
                </div>
                <div className="feature-item-large">
                  <FaCheck className="check-icon" />
                  <div>
                    <strong>50,000+</strong> VOD Content
                    <p>Movies, TV series, and on-demand content</p>
                  </div>
                </div>
                <div className="feature-item-large">
                  <FaCheck className="check-icon" />
                  <div>
                    <strong>{plan.quality || '4K/HD'}</strong> Quality
                    <p>Crystal clear streaming quality</p>
                  </div>
                </div>
                <div className="feature-item-large">
                  <FaCheck className="check-icon" />
                  <div>
                    <strong>{plan.support || '24/7'}</strong> Support
                    <p>Round-the-clock customer support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="plan-cta-section">
              <div className="cta-card">
                <h3>Ready to Get Started?</h3>
                <p>Choose one of the options below to begin</p>
                <div className="cta-buttons-large">
                  <Link to="/free-trial" className="btn btn-trial-large">
                    Start Free Trial
                  </Link>
                  <button 
                    className="btn btn-buy-large"
                    onClick={handleWhatsAppClick}
                  >
                    <FaWhatsapp /> Buy Now via WhatsApp
                  </button>
                </div>
                <div className="trust-info">
                  <p>✓ Instant activation</p>
                  <p>✓ 99.9% uptime guarantee</p>
                  <p>✓ No credit card required for trial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanDetail;
