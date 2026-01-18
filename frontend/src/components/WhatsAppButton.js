import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/447869678788', '_blank');
  };

  return (
    <div className="whatsapp-float" onClick={handleClick}>
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-tooltip">Chat with us on WhatsApp</span>
    </div>
  );
};

export default WhatsAppButton;
