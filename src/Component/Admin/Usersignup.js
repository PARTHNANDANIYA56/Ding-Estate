import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Usersignup() {
    // State to store user data
    const [userData, setUserData] = useState([]);
    // State to store form input values
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Validate password
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // Store user data in JSON format
        const newUser = {
            username,
            email,
            password
        };
        setUserData([...userData, newUser]);
        // Redirect to login page upon successful signup
        window.location.href = '/Userlogin';
    };

    return (
        <>
            <div className="signup-form">
                <h2 className='fw-bold'>Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" className="form-control" id="confirm-password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <div className='mt-4 text-primary'>
                            <NavLink to="/Userlogin">Already Registered</NavLink>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default Usersignup;
