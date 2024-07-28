import React, { useEffect, useState } from 'react'
import Navbar from './Nav/Navbar';
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom';

const Profile = () => {

  const [profiles, setProfiles] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!cookies.username) {
      navigate('/login');
    }
  }, [cookies, navigate]);


  useEffect(() => {
    const url = `http://localhost:3001/profiles/${id}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setUserData(data);
      })
      .catch(error => {
        setError(error);
      });

  }, [id])


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
      <div>
        <h1>Profile</h1>
        {cookies.username && (
          <>
            <p>Welcome, {cookies.username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
      <ul>
        {profiles.map(profile => (
          <li key={profile._id}>
            <p>First Name: {profile.firstName}</p>
            <p>Last Name: {profile.lastName}</p>
            <p>Username: {profile.username}</p>
            <p>Email: {profile.email}</p>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default Profile