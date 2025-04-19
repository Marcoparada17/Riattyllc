import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../Ways.css'


const Ways = () => {


  const images = [
    { src: './images/visa.png', alt: '1' },
    { src: './images/cashapp.png', alt: '2' },
    { src: './images/card.png', alt: '3' },
    { src: './images/paypal.png',  alt: '4' },
    { src: './images/zelle.png',  alt: '5' },
    { src: './images/gpay.png',  alt: '6' },
  ];

  return (
    <div className="text-center bg-primary font-monserrat align-content-center ">
      <Row className=' g-0 ways-desktop'>
        {images.map((image, index) => (
          <Col key={index} sm={12} md={2} className=''>
            <img src={image.src} alt={image.alt} className="" />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Ways;
