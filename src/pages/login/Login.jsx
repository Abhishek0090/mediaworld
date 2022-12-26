import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import './login.scss';

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  })

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    console.log(inputs)
  }

  const { login } = useContext(AuthContext);

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }

  }

  return (
    <div className="login">
      <div className="card">
        <div className='left'>
          <h1>Hello world</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro id impedit omnis
          </p>
          <span>Dont You have an Account</span>
          <Link to="/register">

            <button>Register</button>
          </Link>
        </div>
        <div className='right'>
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='Username' name='username' onChange={handleChange} />
            <input type="password" placeholder='Password' name='password' onChange={handleChange} />
            {err && err}
            <Link to="/login">

              <button onClick={handlelogin}>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login