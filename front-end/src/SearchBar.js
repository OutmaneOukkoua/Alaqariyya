import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SearchBar.css';
import { Helmet } from 'react-helmet';


function SearchBar({ onSearch, filterType, onFilterChange }) {
  const { t } = useTranslation();
  const [location, setLocation] = useState('');

  const handleTabClick = (type) => {
    console.log(`Filter type changed to: ${type}`);
    onFilterChange(type); // Update the filterType in the parent component
    onSearch({ type, location }); // Trigger the search with the new filter type
  };

  const handleLocationChange = (e) => {
    const updatedLocation = e.target.value;
    setLocation(updatedLocation);
    console.log(`Location changed to: ${updatedLocation}`);
    onSearch({ type: filterType, location: updatedLocation }); // Use the updated location for searching
  };

  return (
    <div className="search-bar-container">
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
      <div className="search-bar-background">
        <div className="search-bar">
          <table className="table-b" aria-label="Property search tabs">
            <thead>
              <tr>
                <th>
                  <button
                    className={filterType === 'all' ? 'active' : ''}
                    onClick={() => handleTabClick('all')}
                    aria-pressed={filterType === 'all'}>
                    {t('properties.all')}
                  </button>
                </th>
                <th>
                  <button
                    className={filterType === 'regularRent' ? 'active' : ''}
                    onClick={() => handleTabClick('regularRent')}
                    aria-pressed={filterType === 'regularRent'}
                  >
                    {t('properties.regularRent')}
                  </button>
                </th>
                <th>
                  <button
                    className={filterType === 'rent' ? 'active' : ''}
                    onClick={() => handleTabClick('rent')}
                    aria-pressed={filterType === 'rent'}
                  >
                    {t('properties.rent')}
                  </button>
                </th>
                <th>
                  <button
                    className={filterType === 'buy' ? 'active' : ''}
                    onClick={() => handleTabClick('buy')}
                    aria-pressed={filterType === 'buy'}
                  >
                    {t('properties.buy')}
                  </button>
                </th>
                <th>
                  <button
                    className={filterType === 'floorplots' ? 'active' : ''}
                    onClick={() => handleTabClick('floorplots')}
                    aria-pressed={filterType === 'floorplots'}
                  >
                    {t('properties.floorplots')}
                  </button>
                </th>
              </tr>
            </thead>
          </table>
          <div className="search-input">
            <input
              type="text"
              id="location-search"
              value={location}
              onChange={handleLocationChange}
              placeholder={t('properties.searchPlaceholder')}
              aria-label={t('properties.searchPlaceholder')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
