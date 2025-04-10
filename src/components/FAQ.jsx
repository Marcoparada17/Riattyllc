import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import '../AccordionComponent.css';

const AccordionComponent = () => {
  const { t } = useTranslation();

  const allQuestions = [
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
    { title: t('faq.q11'), content: t('faq.a11') },
    { title: t('faq.q12'), content: t('faq.a12') },
  ];

  const leftQuestions = allQuestions.slice(0, 6);
  const rightQuestions = allQuestions.slice(6);

  const [openIndexLeft, setOpenIndexLeft] = useState(null);
  const [openIndexRight, setOpenIndexRight] = useState(null);

  return (
    <div
      className="faq-section text-white px-5"
      id="faq"
      style={{
        backgroundImage: "url('/images/faqs.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
      }}
    >
      <Row>
        <h2 className="faq-title font-inter text-white">{t('faq.title')}</h2>

        {/* Columna Izquierda */}
        <Col md={6} className="accordion-column px-4">
          {leftQuestions.map((item, index) => (
            <div key={index} className={`accordion-item ${openIndexLeft === index ? 'open' : ''}`}>
              <div className="accordion-title ms-3" onClick={() => setOpenIndexLeft(openIndexLeft === index ? null : index)}>
                {item.title}
                <span className="accordion-icon">{openIndexLeft === index ? '-' : '+'}</span>
              </div>
              {openIndexLeft === index && (
                <div className="accordion-content ms-3">{item.content}</div>
              )}
            </div>
          ))}
        </Col>

        {/* Columna Derecha */}
        <Col md={6} className="accordion-column px-4">
          {rightQuestions.map((item, index) => (
            <div key={index} className={`accordion-item ${openIndexRight === index ? 'open' : ''}`}>
              <div className="accordion-title ms-3" onClick={() => setOpenIndexRight(openIndexRight === index ? null : index)}>
                {item.title}
                <span className="accordion-icon">{openIndexRight === index ? '-' : '+'}</span>
              </div>
              {openIndexRight === index && (
                <div className="accordion-content ms-3">{item.content}</div>
              )}
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default AccordionComponent;
