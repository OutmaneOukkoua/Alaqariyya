
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import { Helmet } from 'react-helmet';

function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <footer className={`footer ${isArabic ? 'rtl' : 'ltr'}`}>
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
              content="https://www.alaqariyya.com/logo/logoAlaqariyya.jpg"
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
              content="https://www.alaqariyya.com/logo/logoAlaqariyya.jpg"
            />

            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "RealEstateAgent",
                "name": "ALAQARIYYA العقارية",
                "description":
                  "تأجير، بيع، شراء، استشارات عقارية، تسجيل العقارات في المغرب. منازل، شقق، طوابق، أراضي، كراجات، كراجات تجارية، إيجار عادي وإيجار مفروش.",
                "url": "https://www.alaqariyya.com",
                "logo": "https://www.alaqariyya.com/logo/logoAlaqariyya.jpg",
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
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column company">
            <h3>{t('footer.companyName')}</h3>
            <p>{t('footer.companyDescription')}</p>
          </div>
          <div className="footer-column products">
            <h3>{t('footer.products')}</h3>
            <p>{t('footer.desc')}</p>
          </div>
          <div className="footer-column contact">
            <h3>{t('footer.contact')}</h3>
            <p>
              <FontAwesomeIcon icon={faPhone} /> {t('footer.contacts.phone')}
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> {t('footer.contacts.numIAM1')}
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> {t('footer.contacts.numIAM2')}
            </p>
          </div>
          <div className="footer-column location">
            <h3>{t('properties.location')}</h3>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />{' '}
              {t('footer.contacts.address1')}
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />{' '}
              {t('footer.contacts.address2')}
            </p>
          </div>

          {/* Social Media Section */}
          <div className="footer-column social">
            <div className="social-wrapper">
              <h3>{t('footer.getConnected')}</h3>
              <div className="social-icons">
                <a
                  href="https://maps.app.goo.gl/MdQcNRp2BWm33dBU9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-location"
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </a>
                <a
                  href="tel:0536348141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-phone"
                >
                  <FontAwesomeIcon icon={faPhone} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61560366056640"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://www.instagram.com/alaqariyya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://wa.me/212668550704"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-whatsapp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t('footer.copyRight')}</p>
      </div>
    </footer>
  );
}

export default Footer;
