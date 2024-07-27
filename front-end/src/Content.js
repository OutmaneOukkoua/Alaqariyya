

// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';
// // // // import { Link } from 'react-router-dom';
// // // // import { useTranslation } from 'react-i18next';
// // // // import SearchBar from './SearchBar';
// // // // import './Content.css';
// // // // import Footer from './Footer';

// // // // function Content({ filterType }) {
// // // //   const [properties, setProperties] = useState([]);
// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const [totalPages, setTotalPages] = useState(1);
// // // //   const { t, i18n } = useTranslation();
// // // //   const isArabic = i18n.language === 'ar';

// // // //   const API_URL = process.env.REACT_APP_SERVER;

// // // //   const interleaveProperties = (properties) => {
// // // //     const rentProperties = properties.filter(p => p.type === 'rent');
// // // //     const buyProperties = properties.filter(p => p.type === 'buy');
// // // //     const floorPlotsProperties = properties.filter(p => p.type === 'floorplots');

// // // //     const interleaved = [];
// // // //     const maxLength = Math.max(rentProperties.length, buyProperties.length, floorPlotsProperties.length);

// // // //     for (let i = 0; i < maxLength; i++) {
// // // //       if (rentProperties[i]) interleaved.push(rentProperties[i]);
// // // //       if (buyProperties[i]) interleaved.push(buyProperties[i]);
// // // //       if (floorPlotsProperties[i]) interleaved.push(floorPlotsProperties[i]);
// // // //     }

// // // //     return interleaved;
// // // //   };

// // // //   const fetchProperties = ({ type = '', location = '', page = 1 }) => {
// // // //     let query = `?page=${page}&lang=${i18n.language}`;
// // // //     if (type && type !== 'all') {
// // // //       query += `&type=${type}`;
// // // //     }
// // // //     if (location) {
// // // //       query += `&location=${location}`;
// // // //     }
// // // //     axios.get(`${API_URL}/properties${query}`)
// // // //       .then(response => {
// // // //         if (response.data && response.data.properties) {
// // // //           let fetchedProperties = response.data.properties;
// // // //           fetchedProperties = interleaveProperties(fetchedProperties);
// // // //           setProperties(fetchedProperties);
// // // //           setTotalPages(response.data.totalPages);
// // // //           setCurrentPage(response.data.currentPage);
// // // //         } else {
// // // //           setProperties([]);
// // // //         }
// // // //       })
// // // //       .catch(error => {
// // // //         console.error('Error fetching properties:', error);
// // // //         setProperties([]);
// // // //       });
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchProperties({ type: filterType });
// // // //   }, [filterType, i18n.language]);

// // // //   const handlePageChange = (newPage) => {
// // // //     fetchProperties({ type: filterType, page: newPage });
// // // //   };

// // // //   return (
// // // //     <div className={`Content ${isArabic ? 'rtl' : 'ltr'}`}>
// // // //       <SearchBar onSearch={(params) => fetchProperties({ ...params, page: 1 })} />
// // // //       <div className="properties-grid">
// // // //         {properties.length > 0 ? (
// // // //           properties.map(property => (
// // // //             <div key={property.property_id} className={`property-card ${isArabic ? 'rtl' : ''}`}>
// // // //               <h3 className='title-p'>{property.title}</h3>
// // // //               <Link to={`/product/${property.property_id}`}>
// // // //                 <img src={`${API_URL}/uploads/${property.image_url}`} alt={property.title} className="property-image" />
// // // //               </Link>
// // // //               <p>{property.description}</p>
// // // //               <p><strong>{t('properties.type')}: </strong> {t(`properties.${property.type}`)}</p>
// // // //               <p><strong>{t('properties.location')}: </strong> {property.location}</p>
// // // //               <p><strong>{t('properties.price')}: </strong>{property.type === 'floorplots' 
// // // //                     ? `${property.price} ${t('properties.MAD')} ${t('properties.pricePerSquareMeter')}`
// // // //                     : `${property.price} ${t('properties.MAD')}`}</p>
// // // //               {property.type === 'rent' && (
// // // //                 <p className="small-text" style={{ color: 'grey', fontSize: '0.7em' }}>* {t('properties.priceVaries')}</p>
// // // //               )}
// // // //               {property.type === 'rent' && (
// // // //                 <p><strong>{t('properties.status')}:</strong> {property.available ? t('properties.available') : t('properties.notAvailable')}</p>
// // // //               )}
// // // //             </div>
// // // //           ))
// // // //         ) : (
// // // //           <p>{t('properties.noProperties')}</p>
// // // //         )}
// // // //       </div>
// // // //       <div className="pagination">
// // // //         <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
// // // //           {t('properties.Previous')}
// // // //         </button>
// // // //         <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
// // // //           {t('properties.Next')}
// // // //         </button>
// // // //       </div>
// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Content;

// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { Link } from 'react-router-dom';
// // // import { useTranslation } from 'react-i18next';
// // // import SearchBar from './SearchBar';
// // // import './Content.css';
// // // import Footer from './Footer';

// // // function Content({ filterType }) {
// // //   const [properties, setProperties] = useState([]);
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [totalPages, setTotalPages] = useState(1);
// // //   const { t, i18n } = useTranslation();
// // //   const isArabic = i18n.language === 'ar';

// // //   const API_URL = process.env.REACT_APP_SERVER;

// // //   const fetchProperties = ({ type = '', location = '', page = 1 }) => {
// // //     let query = `?type=${type}&page=${page}&lang=${i18n.language}`;
// // //     if (location) {
// // //       query += `&location=${location}`;
// // //     }
// // //     axios.get(`${API_URL}/properties${query}`)
// // //       .then(response => {
// // //         if (response.data && response.data.properties) {
// // //           setProperties(response.data.properties);
// // //           setTotalPages(response.data.totalPages);
// // //           setCurrentPage(response.data.currentPage);
// // //         } else {
// // //           setProperties([]);
// // //         }
// // //       })
// // //       .catch(error => {
// // //         console.error('Error fetching properties:', error);
// // //         setProperties([]);
// // //       });
// // //   };

// // //   useEffect(() => {
// // //     fetchProperties({ type: filterType });
// // //   }, [filterType, i18n.language]);

// // //   const handlePageChange = (newPage) => {
// // //     fetchProperties({ type: filterType, page: newPage });
// // //   };

// // //   return (
// // //     <div className={`Content ${isArabic ? 'rtl' : 'ltr'}`}>
// // //       <SearchBar onSearch={(params) => fetchProperties({ ...params, page: 1 })} />
// // //       <div className="properties-grid">
// // //         {properties.length > 0 ? (
// // //           properties.map(property => (
// // //             <div key={property.property_id} className={`property-card ${isArabic ? 'rtl' : ''}`}>
// // //               <h3 className='title-p'>{property.title}</h3>
// // //               <Link to={`/product/${property.property_id}`}>
// // //                 <img src={`${API_URL}/uploads/${property.image_url}`} alt={property.title} className="property-image" />
// // //               </Link>
// // //               <p>{property.description}</p>
// // //               <p><strong>{t('properties.type')}: </strong> {t(`properties.${property.type}`)}</p>
// // //               <p><strong>{t('properties.location')}: </strong> {property.location}</p>
// // //               <p><strong>{t('properties.price')}: </strong>{property.type === 'floorplots' 
// // //                     ? `${property.price} ${t('properties.MAD')} ${t('properties.pricePerSquareMeter')}`
// // //                     : `${property.price} ${t('properties.MAD')}`}</p>
// // //               {property.type === 'rent' && (
// // //                 <p className="small-text" style={{ color: 'grey', fontSize: '0.7em' }}>* {t('properties.priceVaries')}</p>
// // //               )}
// // //               {property.type === 'rent' && (
// // //                 <p><strong>{t('properties.status')}:</strong> {property.available ? t('properties.available') : t('properties.notAvailable')}</p>
// // //               )}
// // //             </div>
// // //           ))
// // //         ) : (
// // //           <p>{t('properties.noProperties')}</p>
// // //         )}
// // //       </div>
// // //       <div className="pagination">
// // //         <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
// // //           {t('properties.Previous')}
// // //         </button>
// // //         <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
// // //           {t('properties.Next')}
// // //         </button>
// // //       </div>
// // //       <Footer />
// // //     </div>
// // //   );
// // // }

