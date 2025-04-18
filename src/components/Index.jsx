import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Cotizar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const desdeInputRef = useRef(null);
  const hastaInputRef = useRef(null);

  const [carData, setCarData] = useState([]);
  const [uniqueMakes, setUniqueMakes] = useState([]);
  const [uniqueModels, setUniqueModels] = useState([]);
  const [uniqueTypes, setUniqueTypes] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [uniqueYears, setUniqueYears] = useState([]);

  useEffect(() => {
    // Autocompletado de direcciones (Google)
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

    // API de carros
    const fetchCars = async () => {
      try {
        const res = await fetch(
          'https://parseapi.back4app.com/classes/Car_Model_List?limit=10000',
          {
            headers: {
              'X-Parse-Application-Id': 'NDlQrAV6OXMccnGYq6nzjCISIgubDmFoPUbaRLsI',
              'X-Parse-REST-API-Key': 'bf9hnVwRkVIProlnRUQ9wDPXGYkNNrq9IcfRUNpw',
            },
          }
        );
        const result = await res.json();
        const data = result.results;
        setCarData(data);

        setUniqueMakes([...new Set(data.map(item => item.Make))].sort());
        setUniqueTypes([...new Set(data.map(item => item.Category))].sort());
        const currentYear = new Date().getFullYear();
        const years = Array.from({ length: currentYear - 1959 }, (_, i) => currentYear - i);
        setUniqueYears(years);
      } catch (error) {
        console.error('Error cargando la data de autos', error);
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    if (selectedMake) {
      const models = carData
        .filter(car => car.Make === selectedMake)
        .map(car => car.Model);
      setUniqueModels([...new Set(models)].sort());
    } else {
      setUniqueModels([]);
    }
  }, [selectedMake, carData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.numeroContacto.value,
      email: form.correo.value,
      phone: form.numeroContacto.value,
      vehicle: `${form.marca.value} ${form.modelo.value} ${form.anio.value}`,
      type: form.tipo.value,
      pickup: form.envioDesde.value,
      dropoff: form.envioHasta.value,
      condition: form.estadoVehiculo.value,
      note: 'Cotización desde formulario web',
      ref: 'TU_AUTHCODE_AQUI'
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
        alert('Hubo un error al enviar el formulario.');
      }
    } catch (err) {
      console.error(err);
      alert('Error de conexión.');
    }
  };

  return (
    <div
      id="home"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(4, 2, 29, 0) 0%, rgb(4, 2, 29) 96%), url("/images/bgpick.jpg")',
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
          <h1 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '2.5rem', color: '#FFFFFF' }}>
            {t('cotizar.titulo')}
          </h1>
          <p
            style={{ fontSize: '1.2rem', lineHeight: '1.5em', color: '#FFFFFF', marginTop: '1rem' }}
            dangerouslySetInnerHTML={{ __html: t('cotizar.subtitulo') }}
          />
        </Col>

        <Col xs={12} md={6} className="px-3 px-md-2">
          <Card style={{ padding: '20px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
            <Card.Body>
              <Card.Title className="text-center font-inter" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
                {t('cotizar.formulario.titulo')}
              </Card.Title>

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="envioDesde" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.envioDesde")}</Form.Label>
                  <Form.Control ref={desdeInputRef} type="text" name="envioDesde" required />
                </Form.Group>

                <Form.Group controlId="envioHasta" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.envioHasta")}</Form.Label>
                  <Form.Control ref={hastaInputRef} type="text" name="envioHasta" required />
                </Form.Group>

                <Form.Group controlId="correo" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.correo")}</Form.Label>
                  <Form.Control type="email" name="correo" required />
                </Form.Group>

                <Form.Group controlId="numeroContacto" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.numeroContacto")}</Form.Label>
                  <Form.Control type="tel" name="numeroContacto" required />
                </Form.Group>

                <Form.Group controlId="marca" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.marca")}</Form.Label>
                  <Form.Select name="marca" required onChange={(e) => setSelectedMake(e.target.value)}>
                    <option value="">{t("cotizar.formulario.selectMarca")}</option>
                    {uniqueMakes.map((make, i) => <option key={i} value={make}>{make}</option>)}
                  </Form.Select>
                </Form.Group>

                <Form.Group controlId="modelo" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.modelo")}</Form.Label>
                  <Form.Select name="modelo" required>
                    <option value="">{t("cotizar.formulario.selectModelo")}</option>
                    {uniqueModels.map((model, i) => <option key={i} value={model}>{model}</option>)}
                  </Form.Select>
                </Form.Group>

                <Form.Group controlId="tipo" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.tipo")}</Form.Label>
                  <Form.Select name="tipo" required>
                    <option value="">{t("cotizar.formulario.selectTipo")}</option>
                    {uniqueTypes.map((type, i) => <option key={i} value={type}>{type}</option>)}
                  </Form.Select>
                </Form.Group>

                <Form.Group controlId="anio" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.anio")}</Form.Label>
                  <Form.Select name="anio" required>
                    <option value="">{t("cotizar.formulario.selectAnio")}</option>
                    {uniqueYears.map((year, i) => <option key={i} value={year}>{year}</option>)}
                  </Form.Select>
                </Form.Group>

                <Form.Group controlId="estadoVehiculo" className="mb-4">
                  <Form.Label>{t("cotizar.formulario.estado")}</Form.Label>
                  <div className="d-flex gap-4 mt-2">
                    <Form.Check type="radio" label={t("cotizar.formulario.runs")} name="estadoVehiculo" value="runs" required />
                    <Form.Check type="radio" label={t("cotizar.formulario.inop")} name="estadoVehiculo" value="inop" required />
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
