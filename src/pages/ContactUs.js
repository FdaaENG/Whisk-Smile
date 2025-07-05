import React, { useState, useEffect } from 'react';
import '../Style/ContactUs.css';

const ContactUs = () => {
        useEffect(() => {
                window.scrollTo(0, 0);
            }, []);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with email API or back-end connection
    console.log('Form submitted:', form);
    alert('Thank you for contacting us!');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-container">
      <p className='contactTitle'>Contact Us</p>
      <p>Have questions or special requests? Drop us a message—we're here for you 💌</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="send-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
