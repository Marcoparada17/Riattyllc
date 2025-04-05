import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const CotizacionMobile = () => {
  return (
    <div className="cotizacion-form-page d-block d-md-none bg-faq">
      <Card>
        <Card.Body className='bg-cardreview text-font custom-card-body'>
          <Card.Title><h1>EMPEZEMOS CON TU COTIZACION ES GRATIS</h1></Card.Title>
          <Form className='bg-cardreview'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Texto 1</Form.Label>
              <Form.Control type="text" placeholder="Ingresa un valor" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Texto 2</Form.Label>
              <Form.Control type="text" placeholder="Ingresa un valor" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Texto 2</Form.Label>
              <Form.Control type="text" placeholder="Ingresa un valor" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Texto 2</Form.Label>
              <Form.Control type="text" placeholder="Ingresa un valor" />
            </Form.Group>

            {/* Repite el Form.Group para los otros 3 pares de Texto/Input */}

            <Button variant="primary" type="submit" href='./Gracias'>
              Cotizar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CotizacionMobile;