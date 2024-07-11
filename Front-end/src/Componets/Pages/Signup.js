import React from 'react'
import Navbar from './Nav/Navbar'
import './Signup.css'

const Signup = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="signup-container">
                <div className="signup-form-container">
                    <form className="signup-form">
                        <h2>Register</h2>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" name="firstName" />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" name="lastName" />
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" name="username" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" name="confirmPassword" />
                        </div>
                        <button type="submit" className="register-button">Register</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Signup