import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="container py-5 px-4" style={{ maxWidth: '900px' }}>
      <h1 className="text-3xl font-bold mb-4">{t('privacy.title')}</h1>
      <p className="text-muted mb-2">{t('privacy.updated')}</p>

      <div className="text-justify space-y-4">
        <p>{t('privacy.intro')}</p>
        <p>{t('privacy.usage')}</p>

        <h2 className="text-xl font-semibold mt-5">{t('privacy.section1.title')}</h2>
        <p>{t('privacy.section1.definition')}</p>

        <h3 className="text-lg font-semibold mt-4">{t('privacy.section2.title')}</h3>
        <ul className="list-disc ps-5">
          <li>{t('privacy.section2.point1')}</li>
          <li>{t('privacy.section2.point2')}</li>
          <li>{t('privacy.section2.point3')}</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">{t('privacy.data.title')}</h3>
        <p>{t('privacy.data.description')}</p>

        <h3 className="text-lg font-semibold mt-4">{t('privacy.cookies.title')}</h3>
        <p>{t('privacy.cookies.description')}</p>

        <h3 className="text-lg font-semibold mt-4">{t('privacy.security.title')}</h3>
        <p>{t('privacy.security.text')}</p>

        <h3 className="text-lg font-semibold mt-4">{t('privacy.contact.title')}</h3>
        <ul className="list-disc ps-5">
          <li>More Information Click<a href='https://www.privacypolicies.com/live/c885cea5-86dd-4da9-99f8-b6d6e6ece716'> Here</a></li>
          <li>Email: info@riatty.com</li>
          <li>Website: <a href="https://www.riatty.com" className="text-primary" target="_blank" rel="noreferrer">www.riatty.com</a></li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
