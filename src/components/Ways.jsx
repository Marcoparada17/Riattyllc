import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Ways = () => {
  const { t } = useTranslation();

  const images = [
    { src: './images/visa1.png', alt: '2' },
    { src: './images/master1.png', alt: '3' },
    { src: './images/paypal1.png',  alt: '4' },
  ];

  return (
    <div className="text-center my-auto bg-ways font-monserrat">
      <h1 className="mb-4 text-font pt-5 font-ways">{t('ways.title')}</h1>
      <Row className='pb-5 g-0'>
        {images.map((image, index) => (
          <Col key={index} sm={12} md={4} className='my-4'>
            <img src={image.src} alt={image.alt} className="image-ways" />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Ways;