// // // export default Content;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';
// // import { useTranslation } from 'react-i18next';
// // import SearchBar from './SearchBar';
// // import './Content.css';
// // import Footer from './Footer';

// // function Content({ filterType }) {
// //   const [properties, setProperties] = useState([]);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [totalPages, setTotalPages] = useState(1);
// //   const { t, i18n } = useTranslation();
// //   const isArabic = i18n.language === 'ar';

// //   const API_URL = process.env.REACT_APP_SERVER;

// //   const fetchProperties = ({ type = '', location = '', page = 1 }) => {
// //     let query = `?type=${type}&page=${page}&lang=${i18n.language}`;
// //     if (location) {
// //       query += `&location=${location}`;
// //     }
// //     axios.get(`${API_URL}/properties${query}`)
// //       .then(response => {
// //         if (response.data && response.data.properties) {
// //           const shuffledProperties = shuffleArray(response.data.properties);
// //           setProperties(shuffledProperties);
// //           setTotalPages(response.data.totalPages);
// //           setCurrentPage(response.data.currentPage);
// //         } else {
// //           setProperties([]);
// //         }
// //       })
// //       .catch(error => {
// //         console.error('Error fetching properties:', error);
// //         setProperties([]);
// //       });
// //   };

// //   useEffect(() => {
// //     fetchProperties({ type: filterType });
// //   }, [filterType, i18n.language]);

// //   const handlePageChange = (newPage) => {
// //     fetchProperties({ type: filterType, page: newPage });
// //   };

// //   const shuffleArray = (array) => {
// //     let shuffledArray = [...array];
// //     for (let i = shuffledArray.length - 1; i > 0; i--) {
// //       const j = Math.floor(Math.random() * (i + 1));
// //       [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
// //     }
// //     return shuffledArray;
// //   };

// //   return (
// //     <div className={`Content ${isArabic ? 'rtl' : 'ltr'}`}>
// //       <SearchBar onSearch={(params) => fetchProperties({ ...params, page: 1 })} />
// //       <div className="properties-grid">
// //         {properties.length > 0 ? (
// //           properties.map(property => (
// //             <div key={property.property_id} className={`property-card ${isArabic ? 'rtl' : ''}`}>
// //               <h3 className='title-p'>{property.title}</h3>
// //               <Link to={`/product/${property.property_id}`}>
// //                 <img src={`${API_URL}/uploads/${property.image_url}`} alt={property.title} className="property-image" />
// //               </Link>
// //               <p>{property.description}</p>
// //               <p><strong>{t('properties.type')}: </strong> {t(`properties.${property.type}`)}</p>
// //               <p><strong>{t('properties.location')}: </strong> {property.location}</p>
// //               <p><strong>{t('properties.price')}: </strong>{property.type === 'floorplots' 
// //                     ? `${property.price} ${t('properties.MAD')} ${t('properties.pricePerSquareMeter')}`
// //                     : `${property.price} ${t('properties.MAD')}`}</p>
// //               {property.type === 'rent' && (
// //                 <p className="small-text" style={{ color: 'grey', fontSize: '0.7em' }}>* {t('properties.priceVaries')}</p>
// //               )}
// //               {property.type === 'rent' && (
// //                 <p><strong>{t('properties.status')}:</strong> {property.available ? t('properties.available') : t('properties.notAvailable')}</p>
// //               )}
// //             </div>
// //           ))
// //         ) : (
// //           <p>{t('properties.noProperties')}</p>
// //         )}
// //       </div>
// //       <div className="pagination">
// //         <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
// //           {t('properties.Previous')}
// //         </button>
// //         <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
// //           {t('properties.Next')}
// //         </button>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default Content;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';
// // import { useTranslation } from 'react-i18next';
// // import SearchBar from './SearchBar';
// // import './Content.css';
// // import Footer from './Footer';

// // function Content({ filterType }) {
// //   const [properties, setProperties] = useState([]);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [totalPages, setTotalPages] = useState(1);
// //   const { t, i18n } = useTranslation();
// //   const isArabic = i18n.language === 'ar';

