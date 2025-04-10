import React from 'react';
import '../Footer.css';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className='footer-bg py-4 text-white d-none d-md-block'>
      <div className='container'>
        <Row className=''>

          {/* Logo + descripción */}
          <Col md={5} className='mb-3 '>
            <img src='../../images/whitelogo.png' alt='Logo' className='f-logo mb-1 ' />
            <h2 className='footer-description px-3'>{t('footer.description')}</h2>
            
          </Col>

          {/* Enlaces rápidos */}
          <Col md={3} className='mb-4 mt-4'>
            <h5 className='fw-bold mb-3'>Quick Links</h5>
            <ul className='list-unstyled'>
              <li className='mb-2'><a href="#home" className='f-text'>Home</a></li>
              <li className='mb-2'><a href="#home" className='f-text'>{t('footer.cotiza')}</a></li>
              <li className='mb-2'><a href="#review" className='f-text'>{t('navbar.faq')}</a></li>
              <li className='mb-2'><a href="#contact" className='f-text'>{t('navbar.contact')}</a></li>
              <li><a href="/Terms" className='f-text'>{t('footer.terms')}</a></li>
            </ul>
          </Col>

          {/* Información de contacto */}
          <Col md={4}>
            <h5 className='fw-bold mb-3 mt-4'>Get In Touch</h5>
            <p>
              <a 
                href='https://www.google.com/maps/place/8250+NW+27TH+ST+UNIT+309+DORAL+FL+33122' 
                target='_blank' 
                rel='noopener noreferrer' 
                className='text-white text-decoration-underline'>
                8250 NW 27TH ST UNIT 309 DORAL FL 33122
              </a>
            </p>
            <p>
              <a href='https://www.riatty.com' className='text-white'>www.riatty.com</a>
            </p>
            <div className='contact-button mt-2 mb-2'>
              <a href='tel:+15120000000' className='btn text-white'>
                +1 (512) 000-0000
              </a>
            </div>
            <div className='contact-button ms-2'>
              <a href='mailto:info@riatty.com' className='btn text-white '>
                Soporte@riatty.com
              </a>
            </div>
            <div className='d-flex gap-3 mt-3 px-3'>
              <a href='https://www.facebook.com/tuempresa' target='_blank' rel='noopener noreferrer'>
                <img src='../../images/facebook.png' className='footer-icon' alt='Facebook' />
              </a>
              <a href='https://www.instagram.com/tuempresa' target='_blank' rel='noopener noreferrer'>
                <img src='../../images/instagram.png' className='footer-icon' alt='Instagram' />
              </a>
            </div>
          </Col>
        </Row>

        {/* Línea separadora */}
        <div className='footer-line my-4'></div>

        {/* Footer inferior */}
        <Row className='justify-content-center'>
          <Col md='auto' className='f-text2 d-flex justify-content-center align-items-center gap-4 flex-wrap text-center'>
            <div>Llámanos al <a href='tel:+1000000000' className='text-white text-decoration-underline'>(1) 000-000-000</a></div>
            <div><a href='mailto:Soporte@RiattyLLC.com' className='text-white text-decoration-underline'>Soporte@RiattyLLC.com</a></div>
            <div>©2025 Riatty LLC</div>
            
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
