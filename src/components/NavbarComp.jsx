import React from 'react';
import { Container, Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

function NavbarComp() {
  const { t, i18n } = useTranslation();

  // Función para cambiar de idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Definir los datos de los idiomas con sus respectivas banderas
  const languages = {
    es: { name: 'Español', flag: '../../images/es.png' },
    en: { name: 'English', flag: '../../images/en.png' },
  };

  // Obtener el idioma actual
  const currentLanguage = i18n.language || 'es'; // Por defecto, español
  const { name, flag } = languages[currentLanguage] || languages['es']; // Fallback a español si no se reconoce

  return (
    <Navbar className="bg-navbar2" variant="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="../../images/Riatty.png" // Asegúrate de que la ruta sea correcta.
            width="140"
            height="auto"
            className="d-inline-block align-top mb-2"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Alinea los elementos del Nav a la derecha */}

            {/* Dropdown para cambiar de idioma mostrando el actual */}
            <Dropdown className="me-2">
              <Dropdown.Toggle className='me-4'>
                <img 
                  src={flag} 
                  alt={name} 
                  width="20" 
                  height="20" 
                  className="me-2"
                />
                {name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {Object.entries(languages).map(([key, { name, flag }]) => (
                  <Dropdown.Item key={key} onClick={() => changeLanguage(key)}>
                    <img 
                      src={flag} 
                      alt={name} 
                      width="20" 
                      height="20" 
                      className="me-2"
                    />
                    {name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link href="/servicios" className='text-font1 me-4'>{t('navbar.services')}</Nav.Link>
            <Nav.Link href="/terminos" className='text-font1 me-4'>{t('navbar.terms')}</Nav.Link>
            <Nav.Link href="/faq" className='text-font1 me-4'>{t('navbar.faq')}</Nav.Link>
            <Nav.Link href="/contact" className='text-font1 me-4'>{t('navbar.contact')}</Nav.Link>

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
