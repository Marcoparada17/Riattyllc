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
  const [selectedMake, setSelectedMake] = useState('');
  const [customMake, setCustomMake] = useState('');
  const [customModel, setCustomModel] = useState('');
  const [uniqueYears, setUniqueYears] = useState([]);

  const vehicleTypes = [
    "Car", "Convertible", "Coupe", "Sedan", "SUV", "Pickup", "Van /MiniVan",
    "Wagon", "Motorcycle", "ATV", "Heavy Equipment", "RV", "Travel Trailer", "Boat", "Other"
  ];

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

    const fetchCars = async () => {
      try {
        const res = await fetch('https://parseapi.back4app.com/classes/Car_Model_List?limit=10000', {
          headers: {
            'X-Parse-Application-Id': 'NDlQrAV6OXMccnGYq6nzjCISIgubDmFoPUbaRLsI',
            'X-Parse-REST-API-Key': 'bf9hnVwRkVIProlnRUQ9wDPXGYkNNrq9IcfRUNpw',
          }
        });
        const result = await res.json();
        setCarData(result.results);
        setUniqueMakes([...new Set(result.results.map(item => item.Make))].sort());
        const currentYear = new Date().getFullYear();
        const years = Array.from({ length: currentYear - 1959 }, (_, i) => currentYear - i);
        setUniqueYears(years);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    if (selectedMake && selectedMake !== "Other") {
      const filteredModels = carData.filter(car => car.Make === selectedMake).map(car => car.Model);
      setUniqueModels([...new Set(filteredModels)].sort());
    } else {
      setUniqueModels([]);
    }
  }, [selectedMake, carData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const make = selectedMake === "Other" ? customMake : form.marca.value;
    const model = form.modelo.value === "Other" ? customModel : form.modelo.value;

    const data = {
      name: form.numeroContacto.value,
      email: form.correo.value,
      phone: form.numeroContacto.value,
      vehicle: `${make} ${model} ${form.anio.value}`,
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
        alert('Error al enviar. Intenta nuevamente.');
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
          <p style={{ fontSize: '1.2rem', lineHeight: '1.5em', color: '#FFFFFF', marginTop: '1rem' }}>
            {t('cotizar.subtitulo')}
          </p>
        </Col>

        <Col xs={12} md={6} className="px-3 px-md-2">
          <Card style={{ padding: '20px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
            <Card.Body>
              <Card.Title className="text-center font-inter" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
                {t('cotizar.formulario.titulo')}
              </Card.Title>

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="envioDesde" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.envioDesde")}</Form.Label>
                  <Form.Control ref={desdeInputRef} name="envioDesde" type="text" required />
                </Form.Group>

                <Form.Group controlId="envioHasta" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.envioHasta")}</Form.Label>
                  <Form.Control ref={hastaInputRef} name="envioHasta" type="text" required />
                </Form.Group>

                <Form.Group controlId="correo" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.correo")}</Form.Label>
                  <Form.Control name="correo" type="email" required />
                </Form.Group>

                <Form.Group controlId="numeroContacto" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.numeroContacto")}</Form.Label>
                  <Form.Control name="numeroContacto" type="tel" required />
                </Form.Group>

                <Form.Group controlId="marca" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.marca")}</Form.Label>
                  <Form.Select name="marca" value={selectedMake} onChange={(e) => setSelectedMake(e.target.value)} required>
                    <option value="">{t("cotizar.formulario.selectMarca")}</option>
                    {uniqueMakes.map((make, i) => <option key={i} value={make}>{make}</option>)}
                    <option value="Other">Other</option>
                  </Form.Select>
                  {selectedMake === "Other" && (
                    <Form.Control className="mt-2" type="text" name="customMake" placeholder={t("")} onChange={(e) => setCustomMake(e.target.value)} required />
                  )}
                </Form.Group>

                <Form.Group controlId="modelo" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.modelo")}</Form.Label>
                  <Form.Select name="modelo" required>
                    <option value="">{t("cotizar.formulario.selectModelo")}</option>
                    {uniqueModels.map((model, i) => <option key={i} value={model}>{model}</option>)}
                    <option value="Other">Other</option>
                  </Form.Select>
                  {customMake && (
                    <Form.Control className="mt-2" type="text" name="customModel" placeholder={t("")} onChange={(e) => setCustomModel(e.target.value)} required />
                  )}
                </Form.Group>

                <Form.Group controlId="tipo" className="mb-3">
                  <Form.Label>{t("cotizar.formulario.tipo")}</Form.Label>
                  <Form.Select name="tipo" required>
                    <option value="">{t("cotizar.formulario.selectTipo")}</option>
                    {vehicleTypes.map((type, i) => <option key={i} value={type}>{type}</option>)}
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

                <Button variant="primary" type="submit" style={{ width: '100%', fontSize: '1.2rem' }}>
                  {t("cotizar.formulario.boton")}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cotizar;
