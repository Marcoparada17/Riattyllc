import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Spinner, Alert } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => (
  <div style={{
    color: 'white',
    background: 'red',
    padding: '5px 10px',
    borderRadius: '50%',
    fontWeight: 'bold',
    transform: 'translate(-50%, -50%)'
  }}>
    {text || '🚚'}
  </div>
);

const TrackVehicle = () => {
  const [trackId, setTrackId] = useState('');
  const [vehicleInfo, setVehicleInfo] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: 39.8283, lng: -98.5795 }); // USA center

  const fetchTrackingData = async () => {
    setLoading(true);
    setError(null);

    try {
      // 🚨 SIMULACIÓN DE API
      await new Promise((res) => setTimeout(res, 1000));

      const simulatedData = {
        vehicle: {
          make: 'Toyota',
          model: 'Camry',
          year: 2022,
          vin: '4T1BF1FKXHU123456',
          driver: 'Juan Pérez',
          status: 'En tránsito',
          lastUpdated: new Date().toISOString()
        },
        currentLocation: {
          lat: 36.1627,
          lng: -86.7816
        }
      };

      setVehicleInfo(simulatedData.vehicle);
      setLocation(simulatedData.currentLocation);
      setMapCenter(simulatedData.currentLocation);
    } catch (err) {
      setError('No se pudo obtener la ubicación.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!trackId) return;
    fetchTrackingData();
    const interval = setInterval(() => fetchTrackingData(), 30000);
    return () => clearInterval(interval);
  }, [trackId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trackId.trim()) {
      fetchTrackingData();
    }
  };

  return (
    <div className="p-4">
      <Card className="mb-4">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="trackId" className="mb-3">
              <Form.Label>Ingresa tu código de seguimiento</Form.Label>
              <Form.Control
                type="text"
                value={trackId}
                onChange={(e) => setTrackId(e.target.value)}
                placeholder="Ej: ABC123456"
                required
                disabled={loading}
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" />
                  <span className="ms-2">Buscando...</span>
                </>
              ) : 'Buscar'}
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {error && <Alert variant="danger">{error}</Alert>}

      {vehicleInfo && (
        <Card className="mb-4">
          <Card.Body>
            <h5>Información del vehículo</h5>
            <p><strong>Vehículo:</strong> {vehicleInfo.year} {vehicleInfo.make} {vehicleInfo.model}</p>
            <p><strong>VIN:</strong> {vehicleInfo.vin}</p>
            <p><strong>Estado:</strong> {vehicleInfo.status}</p>
            <p><strong>Conductor:</strong> {vehicleInfo.driver}</p>
            <p><strong>Última actualización:</strong> {new Date(vehicleInfo.lastUpdated).toLocaleString()}</p>
          </Card.Body>
        </Card>
      )}

      <div style={{ height: '500px', width: '100%', borderRadius: '8px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDgWLGeNnot1O792zZ0VBemULOwAH0kn7k', libraries: 'places,geometry' }}
          center={mapCenter}
          zoom={location ? 12 : 4}
        >
          {location && <Marker lat={location.lat} lng={location.lng} />}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default TrackVehicle;
