import axios from 'axios';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './register.scss';

const Register = () => {

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: ""
  })

  const [err, setErr] = useState(null);


  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    console.log(inputs)
  }


  const register = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8800/api/auth/register', inputs);
      navigate("/");
    } catch (error) {
      console.log(error);
      setErr(err.response.data)
    }
  }

  // console.log(err);

  return (
    <div className="register">
      <div className="card">
        <div className='left'>
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Username' name="usename" onChange={handleChange} />
            <input type="email" placeholder='Email' name="email" onChange={handleChange} />
            <input type="password" placeholder='Password' name="password" onChange={handleChange} />
            <input type="text" placeholder='Name' name="name" onChange={handleChange} />
            <button onClick={register}>Register</button>
          </form>
          {err && err}
        </div>
        <div className='right'>
          <h1>Abhi Sup</h1>
          <p>Welcome Back Home You are Doing Good
          </p>
          <span>Do You have an Account</span>
          <Link to="/login">

            <button>Login</button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Register