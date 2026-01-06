import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import "./ContactUs.css";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Footer from "../Footer/Footer";
import SEO from "../../SEO/SEO";

function ContactUs() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const API_URL = process.env.REACT_APP_SERVER;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const teamMembers = useMemo(
    () => [
      {
        id: 1,
        name: t("contact.teamMembers.1.name"),
        role: t("contact.teamMembers.1.role"),
        languages: t("contact.teamMembers.1.languages"),
        phoneDisplay: "07 000 57 111",
        phoneRaw: "212700057111",
        whatsDisplay: "07 000 57 111",
        whatsRaw: "212700057111",
        initial: "A",
        color: "linear-gradient(135deg, #f97316, #ea580c)",
      },
      {
        id: 2,
        name: t("contact.teamMembers.2.name"),
        role: t("contact.teamMembers.2.role"),
        languages: t("contact.teamMembers.2.languages"),
        phoneDisplay: "06 59 25 10 19",
        phoneRaw: "212659251019",
        whatsDisplay: "06 59 25 10 19",
        whatsRaw: "212659251019",
        initial: "Z",
        color: "linear-gradient(135deg, #ec4899, #db2777)",
      },
      {
        id: 3,
        name: t("contact.teamMembers.3.name"),
        role: t("contact.teamMembers.3.role"),
        languages: t("contact.teamMembers.3.languages"),
        phoneDisplay: "06 02 72 05 36",
        phoneRaw: "212602720536",
        whatsDisplay: "06 02 72 05 36",
        whatsRaw: "212602720536",
        initial: "J",
        color: "linear-gradient(135deg, #22c55e, #16a34a)",
      },
      {
        id: 4,
        name: t("contact.teamMembers.4.name"),
        role: t("contact.teamMembers.4.role"),
        languages: t("contact.teamMembers.4.languages"),
        phoneDisplay: "06 47 00 61 11",
        phoneRaw: "212647006111",
        whatsDisplay: "06 47 00 61 11",
        whatsRaw: "212647006111",
        initial: "A",
        color: "linear-gradient(135deg, #3b82f6, #2563eb)",
      },
      {
        id: 5,
        name: t("contact.teamMembers.5.name"),
        role: t("contact.teamMembers.5.role"),
        languages: t("contact.teamMembers.5.languages"),
        phoneDisplay: "07 000 58 111",
        phoneRaw: "212700058111",
        whatsDisplay: "07 000 58 111",
        whatsRaw: "212700058111",
        initial: "J",
        color: "linear-gradient(135deg, #a855f7, #7c3aed)",
      },
    ],
    [t]
  );

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = { ...formData };

    try {
      setIsSubmitting(true);

      await axios.post(`${API_URL}/contact-submissions`, dataToSubmit);

      const templateParams = {
        to_name: "Alaqariyya",
        from_name: dataToSubmit.name,
        from_email: dataToSubmit.email,
        from_phone: dataToSubmit.phone,
        subject: dataToSubmit.subject,
        message: dataToSubmit.message,
      };

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      );

      setAlertMessage(t("contact.messageSent"));
      setAlertType("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setAlertMessage(t("contact.messageFailed"));
      setAlertType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!alertMessage) return;
    const timer = setTimeout(() => {
      setAlertMessage("");
      setAlertType("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [alertMessage]);

  return (
    <>
      <SEO
        title={t("contact.metaTitle")}
        description={t("contact.metaDescription")}
        path={`/${i18n.language}/contact`}
        lang={i18n.language}
        type="website"
      />
      <div className={`contact-page-v2 ${isArabic ? "rtl" : "ltr"}`}>
        {/* HERO */}
        <section className="contact-v2-hero">
          <h1>{t("contact.contactUs")}</h1>
          <p>{t("contact.subtitle")}</p>
        </section>

        {/* TOP INFO CARDS */}
        <section className="contact-v2-info">
          <div className="contact-v2-info-card">
            <h3>{t("contact.directContact")}</h3>
            <p>
              <span>{t("contact.email")} :</span>{" "}
              <a href="mailto:alaqariyya@gmail.com">alaqariyya@gmail.com</a>
            </p>
            
            <p>
              <span>{t("contact.phoneFixND")} :</span>{" "}
              <a className="phone-ltr" href="tel:+212538782396">
                0538 78 23 96
              </a>
            </p>

            <p>
              <span>{t("contact.phoneFixBN")} :</span>{" "}
              <a className="phone-ltr" href="tel:+212536348141">
                0536 34 81 41
              </a>
            </p>
          </div>

          <div className="contact-v2-info-card">
            <h3>{t("contact.officeHours")}</h3>
            <p>{t("contact.officeHoursText")}</p>
          </div>

          <div className="contact-v2-info-card offices-inline-card">
            <h3>{t("contact.ourOffices")}</h3>

            <p className="office-inline">
              <span className="office-inline-label">{t("contact.mainOfficeNador")}</span>
              <a
                href="https://maps.app.goo.gl/XLtKoYwp8kySzyXS9"
                target="_blank"
                rel="noreferrer"
                className="contact-v2-map-link"
              >
                <span className="map-icon">📍</span>
                {t("contact.openGoogleMaps")}
              </a>
            </p>

            <p className="office-inline">
              <span className="office-inline-label">{t("contact.secondOfficeBeniAnsar")}</span>
              <a
                href="https://maps.app.goo.gl/HXVg6BHdvUHCQ1sX6"
                target="_blank"
                rel="noreferrer"
                className="contact-v2-map-link"
              >
                <span className="map-icon">📍</span>
                {t("contact.openGoogleMaps")}
              </a>
            </p>
          </div>
        </section>

        {/* MESSAGE FORM */}
        <section className="contact-v2-form-section">
          <div className="contact-v2-form-card">
            <h2>{t("contact.sendUsMessage")}</h2>
            <p className="contact-v2-form-subtitle">{t("contact.formHint")}</p>

            {alertMessage && <div className={`alert alert-${alertType}`}>{alertMessage}</div>}

            <form className="contact-v2-form" onSubmit={handleSubmit}>
              <div className="contact-v2-form-row">
                <div className="contact-v2-field">
                  <label htmlFor="name">{t("contact.name")} *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t("contact.name")}
                  />
                </div>

                <div className="contact-v2-field">
                  <label htmlFor="phone">{t("contact.phone")} *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder={t("contact.phone")}
                  />
                </div>
              </div>

              <div className="contact-v2-form-row">
                <div className="contact-v2-field">
                  <label htmlFor="email">{t("contact.eMail")} *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t("contact.eMail")}
                  />
                </div>

                <div className="contact-v2-field">
                  <label htmlFor="subject">{t("contact.subject")} *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder={t("contact.subject")}
                  />
                </div>
              </div>

              <div className="contact-v2-field">
                <label htmlFor="message">{t("contact.message")} *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  style={{ resize: "none" }}
                  placeholder={t("contact.message")}
                />
              </div>

              <button type="submit" className="contact-v2-submit" disabled={isSubmitting}>
                {isSubmitting ? t("contact.sending") : t("contact.send")}
              </button>
            </form>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="contact-v2-team-section">
          <h2 className="contact-v2-team-title">{t("contact.customerServiceTeam")}</h2>
          <p className="contact-v2-team-subtitle">{t("contact.teamHint")}</p>

          <div className="contact-v2-team-grid">
            {teamMembers.map((member) => (
              <div className="contact-v2-team-card" key={member.id}>
                <div className="contact-v2-avatar" style={{ backgroundImage: member.color }}>
                  <span className="contact-v2-avatar-letter">{member.initial}</span>
                </div>

                <div className="contact-v2-team-info">
                  <h3>
                    {member.name} <span className="contact-role">— {member.role}</span>
                  </h3>

                  <p className="contact-v2-team-languages">
                    {t("contact.languagesLabel")} <span>{member.languages}</span>
                  </p>

                  <p className="contact-v2-team-phone">
                    <FontAwesomeIcon icon={faPhone} />
                    <a className="phone-ltr" href={`tel:${member.phoneRaw}`}>
                      {member.phoneDisplay}
                    </a>
                  </p>

                  <p className="contact-v2-team-phone contact-v2-team-phone--whatsapp">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <a
                      className="phone-ltr"
                      href={`https://wa.me/${member.whatsRaw}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {member.whatsDisplay}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs;
