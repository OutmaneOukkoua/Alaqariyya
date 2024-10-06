import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from './CartContext';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faRulerCombined,
  faTag,
  faHome,
  faTimes,
  faCheckCircle,
  faTimesCircle,
  faBed,
  faCouch,
  faBath,
  faUtensils,
  faBuilding,
  faCalendarAlt,
  faPhone,
  faHeart,
  faShareAlt,
  faUser,
  faEnvelope,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Helmet } from 'react-helmet';
import './ProductDetail.css';
import { format } from 'date-fns';

function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isImageModalVisible, setImageModalVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const API_URL = process.env.REACT_APP_SERVER;
  const { dispatch } = useCart();
  const modalRef = useRef(null);

  useOutsideClick(modalRef, () => setImageModalVisible(false));

  useEffect(() => {
    // Fetch product details
    axios
      .get(`${API_URL}/properties/${id}?lang=${i18n.language}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id, API_URL, i18n.language]);

  if (!product) return <div>{t('properties.loading')}</div>;

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product: { ...product[0], id: product[0].property_id } });
    setIsFavorite(true);
  };

  const toggleFavorite = () => {
    if (!isFavorite) {
      addToCart();
    } else {
      // handle removing from cart if needed
    }
  };

  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), 'yyyy-MM-dd');
    } catch {
      return dateString;
    }
  };

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/212668550704';
  };

  const handleCallClick = () => {
    window.location.href = 'tel:0536348141';
  };

  const handleEmailClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=alaqariyya@gmail.com', '_blank');
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleImageModal = () => {
    setImageModalVisible(!isImageModalVisible);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: product[0].title,
          text: product[0].description,
          url: window.location.href,
        })
        .then(() => {
          // Record the share in the database
          axios
            .post(`${API_URL}/api/share`, { propertyId: product[0].property_id })
            .then(() => {
              console.log('Share recorded successfully');
            })
            .catch((error) => {
              console.error('Error recording share:', error);
            });
        })
        .catch((error) => {
          console.error('Error with the sharing API:', error);
        });
    } else {
      alert(
        'Your browser does not support sharing. You can manually copy the URL: ' + window.location.href
      );
    }
  };

  const getMapSrc = (exactAddress) => {
    return `https://www.google.com/maps?q=${encodeURIComponent(exactAddress)}&output=embed&maptype=satellite`;
  };
  

  // New functions for image navigation
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? product.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === product.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="ProductDetail">
      <Helmet>
        <title>ALAQARIYYA - شقة مفروشة بني انصار الناظور، عقارات بني انصار، وكالة عقارية بني انصار، شقة بني انصار، منزل بني انصار، ارض بني انصار، كراء مفروش بني انصار الناظور، منازل للكراء بني انصار الناظور، شقق للكراء بني انصار الناظور، غرف للكراء بني انصار الناظور، قطع أرضية للبيع بني انصار الناظور، منازل للبيع بني انصار الناظور، شقق مفروشة للكراء بني انصار الناظور</title>
        <meta name="description" content="شقة مفروشة بني انصار الناظور، عقارات بني انصار، وكالة عقارية بني انصار، شقة بني انصار، منزل بني انصار، ارض بني انصار، كراء مفروش بني انصار الناظور، منازل للكراء بني انصار الناظور، شقق للكراء بني انصار الناظور، غرف للكراء بني انصار الناظور، قطع أرضية للبيع بني انصار الناظور، منازل للبيع بني انصار الناظور، شقق مفروشة للكراء بني انصار الناظور" />
        <meta name="description" content="عقارات، شراء عقار، بيع عقار، تأجير عقار، عقارات للبيع، عقارات للإيجار، شقق للبيع، شقق للإيجار، منازل للبيع، منازل للإيجار، فلل للبيع، فلل للإيجار، أراضي للبيع، مكاتب للإيجار، مكاتب للبيع، وكالات عقارية، استثمار عقاري، عقارات تجارية، عقارات سكنية، شراء شقة، عقارات فاخرة، شقق فاخرة، شقق مفروشة، عقارات قيد الإنشاء، فلل فاخرة، إيجار يومي، إيجار أسبوعي، إيجار شهري، عقارات سياحية، شقق عطلات، منازل ريفية، عقارات صناعية، أراضي صناعية، عقارات تجارية، شقق قريبة من البحر، مزارع للبيع، عقارات تجزئة، عقارات للأعمال، شقق مفروشة للإيجار، عقارات للإيجار طويل الأمد، عقارات سكنية، منازل قيد الإنشاء، عقارات للتطوير، وكالات إدارة العقارات، شراء عقارات تجارية، إيجار مكاتب تجارية، منازل عطلات، عقارات قريبة من المدينة، شراء عقارات سياحية، تأجير عقارات سياحية، بني أنصار، الناظور، مليلية، الريف، فرخانة، ميناء بني انصار، شاطئ بني انصار، بوكانا، مارشيكا، أزغنغان، سلوان، العروي، بني شيكر، رأس الماء، زايو، قرية أركمان، تاويمة، الكورنيش، حي أولاد ميمون، حي المطار، حي الفتح، حي لعراصي، حي الريفيين، حي الفيرمة، حي الكورنيش، حي الشعالة، شارع محمد الخامس، شارع يوسف بن تاشفين، شارع 3 مارس، محطة القطار الناظور، ميناء الناظور، كلية سلوان، جامعة محمد الأول، مستشفى الحسني، السوق البلدي الناظور، حي عمار، حي النصر، حي الوحدة، حي السلام، حي السعادة، حي المستقبل، شارع الحسن الثاني، شارع الجيش الملكي،الريف، الشمال، مارتشيكا" />
        <meta name="keywords" content="شقة مفروشة بني انصار الناظور، عقارات بني انصار، وكالة عقارية بني انصار، شقة بني انصار، منزل بني انصار، ارض بني انصار، كراء مفروش بني انصار الناظور، منازل للكراء بني انصار الناظور، شقق للكراء بني انصار الناظور، غرف للكراء بني انصار الناظور، قطع أرضية للبيع بني انصار الناظور، منازل للبيع بني انصار الناظور، شقق مفروشة للكراء بني انصار الناظور" />
        <meta name="keywords" content="عقارات، شراء عقار، بيع عقار، تأجير عقار، عقارات للبيع، عقارات للإيجار، شقق للبيع، شقق للإيجار، منازل للبيع، منازل للإيجار، فلل للبيع، فلل للإيجار، أراضي للبيع، مكاتب للإيجار، مكاتب للبيع، وكالات عقارية، استثمار عقاري، عقارات تجارية، عقارات سكنية، شراء شقة، عقارات فاخرة، شقق فاخرة، شقق مفروشة، عقارات قيد الإنشاء، فلل فاخرة، إيجار يومي، إيجار أسبوعي، إيجار شهري، عقارات سياحية، شقق عطلات، منازل ريفية، عقارات صناعية، أراضي صناعية، عقارات تجارية، شقق قريبة من البحر، مزارع للبيع، عقارات تجزئة، عقارات للأعمال، شقق مفروشة للإيجار، عقارات للإيجار طويل الأمد، عقارات سكنية، منازل قيد الإنشاء، عقارات للتطوير، وكالات إدارة العقارات، شراء عقارات تجارية، إيجار مكاتب تجارية، منازل عطلات، عقارات قريبة من المدينة، شراء عقارات سياحية، تأجير عقارات سياحية، بني أنصار، الناظور، مليلية، الريف، فرخانة، ميناء بني انصار، شاطئ بني انصار، بوكانا، مارشيكا، أزغنغان، سلوان، العروي، بني شيكر، رأس الماء، زايو، قرية أركمان، تاويمة، الكورنيش، حي أولاد ميمون، حي المطار، حي الفتح، حي لعراصي، حي الريفيين، حي الفيرمة، حي الكورنيش، حي الشعالة، شارع محمد الخامس، شارع يوسف بن تاشفين، شارع 3 مارس، محطة القطار الناظور، ميناء الناظور، كلية سلوان، جامعة محمد الأول، مستشفى الحسني، السوق البلدي الناظور، حي عمار، حي النصر، حي الوحدة، حي السلام، حي السعادة، حي المستقبل، شارع الحسن الثاني، شارع الجيش الملكي،الريف، الشمال، مارتشيكا" />

        <meta name="description" content="Appartement meublé à Beni Ensar Nador, immobilier à Beni Ensar, agence immobilière à Beni Ensar, appartement à Beni Ensar, maison à Beni Ensar, terrain à Beni Ensar, location meublée à Beni Ensar Nador, maisons à louer à Beni Ensar Nador, appartements à louer à Beni Ensar Nador, chambres à louer à Beni Ensar Nador, terrains à vendre à Beni Ensar Nador, maisons à vendre à Beni Ensar Nador, appartements meublés à louer à Beni Ensar Nador" />
        <meta name="description" content="Immobilier, achat immobilier, vente immobilier, location immobilier, propriétés à vendre, propriétés à louer, appartements à vendre, appartements à louer, maisons à vendre, maisons à louer, villas à vendre, villas à louer, terrains à vendre, bureaux à louer, bureaux à vendre, agences immobilières, investissement immobilier, propriétés commerciales, propriétés résidentielles, achat appartement, propriétés de luxe, appartements de luxe, appartements meublés, propriétés en construction, villas de luxe, location journalière, location hebdomadaire, location mensuelle, propriétés touristiques, appartements de vacances, maisons rurales, propriétés industrielles, terrains industriels, propriétés commerciales, appartements proches de la mer, fermes à vendre, propriétés de détail, propriétés d'affaires, appartements meublés à louer, propriétés à long terme, propriétés résidentielles, maisons en construction, propriétés à développer, agences de gestion immobilière, achat de propriétés commerciales, location de bureaux commerciaux, maisons de vacances, propriétés proches de la ville, achat de propriétés touristiques, location de propriétés touristiques, Beni Ensar, Nador, Melilla, Rif, Farhana, Port de Beni Ensar, Plage de Beni Ensar, Boukana, Marchica, Azghangan, Selouane, Al Aaroui, Beni Chiker, Ras El Ma, Zaio, Kariat Arkmane, Taouima, Corniche, Quartier Oulad Mimoun, Quartier El Mataar, Quartier El Fath, Quartier El Aroussi, Quartier Rifien, Quartier Ferma, Quartier Corniche, Quartier Chalala, Avenue Mohammed V, Avenue Youssef Ben Tachfine, Avenue 3 Mars, Gare de Nador, Port de Nador, Faculté de Selouane, Université Mohammed Premier, Hôpital Hassani, Marché Municipal de Nador, Quartier Amar, Quartier Nasr, Quartier Wahda, Quartier Salam, Quartier Saada, Quartier Moustakbal, Avenue Hassan II, Avenue Armée Royale, Rif, Nord, Marchica" />
        <meta name="keywords" content="Appartement meublé à Beni Ensar Nador, immobilier à Beni Ensar, agence immobilière à Beni Ensar, appartement à Beni Ensar, maison à Beni Ensar, terrain à Beni Ensar, location meublée à Beni Ensar Nador, maisons à louer à Beni Ensar Nador, appartements à louer à Beni Ensar Nador, chambres à louer à Beni Ensar Nador, terrains à vendre à Beni Ensar Nador, maisons à vendre à Beni Ensar Nador, appartements meublés à louer à Beni Ensar Nador" />
        <meta name="keywords" content="Immobilier, achat immobilier, vente immobilier, location immobilier, propriétés à vendre, propriétés à louer, appartements à vendre, appartements à louer, maisons à vendre, maisons à louer, villas à vendre, villas à louer, terrains à vendre, bureaux à louer, bureaux à vendre, agences immobilières, investissement immobilier, propriétés commerciales, propriétés résidentielles, achat appartement, propriétés de luxe, appartements de luxe, appartements meublés, propriétés en construction, villas de luxe, location journalière, location hebdomadaire, location mensuelle, propriétés touristiques, appartements de vacances, maisons rurales, propriétés industrielles, terrains industriels, propriétés commerciales, appartements proches de la mer, fermes à vendre, propriétés de détail, propriétés d'affaires, appartements meublés à louer, propriétés à long terme, propriétés résidentielles, maisons en construction, propriétés à développer, agences de gestion immobilière, achat de propriétés commerciales, location de bureaux commerciaux, maisons de vacances, propriétés proches de la ville, achat de propriétés touristiques, location de propriétés touristiques, Beni Ensar, Nador, Melilla, Rif, Farhana, Port de Beni Ensar, Plage de Beni Ensar, Boukana, Marchica, Azghangan, Selouane, Al Aaroui, Beni Chiker, Ras El Ma, Zaio, Kariat Arkmane, Taouima, Corniche, Quartier Oulad Mimoun, Quartier El Mataar, Quartier El Fath, Quartier El Aroussi, Quartier Rifien, Quartier Ferma, Quartier Corniche, Quartier Chalala, Avenue Mohammed V, Avenue Youssef Ben Tachfine, Avenue 3 Mars, Gare de Nador, Port de Nador, Faculté de Selouane, Université Mohammed Premier, Hôpital Hassani, Marché Municipal de Nador, Quartier Amar, Quartier Nasr, Quartier Wahda, Quartier Salam, Quartier Saada, Quartier Moustakbal, Avenue Hassan II, Avenue Armée Royale, Rif, Nord, Marchica" />

        <meta name="description" content="Furnished apartment in Beni Ensar Nador, real estate in Beni Ensar, real estate agency in Beni Ensar, apartment in Beni Ensar, house in Beni Ensar, land in Beni Ensar, furnished rental in Beni Ensar Nador, houses for rent in Beni Ensar Nador, apartments for rent in Beni Ensar Nador, rooms for rent in Beni Ensar Nador, plots of land for sale in Beni Ensar Nador, houses for sale in Beni Ensar Nador, furnished apartments for rent in Beni Ensar Nador" />
        <meta name="description" content="Real estate, buying real estate, selling real estate, renting real estate, properties for sale, properties for rent, apartments for sale, apartments for rent, houses for sale, houses for rent, villas for sale, villas for rent, lands for sale, offices for rent, offices for sale, real estate agencies, real estate investment, commercial properties, residential properties, buying an apartment, luxury properties, luxury apartments, furnished apartments, properties under construction, luxury villas, daily rental, weekly rental, monthly rental, tourist properties, holiday apartments, rural houses, industrial properties, industrial lands, commercial properties, apartments near the sea, farms for sale, retail properties, business properties, furnished apartments for rent, long-term rental properties, residential properties, houses under construction, properties for development, property management agencies, buying commercial properties, renting commercial offices, holiday homes, properties near the city, buying tourist properties, renting tourist properties, Beni Ensar, Nador, Melilla, Rif, Farhana, Beni Ensar Port, Beni Ensar Beach, Boukana, Marchica, Azghangan, Selouane, Al Aaroui, Beni Chiker, Ras El Ma, Zaio, Kariat Arkmane, Taouima, Corniche, Oulad Mimoun District, El Mataar District, El Fath District, El Aroussi District, Rifien District, Ferma District, Corniche District, Chalala District, Mohammed V Avenue, Youssef Ben Tachfine Avenue, 3 Mars Avenue, Nador Train Station, Nador Port, Selouane Faculty, Mohammed First University, Hassani Hospital, Nador Municipal Market, Amar District, Nasr District, Wahda District, Salam District, Saada District, Moustakbal District, Hassan II Avenue, Royal Army Avenue, Rif, North, Marchica" />
        <meta name="keywords" content="Furnished apartment in Beni Ensar Nador, real estate in Beni Ensar, real estate agency in Beni Ensar, apartment in Beni Ensar, house in Beni Ensar, land in Beni Ensar, furnished rental in Beni Ensar Nador, houses for rent in Beni Ensar Nador, apartments for rent in Beni Ensar Nador, rooms for rent in Beni Ensar Nador, plots of land for sale in Beni Ensar Nador, houses for sale in Beni Ensar Nador, furnished apartments for rent in Beni Ensar Nador" />
        <meta name="keywords" content="Real estate, buying real estate, selling real estate, renting real estate, properties for sale, properties for rent, apartments for sale, apartments for rent, houses for sale, houses for rent, villas for sale, villas for rent, lands for sale, offices for rent, offices for sale, real estate agencies, real estate investment, commercial properties, residential properties, buying an apartment, luxury properties, luxury apartments, furnished apartments, properties under construction, luxury villas, daily rental, weekly rental, monthly rental, tourist properties, holiday apartments, rural houses, industrial properties, industrial lands, commercial properties, apartments near the sea, farms for sale, retail properties, business properties, furnished apartments for rent, long-term rental properties, residential properties, houses under construction, properties for development, property management agencies, buying commercial properties, renting commercial offices, holiday homes, properties near the city, buying tourist properties, renting tourist properties, Beni Ensar, Nador, Melilla, Rif, Farhana, Beni Ensar Port, Beni Ensar Beach, Boukana, Marchica, Azghangan, Selouane, Al Aaroui, Beni Chiker, Ras El Ma, Zaio, Kariat Arkmane, Taouima, Corniche, Oulad Mimoun District, El Mataar District, El Fath District, El Aroussi District, Rifien District, Ferma District, Corniche District, Chalala District, Mohammed V Avenue, Youssef Ben Tachfine Avenue, 3 Mars Avenue, Nador Train Station, Nador Port, Selouane Faculty, Mohammed First University, Hassani Hospital, Nador Municipal Market, Amar District, Nasr District, Wahda District, Salam District, Saada District, Moustakbal District, Hassan II Avenue, Royal Army Avenue, Rif, North, Marchica" />

        <meta name="description" content="Apartamento amueblado en Beni Ensar Nador, bienes raíces en Beni Ensar, agencia inmobiliaria en Beni Ensar, apartamento en Beni Ensar, casa en Beni Ensar, terreno en Beni Ensar, alquiler amueblado en Beni Ensar Nador, casas en alquiler en Beni Ensar Nador, apartamentos en alquiler en Beni Ensar Nador, habitaciones en alquiler en Beni Ensar Nador, terrenos en venta en Beni Ensar Nador, casas en venta en Beni Ensar Nador, apartamentos amueblados en alquiler en Beni Ensar Nador" />
        <meta name="description" content="Bienes raíces, compra de bienes raíces, venta de bienes raíces, alquiler de bienes raíces, propiedades en venta, propiedades en alquiler, apartamentos en venta, apartamentos en alquiler, casas en venta, casas en alquiler, villas en venta, villas en alquiler, terrenos en venta, oficinas en alquiler, oficinas en venta, agencias inmobiliarias, inversión inmobiliaria, propiedades comerciales, propiedades residenciales, compra de apartamento, propiedades de lujo, apartamentos de lujo, apartamentos amueblados, propiedades en construcción, villas de lujo, alquiler diario, alquiler semanal, alquiler mensual, propiedades turísticas, apartamentos de vacaciones, casas rurales, propiedades industriales, terrenos industriales, propiedades comerciales, apartamentos cerca del mar, granjas en venta, propiedades minoristas, propiedades comerciales, apartamentos amueblados en alquiler, propiedades en alquiler a largo plazo, propiedades residenciales, casas en construcción, propiedades para desarrollar, agencias de gestión de propiedades, compra de propiedades comerciales, alquiler de oficinas comerciales, casas de vacaciones, propiedades cerca de la ciudad, compra de propiedades turísticas, alquiler de propiedades turísticas, Beni Ensar, Nador, Melilla, Rif, Farhana, Puerto de Beni Ensar, Playa de Beni Ensar, Boukana, Marchica, Azghangan, Selouane, Al Aaroui, Beni Chiker, Ras El Ma, Zaio, Kariat Arkmane, Taouima, Corniche, Distrito Oulad Mimoun, Distrito El Mataar, Distrito El Fath, Distrito El Aroussi, Distrito Rifien, Distrito Ferma, Distrito Corniche, Distrito Chalala, Avenida Mohammed V, Avenida Youssef Ben Tachfine, Avenida 3 Mars, Estación de tren de Nador, Puerto de Nador, Facultad de Selouane, Universidad Mohammed Primero, Hospital Hassani, Mercado Municipal de Nador, Distrito Amar, Distrito Nasr, Distrito Wahda, Distrito Salam, Distrito Saada, Distrito Moustakbal, Avenida Hassan II, Avenida Ejército Real, Rif, Norte, Marchica" />
        <meta name="keywords" content="Apartamento amueblado en Beni Ensar Nador, bienes raíces en Beni Ensar, agencia inmobiliaria en Beni Ensar, apartamento en Beni Ensar, casa en Beni Ensar, terreno en Beni Ensar, alquiler amueblado en Beni Ensar Nador, casas en alquiler en Beni Ensar Nador, apartamentos en alquiler en Beni Ensar Nador, habitaciones en alquiler en Beni Ensar Nador, terrenos en venta en Beni Ensar Nador, casas en venta en Beni Ensar Nador, apartamentos amueblados en alquiler en Beni Ensar Nador" />
        <meta name="keywords" content="Bienes raíces, compra de bienes raíces, venta de bienes raíces, alquiler de bienes raíces, propiedades en venta, propiedades en alquiler, apartamentos en venta, apartamentos en alquiler, casas en venta, casas en alquiler, villas en venta, villas en alquiler, terrenos en venta, oficinas en alquiler, oficinas en venta, agencias inmobiliarias, inversión inmobiliaria, propiedades comerciales, propiedades residenciales, compra de apartamento, propiedades de lujo, apartamentos de lujo, apartamentos amueblados, propiedades en construcción, villas de lujo, alquiler diario, alquiler semanal, alquiler mensual, propiedades turísticas, apartamentos de vacaciones, casas rurales, propiedades industriales, terrenos industriales, propiedades comerciales, apartamentos cerca del mar, granjas en venta, propiedades minoristas, propiedades comerciales, apartamentos amueblados en alquiler, propiedades en alquiler a largo plazo, propiedades residenciales, casas en construcción, propiedades para desarrollar, agencias de gestión de propiedades, compra de propiedades comerciales, alquiler de oficinas comerciales, casas de vacaciones, propiedades cerca de la ciudad, compra de propiedades turísticas, alquiler de propiedades turísticas, Beni Ensar, Nador, Melilla, Rif, Farhana, Puerto de Beni Ensar, Playa de Beni Ensar, Boukana, Marchica, Azghangan, Selouane, Al Aaroui, Beni Chiker, Ras El Ma, Zaio, Kariat Arkmane, Taouima, Corniche, Distrito Oulad Mimoun, Distrito El Mataar, Distrito El Fath, Distrito El Aroussi, Distrito Rifien, Distrito Ferma, Distrito Corniche, Distrito Chalala, Avenida Mohammed V, Avenida Youssef Ben Tachfine, Avenida 3 Mars, Estación de tren de Nador, Puerto de Nador, Facultad de Selouane, Universidad Mohammed Primero, Hospital Hassani, Mercado Municipal de Nador, Distrito Amar, Distrito Nasr, Distrito Wahda, Distrito Salam, Distrito Saada, Distrito Moustakbal, Avenida Hassan II, Avenida Ejército Real, Rif, Norte, Marchica" />

        <meta name="description" content="Möblierte Wohnung in Beni Ensar Nador, Immobilien in Beni Ensar, Immobilienagentur in Beni Ensar, Wohnung in Beni Ensar, Haus in Beni Ensar, Grundstück in Beni Ensar, möblierte Vermietung in Beni Ensar Nador, Häuser zur Miete in Beni Ensar Nador, Wohnungen zur Miete in Beni Ensar Nador, Zimmer zur Miete in Beni Ensar Nador, Grundstücke zu verkaufen in Beni Ensar Nador, Häuser zu verkaufen in Beni Ensar Nador, möblierte Wohnungen zur Miete in Beni Ensar Nador" />
        <meta name="description" content="Immobilien, Immobilien kaufen, Immobilien verkaufen, Immobilien mieten, Immobilien zu verkaufen, Immobilien zu vermieten, Wohnungen zu verkaufen, Wohnungen zu vermieten, Häuser zu verkaufen, Häuser zu vermieten, Villen zu verkaufen, Villen zu vermieten, Grundstücke zu verkaufen, Büros zu vermieten, Büros zu verkaufen, Immobilienagenturen, Immobilieninvestitionen, Gewerbeimmobilien, Wohnimmobilien, Wohnung kaufen, Luxusimmobilien, Luxuswohnungen, möblierte Wohnungen, Immobilien im Bau, Luxusvillen, Tagesmiete, Wochenmiete, Monatsmiete, touristische Immobilien, Ferienwohnungen, Landhäuser, Industrieimmobilien, Industriegrundstücke, Gewerbeimmobilien, Wohnungen in der Nähe des Meeres, Bauernhöfe zu verkaufen, Einzelhandelsimmobilien, Geschäftsimmobilien, möblierte Wohnungen zu vermieten, Langzeitmietimmobilien, Wohnimmobilien, Häuser im Bau, Immobilien zur Entwicklung, Immobilienverwaltungsagenturen, Gewerbeimmobilien kaufen, Gewerbebüros mieten, Ferienhäuser, Immobilien in der Nähe der Stadt, touristische Immobilien kaufen, touristische Immobilien mieten, Beni Ensar, Nador, Melilla, Rif, Farhana, Hafen von Beni Ensar, Strand von Beni Ensar, Boukana, Marchica, Azghangan, Selouane, Al Aaroui, Beni Chiker, Ras El Ma, Zaio, Kariat Arkmane, Taouima, Corniche, Oulad Mimoun Viertel, El Mataar Viertel, El Fath Viertel, El Aroussi Viertel, Rifien Viertel, Ferma Viertel, Corniche Viertel, Chalala Viertel, Mohammed V Avenue, Youssef Ben Tachfine Avenue, 3 Mars Avenue, Nador Bahnhof, Nador Hafen, Selouane Fakultät, Mohammed Erste Universität, Hassani Krankenhaus, Nador Kommunalmarkt, Amar Viertel, Nasr Viertel, Wahda Viertel, Salam Viertel, Saada Viertel, Moustakbal Viertel, Hassan II Avenue, Königliche Armee Avenue, Rif, Nord, Marchica" />
        <meta name="keywords" content="Möblierte Wohnung in Beni Ensar Nador, Immobilien in Beni Ensar, Immobilienagentur in Beni Ensar, Wohnung in Beni Ensar, Haus in Beni Ensar, Grundstück in Beni Ensar, möblierte Vermietung in Beni Ensar Nador, Häuser zur Miete in Beni Ensar Nador, Wohnungen zur Miete in Beni Ensar Nador, Zimmer zur Miete in Beni Ensar Nador, Grundstücke zu verkaufen in Beni Ensar Nador, Häuser zu verkaufen in Beni Ensar Nador, möblierte Wohnungen zur Miete in Beni Ensar Nador" />
        <meta name="keywords" content="Immobilien, Immobilien kaufen, Immobilien verkaufen, Immobilien mieten, Immobilien zu verkaufen, Immobilien zu vermieten, Wohnungen zu verkaufen, Wohnungen zu vermieten, Häuser zu verkaufen, Häuser zu vermieten, Villen zu verkaufen, Villen zu vermieten, Grundstücke zu verkaufen, Büros zu vermieten, Büros zu verkaufen, Immobilienagenturen, Immobilieninvestitionen, Gewerbeimmobilien, Wohnimmobilien, Wohnung kaufen, Luxusimmobilien, Luxuswohnungen, möblierte Wohnungen, Immobilien im Bau, Luxusvillen, Tagesmiete, Wochenmiete, Monatsmiete, touristische Immobilien, Ferienwohnungen, Landhäuser, Industrieimmobilien, Industriegrundstücke, Gewerbeimmobilien, Wohnungen in der Nähe des Meeres, Bauernhöfe zu verkaufen, Einzelhandelsimmobilien, Geschäftsimmobilien, möblierte Wohnungen zu vermieten, Langzeitmietimmobilien, Wohnimmobilien, Häuser im Bau, Immobilien zur Entwicklung, Immobilienverwaltungsagenturen, Gewerbeimmobilien kaufen, Gewerbebüros mieten, Ferienhäuser, Immobilien in der Nähe der Stadt, touristische Immobilien kaufen, touristische Immobilien mieten, Beni Ensar, Nador, Melilla, Rif, Farhana, Hafen von Beni Ensar, Strand von Beni Ensar, Boukana, Marchica, Azghangan, Selouane, Al Aaroui, Beni Chiker, Ras El Ma, Zaio, Kariat Arkmane, Taouima, Corniche, Oulad Mimoun Viertel, El Mataar Viertel, El Fath Viertel, El Aroussi Viertel, Rifien Viertel, Ferma Viertel, Corniche Viertel, Chalala Viertel, Mohammed V Avenue, Youssef Ben Tachfine Avenue, 3 Mars Avenue, Nador Bahnhof, Nador Hafen, Selouane Fakultät, Mohammed Erste Universität, Hassani Krankenhaus, Nador Kommunalmarkt, Amar Viertel, Nasr Viertel, Wahda Viertel, Salam Viertel, Saada Viertel, Moustakbal Viertel, Hassan II Avenue, Königliche Armee Avenue, Rif, Nord, Marchica" />

        <meta name="description" content="Gemeubileerd appartement in Beni Ensar Nador, onroerend goed in Beni Ensar, makelaarskantoor in Beni Ensar, appartement in Beni Ensar, huis in Beni Ensar, grond in Beni Ensar, gemeubileerde verhuur in Beni Ensar Nador, huizen te huur in Beni Ensar Nador, appartementen te huur in Beni Ensar Nador, kamers te huur in Beni Ensar Nador, percelen te koop in Beni Ensar Nador, huizen te koop in Beni Ensar Nador, gemeubileerde appartementen te huur in Beni Ensar Nador" />
        <meta name="description" content="Onroerend goed, vastgoed kopen, vastgoed verkopen, vastgoed huren, onroerend goed te koop, onroerend goed te huur, appartementen te koop, appartementen te huur, huizen te koop, huizen te huur, villa's te koop, villa's te huur, gronden te koop, kantoren te huur, kantoren te koop, makelaarskantoren, vastgoedbeleggingen, commerciële eigendommen, residentiële eigendommen, een appartement kopen, luxe eigendommen, luxe appartementen, gemeubileerde appartementen, eigendommen in aanbouw, luxe villa's, dagverhuur, weekverhuur, maandverhuur, toeristische eigendommen, vakantieappartementen, landelijke huizen, industriële eigendommen, industriële gronden, commerciële eigendommen, appartementen bij de zee, boerderijen te koop, detailhandel eigendommen, bedrijfseigendommen, gemeubileerde appartementen te huur, langetermijn huurwoningen, residentiële eigendommen, huizen in aanbouw, ontwikkelingsprojecten, vastgoedbeheerbureaus, commerciële eigendommen kopen, commerciële kantoren huren, vakantiehuizen, eigendommen bij de stad, toeristische eigendommen kopen, toeristische eigendommen huren, Beni Ensar, Nador, Melilla, Rif, Farhana, Haven van Beni Ensar, Strand van Beni Ensar, Boukana, Marchica, Azghangan, Selouane, Al Aaroui, Beni Chiker, Ras El Ma, Zaio, Kariat Arkmane, Taouima, Corniche, Oulad Mimoun wijk, El Mataar wijk, El Fath wijk, El Aroussi wijk, Rifien wijk, Ferma wijk, Corniche wijk, Chalala wijk, Mohammed V Avenue, Youssef Ben Tachfine Avenue, 3 Mars Avenue, Nador treinstation, Nador haven, Selouane faculteit, Mohammed Eerste Universiteit, Hassani ziekenhuis, Nador gemeentelijke markt, Amar wijk, Nasr wijk, Wahda wijk, Salam wijk, Saada wijk, Moustakbal wijk, Hassan II Avenue, Koninklijke Leger Avenue, Rif, Noord, Marchica" />
        <meta name="keywords" content="Gemeubileerd appartement in Beni Ensar Nador, onroerend goed in Beni Ensar, makelaarskantoor in Beni Ensar, appartement in Beni Ensar, huis in Beni Ensar, grond in Beni Ensar, gemeubileerde verhuur in Beni Ensar Nador, huizen te huur in Beni Ensar Nador, appartementen te huur in Beni Ensar Nador, kamers te huur in Beni Ensar Nador, percelen te koop in Beni Ensar Nador, huizen te koop in Beni Ensar Nador, gemeubileerde appartementen te huur in Beni Ensar Nador" />
        <meta name="keywords" content="Onroerend goed, vastgoed kopen, vastgoed verkopen, vastgoed huren, onroerend goed te koop, onroerend goed te huur, appartementen te koop, appartementen te huur, huizen te koop, huizen te huur, villa's te koop, villa's te huur, gronden te koop, kantoren te huur, kantoren te koop, makelaarskantoren, vastgoedbeleggingen, commerciële eigendommen, residentiële eigendommen, een appartement kopen, luxe eigendommen, luxe appartementen, gemeubileerde appartementen, eigendommen in aanbouw, luxe villa's, dagverhuur, weekverhuur, maandverhuur, toeristische eigendommen, vakantieappartementen, landelijke huizen, industriële eigendommen, industriële gronden, commerciële eigendommen, appartementen bij de zee, boerderijen te koop, detailhandel eigendommen, bedrijfseigendommen, gemeubileerde appartementen te huur, langetermijn huurwoningen, residentiële eigendommen, huizen in aanbouw, ontwikkelingsprojecten, vastgoedbeheerbureaus, commerciële eigendommen kopen, commerciële kantoren huren, vakantiehuizen, eigendommen bij de stad, toeristische eigendommen kopen, toeristische eigendommen huren, Beni Ensar, Nador, Melilla, Rif, Farhana, Haven van Beni Ensar, Strand van Beni Ensar, Boukana, Marchica, Azghangan, Selouane, Al Aaroui, Beni Chiker, Ras El Ma, Zaio, Kariat Arkmane, Taouima, Corniche, Oulad Mimoun wijk, El Mataar wijk, El Fath wijk, El Aroussi wijk, Rifien wijk, Ferma wijk, Corniche wijk, Chalala wijk, Mohammed V Avenue, Youssef Ben Tachfine Avenue, 3 Mars Avenue, Nador treinstation, Nador haven, Selouane faculteit, Mohammed Eerste Universiteit, Hassani ziekenhuis, Nador gemeentelijke markt, Amar wijk, Nasr wijk, Wahda wijk, Salam wijk, Saada wijk, Moustakbal wijk, Hassan II Avenue, Koninklijke Leger Avenue, Rif, Noord, Marchica" />
          <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "ALAQARIYYA",
              "description": "شقة مفروشة بني انصار الناظور، عقارات بني انصار، وكالة عقارية بني انصار، شقة بني انصار، منزل بني انصار، ارض بني انصار، كراء مفروش بني انصار الناظور، منازل للكراء بني انصار الناظور، شقق للكراء بني انصار الناظور، غرف للكراء بني انصار الناظور، قطع أرضية للبيع بني انصار الناظور، منازل للبيع بني انصار الناظور، شقق مفروشة للكراء بني انصار الناظور",
              "url": "https://www.alaqariyya.com",
              "logo": "https://www.alaqariyya.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+212-536-348141",
                "contactType": "Customer Service"
              }
            }
          `}
          </script>
      </Helmet>

      <div className="breadcrumb-container">
        <nav className={`breadcrumb ${isArabic ? 'rtl' : 'ltr'}`}>
          <span onClick={() => navigate('/')}>{t('Home')}</span> &gt;{' '}
          <span onClick={() => navigate('/properties')}>{t('Properties')}</span> &gt;{' '}
          <span>{product[0].title}</span>
        </nav>
      </div>

      <div className={`product-container ${isArabic ? 'rtl' : 'ltr'}`}>
        <div className="left-column">
          {/* Image Gallery */}
          <div className="image-gallery">
            <div className="main-image">
              {product.length > 1 && (
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="nav-arrow left-arrow"
                  onClick={handlePrevImage}
                />
              )}
              <img
                src={`${API_URL}/uploads/${product[currentImageIndex].image_url}`}
                alt={product[0].title}
                onDoubleClick={toggleImageModal}
              />
              {product.length > 1 && (
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="nav-arrow right-arrow"
                  onClick={handleNextImage}
                />
              )}
              <FontAwesomeIcon
                icon={faHeart}
                onClick={toggleFavorite}
                className="heartt-icon"
                style={{ color: isFavorite ? 'red' : 'white' }}
              />
            </div>
            {product.length > 1 && (
              <div className="thumbnails">
                {product.map((img, index) => (
                  <img
                    key={index}
                    src={`${API_URL}/uploads/${img.image_url}`}
                    alt=""
                    onClick={() => setCurrentImageIndex(index)}
                    className={index === currentImageIndex ? 'active' : ''}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="product-info">
            <h1>{product[0].title}</h1>
            <div className="product-price">
              {product[0].old_price && product[0].old_price > product[0].price && (
                <span style={{ textDecoration: 'line-through', color: 'red', margin: '10px' }}>
                  {product[0].old_price} {t('properties.MAD')}
                </span>
              )}
              <span>
                {product[0].price} {t('properties.MAD')}
              </span>
            </div>
            <div className="product-meta">
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> {product[0].location}
              </span>
              <span>
                <FontAwesomeIcon icon={faCalendarAlt} /> {formatDate(product[0].date_posted)}
              </span>
            </div>

            {/* Description Section */}
            <section className="description-section">
              <h2>{t('properties.description')}</h2>
              <p>{product[0].description}</p>
            </section>

            {/* Details Section */}
            <section className="details-section">
              <h2>{t('properties.details')}</h2>
              <div className="details-grid">
                {/* Property Type */}
                <div className="detail-card">
                  <FontAwesomeIcon icon={faHome} className="detail-icon" />
                  <div className="detail-text">
                    <strong>{t('properties.type')}</strong>
                    {t(`properties.${product[0].type}`)}
                  </div>
                </div>

                {/* Location */}
                <div className="detail-card">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="detail-icon" />
                  <div className="detail-text">
                    <strong>{t('properties.location')}</strong>
                    {product[0].location}
                  </div>
                </div>

                {/* Bedrooms */}
                {product[0].type !== 'floorplots' && product[0].type !== 'Commercialgarages' && (
                  <>
                    <div className="detail-card">
                      <FontAwesomeIcon icon={faBed} className="detail-icon" />
                      <div className="detail-text">
                        <strong>{t('properties.bedrooms')}</strong>
                        {product[0].bedrooms}
                      </div>
                    </div>

                    {/* Salon */}
                    <div className="detail-card">
                      <FontAwesomeIcon icon={faCouch} className="detail-icon" />
                      <div className="detail-text">
                        <strong>{t('properties.salon')}</strong>
                        {product[0].salon}
                      </div>
                    </div>

                    {/* Bathrooms */}
                    <div className="detail-card">
                      <FontAwesomeIcon icon={faBath} className="detail-icon" />
                      <div className="detail-text">
                        <strong>{t('properties.bathrooms')}</strong>
                        {product[0].bathrooms}
                      </div>
                    </div>

                    {/* Kitchen */}
                    <div className="detail-card">
                      <FontAwesomeIcon icon={faUtensils} className="detail-icon" />
                      <div className="detail-text">
                        <strong>{t('properties.kitchen')}</strong>
                        {product[0].kitchen}
                      </div>
                    </div>
                  </>
                )}

                {/* Area */}
                <div className="detail-card">
                  <FontAwesomeIcon icon={faRulerCombined} className="detail-icon" />
                  <div className="detail-text">
                    <strong>{t('properties.area')}</strong>
                    {product[0].area} m²
                  </div>
                </div>

                {/* Floors */}
                {(product[0].type === 'buy' || product[0].type === 'regularRent') && (
                  <div className="detail-card">
                    <FontAwesomeIcon icon={faBuilding} className="detail-icon" />
                    <div className="detail-text">
                      <strong>{t('properties.floors')}</strong>
                      {product[0].floors}
                    </div>
                  </div>
                )}

                {/* Availability */}
                {product[0].type === 'rent' && (
                  <>
                    <div className="detail-card">
                      <FontAwesomeIcon
                        icon={product[0].available ? faCheckCircle : faTimesCircle}
                        className="detail-icon"
                        style={{ color: product[0].available ? 'green' : 'red' }}
                      />
                      <div className="detail-text">
                        <strong>{t('properties.status')}</strong>
                        {product[0].available
                          ? t('properties.available')
                          : t('properties.notAvailable')}
                      </div>
                    </div>

                    {!product[0].available && product[0].availability_date && (
                      <div className="detail-card">
                        <FontAwesomeIcon icon={faCalendarAlt} className="detail-icon" />
                        <div className="detail-text">
                          <strong>{t('properties.availabilityDate')}</strong>
                          {formatDate(product[0].availability_date)}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Price */}
                <div className="detail-card">
                  <FontAwesomeIcon icon={faTag} className="detail-icon" />
                  <div className="detail-text">
                    <strong>{t('properties.price')}</strong>
                    {product[0].old_price && product[0].old_price > product[0].price && (
                      <span style={{ textDecoration: 'line-through', color: 'red', margin: '10px' }}>
                        {product[0].old_price} {t('properties.MAD')}
                      </span>
                    )}
                    <span>
                      {product[0].type === 'floorplots'
                        ? `${product[0].price} ${t('properties.MAD')} ${t(
                            'properties.pricePerSquareMeter'
                          )}`
                        : `${product[0].price} ${t('properties.MAD')}`}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Location Section */}
            <section className="location-section">
              <h2>{t('properties.location')}</h2>
              <p className="exact-address">{product[0].exact_address}</p>
              <div className="map-container">
                <iframe
                  src={getMapSrc(product[0].exact_address)}
                  width="100%"
                  height="300"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="Property Location"
                ></iframe>
              </div>
            </section>
          </div>
        </div>

        <div className="right-column">
          {/* Seller Info */}
          <div className="seller-info">
            <div className="seller-profile">
              <div className="seller-avatar">
                <FontAwesomeIcon icon={faUser} size="1x" />
              </div>
              <div className="seller-name">{t('seller.defaultName')}</div>
            </div>
            <button onClick={toggleModal} className="btn contact-btn">
              <FontAwesomeIcon icon={faPhone} style={{ marginLeft: '10px' , marginRight: '10px' }} />
              {t('contact.contactUs')}
            </button>
            <button onClick={handleEmailClick} className="btn email-btn">
              <FontAwesomeIcon icon={faEnvelope} style={{ marginLeft: '10px' , marginRight: '10px'}} />
              {t('contact.sendEmail')}
            </button>
            <button onClick={handleShare} className="btn share-btn">
              <FontAwesomeIcon icon={faShareAlt} style={{ marginLeft: '10px' , marginRight: '10px'}} />
              {t('contact.share')}
            </button>
          </div>
        </div>
      </div>

      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h2>{t('seller.defaultName')}</h2>
            <button className="modal-btn-w" onClick={handleWhatsAppClick}>
              <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '10px' }} />
              WhatsApp
            </button>
            <button className="modal-btn" onClick={handleCallClick}>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
              {t('contact.phone')}
            </button>
            <button className="modal-close" onClick={toggleModal}>
              {t('contact.close')}
            </button>
          </div>
        </div>
      )}

      {isImageModalVisible && (
        <div className="image-modal">
          <div className="image-modal-content" ref={modalRef}>
            <FontAwesomeIcon icon={faTimes} className="close-modal" onClick={toggleImageModal} />

            {product.length > 1 && (
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="modal-nav-arrow modal-left-arrow"
                onClick={handlePrevImage}
              />
            )}

            <img
              src={`${API_URL}/uploads/${product[currentImageIndex].image_url}`}
              alt={product[0].title}
              className="enlarged-image"
            />

            {product.length > 1 && (
              <FontAwesomeIcon
                icon={faChevronRight}
                className="modal-nav-arrow modal-right-arrow"
                onClick={handleNextImage}
              />
            )}

            <FontAwesomeIcon
              icon={faHeart}
              onClick={toggleFavorite}
              className="modal-heart-icon"
              style={{ color: isFavorite ? 'red' : 'white' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
