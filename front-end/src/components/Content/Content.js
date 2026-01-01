// Content.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation, useParams } from "react-router-dom"; // ✅ add useParams
import { useTranslation } from "react-i18next";
import SearchBar from "../SearchBar/SearchBar";
import NewsSection from "../NewsSection/NewsSection";
import "./Content.css";
import Footer from "../Footer/Footer";
import { FaSpinner } from "react-icons/fa";
import ClientReviews from "../ClientReviews/ClientReviews";
import FeaturedProperties from "../FeaturedProperties/FeaturedProperties";
import SEO from "../../SEO/SEO";

const formatPrice = (value) => new Intl.NumberFormat("de-DE").format(value);

function Content({ filterType, onFilterChange }) {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchParams, setSearchParams] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || "en";
  const isArabic = currentLanguage === "ar";

  const API_URL = process.env.REACT_APP_SERVER;
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ read language from URL
  const { lng } = useParams();
  const currentLng = lng || currentLanguage || "en"; // fallback

  const [initialType, setInitialType] = useState("");
  const [initialCityId, setInitialCityId] = useState("");

  const [seed] = useState(() => Math.floor(Math.random() * 100000));

  const getTranslatedField = (property, field) => {
    const direct = property?.[field];
    if (direct !== undefined && direct !== null && String(direct).trim() !== "") return direct;

    const fieldKey = `${field}_${currentLanguage}`;
    const localized = property?.[fieldKey];
    if (localized !== undefined && localized !== null && String(localized).trim() !== "") return localized;

    const en = property?.[`${field}_en`];
    if (en !== undefined && en !== null && String(en).trim() !== "") return en;

    return "N/A";
  };

  const fetchProperties = async ({ type = "", city_id = "", page = 1 }) => {
    try {
      setIsLoading(true);

      let query = `?page=${page}&lang=${currentLanguage}`;
      if (type) query += `&type=${encodeURIComponent(type)}`;
      if (city_id) query += `&city_id=${encodeURIComponent(city_id)}`;
      query += `&seed=${seed}`;

      const response = await axios.get(`${API_URL}/properties${query}`);

      if (response.data && response.data.properties) {
        const translatedProperties = response.data.properties.map((property) => ({
          ...property,
          title: getTranslatedField(property, "title"),
          description: getTranslatedField(property, "description"),
          location: property.location ?? "N/A",
        }));

        setProperties(translatedProperties);
        setTotalPages(response.data.totalPages);
        setCurrentPage(response.data.currentPage);
      } else {
        setProperties([]);
      }
    } catch (error) {
      console.error("Error fetching properties:", error);
      setProperties([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (filterType === "") {
      setHasSearched(false);
      setProperties([]);
      setCurrentPage(1);
      setTotalPages(1);
      setSearchParams({});
      setInitialType("");
      setInitialCityId("");
    }
  }, [filterType]);

  const handleSearch = (params) => {
    if (params.type) {
      fetchProperties({ ...params, page: 1 });
      setSearchParams(params);
      setHasSearched(true);

      if (params.mode) onFilterChange(params.mode);

      const searchParamsUrl = new URLSearchParams();
      searchParamsUrl.set("type", params.type);
      if (params.mode) searchParamsUrl.set("mode", params.mode);
      if (params.city_id) searchParamsUrl.set("city_id", params.city_id);
      searchParamsUrl.set("seed", seed);

      // ✅ keep same page but with query string
      navigate(`?${searchParamsUrl.toString()}`);
    } else {
      setHasSearched(false);
      setProperties([]);
      setCurrentPage(1);
      setTotalPages(1);
      setSearchParams({});
      onFilterChange("");

      // ✅ go to language root instead of "/"
      navigate(`/${currentLng}`);
    }
  };

  const handlePropertyClick = (propertyId) => {
    axios
      .post(`${API_URL}/clicks/${propertyId}`)
      .then(() => console.log("Click count incremented"))
      .catch((error) => console.error("Error incrementing click count:", error));

    // ✅ include language in URL + keep current query
    navigate(`/${currentLng}/product/${propertyId}${location.search}`);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;

    fetchProperties({ ...searchParams, page: newPage });
    setCurrentPage(newPage);
    window.scrollTo(0, 0);

    const searchParamsUrl = new URLSearchParams();
    if (searchParams.type) searchParamsUrl.set("type", searchParams.type);
    if (searchParams.mode) searchParamsUrl.set("mode", searchParams.mode);
    if (searchParams.city_id) searchParamsUrl.set("city_id", searchParams.city_id);
    searchParamsUrl.set("page", newPage);
    searchParamsUrl.set("seed", seed);

    // ✅ keep same page but update query string
    navigate(`?${searchParamsUrl.toString()}`);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get("type");
    const mode = queryParams.get("mode");
    const city_id = queryParams.get("city_id") || "";
    const page = queryParams.get("page") || 1;

    if (type) {
      const params = { type };
      if (city_id) params.city_id = city_id;
      if (mode) params.mode = mode;

      fetchProperties({ ...params, page });
      setSearchParams(params);
      setHasSearched(true);

      // if (mode === "buy" || mode === "rent" || mode === "requests") {
      if (mode === "buy" || mode === "rent" ) {
      onFilterChange(mode);
      } else {
        if (type === "all_buy") onFilterChange("buy");
        else if (type === "all_rent") onFilterChange("rent");
        // else if (type === "all_requests") onFilterChange("requests");
        else onFilterChange(type);
      }

      setCurrentPage(parseInt(page, 10));
      setInitialType(type);
      setInitialCityId(city_id || "");
    } else {
      setHasSearched(false);
      setProperties([]);
      setCurrentPage(1);
      setTotalPages(1);
      setSearchParams({});
      onFilterChange("");
      setInitialType("");
      setInitialCityId("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  useEffect(() => {
    if (hasSearched) fetchProperties({ ...searchParams, page: currentPage });
    // eslint-disable-next-line
  }, [currentLanguage]);

  const formatAvailabilityDate = (raw, locale = "en") => {
  // تجاهل NULL و 0000-00-00 و strings الفارغة
  if (!raw || raw === "0000-00-00") return null;

  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return null;

  // تنسيق تاريخ حسب اللغة
  return new Intl.DateTimeFormat(locale, { year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
};


  return (
    <>
      <SEO
        title={t("content.pageTitle")}
        description={t("content.pageDescription")}
        path={`/${currentLng}${location.search}`}
      />

      <div className={`Content ${isArabic ? "rtl" : "ltr"}`}>
        <SearchBar
          onSearch={handleSearch}
          filterType={filterType}
          onFilterChange={onFilterChange}
          initialType={initialType}
          initialCityId={initialCityId}
        />

        {!hasSearched ? (
          <>
            <NewsSection />

            <div className="news-more-wrapper">
              <button
                className="news-more-button"
                onClick={() => navigate(`/${currentLng}/blog`)} // ✅
                aria-label={t("content.readMoreArticlesAria")}
                type="button"
              >
                {t("content.readMoreArticles")}
              </button>
            </div>

            <FeaturedProperties />

            <div className="news-more-wrapper">
              <button
                className="news-more-button"
                onClick={() => navigate(`/${currentLng}?type=all_buy&mode=buy`)} // ✅
                aria-label={t("content.discoverMorePropertiesAria")}
                type="button"
              >
                {t("content.discoverMoreProperties")}
              </button>
            </div>

            <ClientReviews isArabic={isArabic} />
          </>
        ) : (
          <div className="properties-section">
            {isLoading ? (
              <div className="loadingg">
                <FaSpinner className="spinnerr" />
                <p>{t("properties.Loading")}</p>
              </div>
            ) : properties.length > 0 ? (
              <>
                <div className="properties-list">
                  {properties.map((property) => {
                    const isSold = !!property.is_sold;

                    return (
                      <div
                        key={property.property_id}
                        className={`property-item ${isArabic ? "rtl" : "ltr"} ${isSold ? "is-sold" : ""}`}
                        onClick={() => handlePropertyClick(property.property_id)}
                        tabIndex="0"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handlePropertyClick(property.property_id);
                        }}
                        aria-label={t("content.viewDetailsAria", { title: property.title })}
                      >
                        <div className="property-imagee-container">
                          <img
                            src={`${API_URL}/uploads/${property.image_url}`}
                            alt={property.title}
                            className="property-imagee"
                            loading="lazy"
                          />

                          {isSold && (
                            <div className="sold-overlay-center" aria-label={t("content.soldAria")}>
                              <div className="sold-pill">{t("content.soldPill")}</div>
                            </div>
                          )}
                        </div>

                        <div className="property-info">
                          <div className="property-top">
                            <h3 className="title-p">
                              {property.title}
                              {isSold && <span className="sold-inline">{t("content.soldInline")}</span>}
                            </h3>

                            <div className={`price-pill ${isSold ? "price-sold" : ""}`}>
                              {property.old_price && property.old_price > property.price && (
                                <span className="old-price">
                                  {formatPrice(property.old_price)} {t("properties.MAD")}
                                </span>
                              )}
                              <span className="new-price">
                                {formatPrice(property.price)} {t("properties.MAD")}
                              </span>
                            </div>
                          </div>

                          <div className="property-location">
                            <span className="loc-dot" />
                            <span className="loc-text">{property.location}</span>
                          </div>

                          <div className="property-chips">
                            {property.area && (
                              <span className="chip">
                                <span className="chip-label">{t("properties.area")}</span>
                                <span className="chip-value">{property.area} m²</span>
                              </span>
                            )}

                            {property.type !== "floorplots" &&
                              property.type !== "Commercialgarages" &&
                              property.type !== "CommercialgaragesRent" && (
                              // property.type !== "requests" &&
                              // property.type !== "apartmentsReq" &&
                              // property.type !== "floorplotsReq" &&
                              // property.type !== "CommercialgaragesReq" && (
                                <>
                                  {property.bedrooms != null && (
                                    <span className="chip">
                                      <span className="chip-label">{t("properties.bedrooms")}</span>
                                      <span className="chip-value">{property.bedrooms}</span>
                                    </span>
                                  )}
                                  {property.salon != null && (
                                    <span className="chip">
                                      <span className="chip-label">{t("properties.salon")}</span>
                                      <span className="chip-value">{property.salon}</span>
                                    </span>
                                  )}
                                  {property.bathrooms != null && (
                                    <span className="chip">
                                      <span className="chip-label">{t("properties.bathrooms")}</span>
                                      <span className="chip-value">{property.bathrooms}</span>
                                    </span>
                                  )}
                                  {property.kitchen != null && (
                                    <span className="chip">
                                      <span className="chip-label">{t("properties.kitchen")}</span>
                                      <span className="chip-value">{property.kitchen}</span>
                                    </span>
                                  )}
                                </>
                              )}

                            {(property.type === "buy" || property.type === "apartments" || property.type === "regularRent") &&
                              property.floors != null && (
                                <span className="chip">
                                  <span className="chip-label">{t("properties.floors")}</span>
                                  <span className="chip-value">{property.floors}</span>
                                </span>
                              )}

                            {/* {property.type === "rent" && (
                              <span className={`chip status ${property.available ? "ok" : "no"}`}>
                                <span className="chip-label">{t("properties.status")}</span>
                                <span className="chip-value">
                                  {property.available ? t("properties.available") : t("properties.notAvailable")}
                                </span>
                              </span>
                            )} */}
                            {property.type === "rent" && (() => {
                              const availDate = formatAvailabilityDate(property.availability_date, currentLanguage);

                              return (
                                <span className={`chip status ${property.available ? "ok" : "no"}`}>
                                  <span className="chip-label">{t("properties.status")}</span>

                                  <span className="chip-value">
                                    {property.available ? (
                                      t("properties.available")
                                    ) : (
                                      <>
                                        {t("properties.notAvailableRent")}
                                        {availDate && (
                                          <span className="availability-date">
                                            {" "}• {t("properties.availableFrom")} {availDate}
                                          </span>
                                        )}
                                      </>
                                    )}
                                  </span>
                                </span>
                              );
                            })()}
                          </div>
                          <div className="property-bottom">
                            {property.type === "rent" && <span className="hint">* {t("properties.priceVaries")}</span>}
                            <span className="cta">
                              {t("content.viewDetails")}
                              <span className="cta-arrow">→</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {totalPages > 1 && (
                  <div className="pagination">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      aria-label={t("properties.Previous")}
                    >
                      {t("properties.Previous")}
                    </button>

                    {currentPage > 2 && (
                      <>
                        <button onClick={() => handlePageChange(1)}>1</button>
                        {currentPage > 3 && <span className="ellipsis">...</span>}
                      </>
                    )}

                    {Array.from({ length: 3 }, (_, index) => {
                      const page = currentPage - 1 + index;
                      if (page > 0 && page <= totalPages) {
                        return (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={currentPage === page ? "active" : ""}
                            aria-label={`Page ${page}`}
                          >
                            {page}
                          </button>
                        );
                      }
                      return null;
                    })}

                    {currentPage < totalPages - 1 && (
                      <>
                        {currentPage < totalPages - 2 && <span className="ellipsis">...</span>}
                        <button onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
                      </>
                    )}

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      aria-label={t("properties.Next")}
                    >
                      {t("properties.Next")}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="no-results">
                <p>{t("properties.noResults")}</p>
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Content;
