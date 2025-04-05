import React from 'react';
import '../Footer.css';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Footer = () => {
   const { t} = useTranslation();
  return (
    <footer className='p-5 d-none d-md-block footer-bg'>
        <div className='d-flex justify-content-start align-items-center footer-container'>
            <div className='footer-menu mx-5'>
                <ul className='text-start list-unstyled'>
                  <li><h3><a href="#home" className='f-home'>Home</a></h3></li>
                  <li><a href="#home" className='f-text'>{t('footer.cotiza')}</a></li>
                  <li><a href="#review" className='f-text'>{t('navbar.faq')}</a></li>
                  <li><a href="#contact" className='f-text'>{t('navbar.contact')}</a></li>
                  <li><a href="/Terms" className='f-text'>{t('footer.terms')}</a></li>
                </ul>
            </div>
            <img src="../../images/Riatty.png" alt="Logo" className="f-logo ms-3" />
        </div>

      {/* Línea blanca más larga */}
      <div className="footer-line"></div>

      <Row>
        <Col md={12} className="footer-bottom f-text2">
          <div className='d-inline '>
            <p>¿Preguntas? Llámanos al (1) 000-777-2265</p>
          </div>
          <div className='d-inline '>
            <p>Soporte@RiattyLLC.com</p>
          </div>
          <div className='d-inline '>
            <p>©2025 Riatty LLC</p>
          </div>
        </Col>  
      </Row>
    </footer>   
  );
};

export default Footer;
