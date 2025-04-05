import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTranslation } from 'react-i18next';

const Goal = () => {
  const { t } = useTranslation();

  const goalsData = [
    { end: 3, title: t("goal.experience") },
    { end: 12500, title: t("goal.clients") },
    { end: 600, title: t("goal.drivers") },
    { end: 25000, title: t("goal.advice"), prefix: '+' },
  ];

  return (
    <div 
      className="goal-container" 
      style={{
        backgroundImage: "url('/images/bggoal.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "80px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Row className="justify-content-center text-center goal-row g-0">
        {goalsData.map((goal, index) => (
          <Col key={index} xs={6} md={3} className="goal-col p-4">
            <div className="goal-box">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div className="goal-content">
                    <div className="goal-number">
                      <CountUp end={isVisible ? goal.end : 0} prefix={goal.prefix || ''} duration={1.5} />
                    </div>
                    <div className="goal-title">{goal.title}</div>
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Goal;
