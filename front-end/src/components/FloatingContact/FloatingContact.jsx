import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./FloatingContact.css";

function FloatingContact() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const phoneRaw = "212700058111";
  const phoneDisplay = "07 000 58 111";

  const links = useMemo(
    () => ({
      whatsapp: `https://wa.me/${phoneRaw}`,
      phone: `tel:${phoneDisplay.replace(/\s/g, "")}`,
    }),
    [phoneRaw, phoneDisplay]
  );

  return (
    <div
      className={`floating-contact ${isArabic ? "rtl" : "ltr"}`}
      aria-label="Quick contact"
    >
      <a
        className="floating-btn wa"
        href={links.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
        <span className="sr-only">WhatsApp</span>
      </a>

      <a
        className="floating-btn ph"
        href={links.phone}
        aria-label="Call"
        title="Call"
      >
        <FontAwesomeIcon icon={faPhone} />
        <span className="sr-only">Call</span>
      </a>
    </div>
  );
}

export default FloatingContact;
