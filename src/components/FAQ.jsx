import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion'; // Animaciones
import '../AccordionComponent.css';

const AccordionComponent = () => {
  const { t } = useTranslation();

  // Preguntas frecuentes para la sección derecha
  const accordionData = [
    { title: t('faq.q1'), content: t('faq.a1') },
    { title: t('faq.q2'), content: t('faq.a2') },
    { title: t('faq.q3'), content: t('faq.a3') },
    { title: t('faq.q4'), content: t('faq.a4') },
    { title: t('faq.q5'), content: t('faq.a5') },
    { title: t('faq.q6'), content: t('faq.a6') },
    { title: t('faq.q7'), content: t('faq.a7') },
    { title: t('faq.q8'), content: t('faq.a8') },
    { title: t('faq.q9'), content: t('faq.a9') },
    { title: t('faq.q10'), content: t('faq.a10') },
  ];

  // Preguntas adicionales con acordeón en la izquierda
  const extraQuestions = [
    { title: t('faq.q11'), content: t('faq.a11') },
    { title: t('faq.q12'), content: t('faq.a12') },
    { title: t('faq.q13'), content: t('faq.a13') },
  ];

  // Estado para controlar los ítems abiertos
  const [openIndexRight, setOpenIndexRight] = useState(null);
  const [openIndexLeft, setOpenIndexLeft] = useState(null);

  const toggleAccordionRight = (index) => {
    setOpenIndexRight(openIndexRight === index ? null : index);
  };

  const toggleAccordionLeft = (index) => {
    setOpenIndexLeft(openIndexLeft === index ? null : index);
  };

  return (
    <div className="faq-section p-4" id="faq">
      <Row>
        {/* Sección Izquierda */}
        <Col md={6} className="faq-left">
          {/* Título animado */}
          <motion.h2
            className="faq-title font-monserrat"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {t('faq.title')}
          </motion.h2>

          {/* Descripción */}
          <motion.p
            className="faq-description"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t('faq.description')}
          </motion.p>

          {/* Imagen con animación */}
          <motion.img
            src="/images/faqs.jpg"
            alt="FAQ"
            className="faq-image"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          />

          {/* Acordeón de Preguntas Adicionales (debajo de la imagen) */}
          <motion.div
            className="accordion-column mt-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {extraQuestions.map((item, index) => (
              <div key={index} className={`accordion-item ${openIndexLeft === index ? 'open' : ''}`}>
                <div className="accordion-title text-color ms-4" onClick={() => toggleAccordionLeft(index)}>
                  {item.title}
                  <span className="accordion-icon ms-4">{openIndexLeft === index ? '-' : '+'}</span>
                </div>
                {openIndexLeft === index && (
                  <div className="accordion-content text-color1 p-4">{item.content}</div>
                )}
              </div>
            ))}
          </motion.div>
        </Col>

        {/* Sección Derecha - Acordeón Principal */}
        <Col md={6} className="accordion-column">
          {accordionData.map((item, index) => (
            <motion.div
              key={index}
              className={`accordion-item ${openIndexRight === index ? 'open' : ''}`}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 * index }}
            >
              <div className="accordion-title text-color ms-4" onClick={() => toggleAccordionRight(index)}>
                {item.title}
                <span className="accordion-icon">{openIndexRight === index ? '-' : '+'}</span>
              </div>
              {openIndexRight === index && (
              <div className="accordion-content text-color1 p-4">{item.content}</div>
              )}
            </motion.div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default AccordionComponent;
