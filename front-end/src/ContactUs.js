
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import './ContactUs.css';
import Footer from './Footer';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_URL}/contact-submissions`, formData)
      .then(response => {
        setAlertMessage(t('contact.messageSent'));
        setAlertType('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      })
      .catch(error => {
        setAlertMessage(t('contact.messageFailed'));
        setAlertType('error');
        console.error('Error sending message:', error);
      });
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
    <div className="contact-us-container">
      <div className="banner">
        <h1>{t('contact.contactUs')}</h1>
      </div>
      <div className="contact-us-content">
        {isArabic ? (
          <>
            <div className="contact-details">
              <h3>{t('contact.contactInformation')}</h3>
              <p> alaqariyya@gmail.com : <strong>{t('contact.email')}</strong></p>
              <p> 0536.34.8141 : <strong>{t('contact.phone')}</strong></p>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.6428073196333!2d-2.93213152885437!3d35.2628784179688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd75950d4571a542%3A0x7379fdfc7c542f7!2s7379%2B542%2C%20Beni%20Ansar!5e0!3m2!1sen!2s!4v1646743262341!5m2!1sen!2s"
                  width="600"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  title="Location"
                ></iframe>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="contact-details">
              <h3>{t('contact.contactInformation')}</h3>
              <p><strong>{t('contact.email')} : </strong> alaqariyya@gmail.com</p>
              <p><strong>{t('contact.phone')} : </strong> 0536.34.8141</p>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.6428073196333!2d-2.93213152885437!3d35.2628784179688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd75950d4571a542%3A0x7379fdfc7c542f7!2s7379%2B542%2C%20Beni%20Ansar!5e0!3m2!1sen!2s!4v1646743262341!5m2!1sen!2s"
                  width="600"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  title="Location"
                ></iframe>
              </div>
            </div>
          </>
        )}
        
        <div className="contact-form">
          <h3>{t('contact.getInTouch')}</h3>
          {alertMessage && (
            <div className={`alert ${alertType === 'success' ? 'alert-success' : 'alert-error'}`}>
              {alertMessage}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('contact.name')} *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
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
                className="form-control"
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
                className="form-control"
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
                className="form-control"
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
                className="form-control"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">{t('contact.send')}</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );    
}

export default ContactUs;
