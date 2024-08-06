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
    const url = `http://localhost:3001/users/${cookies.username}`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProfile(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [cookies.username]);


  const handleLogout = () => {
    removeCookie('username', { path: '/' });
    navigate('/login');
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
          <button>Edit</button>
          <button>Delete</button>
          <button onClick={handleLogout}>Logout</button>

        </div>


      </div>
    </div>

  )
}

export default Profile