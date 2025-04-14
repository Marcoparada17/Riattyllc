import React, { useEffect, useRef } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Cotizar = () => {
  const { t } = useTranslation();
  const desdeInputRef = useRef(null);
  const hastaInputRef = useRef(null);

  useEffect(() => {
    // Initialize Google Places Autocomplete for both fields
    if (window.google && window.google.maps) {
      const desdeAutocomplete = new window.google.maps.places.Autocomplete(desdeInputRef.current);
      const hastaAutocomplete = new window.google.maps.places.Autocomplete(hastaInputRef.current);

      // Set bounds to USA
      const bounds = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(24.396308, -125.000000),
        new window.google.maps.LatLng(49.384358, -66.934570)
      );

      desdeAutocomplete.setBounds(bounds);
      hastaAutocomplete.setBounds(bounds);

      // Add event listeners to get the selected place
      desdeAutocomplete.addListener('place_changed', () => {
        const place = desdeAutocomplete.getPlace();
        // formatted_address
        console.log(place.formatted_address);
      });

      hastaAutocomplete.addListener('place_changed', () => {
        const place = hastaAutocomplete.getPlace();
        // formatted_address
        console.log(place.formatted_address);
      });
    }
  }, []);

 return (
  <div
    id="home"
    className="bg-home"
    style={{
      backgroundImage:
        'linear-gradient(180deg, rgba(4, 2, 29, 0) 0%, rgb(4, 2, 29) 96%), url("/images/bgpick.jpg")',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      padding: '4rem 1rem',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Row className="align-items-center justify-content-center w-100 g-0">
      {/* Texto Izquierdo */}
      <Col xs={12} md={6} className="text-center text-md-start px-3 px-md-5 mb-4 mb-md-0">
        <h1
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '2.5rem',
            color: '#FFFFFF',
          }}
        >
          {t('cotizar.titulo')}
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            lineHeight: '1.5em',
            color: '#FFFFFF',
            marginTop: '1rem',
          }}
        >
          {t('cotizar.subtitulo')}
        </p>
      </Col>

      {/* Formulario a la derecha */}
      <Col xs={12} md={6} className="px-3 px-md-2">
        <Card
          style={{
            padding: '20px',
            borderRadius: '15px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          <Card.Body>
            <Card.Title className="text-center font-inter" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
              {t('cotizar.formulario.titulo')}
            </Card.Title>
                 <Form>
                <Form.Group controlId="envioDesde" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.envioDesde")}</Form.Label>
                  <Form.Control 
                    ref={desdeInputRef}
                    type="text" 
                    placeholder={t("cotizar.formulario.placeholderDesde")} 
                    autoComplete="off"
                  />
                </Form.Group>

                <Form.Group controlId="envioHasta" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.envioHasta")}</Form.Label>
                  <Form.Control 
                    ref={hastaInputRef}
                    type="text" 
                    placeholder={t("cotizar.formulario.placeholderHasta")} 
                    autoComplete="off"
                  />
                </Form.Group>

                <Form.Group controlId="correo" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.correo")}</Form.Label>
                  <Form.Control type="email" placeholder={t("cotizar.formulario.placeholderCorreo")} />
                </Form.Group>

                <Form.Group controlId="numeroContacto" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.numeroContacto")}</Form.Label>
                  <Form.Control type="tel" placeholder={t("cotizar.formulario.placeholderNumero")} />
                </Form.Group>

                <Form.Group controlId="vehiculo" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.vehiculo")}</Form.Label>
                  <Form.Control type="text" placeholder={t("cotizar.formulario.placeholderVehiculo")} />
                </Form.Group>

                <Form.Group controlId="anio" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.anio")}</Form.Label>
                  <Form.Control type="number" placeholder={t("cotizar.formulario.placeholderAnio")} />
                </Form.Group>

                <div className="text-center">
                  <Button variant="primary" type="submit" style={{ width: '100%', fontSize: '1.2rem' }}>
                    {t("cotizar.formulario.boton")}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cotizar;
