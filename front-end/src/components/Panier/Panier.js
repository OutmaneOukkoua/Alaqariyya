import React from 'react';
import './Panier.css';

function Panier({ items }) {
  const API_URL = process.env.REACT_APP_SERVER ;

  return (
    <div className="panier">
      <h2>Panier</h2>
      {items.length === 0 ? (
        <p>No items in the panier.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <img src={`${API_URL}/uploads/${item.image_url}`} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Panier;
