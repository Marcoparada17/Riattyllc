import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Contacto = () => {
  const { t } = useTranslation();

  return (
    <div id='contact' className="bg-dark2 d-none d-md-block"> 
      <Row className="justify-content-center py-5 g-0">
        <Col md={10} className="text-center">
          <h1 style={{ fontFamily: 'Libre Franklin' }}>
            <span className='t-700 py-5'>{t("contacto.titulo")}</span>  
            <p>{t("contacto.descripcion")}</p>
          </h1>
          <div className="my-4">
            {/* Botón con color definido en CSS */}
            <Button variant="outline-secondary custom-color-btn font-f">
              {t("contacto.boton")} <span className='font-f fw-bold t-200'>{t("contacto.telefono")}</span>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contacto;
