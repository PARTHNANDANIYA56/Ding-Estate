import React from 'react'
import { NavLink } from 'react-router-dom'

function Userlogin() {
    return (
        <>
            <div class="login-form">
                <h2 className='fw-bold'>Login</h2>
                <form>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" placeholder="Enter username" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter password" />
                        <div className='d-flex mt-3 '>
                            <a href="#Forget Password">Forget Password</a>
                            <NavLink to="/Usersignup" className='ml-auto text-primary'>Sign Up</NavLink>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                </form>
            </div>
        </>
    )
}

export default Userlogin
