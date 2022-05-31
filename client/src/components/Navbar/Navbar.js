import React, { useState } from 'react'
import styled from 'styled-components';
import {Link as ScrollLink } from 'react-scroll';
import Login from '../Login/Login';
import Register from '../Register/Register';

const Navbar = ({about, trial, tutorials, free}) => {

  const [showLogin, setShowLogin] = useState(false)

  const showLoginModal = () => {
		setShowLogin(true);
	};

	// function to close the modal
	const closeLoginModal = () => {
		setShowLogin(false);
	};

  return (
      <HeaderContainer className='header'>
      <LogoContainer className="logo">
        <img src="logo.png" style={{ cursor: 'pointer' }} alt="logo" />
      </LogoContainer>
      <NavigationContainer className="navigation">
        <NavBar>
          <UlContainer>
            <ListItem><ScrollLink to="about">{about}</ScrollLink></ListItem>
            <ListItem><ScrollLink to="trial">{trial}</ScrollLink></ListItem>
            <ListItem><ScrollLink to="tutorials">{tutorials}</ScrollLink></ListItem>
            <ListItem><ScrollLink to="free">{free}</ScrollLink></ListItem>
            <LoginLink onClick={showLoginModal}>Log In</LoginLink>
          </UlContainer>
        </NavBar>
      </NavigationContainer>
      <Login show={showLogin} handleClose={closeLoginModal} />
    </HeaderContainer>
  )
} 

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  padding-top: 30px;
  align-items: center;
`

const LogoContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;
`

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 60%;
`

const NavBar = styled.nav`
  display:flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`

const UlContainer= styled.ul`
  display: flex;
  justify-content: center;
  min-width: 70%;
  align-items: center;

`

const ListItem = styled.li`
  list-style: none;
  display:flex;
  font-size: .9rem;
  align-items: center;
  justify-content: center;
  padding: 15px;
  cursor: pointer;
`

const LoginLink = styled.li`
  list-style: none;
  display:flex;
  font-size: .9rem;
  align-items: center;
  justify-content: center;
  padding: 15px;
  cursor: pointer;
  background-color: #817dea;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
`

export default Navbar;