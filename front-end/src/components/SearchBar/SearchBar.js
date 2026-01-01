// SearchBar.js
import React, { useEffect, useMemo, useState, useCallback } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "./SearchBar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function SearchBar({ onSearch, filterType, onFilterChange, initialType, initialCityId }) {
  const { t, i18n } = useTranslation();
  const API_URL = process.env.REACT_APP_SERVER;

  const isArabic = i18n.language === "ar";

  /* ===================== Cities ===================== */
  const [cities, setCities] = useState([]);
  const [citiesLoading, setCitiesLoading] = useState(false);

  /* ===================== Filters ===================== */
  const [cityId, setCityId] = useState(() => sessionStorage.getItem("city_id") || initialCityId || "");

  const [selectionMode, setSelectionMode] = useState(
    () => sessionStorage.getItem("selectionMode") || filterType || "buy"
  );

  const [selectedType, setSelectedType] = useState(
    () => sessionStorage.getItem("selectedType") || initialType || ""
  );

  // ✅ seed to keep same order + breadcrumb context
  const [seed, setSeed] = useState(() => sessionStorage.getItem("seed") || "");

  /* ===================== Background (KEEP ONLY FIRST IMAGE) ===================== */
  const backgroundImage = useMemo(() => "/searchbar/1.jpeg", []);

  /* ===================== Helpers ===================== */
  const getAllValueForMode = (mode) => {
    if (mode === "buy") return "all_buy";
    if (mode === "rent") return "all_rent";
    // if (mode === "requests") return "all_requests";
    return "";
  };

  const cityLabel = (c) => (isArabic ? c.name_ar : c.name_fr);

  const makeSeed = useCallback(() => {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  }, []);

  /* ===================== Persist ===================== */
  useEffect(() => sessionStorage.setItem("city_id", cityId), [cityId]);
  useEffect(() => sessionStorage.setItem("selectedType", selectedType), [selectedType]);
  useEffect(() => sessionStorage.setItem("selectionMode", selectionMode), [selectionMode]);
  useEffect(() => {
    if (seed) sessionStorage.setItem("seed", seed);
  }, [seed]);

  /* ===================== Background preload (ONLY ONE IMAGE) ===================== */
  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
  }, [backgroundImage]);

  /* ===================== Sync mode ===================== */
  useEffect(() => {
    // if (["buy", "rent", "requests"].includes(filterType)) {
    if (["buy", "rent"].includes(filterType)) {
    setSelectionMode(filterType);
      setSelectedType(getAllValueForMode(filterType));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterType]);

  /* ===================== Initial values ===================== */
  useEffect(() => {
    if (initialType) {
      setSelectedType(initialType);
    } else {
      setSelectedType(getAllValueForMode(selectionMode));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialType]);

  useEffect(() => {
    setCityId(initialCityId || "");
  }, [initialCityId]);

  /* ===================== Load cities ===================== */
  useEffect(() => {
    const loadCities = async () => {
      try {
        setCitiesLoading(true);
        const resp = await axios.get(`${API_URL}/cities`);
        const list = Array.isArray(resp.data) ? resp.data : resp.data?.cities || [];

        setCities(
          list
            .filter((c) => c && (c.id || c.city_id))
            .map((c) => ({
              id: String(c.id ?? c.city_id),
              name_ar: c.name_ar ?? "",
              name_fr: c.name_fr ?? "",
            }))
            .sort((a, b) => (a.name_fr || "").localeCompare(b.name_fr || ""))
        );
      } catch (e) {
        console.error("Error loading cities:", e);
      } finally {
        setCitiesLoading(false);
      }
    };

    if (API_URL) loadCities();
  }, [API_URL]);

  /* ===================== Options per mode ===================== */
  const typeOptions = useMemo(() => {
    if (selectionMode === "buy") {
      return [
        { value: "all_buy", label: t("properties.all") },
        { value: "buy", label: t("properties.HausesForBuy") },
        { value: "apartments", label: t("properties.apartments") },
        { value: "floorplots", label: t("properties.floorplots") },
        { value: "Commercialgarages", label: t("properties.Commercialgarages") },
      ];
    }

    if (selectionMode === "rent") {
      return [
        { value: "all_rent", label: t("properties.all") },
        { value: "regularRent", label: t("properties.regularRent") },
        { value: "rent", label: t("properties.furnishedRent") },
        { value: "CommercialgaragesRent", label: t("properties.Commercialgarages") },
      ];
    }

    // if (selectionMode === "requests") {
    //   return [
    //     { value: "all_requests", label: t("properties.all") },
    //     { value: "requests", label: t("properties.HausesForBuy") },
    //     { value: "apartmentsReq", label: t("properties.apartments") },
    //     { value: "floorplotsReq", label: t("properties.floorplots") },
    //     { value: "CommercialgaragesReq", label: t("properties.Commercialgarages") },
    //   ];
    // }

    return [];
  }, [selectionMode, t]);

  /* ===================== Handlers ===================== */
  const handleModeChange = (mode) => {
    setSelectionMode(mode);
    onFilterChange(mode);
    setSelectedType(getAllValueForMode(mode));
  };

  const handleSearchClick = () => {
    const newSeed = makeSeed();
    setSeed(newSeed);

    onSearch({
      type: selectedType,
      city_id: cityId,
      mode: selectionMode,
      page: 1,
      seed: newSeed,
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearchClick();
  };

  /* ===================== Render ===================== */
  return (
    <div className={`search-bar-container ${isArabic ? "rtl" : "ltr"}`}>
      <div
        className="search-bar-background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="search-bar">
          <p className="search-bar-parag">{t("searchBar.title")}</p>

          <div className="search-controls">
            <div className="mode-button-container">
              <button
                type="button"
                className={`mode-button ${selectionMode === "buy" ? "active" : ""}`}
                onClick={() => handleModeChange("buy")}
              >
                {t("properties.buy")}
              </button>

              <button
                type="button"
                className={`mode-button ${selectionMode === "rent" ? "active" : ""}`}
                onClick={() => handleModeChange("rent")}
              >
                {t("properties.rent")}
              </button>

              {/* <button
                type="button"
                className={`mode-button ${selectionMode === "requests" ? "active" : ""}`}
                onClick={() => handleModeChange("requests")}
              >
                {t("properties.requests")}
              </button> */}
            </div>

            <div className="filter-select-container">
              <select
                className="filter-select"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                onKeyDown={handleKeyDown}
                aria-label={t("searchBar.typeAria", { defaultValue: "Property type" })}
              >
                {typeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="search-input-container">
              <select
                value={cityId}
                onChange={(e) => setCityId(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={citiesLoading}
                className="city-select"
                aria-label={t("searchBar.cityAria", { defaultValue: "City" })}
              >
                <option value="">
                  {citiesLoading ? t("searchBar.loadingCities") : t("searchBar.allCities")}
                </option>

                {cities.map((c) => (
                  <option key={c.id} value={c.id}>
                    {cityLabel(c)}
                  </option>
                ))}
              </select>

              <button
                type="button"
                className="search-icon-button"
                onClick={handleSearchClick}
                disabled={citiesLoading}
                aria-label={t("searchBar.searchAria", { defaultValue: "Search" })}
              >
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
