import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Infort = () => {
  const { t } = useTranslation();
  const infoData = t("infort.informacion", { returnObjects: true }); // Obtener datos traducidos

  return (
    <div className="container py-5">
      <Row className="justify-content-center text-center mb-4">
        <Col md={8}>
          <h1 className='font-title display-5'>{t("infort.titulo")}</h1>          
        </Col>
      </Row>

      <Row className="align-items-center">
        {/* Columna izquierda con la imagen en círculo */}
        <Col md={6} className="text-center">
          <div className="image-circle mb-4">
            <img src="/images/infort.png" alt="Transporte" className="img-fluid"/>
          </div>
        </Col>

        {/* Columna derecha con la información en tarjetas */}
        <Col md={6}>
          {infoData.map((text, index) => (
            <Card key={index} className="mb-3 info-card">
              <Card.Body className="text-font fw-bold">{text}</Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Infort;
