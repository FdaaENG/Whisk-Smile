import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {useCart} from '../components/CartContext';
import { Cake, BirthdayProducts, cakeProducts } from '../Data/items';
import '../Style/CakeDetails.css';
import { toast } from 'react-toastify';


const CakeDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const CakeProducts = [...Cake, ...BirthdayProducts, ...cakeProducts];
    const cake = CakeProducts.find((item) => item.id === id);
    const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState('');
    const { addToCart } = useCart();



const handleAddToCart = () => {
  addToCart({
    id: cake.id,
    name: cake.name,
    image: cake.image,
    price: parseFloat(cake.price),
    quantity,
  });
  toast.success(`${cake.name} added to cart! 🎉`);
};


    if (!cake) {
        return <div className="product-not-found">Cake not found 🍰</div>;
    }

    const handleChange = (e) => setQuantity(Number(e.target.value));


    return (

        <div className="cake-detail-container">
            <div className="cake-image-section">
                <img src={cake.image} alt={cake.name} />
            </div>

            <div className="cake-info-section">
                <h2>{cake.name}</h2>
                <p className="cake-description">{cake.description}</p>
                <p className="cake-price">Price: ${(cake.price * quantity).toFixed(2)}</p>

                <div className="quantity-input">
                    <label>Quantity:</label>
                    <input type="number" min="1" value={quantity} onChange={handleChange} />
                </div>
                
                {cake.isBirthday && (
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

                <button className="add-to-cart-btn-A" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default CakeDetails;
