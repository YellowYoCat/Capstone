import React from 'react';
import Navbar from './Nav/Navbar';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className='contact-container'>
        <h1 className='contact-header'>CONTACT</h1>
        <div className='contact-info'>
          <p>
            For any assistance you may need regarding your order, please direct your inquiries
            to <a href="mailto:support@dokimerch.com">support@dokimerch.com</a>. For inquiries regarding brand, sponsorship, or collaboration opportunities,
            kindly send them to <a href="mailto:DokiCanRead@gmail.com">DokiCanRead@gmail.com</a>.
          </p>
        </div>
        <div className='contact-form'>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Email' />
          <input type='phone' placeholder='Phone' />
          <textarea placeholder='Comment' />
          <button type='submit'>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
