import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Nav/Navbar';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: ''
  });

  const navigate = useNavigate();

  const registerUser = async (con) => {
    const response = await fetch('http://localhost:3001/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(con),
    });
    return response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const con = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        comment: formData.comment
      };
      const response = await registerUser(con);
      console.log('Submitted data:', con);
      console.log('Server response:', response);
      alert('Form submitted successfully!');
      navigate('/');

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Form submission failed. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h1 className="contact-header fuzzy-bubbles-bold">CONTACT</h1>
        <div className="contact-info">
          <p>
            For any assistance you may need regarding your order, please direct your inquiries
            to <a href="mailto:support@dokimerch.com">support@dokimerch.com</a>. For inquiries regarding brand, sponsorship, or collaboration opportunities,
            kindly send them to <a href="mailto:DokiCanRead@gmail.com">DokiCanRead@gmail.com</a>.
          </p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="tel" 
              name="phone" 
              placeholder="Phone" 
              value={formData.phone} 
              onChange={handleChange} 
            />
            <textarea 
              name="comment" 
              placeholder="Comment" 
              value={formData.comment} 
              onChange={handleChange} 
              required 
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
