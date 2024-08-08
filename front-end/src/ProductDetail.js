

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from './CartContext';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faChevronLeft, faChevronRight, faMapMarkerAlt, faRulerCombined, faTag, faHome, faCheckCircle, faTimesCircle, faBed, faCouch, faBath, faUtensils, faBuilding, faCalendarAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Helmet } from 'react-helmet';
import './ProductDetail.css';
import { format } from 'date-fns';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const API_URL = process.env.REACT_APP_SERVER;
  const { dispatch } = useCart();

  useEffect(() => {
    axios.get(`${API_URL}/properties/${id}?lang=${i18n.language}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id, API_URL, i18n.language]);

  if (!product) return <div>{t('properties.loading')}</div>;

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product: { ...product[0], id: product[0].property_id } });
    setModalVisible(true);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.length);
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.length) % product.length);
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
      <button className="go-back-bb" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '5px' }} />
        <span className="go-back-text">{t('goBack.Go Back')}</span>
      </button>
      <div className={`content ${isArabic ? 'rtl' : 'ltr'}`}>
        <div className="image-g-container">
          {currentImageIndex > 0 && (
            <button className="scroll-button left" onClick={showPreviousImage}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          )}
          <div className="image-g">
            <img
              src={`${API_URL}/uploads/${product[currentImageIndex].image_url}`}
              alt={product[0].title}
              className="property-i"
            />
          </div>
          {currentImageIndex < product.length - 1 && (
            <button className="scroll-button right" onClick={showNextImage}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          )}
        </div>
        <div className="product-details">
          <h1>{product[0].title}</h1>
          <p>{product[0].description}</p>
          <table className="details-table">
            <tbody>
              <tr>
                <td><FontAwesomeIcon icon={faHome} /><strong> {t('properties.type')}:</strong></td>
                <td>{t(`properties.${product[0].type}`)}</td>
              </tr>
              <tr>
                <td><FontAwesomeIcon icon={faMapMarkerAlt} /><strong> {t('properties.location')}:</strong></td>
                <td>{product[0].location}</td>
              </tr>
              {product[0].type !== 'floorplots' && (
                <>
                  <tr>
                    <td><FontAwesomeIcon icon={faBed} /><strong> {t('properties.bedrooms')}:</strong></td>
                    <td>{product[0].bedrooms}</td>
                  </tr>
                  <tr>
                    <td><FontAwesomeIcon icon={faCouch} /><strong> {t('properties.salon')}:</strong></td>
                    <td>{product[0].salon}</td>
                  </tr>
                  <tr>
                    <td><FontAwesomeIcon icon={faBath} /><strong> {t('properties.bathrooms')}:</strong></td>
                    <td>{product[0].bathrooms}</td>
                  </tr>
                  <tr>
                    <td><FontAwesomeIcon icon={faUtensils} /><strong> {t('properties.kitchen')}:</strong></td>
                    <td>{product[0].kitchen}</td>
                  </tr>
                </>
              )}
              <tr>
                <td><FontAwesomeIcon icon={faRulerCombined} /><strong> {t('properties.area')}:</strong></td>
                <td>{product[0].area} m²</td>
              </tr>
              
              {product[0].type === 'buy' && (
                <tr>
                  <td><FontAwesomeIcon icon={faBuilding} /><strong> {t('properties.floors')}:</strong></td>
                  <td>{product[0].floors}</td>
                </tr>
              )}
              {product[0].type === 'rent' && (
                <>
                  <tr>
                    <td><FontAwesomeIcon icon={product[0].available ? faCheckCircle : faTimesCircle} /><strong> {t('properties.status')}:</strong></td>
                    <td>{product[0].available ? t('properties.available') : t('properties.notAvailable')}</td>
                  </tr>
                  {!product[0].available && product[0].availability_date && (
                    <tr>
                      <td><FontAwesomeIcon icon={faCalendarAlt} /><strong> {t('properties.availabilityDate')}:</strong></td>
                      <td>{formatDate(product[0].availability_date)}</td>
                    </tr>
                  )}
                </>
              )}
              <tr>
                <td><FontAwesomeIcon icon={faTag} /><strong> {t('properties.price')}:</strong></td>
                <td>
                  {product[0].type === 'floorplots' 
                    ? `${product[0].price} ${t('properties.MAD')} ${t('properties.pricePerSquareMeter')}`
                    : `${product[0].price} ${t('properties.MAD')}`}
                </td>
              </tr>
            </tbody>
          </table>
          {isArabic ? (<button onClick={addToCart} className="btn">
            <FontAwesomeIcon icon={faPhone} style={{ marginLeft: '10px' }} />
            {t('contact.contactUs')}
          </button>) : (<button onClick={addToCart} className="btn">
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
            {t('contact.contactUs')}
          </button>)}
          
        </div>
      </div>

      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h2>{t('contact.contactUs')}</h2>
            <button className="modal-btn-w" onClick={handleWhatsAppClick}>
              <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '10px' }} />
              WhatsApp
            </button>
            <button className="modal-btn" onClick={handleCallClick}>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
              Call
            </button>
            <button className="modal-close" onClick={() => setModalVisible(false)}>{t('contact.close')}</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
