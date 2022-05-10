import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Navbar = ({about, trial, tutorials, free, testimonials}) => {
  return (
    <HeaderContainer className='header'>
      <LogoContainer className="logo">
        <img src="logo.png" style={{ cursor: 'pointer' }} alt="logo" />
      </LogoContainer>
      <NavigationContainer className="navigation">
        <NavBar>
          <UlContainer>
            <ListItem><Link to="about">{about}</Link></ListItem>
            <ListItem><Link to="trial">{trial}</Link></ListItem>
            <ListItem><Link to="tutorials">{tutorials}</Link></ListItem>
            <ListItem><Link to="free">{free}</Link></ListItem>
            <ListItem><Link to="testimonials">{testimonials}</Link></ListItem>
          </UlContainer>
        </NavBar>
      </NavigationContainer>
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
  justify-content: space-around;
  min-width: 60%;
  align-items: center;

`

const ListItem = styled.li`
  list-style: none;
  display:flex;
  width: 100%;
  font-size: .9rem;
  align-items: center;
  justify-content: center;
  padding: 15px;
  cursor: pointer;
`

export default Navbar;