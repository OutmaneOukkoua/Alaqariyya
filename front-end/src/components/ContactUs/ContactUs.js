import React, { useState, useEffect } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import './ContactUs.css';
import Footer from '../Footer/Footer';

import { Helmet } from 'react-helmet';

function ContactUs() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const API_URL = process.env.REACT_APP_SERVER;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = { ...formData }; // Capture formData before resetting
    try {
      // Submit form data to backend
      await axios.post(`${API_URL}/contact-submissions`, dataToSubmit);

      // Send email using emailjs
      const templateParams = {
        to_name: 'Alaqariyya',
        from_name: dataToSubmit.name,
        from_email: dataToSubmit.email,
        from_phone: dataToSubmit.phone,
        subject: dataToSubmit.subject,
        message: dataToSubmit.message,
      };

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,   // Service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,  // Template ID
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID       // User ID (Public Key)
      );

      setAlertMessage(t('contact.messageSent'));
      setAlertType('success');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setAlertMessage(t('contact.messageFailed'));
      setAlertType('error');
    }
  };

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage('');
        setAlertType('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  return (
    <>
      <Helmet>
            <html lang="ar" />
            <title>تأجير وبيع وشراء العقارات في المغرب - ALAQARIYYA العقارية</title>
            <meta
              name="description"
              content="تأجير، بيع، شراء، استشارات عقارية، تسجيل العقارات في المغرب. منازل، شقق، طوابق، أراضي، كراجات، كراجات تجارية، إيجار عادي وإيجار مفروش."
            />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charset="UTF-8" />
            <link rel="canonical" href="https://www.alaqariyya.com" />

            <meta
              property="og:title"
              content="تأجير وبيع وشراء العقارات في المغرب - ALAQARIYYA العقارية"
            />
            <meta
              property="og:description"
              content="اكتشف جميع خيارات العقارات في المغرب مع ALAQARIYYA. خدمات تأجير وبيع وشراء واستشارات عقارية لجميع أنواع العقارات من منازل، شقق، أراضي، كراجات."
            />
            <meta property="og:url" content="https://www.alaqariyya.com" />
            <meta property="og:type" content="website" />
            <meta
              property="og:image"
              content="https://www.alaqariyya.com/logo.svg"
            />

            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content="تأجير وبيع وشراء العقارات في المغرب - ALAQARIYYA"
            />
            <meta
              name="twitter:description"
              content="استكشاف العقارات مع ALAQARIYYA - خدمات شاملة لتأجير وشراء وبيع العقارات في المغرب."
            />
            <meta
              name="twitter:image"
              content="https://www.alaqariyya.com/logo.svg"
            />

            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "RealEstateAgent",
                "name": "ALAQARIYYA العقارية",
                "description":
                  "تأجير، بيع، شراء، استشارات عقارية، تسجيل العقارات في المغرب. منازل، شقق، طوابق، أراضي، كراجات، كراجات تجارية، إيجار عادي وإيجار مفروش.",
                "url": "https://www.alaqariyya.com",
                "logo": "https://www.alaqariyya.com/logo.svg",
                "telephone": "+212 536-348141",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress":
                    "زنقة ابن سينا (تقاطع زنقة عقبة) - حي المسجد، بني انصار - الناظور",
                  "addressLocality": "بني انصار",
                  "addressRegion": "الناظور",
                  "postalCode": "62000",
                  "addressCountry": "MA",
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "35.1765",
                    "longitude": "-2.9288",
                  },
                },
                "openingHours": ["Mo-Fr 09:00-19:00"],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+212 536-348141",
                  "contactType": "خدمة العملاء",
                  "availableLanguage": ["ar", "fr", "en", "es"],
                },
                "areaServed": "MA",
                "inLanguage": ["ar", "fr", "en", "es"],
                "serviceType": [
                  "تأجير العقارات",
                  "بيع العقارات",
                  "شراء العقارات",
                  "استشارات عقارية",
                  "تسجيل العقارات",
                ],
                "makesOffer": [
                  {
                    "@type": "Offer",
                    "priceCurrency": "MAD",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "منازل",
                      "category": "عقارات سكنية",
                    },
                  },
                  {
                    "@type": "Offer",
                    "priceCurrency": "MAD",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "شقق",
                      "category": "عقارات سكنية",
                    },
                  },
                  {
                    "@type": "Offer",
                    "priceCurrency": "MAD",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "طوابق",
                      "category": "عقارات سكنية",
                    },
                  },
                  {
                    "@type": "Offer",
                    "priceCurrency": "MAD",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "أراضي",
                      "category": "عقارات",
                    },
                  },
                  {
                    "@type": "Offer",
                    "priceCurrency": "MAD",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "كراجات",
                      "category": "عقارات",
                    },
                  },
                  {
                    "@type": "Offer",
                    "priceCurrency": "MAD",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "كراجات تجارية",
                      "category": "عقارات تجارية",
                    },
                  },
                  {
                    "@type": "Offer",
                    "priceCurrency": "MAD",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "إيجار عادي",
                      "category": "خدمات التأجير",
                    },
                  },
                  {
                    "@type": "Offer",
                    "priceCurrency": "MAD",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "إيجار مفروش",
                      "category": "خدمات التأجير",
                    },
                  },
                ],
                "foundingDate": "2024",
                "currenciesAccepted": "MAD",
                "sameAs": [
                  "https://www.facebook.com/https://www.facebook.com/profile.php?id=61560366056640",
                  "https://www.instagram.com/https://www.instagram.com/alaqariyya",
                  "https://fr.airbnb.com/users/show/582106109",
                  "https://www.booking.com/hotel/ma/alaqariyya-l-qry.html"
                ],
              })}
            </script>
          </Helmet>

      <div className={`contact-container ${isArabic ? 'rtl' : 'ltr'}`}>
        <div className="contact-header">
          <h1>{t('contact.contactUs')}</h1>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            {alertMessage && (
              <div className={`alert alert-${alertType}`}>
                {alertMessage}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">{t('contact.name')} *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('contact.eMail')} *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">{t('contact.phone')} *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">{t('contact.subject')} *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t('contact.message')} *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                style={{resize: 'none'}}
              ></textarea>
            </div>

            <button type="submit" className="submit-button">{t('contact.send')}</button>
          </form>

          {/* Map and Contact Info */}
          <div className="map-and-info">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4089.2370257556186!2d-2.9364044206542848!3d35.260848274982706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7709002698ceaf%3A0xbe4e719ebdef6266!2zQWxhcWFyaXl5YSAtINin2YTYudmC2KfYsdmK2Kk!5e1!3m2!1sen!2sus!4v1723970680540!5m2!1sen!2sus"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location"
              ></iframe>
            </div>
            <div className="contact-info">
              <table>
                <tr>
                  <td><strong>{t('contact.email')}:</strong></td>
                  <td>alaqariyya@gmail.com</td>
                </tr>
                <tr>
                  <td><strong>{t('contact.phone')}:</strong></td>
                  <td>0536.34.8141</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;

