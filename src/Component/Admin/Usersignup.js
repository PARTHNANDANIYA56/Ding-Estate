import React from 'react'
import { NavLink } from 'react-router-dom';

function Usersignup() {
    return (
        <>
            <div class="signup-form">
                <h2 className='fw-bold'>Registration Form</h2>
                <form>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" placeholder="Enter username" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter password" />
                    </div>
                    <div class="form-group">
                        <label for="confirm-password">Confirm Password</label>
                        <input type="password" class="form-control" id="confirm-password" placeholder="Confirm password" />
                        <div className='mt-4 text-primary'>
                            <NavLink to="/Userlogin" >Already Registered</NavLink>
                        </div>
                    </div>
                    <NavLink to='/Userlogin'>
                    <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
                    </NavLink>
                </form>
            </div>
        </>
    )
}

export default Usersignup
