import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Step = () => {
  const { t } = useTranslation();

  const stepsData = [
    { title: t("step.quote"), image: "/images/step1.jpg" },
    { title: t("step.review"), image: "/images/step2.jpg" },
    { title: t("step.choose"), image: "/images/step3.jpg" },
    { title: t("step.pay"), image: "/images/step4.jpg" },
    { title: t("step.pickup"), image: "/images/step5.jpg" },
    { title: t("step.receive"), image: "/images/step6.jpg" }
  ];

  return (
    <div className='text-center mt-5' style={{ paddingBottom: '50px' }}>
      <h1 className="text-bold1 my-3 font-inter">{t("step.title")}</h1>

      <div style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        maxWidth: '900px', 
        margin: 'auto',
        padding: '20px 0'
      }}>
        <Carousel
          className="mx-auto"
          interval={800} // Cambiado a 3 segundos
          wrap={true}
          indicators={false}
          controls={true}
          prevIcon={<span className="carousel-control-prev-icon" style={{ filter: 'invert(1)' }} />}
          nextIcon={<span className="carousel-control-next-icon" style={{ filter: 'invert(1)' }} />}
          fade // Añade efecto fade en lugar del slide por defecto
        >
          {stepsData.map((step, index) => (
            <Carousel.Item 
              key={index} 
              className="text-center" 
              style={{ 
                position: 'relative',
                transition: 'opacity 1s ease-in-out' // Transición más suave
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                minHeight: '420px'
              }}>
                {/* Imagen previa */}
                <img
                  src={stepsData[(index - 1 + stepsData.length) % stepsData.length].image}
                  alt={`Step ${index}`}
                  style={{
                    width: '25%',
                    height: '350px',
                    opacity: 0.5,
                    transform: 'scale(0.9)',
                    borderRadius: '20px',
                    objectFit: 'cover',
                    transition: 'all 0.5s ease-in-out',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                  }}
                />

                {/* Imagen central */}
                <div style={{ 
                  position: 'relative', 
                  width: '70%',
                  transition: 'all 0.5s ease-in-out'
                }}>
                  {/* Número en el centro */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '17rem',
                    fontWeight: 'bold',
                    zIndex: 2,
                    pointerEvents: 'none',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    transition: 'all 0.5s ease-in-out'
                  }}>
                    {index + 1}
                  </div>

                  {/* Texto dentro de la imagen */}
                  <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '0',
                    right: '0',
                    margin: '0 auto',
                    zIndex: 3,
                    transition: 'all 0.5s ease-in-out'
                  }}>
                    <span className="text-black bg-white p-2 rounded" style={{
                      display: 'inline-block',
                      padding: '8px 20px',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                    }}>
                      {step.title}
                    </span>
                  </div>

                  <img
                    src={step.image}
                    alt={`Step ${index + 1}`}
                    className="d-block"
                    style={{
                      width: '100%',
                      height: '400px',
                      borderRadius: '20px',
                      objectFit: 'cover',
                      transition: 'opacity 1s ease-in-out, transform 0.5s ease-in-out',
                      transform: 'scale(1)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                    }}
                  />
                </div>

                {/* Imagen siguiente */}
                <img
                  src={stepsData[(index + 1) % stepsData.length].image}
                  alt={`Step ${index + 2}`}
                  style={{
                    width: '25%',
                    height: '350px',
                    opacity: 0.5,
                    transform: 'scale(0.9)',
                    borderRadius: '20px',
                    objectFit: 'cover',
                    transition: 'all 0.5s ease-in-out',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <Button className="white-btn font-f mt-4 mb-2" style={{ 
          width: 'auto',
          padding: '10px 30px',
          fontSize: '1.1rem',
          transition: 'all 0.3s ease'
        }}>
          {t("step.call")}
        </Button>
      </div>
    </div>
  );
};

export default Step;