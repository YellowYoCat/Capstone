import React, { useEffect, useState } from 'react'
import Navbar from './Nav/Navbar';
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import './Profile.css';

const Profile = () => {

  const [profile, setProfile] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { username } = useParams();

  useEffect(() => {
    if (!cookies.username) {
      navigate('/login');
    }
  }, [cookies, navigate]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:3001/users/${cookies.username}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProfile(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [cookies.username]);


  const handleLogout = () => {
    removeCookie('username', { path: '/' });
    navigate('/login');
  };

  const handleEdit = () => {
    navigate('/edit');
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3001/users/${cookies.username}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('User deleted successfully!');
        navigate('/'); // redirect to home page
      } else {
        throw new Error('Error deleting user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error deleting user. Please try again.');
    }
  };

  if (!cookies.username) {
    return null;
  }




  return (
    <div>
      <div>
        <Navbar />
      </div>
      <h1 className='profile-header fuzzy-bubbles-bold'>Profile</h1>
      <div className='profile-container'>

        {cookies.username && (
          <>
            <p className='wel'>Welcome, {cookies.username}!</p>

          </>
        )}

        <div className='info'>

          <ul className='or'>
            <li className='list' key={profile._id}>
              <p className='text'>First Name: {profile.firstName}</p>
              <p className='text'>Last Name: {profile.lastName}</p>
              <p className='text'>Username: {profile.username}</p>
              <p className='text'>Email: {profile.email}</p>
            </li>
          </ul>


        </div>
        <div className='btns'>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleLogout}>Logout</button>

        </div>


      </div>
    </div>

  )
}

export default Profile