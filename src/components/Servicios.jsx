import React from 'react';
import {Row, Col, Button } from 'react-bootstrap';

const Servicios = () => {
  return (
    <div >
   {/* Contenido para escritorio - se oculta en tamaños menores a md */}
   <Row className="d-none d-md-flex content-center align-items-center text-center px-5 mt-5 g-0">
        <Col md={12} className='px-5'>
          <h1 className='text-font px-5'>AL CONTRATAR NUESTROS SERVICIOS, ACEPTAN NUESTROS TÉRMINOS & CONDICIONES</h1>
          <div className="d-flex justify-content-center mb-5 mt-5">
            <Button variant="primary" className="mx-5 bg-700 border-0 font-f" style={{ minWidth: '260px', height: '53px'}}>DESCARGAR Y LEER</Button>
            <Button variant="outline-primary" className="mx-2" style={{ minWidth: '260px', height: '53px'}}><span className='font-f text-font'>ASESORATE AL <span className='fw-bold'>(1) 787-741-6032</span></span></Button>
          </div>
        </Col>
      </Row>
      
      {/* Contenido para móvil - se muestra solo en tamaños menores a md */}

      <Row className="d-md-none justify-content-center align-items-center text-center g-0 bg-services">
        <Col xs={12} style={{ padding: 0 }} >
          {/* Asegúrate de que el 'div' de la imagen tenga una altura o el 'img' sea del tamaño correcto */}
          <div style={{ padding: 0 }}>
  <img src="/images/services.png" alt="Nuestros Servicios" style={{ width: '100%', height: 'auto' }} />
            </div>
        </Col>
        <Col xs={12}>
          <h1 className='text-font mt-3 px-4'>AL CONTRATAR NUESTROS SERVICIOS, ACEPTAN NUESTROS TÉRMINOS & CONDICIONES</h1>
          <div className="d-flex flex-column justify-content-center">
          <Button variant="primary" className="mx-5 bg-700 border-0 font-f my-4" >DESCARGAR Y LEER</Button>
          <Button variant="outline-primary" className="mx-5 mb-5"><span className='font-f text-font'>ASESORATE AL <span className='fw-bold'>(1) 787-741-6032</span></span></Button>
          </div>
        </Col>
      </Row>
      </div>
  );
};

export default Servicios;
