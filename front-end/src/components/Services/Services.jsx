// Services.js
import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import "./Services.css";
import Footer from "../Footer/Footer";
import SEO from "../../SEO/SEO";


function Services() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // ✅ Scroll to top when page opens / language changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [i18n.language]);

  // ✅ Safe arrays (avoid crash if translation is missing / not an array)
  const services = useMemo(() => {
    const keys = ["sales", "rentals", "management", "digitalMarketing"];

    return keys.map((key) => {
      const bullets = t(`services.items.${key}.bullets`, { returnObjects: true });
      return {
        title: t(`services.items.${key}.title`),
        text: t(`services.items.${key}.text`),
        bullets: Array.isArray(bullets) ? bullets : [],
        bestFor: t(`services.items.${key}.bestFor`),
      };
    });
  }, [t]);

  const processStepsRaw = t("services.processSteps", { returnObjects: true });
  const whoPointsRaw = t("services.whoPoints", { returnObjects: true });

  const processSteps = Array.isArray(processStepsRaw) ? processStepsRaw : [];
  const whoPoints = Array.isArray(whoPointsRaw) ? whoPointsRaw : [];

  return (
    <>
      <SEO
        title={t("services.metaTitle")}
        description={t("services.metaDescription")}
        path={`/${i18n.language}/services`}
        lang={i18n.language}
        type="website"
      />
      <section className={`services-page ${isArabic ? "rtl" : "ltr"}`} key={i18n.language}>
        <div className="services-container">
          <span className="services-badge">{t("services.badge")}</span>

          <h1 className="services-title">{t("services.title")}</h1>
          <p className="services-intro">{t("services.intro")}</p>

          <h2 className="services-subtitle">{t("services.sectionsTitle")}</h2>

          <div className="services-grid">
            {services.map((service, idx) => (
              <div className="service-card" key={idx}>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-text">{service.text}</p>

                {service.bullets.length > 0 && (
                  <ul className="service-list">
                    {service.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}

                <p className="service-bestfor">
                  <span className="service-bestfor-label">{t("services.bestForLabel")}</span>{" "}
                  {service.bestFor}
                </p>
              </div>
            ))}
          </div>

          <div className="services-process">
            <h2 className="services-subtitle">{t("services.processTitle")}</h2>
            <p className="services-process-intro">{t("services.processIntro")}</p>

            <div className="services-process-grid">
              {processSteps.map((step, idx) => (
                <div className="services-process-card" key={idx}>
                  <h3>{step?.label}</h3>
                  <p>{step?.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="services-who">
            <h2 className="services-subtitle">{t("services.whoTitle")}</h2>
            <ul className="services-who-list">
              {whoPoints.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="services-closing">
            <h2 className="services-subtitle">{t("services.closingTitle")}</h2>
            <p className="services-closing-text">{t("services.closingText")}</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Services;
