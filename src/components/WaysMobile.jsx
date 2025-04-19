// src/components/WaysMobile.js
import React from 'react';
import '../Waysmobile.css';

const WaysMobile = () => {
  const images = [
    { src: './images/visa.png', alt: 'Visa' },
    { src: './images/cashapp.png', alt: 'CashApp' },
    { src: './images/card.png', alt: 'Card' },
    { src: './images/paypal.png', alt: 'PayPal' },
    { src: './images/zelle.png', alt: 'Zelle' },
    { src: './images/gpay.png', alt: 'Google Pay' },
  ];

  return (
    <div className="ways-mobile bg-primary">
      {images.map((image, index) => (
        <div key={index} className="ways-mobile-icon">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default WaysMobile;
