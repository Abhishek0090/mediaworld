import React from 'react'
import { Link } from 'react-router-dom';
import './login.scss';

const Login = () => {
  return (
    <div className="login">
    <div className="card">
        <div className='left'>
            <h1>Hello world</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro id impedit omnis  
            </p>
            <span>Dont You have an Account</span>
            <Link to= "/register">

            <button>Register</button>
            </Link>
        </div>
        <div className='right'>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <Link to="/login">

                <button>Login</button>
                </Link>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login