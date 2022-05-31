import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AiFillCloseCircle } from 'react-icons/ai';
import './Login.css';
import Register from '../Register/Register'

const Login = ({ handleClose, show }) =>{

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const [showRegister, setshowRegister] = useState(false)

  // const showRegisterModal = () => {
	// 	showRegister(true);
	// };

	// function to close the modal
	const closeRegisterModal = () => {
		setshowRegister(false);
	};



  const handleLoginForm = (event) =>{
    event.preventDefault();
  }

  const displayRegisterForm = () =>{
      setShowLoginForm(!true);
      setShowRegisterForm(!false);
  }


  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName} id="login-container">
      {showLoginForm &&
        <div className="login-form">
        <h3>Welcome to CoursEfree to learn some of the valuable skills</h3>
        <p>If you already have an account, please sign in below.</p>

        <form onSubmit={handleSubmit(handleLoginForm)}>
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

          <div className="form-btn">
            <div className="login-btn">
              <button type='submit'>Login</button>
            </div>
            <div className="sign-up">
              <button class='register-link' onClick={displayRegisterForm}>Sign Up</button>
            </div>
          </div>
          <i onClick={handleClose}><AiFillCloseCircle /></i>
        </form>
        </div>
        }

        {/* register form */}
        {
          showRegisterForm && <Register show={showRegister} handleClose={closeRegisterModal}/>
        }
    </div>
  )
}

export default Login;