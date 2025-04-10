import React from 'react';
import { Row, Col } from 'react-bootstrap';


const Ways = () => {


  const images = [
    { src: './images/visa.png', alt: '1' },
    { src: './images/cashapp.png', alt: '2' },
    { src: './images/card.png', alt: '3' },
    { src: './images/paypal.png',  alt: '4' },
  ];

  return (
    <div className="text-center bg-primary font-monserrat ">
      <Row className=' g-0'>
        {images.map((image, index) => (
          <Col key={index} sm={12} md={3} className=''>
            <img src={image.src} alt={image.alt} className="image-ways" />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Ways;
