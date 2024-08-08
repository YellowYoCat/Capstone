import React, { useState, useEffect } from 'react';
import Navbar from './Nav/Navbar';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['username']);

    useEffect(() => {
        
        if (cookies.username) {
            navigate('/profile');
        }
    }, [cookies, navigate]);

    useEffect(() => {
        let timer;
        if (cookies.username) {
            
            timer = setTimeout(() => {
                removeCookie('username', { path: '/' });
                navigate('/login');
            }, 5 * 60 * 1000); 
        }

       
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [cookies.username, removeCookie, navigate]);



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
                setCookie('username', username, { path: '/', expires: new Date(Date.now() + 30 * 60 * 1000) });
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
