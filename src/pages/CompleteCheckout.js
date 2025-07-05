import React, { useState } from 'react';
import { FaUser, FaAddressCard, FaCreditCard } from 'react-icons/fa';
import { useCart } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../Style/CompleteCheckout.css';

const CompleteCheckout = () => {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false); // <-- new state

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "10-digit phone required";

    if (!formData.address) newErrors.address = "Address required";
    if (!formData.city) newErrors.city = "City is required";
    if (!/^[A-Za-z0-9]{3,10}$/.test(formData.postalCode)) newErrors.postalCode = "Postal code required";

    if (!/^\d{16}$/.test(formData.cardNumber)) newErrors.cardNumber = "16-digit card required";
    if (!/^\d{2}\/\d{2}$/.test(formData.expiry)) newErrors.expiry = "Format MM/YY";
    if (!/^\d{3}$/.test(formData.cvv)) newErrors.cvv = "3-digit CVV required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate();

    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
    } else {
      setErrors({});
      clearCart();
      setOrderPlaced(true); // Show survey

   Swal.fire({
  title: 'Order Confirmed!',
  html: `
    <p>Thank you for shopping with Whisk & Smile 🍪</p>
    <hr/>
    <p style="font-weight: 600;">We’d love your feedback!</p>
    <textarea id="feedback" rows="4" placeholder="Share your thoughts..." style="width: 100%; padding: 0.5rem; border-radius: 6px; border: 1px solid #ccc;"></textarea>
  `,
  confirmButtonText: 'Submit Feedback',
  confirmButtonColor: '#ff6b81',
  preConfirm: () => {
    const feedback = document.getElementById('feedback').value;
    if (!feedback) {
      Swal.showValidationMessage('Please leave feedback before submitting.');
    }
    return feedback;
  },
}).then((result) => {
  if (result.isConfirmed) {
    console.log('Feedback:', result.value); // You can save this to a backend if needed
    navigate('/');
  }
});

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
      });
    }
  };

  return (
    <>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h2><FaUser /> Personal Info</h2>
          <input type="text" placeholder="Full Name" value={formData.fullName} onChange={handleChange('fullName')} />
          {errors.fullName && <span className="error">{errors.fullName}</span>}

          <input type="email" placeholder="Email" value={formData.email} onChange={handleChange('email')} />
          {errors.email && <span className="error">{errors.email}</span>}

          <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange('phone')} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-section">
          <h2><FaAddressCard /> Address Info</h2>
          <input type="text" placeholder="Address" value={formData.address} onChange={handleChange('address')} />
          {errors.address && <span className="error">{errors.address}</span>}

          <input type="text" placeholder="City" value={formData.city} onChange={handleChange('city')} />
          {errors.city && <span className="error">{errors.city}</span>}

          <input type="text" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange('postalCode')} />
          {errors.postalCode && <span className="error">{errors.postalCode}</span>}
        </div>

        <div className="form-section">
          <h2><FaCreditCard /> Payment Info</h2>
          <input type="text" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange('cardNumber')} />
          {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}

          <input type="text" placeholder="MM/YY" value={formData.expiry} onChange={handleChange('expiry')} />
          {errors.expiry && <span className="error">{errors.expiry}</span>}

          <input type="text" placeholder="CVV" value={formData.cvv} onChange={handleChange('cvv')} />
          {errors.cvv && <span className="error">{errors.cvv}</span>}
        </div>

        <div className="submit-button">
          <button type="submit">Place Order</button>
        </div>
      </form>

      {/* Show survey if order was placed */}
      {orderPlaced && (
        <div style={{ marginTop: '2rem' }}>
        
        </div>
      )}
    </>
  );
};

export default CompleteCheckout;