// //   const API_URL = process.env.REACT_APP_SERVER;

// //   const fetchProperties = ({ type = '', location = '', page = 1 }) => {
// //     let query = `?type=${type}&page=${page}&lang=${i18n.language}`;
// //     if (location) {
// //       query += `&location=${location}`;
// //     }
// //     axios.get(`${API_URL}/properties${query}`)
// //       .then(response => {
// //         if (response.data && response.data.properties) {
// //           const shuffledProperties = shuffleArray(response.data.properties);
// //           setProperties(shuffledProperties);
// //           setTotalPages(response.data.totalPages);
// //           setCurrentPage(response.data.currentPage);
// //         } else {
// //           setProperties([]);
// //         }
// //       })
// //       .catch(error => {
// //         console.error('Error fetching properties:', error);
// //         setProperties([]);
// //       });
// //   };

// //   useEffect(() => {
// //     fetchProperties({ type: filterType });
// //   }, [filterType, i18n.language]);

// //   const handlePageChange = (newPage) => {
// //     fetchProperties({ type: filterType, page: newPage });
// //     window.scrollTo(0, 0); // Scroll to the top of the page
// //   };

// //   const shuffleArray = (array) => {
// //     let shuffledArray = [...array];
// //     for (let i = shuffledArray.length - 1; i > 0; i--) {
// //       const j = Math.floor(Math.random() * (i + 1));
// //       [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
// //     }
// //     return shuffledArray;
// //   };

// //   return (
// //     <div className={`Content ${isArabic ? 'rtl' : 'ltr'}`}>
// //       <SearchBar onSearch={(params) => fetchProperties({ ...params, page: 1 })} />
// //       <div className="properties-grid">
// //         {properties.length > 0 ? (
// //           properties.map(property => (
// //             <div key={property.property_id} className={`property-card ${isArabic ? 'rtl' : ''}`}>
// //               <h3 className='title-p'>{property.title}</h3>
// //               <Link to={`/product/${property.property_id}`}>
// //                 <img src={`${API_URL}/uploads/${property.image_url}`} alt={property.title} className="property-image" />
// //               </Link>
// //               <p>{property.description}</p>
// //               <p><strong>{t('properties.type')}: </strong> {t(`properties.${property.type}`)}</p>
// //               <p><strong>{t('properties.location')}: </strong> {property.location}</p>
// //               <p><strong>{t('properties.price')}: </strong>{property.type === 'floorplots' 
// //                     ? `${property.price} ${t('properties.MAD')} ${t('properties.pricePerSquareMeter')}`
// //                     : `${property.price} ${t('properties.MAD')}`}</p>
// //               {property.type === 'rent' && (
// //                 <p className="small-text" style={{ color: 'grey', fontSize: '0.7em' }}>* {t('properties.priceVaries')}</p>
// //               )}
// //               {property.type === 'rent' && (
// //                 <p><strong>{t('properties.status')}:</strong> {property.available ? t('properties.available') : t('properties.notAvailable')}</p>
// //               )}
// //             </div>
// //           ))
// //         ) : (
// //           <p>{t('properties.noProperties')}</p>
// //         )}
// //       </div>
// //       <div className="pagination">
// //         <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
// //           {t('properties.Previous')}
// //         </button>
// //         <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
// //           {t('properties.Next')}
// //         </button>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default Content;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SearchBar from './SearchBar';
import './Content.css';
import Footer from './Footer';

