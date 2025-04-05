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
      <h1 className="text-bold1 my-3  font-monserrat">{t("step.title")}</h1>

      <div style={{ position: 'relative', overflow: 'hidden', maxWidth: '900px', margin: 'auto' }}>
        <Carousel
          className="mx-auto"
          interval={2500}
          wrap={true}
          indicators={false}
          controls={true}
          prevIcon={<span className="carousel-control-prev-icon" style={{ filter: 'invert(1)' }} />}
          nextIcon={<span className="carousel-control-next-icon" style={{ filter: 'invert(1)' }} />}
        >
          {stepsData.map((step, index) => (
            <Carousel.Item key={index} className="text-center" style={{ position: 'relative' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
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
                    objectFit: 'cover'
                  }}
                />

                {/* Imagen central */}
                <div style={{ position: 'relative', width: '70%' }}>
                  {/* Número en el centro */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'rgb(255, 255, 255)',
                   /* color: 'rgba(255, 255, 255, 0.8)', */
                    fontSize: '17rem',
                    fontWeight: 'bold',
                    WebkitTextStroke: '2px black',
                    zIndex: 2,
                    pointerEvents: 'none'
                  }}>
                    {index + 1}
                  </div>

                  {/* Texto dentro de la imagen (parte baja) */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                    zIndex: 3
                  }}>
                    <span className="text-white bg-dark p-2 rounded">{step.title}</span>
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
                      transition: 'transform 0.5s ease-in-out'
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
                    objectFit: 'cover'
                  }}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        
      <Button className="custom-color-btn font-f mt-3 mb-2 " style={{ width: 'auto' }}>
        {t("step.call")}
      </Button>
      </div>
    </div>
  );
};

export default Step;
