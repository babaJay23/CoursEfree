import React, { useState } from 'react'
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import {Link as ScrollLink } from 'react-scroll';
import AuthModal from '../../reusable/AuthModal';

// const Navbar = ({about, trial, tutorials, free, resources, courses}) => {

  // const [show, setShow] = useState(false)

  // const showModal = () => {
	// 	setShow(true);
	// };

	// // function to close the modal
	// const closeModal = () => {
	// 	setShow(false);
	// };


//   return (
//       <HeaderContainer className='header'>
//       <LogoContainer className="logo">
//         <img src="logo.png" style={{ cursor: 'pointer' }} alt="logo" />
//       </LogoContainer>
      // <NavigationContainer className="navigation">
      //   <NavBar>
      //     <UlContainer>
      //       <ListItem><ScrollLink to="about">{about}</ScrollLink></ListItem>
      //       <ListItem><ScrollLink to="trial">{trial}</ScrollLink></ListItem>
      //       <ListItem><ScrollLink to="tutorials">{tutorials}</ScrollLink></ListItem>
      //       <ListItem><ScrollLink to="courses">{courses}</ScrollLink></ListItem>
      //       <ListItem><ScrollLink to="free">{free}</ScrollLink></ListItem>
      //       <LoginLink onClick={showModal}>Log In</LoginLink>
      //     </UlContainer>
      //   </NavBar>
      // </NavigationContainer>
      
//       <AuthModal show={show} handleClose={closeModal} />
//     </HeaderContainer>
//   )
// } 



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

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Menu = styled.ul`
  display: flex;
  justify-content: center;
  min-width: 70%;
  align-items: center;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
  list-style: none;
  display:flex;
  font-size: .9rem;
  align-items: center;
  justify-content: center;
  padding: 15px;
  cursor: pointer;

  @media (min-width: 769px) {
    list-style: none;
    display:flex;
    font-size: .9rem;
    align-items: center;
    justify-content: center;
    padding: 5px;
    cursor: pointer;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #000;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 0px 0px;
    color: #fff;
    transition: opacity 0.4s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:center;
    width: 100% !important;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const Navbar = ({about, trial, tutorials, free, resources, courses}) => {
  const [toggle, toggleNav] = useState(false);

  const [show, setShow] = useState(false)

  const showModal = () => {
		setShow(true);
	};

	// function to close the modal
	const closeModal = () => {
		setShow(false);
	};

  return (
    <>
      <Nav>
        <LogoContainer className="logo">
         <img src="logo.png" style={{ cursor: 'pointer' }} alt="logo" />
        </LogoContainer>
        <NavigationContainer className="navigation">
        <NavBar>
          <Menu>
            <Item>
              <ScrollLink to="about">{about}</ScrollLink>
            </Item>
            <Item>
              <ScrollLink to="trial">{trial}</ScrollLink>
            </Item>
            <Item>
              <ScrollLink to="tutorials">{tutorials}</ScrollLink>
            </Item>
            <Item>
              <ScrollLink to="courses">{courses}</ScrollLink>
            </Item>
            <Item>
              <ScrollLink to="free">{free}</ScrollLink>
            </Item>
            <Item>
              <LoginLink onClick={showModal}>Log In</LoginLink>
            </Item>
          </Menu>
          <AuthModal show={show} handleClose={closeModal} />
        </NavBar>
      </NavigationContainer>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
            <Item>
              <ScrollLink to="about">{about}</ScrollLink>
            </Item>
            <Item>
              <ScrollLink to="trial">{trial}</ScrollLink>
            </Item>
            <Item>
              <ScrollLink to="tutorials">{tutorials}</ScrollLink>
            </Item>
            <Item>
              <ScrollLink to="courses">{courses}</ScrollLink>
            </Item>
            <Item>
              <ScrollLink to="free">{free}</ScrollLink>
            </Item>
            <Item>
              <LoginLink onClick={showModal}>Log In</LoginLink>
            </Item>
        </OverlayMenu>
        <AuthModal show={show} handleClose={closeModal} />
      </Overlay>
    </>
  );
};

export default Navbar;
