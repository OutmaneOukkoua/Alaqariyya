// src/components/SEO/SEO.js
import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SITE_URL = "https://www.alaqariyya.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.svg`;

function normalizeUrl(url) {
  if (!url) return SITE_URL;
  // يمنع double slashes
  return url.replace(/([^:]\/)\/+/g, "$1");
}

function SEO({
  title,
  description,
  path, // اختياري: إذا بغيت تفرض path معين
  image,
  robots,
  jsonLd, // object أو array of objects
}) {
  const { i18n } = useTranslation();
  const location = useLocation();

  const lang = i18n.language || "ar";
  const dir = lang === "ar" ? "rtl" : "ltr";

  const currentPath = typeof path === "string" ? path : location.pathname;
  const canonicalUrl = normalizeUrl(`${SITE_URL}${currentPath}`);

  const finalTitle =
    title || "العقارية ALAQARIYYA | عقارات الناظور: بيع شراء كراء";
  const finalDescription =
    description ||
    "العقارية ALAQARIYYA: بيع، شراء، كراء، استشارات عقارية في مدينة الناظور وجميع نواحي إقليم الناظور. شقق، منازل، أراضٍ، محلات وكراجات.";
  const finalImage = image || DEFAULT_OG_IMAGE;

  // hreflang (افترض أنك غادي تعتمد /ar /fr /en /es /de /nl)
  const supported = ["ar", "fr", "en", "es", "de", "nl"];
  const cleanPath = currentPath.replace(/^\/(ar|fr|en|es|de|nl)(\/|$)/, "/");
  const alternates = supported.map((lng) => {
    const href =
      lng === "ar"
        ? `${SITE_URL}/ar${cleanPath === "/" ? "" : cleanPath}`
        : `${SITE_URL}/${lng}${cleanPath === "/" ? "" : cleanPath}`;
    return { lng, href: normalizeUrl(href) };
  });

  const robotsValue = robots || "index,follow";

  // JSON-LD: نحط RealEstateAgent + Organization + WebSite
  const baseJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "ALAQARIYYA العقارية",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      sameAs: [
        "https://www.facebook.com/profile.php?id=61579309139640",
        "https://www.instagram.com/alaqariyya/",
        "https://www.tiktok.com/@alaqariyya.nador",
        "https://www.youtube.com/@alaqariyya",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      name: "ALAQARIYYA العقارية",
      url: SITE_URL,
      image: `${SITE_URL}/logo.svg`,
      telephone: ["+212536348141", "+212538782396"],
      areaServed: {
        "@type": "AdministrativeArea",
        name: "إقليم الناظور، المغرب",
      },
      availableLanguage: ["ar", "fr", "en", "es", "de", "nl"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+212536348141",
          contactType: "خدمة العملاء",
          areaServed: "MA",
          availableLanguage: ["ar", "fr", "en", "es", "de", "nl"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+212538782396",
          contactType: "خدمة العملاء",
          areaServed: "MA",
          availableLanguage: ["ar", "fr", "en", "es", "de", "nl"],
        },
      ],
      hasMap: [
        "https://maps.app.goo.gl/hMTSY9Hq598oTjYd6", // Beni Ansar
        "https://maps.app.goo.gl/eFGcghMpKqoKM8y86", // Nador
      ],
      description: finalDescription,
      serviceType: [
        "بيع العقارات",
        "شراء العقارات",
        "كراء العقارات",
        "استشارات عقارية",
        "تسيير ومواكبة المعاملات العقارية",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "ALAQARIYYA العقارية",
      url: SITE_URL,
      inLanguage: supported,
    },
  ];

  const mergedJsonLd = Array.isArray(jsonLd)
    ? [...baseJsonLd, ...jsonLd]
    : jsonLd
    ? [...baseJsonLd, jsonLd]
    : baseJsonLd;

  return (
    <Helmet htmlAttributes={{ lang, dir }}>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="robots" content={robotsValue} />
      <link rel="canonical" href={canonicalUrl} />

      {/* hreflang */}
      {alternates.map((a) => (
        <link
          key={a.lng}
          rel="alternate"
          hrefLang={a.lng}
          href={a.href}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/ar`} />

      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:alt" content="ALAQARIYYA العقارية" />
      <meta property="og:locale" content={lang === "ar" ? "ar_MA" : "en_US"} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(mergedJsonLd)}
      </script>
    </Helmet>
  );
}

export default SEO;
