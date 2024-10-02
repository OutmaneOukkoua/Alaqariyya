import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SearchBar from './SearchBar';
import './Content.css';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

function Content({ filterType, onFilterChange }) {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const API_URL = process.env.REACT_APP_SERVER;
  const navigate = useNavigate();

  const fetchProperties = ({ type = 'all', location = '', page = 1 }) => {
    let query = `?type=${type}&page=${page}&lang=${i18n.language}`;
    if (location) {
      query += `&location=${location}`;
    }
    axios.get(`${API_URL}/properties${query}`)
      .then(response => {
        if (response.data && response.data.properties) {
          setProperties(response.data.properties);
          setTotalPages(response.data.totalPages);
          setCurrentPage(response.data.currentPage);
        } else {
          setProperties([]);
        }
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
        setProperties([]);
      });
  };

  useEffect(() => {
    fetchProperties({ type: filterType });
  }, [filterType, i18n.language]);

  const handlePageChange = (newPage) => {
    fetchProperties({ type: filterType, page: newPage });
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleSearch = (params) => {
    fetchProperties({ ...params, page: 1 });
  };

  const handlePropertyClick = (propertyId) => {
    // Increment the click count for the property
    axios.post(`${API_URL}/clicks/${propertyId}`)
    .then(response => console.log('Click count incremented'))
      .catch(error => console.error('Error incrementing click count:', error));

    // Navigate to the product details page
    navigate(`/product/${propertyId}`);
};


  const displayedProperties = properties.map(property => ({
    ...property,
    title: isArabic ? property.title_ar : property.title_en,
    description: isArabic ? property.description_ar : property.description_en,
    location: isArabic ? property.location_ar : property.location_en,
  }));

  return (
    <div className={`Content ${isArabic ? 'rtl' : 'ltr'}`}>
            
      <SearchBar onSearch={handleSearch} filterType={filterType} onFilterChange={onFilterChange} />
      <div className="properties-grid">
        {displayedProperties.length > 0 ? (
          displayedProperties.map(property => (
            <div key={property.property_id} className={`property-card ${isArabic ? 'rtl' : ''}`}>
              <h3 className='title-p'>{property.title}</h3>
              <div onClick={() => handlePropertyClick(property.property_id)}>
                <img 
                  src={`${API_URL}/uploads/${property.image_url}`} 
                  alt={property.title} 
                  className="property-image" 
                  loading="lazy"
                />
              </div>
              <p>{property.description}</p>
              <p><strong className='strong'>{t('properties.type')} : </strong> {t(`properties.${property.type}`)}</p>
              <p><strong className='strong'>{t('properties.location')} : </strong> {property.location}</p>
              <p>
                <strong className='strong'>{property.type === 'rent' ? t('properties.priceWithAsterisk') : t('properties.price')} : </strong>
                {property.old_price && property.old_price > property.price && (
                  <span style={{ textDecoration: 'line-through', color: 'red', marginRight: '10px' }}>
                    {property.old_price} {t('properties.MAD')}
                  </span>
                )}
                <span style={{ marginRight: '10px' }}>
                  {property.price} {t('properties.MAD')}
                </span>
              </p>
              {property.type === 'rent' && (
                <p className="small-text" style={{ color: 'grey', fontSize: '0.7em' }}>* {t('properties.priceVaries')}</p>
              )}
              {property.type === 'rent' && (
                <p><strong className='strong'>{t('properties.status')} : </strong> {property.available ? t('properties.available') : t('properties.notAvailable')}</p>
              )}
            </div>
          ))
        ) : (
          <p>{t('properties.noProperties')}</p>
        )}
      </div>
      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          {t('properties.Previous')}
        </button>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          {t('properties.Next')}
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Content;
