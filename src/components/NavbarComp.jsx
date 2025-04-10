import React from 'react';
import { Container, Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

function NavbarComp() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const languages = {
    es: { name: 'Español', flag: '../../images/es.png' },
    en: { name: 'English', flag: '../../images/en.png' },
  };

  const currentLanguage = i18n.language || 'es';
  const { name, flag } = languages[currentLanguage] || languages['es'];

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Navbar className="bg-navbar2" variant="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="../../images/Riatty.png"
            width="140"
            height="auto"
            className="d-inline-block align-top mb-2"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Dropdown className="me-2">
              <Dropdown.Toggle className='me-4'>
                <img src={flag} alt={name} width="20" height="20" className="me-2" />
                {name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {Object.entries(languages).map(([key, { name, flag }]) => (
                  <Dropdown.Item key={key} onClick={() => i18n.changeLanguage(key)}>
                    <img src={flag} alt={name} width="20" height="20" className="me-2" />
                    {name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link onClick={() => scrollToSection('aboutus')} className='text-font1 me-4'>
              {t('navbar.about')}
            </Nav.Link>
            <Nav.Link href="/terms" className='text-font1 me-4'>
              {t('navbar.terms')}
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('faq')} className='text-font1 me-4'>
              {t('navbar.faq')}
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('contact')} className='text-font1 me-4'>
              {t('navbar.contact')}
            </Nav.Link>

            <Button variant="outline-light" style={{ backgroundColor: 'rgb(58, 162, 248)', borderColor: '#1F43B2' }}>
              {t('navbar.quote')}
            </Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
