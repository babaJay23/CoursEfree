import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () =>{
  return (
    <div className='login'>
        <div className="login-form">
        <h3>Welcome to CoursEfree to learn some of the valuable skills</h3>
        <p>If you already have an account, please sign in below.</p>

        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='enter your email'/>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='enter your password'/>
          </div>

          <div className="form-action">
            <div className="check">
            <input type="checkbox" name="remember-me" id="remember" />
            <p style={{ marginLeft: '10px' }}>Remember Me.</p>
            </div>
            <div className="forgot">
              <Link to="/reset">Forgot Password?</Link>
            </div>
          </div>

          <div className="form-btn">
            <div className="login-btn">
              <button>Login</button>
            </div>
            <div className="register">
              <Link to="/register" id='register'>Sign Up</Link>
            </div>
          </div>
        </form>
        </div>
        {/* <div className="login-image">
          <img src="/img/login.jpg" alt="login" />
        </div> */}
    </div>
  )
}

export default Login;