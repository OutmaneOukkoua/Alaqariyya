
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('all');
  const [location, setLocation] = useState('');

  const handleTabClick = (type) => {
    setActiveTab(type);
    onSearch({ type, location });
  };

  const handleLocationChange = (e) => {
    const location = e.target.value;
    setLocation(location);
    onSearch({ type: activeTab, location });
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar-background">
        <div className="search-bar">
          <table className="table-b">
            <thead>
              <tr>
                <th>
                  <button
                    className={activeTab === 'all' ? 'active' : ''}
                    onClick={() => handleTabClick('all')}
                  >
                    {t('properties.all')}
                  </button>
                </th>
                <th>
                  <button
                    className={activeTab === 'buy' ? 'active' : ''}
                    onClick={() => handleTabClick('buy')}
                  >
                    {t('properties.buy')}
                  </button>
                </th>
                <th>
                  <button
                    className={activeTab === 'rent' ? 'active' : ''}
                    onClick={() => handleTabClick('rent')}
                  >
                    {t('properties.rent')}
                  </button>
                </th>
                <th>
                  <button
                    className={activeTab === 'floorplots' ? 'active' : ''}
                    onClick={() => handleTabClick('floorplots')}
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
              value={location}
              onChange={handleLocationChange}
              placeholder={t('properties.searchPlaceholder')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
