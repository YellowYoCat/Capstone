// import React, { useEffect } from 'react'
// import Navbar from './Nav/Navbar'
// import './Signup.css'




// const Signup = () => {

//     useEffect(() => {
//          const uri = `http://localhost:3000/profiles/${id}`
//          fetch(uri)
//          .then(res => res.json())
//          .then(data => console.log(data))

//     }, []);

   

//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         username: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//     });

//     const history = useHistory();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (formData.password !== formData.confirmPassword) {
//             alert('Passwords do not match!');
//             return;
//         }
//         try {
//             const newUser = {
//                 firstName: formData.firstName,
//                 lastName: formData.lastName,
//                 username: formData.username,
//                 email: formData.email,
//                 password: formData.password,
//             };
//             const response = await registerUser(newUser);
//             console.log('User registered:', response);
//             history.push('/profile'); 
//         } catch (error) {
//             console.error('Error registering user:', error);
//             alert('Registration failed. Please try again.');
//         }
//     };


//     return (
//         <div>
//             <div>
//                 <Navbar />
//             </div>
//             <div className="signup-container">
//                 <div className="signup-form-container">
//                     <form className="signup-form">
//                         <h2>Register</h2>
//                         <div className="form-group">
//                             <label>First Name</label>
//                             <input type="text" name="firstName" />
//                         </div>
//                         <div className="form-group">
//                             <label>Last Name</label>
//                             <input type="text" name="lastName" />
//                         </div>
//                         <div className="form-group">
//                             <label>Username</label>
//                             <input type="text" name="username" />
//                         </div>
//                         <div className="form-group">
//                             <label>Email</label>
//                             <input type="email" name="email" />
//                         </div>
//                         <div className="form-group">
//                             <label>Password</label>
//                             <input type="password" name="password" />
//                         </div>
//                         <div className="form-group">
//                             <label>Confirm Password</label>
//                             <input type="password" name="confirmPassword" />
//                         </div>
//                         <button type="submit" className="register-button">Register</button>
//                     </form>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Signup

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from './Nav/Navbar';
import './Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const history = useHistory();

    useEffect(() => {
        const uri = `http://localhost:3000/profiles/${id}`; 
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                setFormData()})
            .catch(error => console.error('Error fetching data:', error));
    }, []);

   

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        try {
            const newUser = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                username: formData.username,
                email: formData.email,
                password: formData.password,
            };
            const response = await registerUser(newUser); 
            console.log('User registered:', response);
            history.push('/profile'); 
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="signup-container">
                <div className="signup-form-container">
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <h2>Register</h2>
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
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="register-button">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
