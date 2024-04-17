import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

// Define JSON data containing usernames and passwords
const userData = [
    { username: 'parth', password: '123' },
    { username: 'user2', password: 'password2' }
];

function Userlogin({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = userData.find(user => user.username === username && user.password === password);
        if (user) {
            onLogin(); // Set loggedIn state to true in App.js
            navigate('/DevelopingApps'); // Navigate to the DevelopingApps route
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <>
            <div className="login-form">
                <h2 className='fw-bold'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className='d-flex mt-3 '>
                            <a href="#Forget Password">Forget Password</a>
                            <NavLink to="/Usersignup" className='ml-auto text-primary'>Sign Up</NavLink>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                </form>
            </div>
        </>
    )
}

export default Userlogin;
