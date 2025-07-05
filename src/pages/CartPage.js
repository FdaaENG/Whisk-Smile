// src/pages/CartPage.js
import React from 'react';
import { useCart } from '../components/CartContext';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import '../Style/CartPage.css';

const CartPage = () => {
    const { cartItems, removeFromCart } = useCart();
    

    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * (item.quantity || 1),
        0
    );

    return (
        <div className="cart-page">
            <h2>Your Cart 🛒</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty. <Link to="/">Browse items</Link></p>
            ) : (
                <>
                    <div className="cart-list">
                        {cartItems.map((item, index) => (
                            <div key={index} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="item-info">
                                    <h4>{item.name}</h4>
                                    <p>Quantity: {item.quantity || 1}</p>
                                    <p>Price: ${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                                </div>
                                <button
                                    className="delete-icon"
                                    onClick={() => removeFromCart(item.id)}
                                    title="Remove from cart"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h3>Total: ${totalPrice.toFixed(2)}</h3>
                        <Link to="/place-order">
                            <button className="checkout-btn">Proceed to Checkout</button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
