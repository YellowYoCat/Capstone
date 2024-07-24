import React, { useState } from 'react';
import Navbar from './Nav/Navbar';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Login successful', data);
                
                navigate('/profile'); 
            } else {
                setError(data.message || 'Error logging in');
            }
        } catch (err) {
            console.error('Error logging in', err);
            setError('Error logging in');
        }
    };

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="login-container">
                <div className="login-box">
                    <h1 className="login-title">LOGIN</h1>
                    <form onSubmit={handleLogin}>
                        <label htmlFor="username" className="login-label">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="login-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <label htmlFor="password" className="login-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="login-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && <p className="error-message">{error}</p>}

                        <p className="signup-text">Don't have a login? Sign up for one today!</p>

                        <div className="buttons">
                            <button type="submit" className="login-button">Login</button>
                            <Link to="/signup">
                                <button type="button" className="signup-button">Sign Up</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
