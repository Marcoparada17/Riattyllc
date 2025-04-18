import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    visible && (
      <div
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '40px',
          left: '40px',
          zIndex: 9999,
          cursor: 'pointer',
          backgroundColor: '#0d6efd', // Bootstrap primary
          padding: '12px',
          borderRadius: '50%',
          color: 'white',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          transition: 'opacity 0.3s ease-in-out',
        }}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </div>
    )
  );
};

export default ScrollToTop;
