import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Gracias = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div 
      className="text-center text-font degraded-background2" 
      style={{ 
        minHeight: '75vh',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 className='mt-5 px-auto'>{t('gracias.thank_you')}</h1>
      <h3 className='mb-5 px-auto'>{t('gracias.transporters_contact')}</h3>
      <Button 
        className="custom-color-btn font-f mb-3 w-50" 
        style={{
          backgroundColor: 'white',
          color: 'black',
          border: '1px solid black',
          borderRadius: '0.5rem', // esquinas redondeadas
        }} 
        onClick={goToHome}
      >
        {t('gracias.return_home')}
      </Button>
    </div>
  );
};

export default Gracias;
