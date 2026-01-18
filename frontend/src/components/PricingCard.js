import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheck, FaCrown, FaRocket } from 'react-icons/fa';
import './PricingCard.css';

const PricingCard = ({ plan, type = 'personal' }) => {
  const navigate = useNavigate();
  const isPopular = plan.popular;
  const isBusiness = plan.custom;

  const handleCardClick = (e) => {
    // Don't navigate if clicking on buttons
    if (e.target.closest('.pricing-cta')) {
      return;
    }
    navigate(`/plan/${plan.id}`);
  };

  return (
    <div 
      className={`pricing-card ${isPopular ? 'popular' : ''} ${isBusiness ? 'business' : ''}`}
      onClick={handleCardClick}
    >
      {isPopular && (
        <div className="popular-badge">
          <FaCrown /> Most Popular
        </div>
      )}
      {isBusiness && (
        <div className="business-badge">
          <FaRocket /> Custom Solution
        </div>
      )}
      <div className="pricing-header">
        <h3 className="plan-name">{plan.name}</h3>
        <div className="plan-price">
          <span className="currency">£</span>
          <span className="amount">{plan.price}</span>
          <span className="period">/month</span>
        </div>
        {plan.savings && (
          <div className="savings-badge">Save {plan.savings}</div>
        )}
      </div>
      <div className="pricing-features">
        <div className="feature-item">
          <FaCheck className="check-icon" />
          <span><strong>{plan.channels?.toLocaleString() || '20,000+'}</strong> Channels</span>
        </div>
        <div className="feature-item">
          <FaCheck className="check-icon" />
          <span><strong>{plan.connections}</strong> Connection{plan.connections > 1 ? 's' : ''}</span>
        </div>
        <div className="feature-item">
          <FaCheck className="check-icon" />
          <span><strong>{plan.duration}</strong> Month{plan.duration > 1 ? 's' : ''}</span>
        </div>
        <div className="feature-item">
          <FaCheck className="check-icon" />
          <span>{plan.vod ? '50,000+ VOD' : 'No VOD'}</span>
        </div>
        <div className="feature-item">
          <FaCheck className="check-icon" />
          <span>{plan.quality || '4K/HD'} Quality</span>
        </div>
        <div className="feature-item">
          <FaCheck className="check-icon" />
          <span>{plan.support || '24/7'} Support</span>
        </div>
      </div>
      <div className="pricing-cta">
        <Link to="/free-trial" className="btn-trial">
          Free Trial
        </Link>
        <button 
          className="btn-buy"
          onClick={() => window.open('https://wa.me/447869678788', '_blank')}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
