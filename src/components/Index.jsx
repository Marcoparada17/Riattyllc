import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Cotizar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const desdeInputRef = useRef(null);
  const hastaInputRef = useRef(null);

  useEffect(() => {
    if (window.google && window.google.maps) {
      const desdeAutocomplete = new window.google.maps.places.Autocomplete(desdeInputRef.current);
      const hastaAutocomplete = new window.google.maps.places.Autocomplete(hastaInputRef.current);

      const bounds = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(24.396308, -125.0),
        new window.google.maps.LatLng(49.384358, -66.93457)
      );

      desdeAutocomplete.setBounds(bounds);
      hastaAutocomplete.setBounds(bounds);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.numeroContacto.value,
      email: form.correo.value,
      phone: form.numeroContacto.value,
      vehicle: `${form.vehiculo.value} ${form.anio.value}`,
      pickup: form.envioDesde.value,
      dropoff: form.envioHasta.value,
      condition: form.estadoVehiculo.value,
      note: 'Cotización desde formulario web',
      ref: 'TU_AUTHCODE_AQUI' // Reemplaza esto por tu Auth Code real de BATS
    };

    try {
      const response = await fetch('https://leadform.batscrm.com/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        navigate('/gracias');
      } else {
        alert('Hubo un error al enviar el formulario. Intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error al enviar a BATS:', error);
      alert('Error de conexión. Intenta más tarde.');
    }
  };

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
            dangerouslySetInnerHTML={{ __html: t('cotizar.subtitulo') }}
          />
        </Col>

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
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="envioDesde" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.envioDesde")}</Form.Label>
                  <Form.Control 
                    ref={desdeInputRef}
                    type="text" 
                    name="envioDesde"
                    placeholder={t("cotizar.formulario.placeholderDesde")} 
                    autoComplete="on"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="envioHasta" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.envioHasta")}</Form.Label>
                  <Form.Control 
                    ref={hastaInputRef}
                    type="text" 
                    name="envioHasta"
                    placeholder={t("cotizar.formulario.placeholderHasta")} 
                    autoComplete="on"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="correo" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.correo")}</Form.Label>
                  <Form.Control type="email" name="correo" placeholder={t("cotizar.formulario.placeholderCorreo")} required />
                </Form.Group>

                <Form.Group controlId="numeroContacto" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.numeroContacto")}</Form.Label>
                  <Form.Control type="tel" name="numeroContacto" placeholder={t("cotizar.formulario.placeholderNumero")} required />
                </Form.Group>

                <Form.Group controlId="vehiculo" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.vehiculo")}</Form.Label>
                  <Form.Control type="text" name="vehiculo" placeholder={t("cotizar.formulario.placeholderVehiculo")} required />
                </Form.Group>

                <Form.Group controlId="anio" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.anio")}</Form.Label>
                  <Form.Control type="number" name="anio" placeholder={t("cotizar.formulario.placeholderAnio")} required />
                </Form.Group>

                <Form.Group controlId="estadoVehiculo" className="mb-4">
                  <Form.Label>{t("cotizar.formulario.estado")}</Form.Label>
                  <div className="d-flex gap-4 mt-2">
                    <Form.Check
                      type="radio"
                      label={t("cotizar.formulario.runs")}
                      name="estadoVehiculo"
                      value="runs"
                      required
                    />
                    <Form.Check
                      type="radio"
                      label={t("cotizar.formulario.inop")}
                      name="estadoVehiculo"
                      value="inop"
                      required
                    />
                  </div>
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