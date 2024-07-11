import React from 'react'
import Navbar from './Nav/Navbar'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="login-container">
                <div className="login-box">
                    <h1 className="login-title">LOGIN</h1>
                    <form>
                        <label htmlFor="username" className="login-label">Username</label>
                        <input type="text" id="username" name="username" className="login-input" />

                        <label htmlFor="password" className="login-label">Password</label>
                        <input type="password" id="password" name="password" className="login-input" />

                        <p className="signup-text">Don't have a login? Sign up for one today!</p>

                        <div className="buttons">
                            <button type="submit" className="login-button">Login</button>
                            <Link to={"/signup"}>
                                <button type="button" className="signup-button">Sign Up</button>
                            </Link>


                        </div>
                    </form>
                </div>
            </div>

        </div>

    )
}

export default Login