

import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <footer className={`Footer ${isArabic ? 'App-footer-rtl' : ''}`}>
      {isArabic ?(
        <><div className="Footer-top">
        <div className="Social-icons">
          <a href="https://www.facebook.com/profile.php?id=61560366056640" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com/alaqariyya/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://wa.me/212668550704" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
        <p>{t('footer.getConnected')}</p>
      </div></>
      ):(
        <><div className="Footer-top">
        <p>{t('footer.getConnected')}</p>
        <div className="Social-icons">
          <a href="https://www.facebook.com/profile.php?id=61560366056640" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com/alaqariyya/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://wa.me/212668550704" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div></>
      )}
      
      <div className="Footer-content">
        {isArabic ? (
          <>
            <div className="Footer-column centered">
              <h3>{t('footer.contact')}</h3>
              <p className="icon-right">{t('footer.contacts.person1')} <FontAwesomeIcon icon={faPhone} /></p>
              <p className="icon-right">{t('footer.contacts.person2')} <FontAwesomeIcon icon={faPhone} /></p>
              <p className="icon-right">{t('footer.contacts.person4')} <FontAwesomeIcon icon={faPhone} /></p>
              <br />
              <p className="icon-right">{t('footer.contacts.address1')} <FontAwesomeIcon icon={faMapMarkerAlt} /></p>
              <p className="icon-right">{t('footer.contacts.address2')} <FontAwesomeIcon icon={faMapMarkerAlt} /></p>
              <p className="icon-right">{t('footer.contacts.phone')} <FontAwesomeIcon icon={faPhone} /></p>
            </div>

            <div className="Footer-column centered">
              <h3>{t('footer.products')}</h3>
              <p>{t('footer.desc')}</p>
            </div>

            <div className="Footer-column centered">
              <h3>{t('footer.companyName')}</h3>
              <p>{t('footer.companyDescription')}</p>
            </div>
          </>
        ) : (
          <>
            <div className="Footer-column">
              <h3>{t('footer.companyName')}</h3>
              <p>{t('footer.companyDescription')}</p>
            </div>
            <div className="Footer-column">
              <h3>{t('footer.products')}</h3>
              <p>{t('footer.desc')}</p>
            </div>
            <div className="Footer-column">
              <h3>{t('footer.contact')}</h3>
              <p className="icon-left"><FontAwesomeIcon icon={faPhone} /> {t('footer.contacts.person1')}</p>
              <p className="icon-left"><FontAwesomeIcon icon={faPhone} /> {t('footer.contacts.person2')}</p>
              <p className="icon-left"><FontAwesomeIcon icon={faPhone} /> {t('footer.contacts.person4')}</p>
              <br />
              <p className="icon-left"><FontAwesomeIcon icon={faMapMarkerAlt} /> {t('footer.contacts.address1')}</p>
              <p className="icon-left"><FontAwesomeIcon icon={faMapMarkerAlt} /> {t('footer.contacts.address2')}</p>
              <p className="icon-left"><FontAwesomeIcon icon={faPhone} /> {t('footer.contacts.phone')}</p>
            </div>
          </>
        )}
      </div>
      <div className="Footer-bottom">
        <p>{t('footer.copyRight')}</p>
      </div>
    </footer>
  );
}

export default Footer;
