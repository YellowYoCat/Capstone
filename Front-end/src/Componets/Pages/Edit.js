import React, { useState } from 'react';
import Navbar from './Nav/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import './Signup.css';
import { useCookies } from 'react-cookie';

const Edit = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const { username } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateUser = async (newUser) => {
    const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    });
    return response.json();
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3001/users/${cookies.username}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await updateUser();
      if (response.ok) {
        setProfile(data);
        setLoading(false);
        alert('Update successful!');
        navigate('/profile'); 
      } else {
        throw new Error(data.error || 'Update failed');
      }
    } catch (error) {
      console.error('Error updating user:', error);
      setError(error);
      setLoading(false);
      alert('Update failed. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="signup-container">
        <div className="signup-form-container">
          <form className="signup-form" onSubmit={handleSubmit}>
            <h2>Edit Profile</h2>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="register-button">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;