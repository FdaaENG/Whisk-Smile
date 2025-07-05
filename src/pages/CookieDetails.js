import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {useCart} from '../components/CartContext';
import { cookies, BirthdayProducts } from '../Data/items';
import '../Style/CookieDetails.css';
import { toast } from 'react-toastify';


const CookieDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const CookieProducts = [...cookies, ...BirthdayProducts];
    const cookie = CookieProducts.find((item) => item.id === id);
    const [packCount, setPackCount] = useState(1);
    const [message, setMessage] = useState('');
    const { addToCart } = useCart();



  const handleAddToCart = () => {
    addToCart({
      id: cookie.id + `-${packCount}`,
      name: `${cookie.name} (${packCount} Pack${packCount > 1 ? 's' : ''})`,
      image: cookie.image,
      price: parseFloat(cookie.price) * packCount,
      quantity: 1,
    });

    toast.success(`${cookie.name} (${packCount} pack${packCount > 1 ? 's' : ''}) added to cart! 🍪`);
  };


    if (!cookie) {
        return <div className="product-not-found">Cookie not found 🍪</div>;
    }



    return (

        <div className="cookie-detail-container">
            <div className="cookie-image-section">
                <img src={cookie.image} alt={cookie.name} />
            </div>

            <div className="cookie-info-section">
                <h2>{cookie.name}</h2>
                <p className="cookie-description">{cookie.description}</p>
                <p className="cookie-price">Price: ${(cookie.price * packCount).toFixed(2)}</p>

                    <div className="pack-options">
          {[1, 2, 3].map((count) => (
            <button
              key={count}
              className={packCount === count ? 'active' : ''}
              onClick={() => setPackCount(count)}
            >
              {count} Pack{count > 1 ? 's' : ''}
            </button>
          ))}
        </div>
                
                {cookie.isBirthday && (
                    <div className="message-section">
                        <label htmlFor="message" className="message-label">🎉 Add a Custom Message:</label>
                        <textarea
                            id="message"
                            className="message-textarea"
                            rows="3"
                            placeholder="e.g., Happy Birthday Sarah!"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            maxLength={120}
                        />

                    </div>
                )}

                <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default CookieDetails;
