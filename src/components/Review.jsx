import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion'; 
import { useTranslation } from 'react-i18next';

const Review = () => {
  const { t } = useTranslation();
  const reviews = t("review.clientes", { returnObjects: true });

  return (
    <Container 
      id='review' 
      fluid 
      className="p-3" 
      style={{
        position: "relative",
        backgroundImage: "url('/images/review.gif')", // Imagen de fondo
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "50px 0",
        color: "white",
      }}
    >
      {/* Overlay semi-transparente */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.32)", // Ajusta la opacidad
          zIndex: 1,
        }}
      />

      <Row className="d-flex justify-content-center p-5 text-font " style={{ position: "relative", zIndex: 2 }}>
        <Col>
          <h2 className="text-center fw-bold font-inter">{t("review.titulo")}</h2>
        </Col>
      </Row>

      <Row className="justify-content-center py-3 mx-auto" style={{ position: "relative", zIndex: 2 }}> 
        {reviews.map((review, index) => (
          <Col md={4} className="mb-5 d-flex flex-column align-items-center" key={index}>
            <div className="text-center mb-2">
              <img 
                src={`./images/five.png`} 
                alt="Estrellas de calificación" 
                className="d-block mx-auto"
                style={{ maxWidth: "100px", height: "auto" }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Card 
                className="h-100 text-center" 
                style={{ 
                  width: "18rem", 
                  borderRadius: "10px", 
                  backgroundColor: "rgba(255, 255, 255, 0.1)", // Tarjetas semi-transparentes
                  backdropFilter: "blur(5px)", // Efecto difuminado en la tarjeta
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: "white",
                }}
              >
                <Card.Body>
                  <Card.Title className="fw-bold font-f" style={{ color: "#FFF" }}>
                    {review.nombre}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 fw-bold">
                    {review.ubicacion}
                  </Card.Subtitle>
                  <Card.Text>
                    {review.comentario}
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Review;
