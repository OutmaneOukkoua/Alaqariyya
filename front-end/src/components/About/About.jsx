import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';
import Footer from '../Footer/Footer';
import SEO from "../../SEO/SEO";


function About() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const forWhomPoints = t('about.forWhomPoints', { returnObjects: true });
  const workSteps = t('about.workSteps', { returnObjects: true });
  const whyPoints = t('about.whyPoints', { returnObjects: true });
  const stats = t('about.stats', { returnObjects: true });

  return (
    <>
    <SEO
      title={t("about.metaTitle")}
      description={t("about.metaDescription")}
      path={`/${i18n.language}/about`}
      lang={i18n.language}
      type="website"
    />
      <section className={`about-page ${isArabic ? 'rtl' : 'ltr'}`}>
        <div className="about-container">
          <span className="about-badge">{t('about.badge')}</span>

          <h1 className="about-title">{t('about.title')}</h1>
          <p className="about-intro">{t('about.intro')}</p>

          <div className="about-layout">
            <div className="about-block">
              <h2 className="about-subtitle">{t('about.storyTitle')}</h2>
              <p className="about-text">{t('about.storyText')}</p>
            </div>

            <div className="about-block">
              <h2 className="about-subtitle">{t('about.forWhomTitle')}</h2>
              <p className="about-text">{t('about.forWhomText')}</p>
              <ul className="about-list">
                {Array.isArray(forWhomPoints) && forWhomPoints.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-steps">
            <h2 className="about-subtitle">{t('about.workTitle')}</h2>
            <div className="about-steps-grid">
              {Array.isArray(workSteps) && workSteps.map((step, idx) => (
                <div className="about-step-card" key={idx}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-why">
            <h2 className="about-subtitle">{t('about.whyTitle')}</h2>
            <ul className="about-list about-why-list">
              {Array.isArray(whyPoints) && whyPoints.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="about-stats-section">
            <h2 className="about-subtitle">{t('about.statsTitle')}</h2>
            <div className="about-stats-grid">
              {Array.isArray(stats) && stats.map((item, idx) => (
                <div className="about-stat-card" key={idx}>
                  <h3>{item.label}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-closing">
            <h2 className="about-subtitle">{t('about.closingTitle')}</h2>
            <p className="about-text">{t('about.closingText')}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