function Content({ filterType }) {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const API_URL = process.env.REACT_APP_SERVER;

  const fetchProperties = ({ type = '', location = '', page = 1 }) => {
    let query = `?type=${type}&page=${page}&lang=${i18n.language}`;
    if (location) {
      query += `&location=${location}`;
    }
    axios.get(`${API_URL}/properties${query}`)
      .then(response => {
        if (response.data && response.data.properties) {
          const shuffledProperties = shuffleArray(response.data.properties);
          setProperties(shuffledProperties);
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

  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <div className={`Content ${isArabic ? 'rtl' : 'ltr'}`}>
      <SearchBar onSearch={(params) => fetchProperties({ ...params, page: 1 })} />
      <div className="properties-grid">
        {properties.length > 0 ? (
          properties.map(property => (
            <div key={property.property_id} className={`property-card ${isArabic ? 'rtl' : ''}`}>
              <h3 className='title-p'>{property.title}</h3>
              <Link to={`/product/${property.property_id}`}>
                <img src={`${API_URL}/uploads/${property.image_url}`} alt={property.title} className="property-image" />
              </Link>
              <p>{property.description}</p>
              <p><strong>{t('properties.type')}: </strong> {t(`properties.${property.type}`)}</p>
              <p><strong>{t('properties.location')}: </strong> {property.location}</p>
              <p><strong>{t('properties.price')}: </strong>{property.type === 'floorplots' 
                    ? `${property.price} ${t('properties.MAD')} ${t('properties.pricePerSquareMeter')}`
                    : `${property.price} ${t('properties.MAD')}`}</p>
              {property.type === 'rent' && (
                <p className="small-text" style={{ color: 'grey', fontSize: '0.7em' }}>* {t('properties.priceVaries')}</p>
              )}
              {property.type === 'rent' && (
                <p><strong>{t('properties.status')}:</strong> {property.available ? t('properties.available') : t('properties.notAvailable')}</p>
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


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import SearchBar from './SearchBar';
// import './Content.css';
// import Footer from './Footer';

// function Content({ filterType }) {
//   const [properties, setProperties] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const { t, i18n } = useTranslation();
//   const isArabic = i18n.language === 'ar';

//   const API_URL = process.env.REACT_APP_SERVER;

//   const fetchProperties = ({ type = '', location = '', page = 1 }) => {
//     let query = `?type=${type}&page=${page}&lang=${i18n.language}`;
//     if (location) {
//       query += `&location=${location}`;
//     }
//     axios.get(`${API_URL}/properties${query}`)
//       .then(response => {
//         if (response.data && response.data.properties) {
//           setProperties(response.data.properties);
//           setTotalPages(response.data.totalPages);
//           setCurrentPage(response.data.currentPage);
//         } else {
//           setProperties([]);
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching properties:', error);
//         setProperties([]);
//       });
//   };

//   useEffect(() => {
//     fetchProperties({ type: filterType });
//   }, [filterType, i18n.language]);

//   const handlePageChange = (newPage) => {
//     fetchProperties({ type: filterType, page: newPage });
//     window.scrollTo(0, 0); // Scroll to the top of the page
//   };

//   return (
//     <div className={`Content ${isArabic ? 'rtl' : 'ltr'}`}>
//       <SearchBar onSearch={(params) => fetchProperties({ ...params, page: 1 })} />
//       <div className="properties-grid">
//         {properties.length > 0 ? (
//           properties.map(property => (
//             <div key={property.property_id} className={`property-card ${isArabic ? 'rtl' : ''}`}>
//               <h3 className='title-p'>{property.title}</h3>
//               <Link to={`/product/${property.property_id}`}>
//                 <img src={`${API_URL}/uploads/${property.image_url}`} alt={property.title} className="property-image" />
//               </Link>
//               <p>{property.description}</p>
//               <p><strong>{t('properties.type')}: </strong> {t(`properties.${property.type}`)}</p>
//               <p><strong>{t('properties.location')}: </strong> {property.location}</p>
//               <p><strong>{t('properties.price')}: </strong>{property.type === 'floorplots' 
//                     ? `${property.price} ${t('properties.MAD')} ${t('properties.pricePerSquareMeter')}`
//                     : `${property.price} ${t('properties.MAD')}`}</p>
//               {property.type === 'rent' && (
//                 <p className="small-text" style={{ color: 'grey', fontSize: '0.7em' }}>* {t('properties.priceVaries')}</p>
//               )}
//               {property.type === 'rent' && (
//                 <p><strong>{t('properties.status')}:</strong> {property.available ? t('properties.available') : t('properties.notAvailable')}</p>
//               )}
//             </div>
//           ))
//         ) : (
//           <p>{t('properties.noProperties')}</p>
//         )}
//       </div>
//       <div className="pagination">
//         <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
//           {t('properties.Previous')}
//         </button>
//         <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
//           {t('properties.Next')}
//         </button>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Content;
