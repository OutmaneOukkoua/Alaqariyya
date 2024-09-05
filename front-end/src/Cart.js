// import React from 'react';
// import { useCart } from './CartContext';
// import { useNavigate } from 'react-router-dom';
// import './Cart.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { useTranslation } from 'react-i18next';

// const Cart = () => {
//   const { t } = useTranslation();
//   const { cart, dispatch } = useCart();
//   const navigate = useNavigate();
//   const API_URL = process.env.REACT_APP_SERVER;

//   const removeFromCart = (id) => {
//     dispatch({ type: 'REMOVE_FROM_CART', id });
//   };

//   return (
//     <div className="Cart">
//       <button className="go-button" onClick={() => navigate(-1)}>
//         <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '5px' }} />
//         {t('goBack.Go Back')}
//       </button>
//       <center><h2>{t('Cart.yourCart')}</h2></center>
//       {cart.length === 0 ? (
//         <center><p>{t('Cart.cartEmpty')}</p></center>
//       ) : (
//         <ul>
//           {cart.map(product => (
//             <li key={product.id}>
//               <img src={`${API_URL}/uploads/${product.image_url}`} alt={product.title} className="cart-item-image" />
//               <div className="cart-item-details">
//                 <p>{product.title}</p>
//                 <p>{product.price}</p>
//                 <button onClick={() => removeFromCart(product.id)}>{t('Cart.remove')}</button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;
import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Cart = () => {
  const { t } = useTranslation();
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_SERVER;

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', id });
  };

  // New function to handle redirection to product detail page
  const goToProductDetail = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="Cart">
      <button className="go-button" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '5px' }} />
        {t('goBack.Go Back')}
      </button>
      <center><h2>{t('Cart.yourCart')}</h2></center>
      {cart.length === 0 ? (
        <center><p>{t('Cart.cartEmpty')}</p></center>
      ) : (
        <ul>
          {cart.map(product => (
            <li key={product.id}>
              <img 
                src={`${API_URL}/uploads/${product.image_url}`} 
                alt={product.title} 
                className="cart-item-image"
                onClick={() => goToProductDetail(product.id)} // Click to redirect to product details page
              />
              <div className="cart-item-details">
                <p 
                  onClick={() => goToProductDetail(product.id)} // Click to redirect to product details page
                  style={{ cursor: 'pointer' }}
                >
                  {product.title}
                </p>
                <p>{product.price}</p>
                <button onClick={() => removeFromCart(product.id)}>{t('Cart.remove')}</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
