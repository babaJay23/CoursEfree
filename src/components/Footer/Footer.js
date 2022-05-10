import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer className='footer'>
      <TopContainer className="top-container">
      <FooterIcons className="footer-icons">
        <FooterImage src="/img/footer.png" alt="logo" />

        <SocialIcons className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
        </SocialIcons>
      </FooterIcons>

        <Menu className="menu">
          <h3 style={{ fontWeight: 700 }}>Menu</h3>
          <ul>
            <ListItems>About</ListItems>
            <ListItems>Trial</ListItems>
            <ListItems>Tutorials</ListItems>
            <ListItems>Testimonials</ListItems>
            <ListItems>Contacts</ListItems>
          </ul>
        </Menu>

        <FooterForm className="footer-form">
          <p style={{  fontSize: '0.8rem' }}>Receive news right on your email</p>
          <SubscribeForm>
            <FormInput type="text" placeholder='Enter your e-mail here*'/>
            <FormButton type='submit'>Subscribe</FormButton>
          </SubscribeForm>
        </FooterForm>
      </TopContainer>
      <BottomSection className="bottom-section">
          <HR />
          <p style={{ marginTop: '20px', fontSize: '0.8rem' }}>Copyright © 2022. All Rights Reserved.</p>
      </BottomSection>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  display: flex;
  background-color: #1a2b2a;
  width: 100%;
  padding: 100px;
  justify-content: space-around;
  flex-direction: column;
  color: #fff;
`

const TopContainer = styled.div`
  display: flex;
  background-color: #1a2b2a;
  width: 100%;
  justify-content: space-around;
  color: #fff;
`
const FooterIcons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width:10%;
`

const FooterImage = styled.img`
  width: 100%;
`

const SocialIcons = styled.div`
  display: flex;
  margin-top: 20px;
  width: 40%;
  justify-content: space-around;
`
const Menu = styled.div`
  margin-top: 30px;
`

const ListItems = styled.li`
  margin-top: 10px;
  font-size: 0.8rem;
`

const FooterForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 40%;
`

const SubscribeForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

const FormInput = styled.input`
  display: flex;
  padding: 20px;
  width: 70%;
  outline: none;
  border: none;
  border-radius: 10px;
`

const FormButton = styled.button`
  display: flex;
  padding: 20px;
  width: 30%;
  outline: none;
  border: none;
  margin-top: 30px;
  justify-content: center;
  font-weight: 700;
  cursor: pointer;
  color: #fff;
  background-color: #0bce97;
  border-radius: 10px;
  &:hover{
    background-color: #817dea;
  }
`

const BottomSection = styled.div`
  display: flex;
  background-color: #1a2b2a;
  width: 100%;
  padding: 0px 100px;
  justify-content: space-around;
  flex-direction: column;
  color: #fff;
  margin-top: 50px;
`

const HR = styled.hr`
  border: none;
  height: 0.5px;
  background-color: #817dea;
`







export default Footer;