// Footer.js
import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // ✅ language prefix (/ar /fr /en ...)
  const langPrefix = `/${i18n.language}`;

  // ✅ tel links
  const phoneBN = "0536348141";
  const phoneND = "0538782396";

  // ✅ maps links
  const mapsBeniAnsar = "https://maps.app.goo.gl/hMTSY9Hq598oTjYd6";
  const mapsNador = "https://maps.app.goo.gl/eFGcghMpKqoKM8y86";

  return (
    <footer className={`footer ${isArabic ? "rtl" : "ltr"}`}>
      <div className="footer-container">
        <div className="footer-row">

          {/* COMPANY */}
          <div className="footer-column company">
            <h3>{t("footer.companyName")}</h3>
            <p>
              <Link
                to={`${langPrefix}/about`}
                className="footer-link footer-about-link"
              >
                {t("footer.companyDescription")}
              </Link>
            </p>
          </div>

          {/* PRODUCTS / SERVICES */}
          <div className="footer-column products">
            <h3>{t("header.services")}</h3>
            <Link
              to={`${langPrefix}/services`}
              className="footer-link footer-services-link"
            >
              <p>{t("footer.desc")}</p>
            </Link>
          </div>

          {/* CONTACT */}
          <div className="footer-column contact">
            <h3>{t("footer.contact")}</h3>
            <p>
              <a
                className="footer-link"
                href={`tel:${phoneND}`}
                aria-label="Call Nador"
              >
                <FontAwesomeIcon icon={faPhone} /> {t("footer.contacts.phoneND")}
              </a>
            </p>

            <p>
              <a
                className="footer-link"
                href={`tel:${phoneBN}`}
                aria-label="Call Beni Ansar"
              >
                <FontAwesomeIcon icon={faPhone} /> {t("footer.contacts.phoneBN")}
              </a>
            </p>
          </div>

          {/* LOCATION */}
          <div className="footer-column location">
            <h3>{t("properties.location")}</h3>

            <p>
              <a
                className="footer-link"
                href={mapsNador}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                {t("footer.contacts.address2")}
              </a>
            </p>
            
            <p>
              <a
                className="footer-link"
                href={mapsBeniAnsar}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                {t("footer.contacts.address1")}
              </a>
            </p>
          </div>

          {/* SOCIAL */}
          <div className="footer-column social">
            <div className="social-wrapper">
              <h3>{t("footer.getConnected")}</h3>
              <div className="social-icons">
                <a
                  href="https://wa.me/212700058111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-whatsapp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61579025864064"
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
                  href="https://www.tiktok.com/@alaqariyya.nador"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-tiktok"
                >
                  <FontAwesomeIcon icon={faTiktok} />
                </a>

                <a
                  href="https://www.youtube.com/@alaqariyya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-youtube"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>{t("footer.copyRight")}</p>
      </div>
    </footer>
  );
}

export default Footer;
