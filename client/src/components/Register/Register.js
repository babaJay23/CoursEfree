import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AiFillCloseCircle } from 'react-icons/ai';
import Login from '../Login/Login'
import './Register.css'

const Register = ({ handleClose, show }) =>{

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [showRegisterForm, setShowRegisterForm] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState(false);


  const handleLoginForm = (event) =>{
    event.preventDefault();
  } 

  const displayLoginForm = () =>{
    setShowLoginForm(!false);
    setShowRegisterForm(!true);
}


  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    
    <div className={showHideClassName} id="register">
        { showRegisterForm && <div className="register-form">
        <h3>Welcome to CoursEfree to learn some of the valuable skills</h3>
        <p>If you already have an account, please sign in below.</p>

        <form onSubmit={handleSubmit(handleLoginForm)}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" 
              placeholder='enter username'
              value={username}
              onChange={(event) => setUserName(event.target.value)}
              {...register('username', {
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
              })}
            />{errors.username && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '10px' }}>Please enter Username*</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" 
              placeholder='enter your email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              {...register('email', {
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
              })}
            />{errors.email && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '10px' }}>Please enter Email*</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" 
              placeholder='enter your password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              {...register('password', {
                required: true,
              })}
            />{errors.password && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '10px' }}>Please enter Password*</p>}
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

          <div className="btns">
            <div className="btn">
              <button type='submit'>Sign Up</button>
            </div>
            <div className="login-link">
              <button id='login' onClick={displayLoginForm}>Log In</button>
            </div>
          </div>
          <i onClick={handleClose}><AiFillCloseCircle /></i>
        </form>
        </div>
        }
        {/* login form */}
        {
          showLoginForm && <Login />
        }
    </div>
  )
}

export default Register;