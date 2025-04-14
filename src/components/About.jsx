import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();
  
  return (
    <Container className="my-5" id="aboutus">
      <Row className="mb-4">
        <Col>
          <h1 className=" text-center font-inter text-bold2">{t('aboutUs.title')}</h1>
        </Col>
      </Row>
      
      <Row className="align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <Image 
            src="../images/about-us.jpg" 
            alt="Riatty LLC car transport" 
            fluid 
            rounded 
            className="shadow"
          />
        </Col>
        
        <Col md={6}>
          <div className="p-4 bg-light rounded shadow-sm">
            <h2 className="mb-4 ">{t('aboutUs.subtitle')}</h2>
            <p className="lead text-justify-custom">{t('aboutUs.intro')}</p>
            <p className='text-justify-custom'>{t('aboutUs.description1')}</p>
            <p className='text-justify-custom'>{t('aboutUs.description2')}</p>
            <p className="font-weight-bold text-justify-custom ">{t('aboutUs.mission')}</p>
          </div>
        </Col>
      </Row>
      
      <Row className="mt-5">
        <Col>
          <div className="p-4 bg-primary text-white rounded shadow text-center">
            <h3>{t('aboutUs.whyChooseUs')}</h3>
            <ul className="list-unstyled">
              <li className="mb-2">✓ {t('aboutUs.benefit1')}</li>
              <li className="mb-2">✓ {t('aboutUs.benefit2')}</li>
              <li className="mb-2">✓ {t('aboutUs.benefit3')}</li>
              <li className="mb-2">✓ {t('aboutUs.benefit4')}</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;