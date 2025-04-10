import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Contacto = () => {
  const { t } = useTranslation();

  return (
    <div id='contact' className="bg-dark2 d-none d-md-block"> 
      <Row className="justify-content-center p-3 g-0">
        <Col md={10} className="text-center">
          <h2 style={{ fontFamily: 'Inter' }}>
            <span className='t-700 '>{t("contacto.titulo")}</span>  
            <p>{t("contacto.descripcion")}</p>
          </h2>
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
