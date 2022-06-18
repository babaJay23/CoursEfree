import React, {useState} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import './Modal.css';

const AuthModal = ({ handleClose, show }) =>{

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);


  const handleInputChange = (event) =>{
    setLoginEmail(event.target.value)
    setLoginPassword(event.target.value)
    setRegisterEmail(event.target.value)
    setRegisterPassword(event.target.value)
    setUsername(event.target.value)
  }


  const handleLoginForm = () => {
    setLoginEmail("");
    setLoginPassword("");

    if(loginEmail !== '' && loginPassword !== ''){

      Swal.fire({
        title: 'Wow!',
        timer: 2000,
        text: 'We will get back to you soon!',
      })

    }
    setLoginEmail("");
    setLoginPassword("");
  }

  const showRegister = () =>{
    setShowLoginForm(!true);
    setShowRegisterForm(!false);
  }

  const showLogin = () =>{
    setShowLoginForm(true);
    setShowRegisterForm(false);
  }

  const handleRegisterForm = () => {
    setRegisterEmail("");
    setUsername("");
    setRegisterPassword("");

    if(registerEmail !== '' && registerPassword !== '' && username !== ''){

      Swal.fire({
        title: 'Wow!',
        timer: 2000,
        text: 'We will get back to you soon!',
      })

    }
    setRegisterEmail("");
    setUsername("");
    setRegisterPassword("");
  }


  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
          {
            showLoginForm &&
          <ModalForm onSubmit={handleSubmit(handleLoginForm)}>
          <Heading>Welcome to CoursEfree to learn some of the valuable skills</Heading>
          <ModalDescription>If you already have an account, please sign in below.</ModalDescription>
            <div className="form-group" style={{ marginTop: '20px' }}>
              <label htmlFor="email">Email</label>
              <ModalFormInput type="text"
                placeholder='enter your email'
                value={loginEmail}
                onChange={handleInputChange}
                {...register('email', {
                  required: true,
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })}
              />{errors.email && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '10px' }}>Please enter Email*</p>}
            </div>

            <div className="form-group" style={{ marginTop: '20px' }}>
              <label htmlFor="password">Password</label>
                <ModalFormInput type="password"
                placeholder='enter your password'
                value={loginPassword}
                onChange={handleInputChange}
                {...register('password', {
                  required: true,
                })}
              />
              {errors.password && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '10px' }}>Please enter Password*</p>}
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
                <button class='register-link' onClick={showRegister}>Sign Up</button>
              </div>
            </div>
            <CloseIcon onClick={handleClose}><AiFillCloseCircle /></CloseIcon>
          </ModalForm>
          }

          {/* register */}
          {
            showRegisterForm && 
            <ModalForm onSubmit={handleSubmit(handleRegisterForm)}>
            <Heading>Welcome to CoursEfree to learn some of the valuable skills</Heading>
            <ModalDescription>If you already have an account, please sign in below.</ModalDescription>
              <div className="form-group" style={{ marginTop: '20px' }}>
                <label htmlFor="email">Email</label>
                <ModalFormInput type="text"
                  placeholder='enter your email'
                  value={registerEmail}
                  onChange={handleInputChange}
                  {...register('registerEmail', {
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  })}
                />{errors.registerEmail && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '10px' }}>Please enter Email*</p>}
              </div>
  
              <div className="form-group" style={{ marginTop: '20px' }}>
                <label htmlFor="username">Username</label>
                <ModalFormInput type="username"
                  placeholder='enter your username'
                  value={username}
                  onChange={handleInputChange}
                  {...register('username', {
                    required: true,
                  })}
                />{errors.username && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '10px' }}>Please enter Username*</p>}
              </div>
  
              <div className="form-group" style={{ marginTop: '20px' }}>
                <label htmlFor="password">Password</label>
                <ModalFormInput type="password"
                  placeholder='enter your password'
                  value={registerPassword}
                  onChange={handleInputChange}
                  {...register('registerPassword', {
                    required: true,
                  })}
                />{errors.registerPassword && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '10px' }}>Please enter Password*</p>}
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
                  <button type='submit'>Sign Up</button>
                </div>
                <div className="sign-up">
                  <button class='register-link' onClick={ showLogin}>Login</button>
                </div>
              </div>
              <CloseIcon onClick={handleClose}><AiFillCloseCircle /></CloseIcon>
            </ModalForm>
          }
        </div>
  )
}

const ModalForm = styled.form`
  position: fixed;
	background: white;
  border-top: 10px solid  #817dea;
	width: 50%;
	height: auto;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	padding: 30px;
  z-index: -1;
`

const CloseIcon = styled.i`
  position: absolute;
	cursor: pointer;
	font-size: 2rem;
	top: 0%;
	right: 0%;
  z-index: 1;
`

const Heading = styled.h1`
  display: flex;
  font-weight: 700;
  line-height: 1.5;
`

const ModalDescription = styled.p`
  line-height: 1.5;
  font-weight: 500;
  margin-top:30px;
`

const ModalFormInput = styled.input`
  padding: 20px;
  outline: none;
  border: 1px solid #817dea;
  border-radius: 10px;
  width: 100%;
  margin-top: 10px;
`

export default AuthModal;