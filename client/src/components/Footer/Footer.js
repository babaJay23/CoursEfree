import React, {useState} from 'react'
import { FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import {Link as ScrollLink } from 'react-scroll';


const Footer = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [email, setEmail] = useState("");

  const handleInputChange = (event) =>{
    setEmail(event.target.value)
}

const handleFormSubmit = (e) =>{
  e.preventDefault()
  if(email !== ''){

    Swal.fire({
      title: 'Wow!',
      timer: 2000,
      position: 'fixed',
      text: 'Thank you for subscribing to our newsletter!',
    })

  }
  setEmail("");
}
  return (
    <FooterContainer className='footer' id="footer">
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
            <ListItems>
              <ScrollLink to="about"><a href="about">About</a></ScrollLink>
            </ListItems>
            <ListItems>
              <ScrollLink to="trial"><a href="trial">Trial</a></ScrollLink>
            </ListItems>
            <ListItems>
              <ScrollLink to="tutorials"><a href="tutorials">Tutorials</a></ScrollLink>
            </ListItems>
            <ListItems>
              <ScrollLink to="free"><a href="contacts">Contacts</a></ScrollLink>
            </ListItems>
          </ul>
        </Menu>

        <FooterForm className="footer-form">
          <p style={{  fontSize: '0.8rem' }}>Receive news right on your email</p>
          <SubscribeForm onSubmit={handleSubmit(handleFormSubmit)}>
            <FormInput 
            type="text"
            value={email} 
           {...register('email', {
             required: true,
             pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
            })}
           onChange={handleInputChange}  
            placeholder='Enter your e-mail here*'
            />
            {errors.email && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '10px' }}>Please enter valid Email*</p>}
            <FormButton type='submit'>Subscribe</FormButton>
          </SubscribeForm>
        </FooterForm>
      </TopContainer>
      <BottomSection className="bottom-section">
          <HR />
          <p style={{ marginTop: '20px', fontSize: '0.8rem' }}>Copyright © {new Date().getFullYear()}. All Rights Reserved.</p>
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

  @media (max-width: 768px) {
    display: flex;
    margin-top: 30px;
    padding: 20px;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start !important;
    align-items: flex-start !important;
  }
`

const TopContainer = styled.div`
  display: flex;
  background-color: #1a2b2a;
  width: 100%;
  justify-content: space-around;
  color: #fff;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: flex-start !important;
    align-items: flex-start !important;
    flex-direction: column;
    color: #fff;
  }
`
const FooterIcons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width:100%;
    justify-content: flex-start !important;
    align-items: flex-start !important;
  }
`

const FooterImage = styled.img`
  max-width: 100%;
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

  a{
    text-decoration: none;
    color: #fff;
  }

  @media (max-width: 768px) {
    display: flex;
    margin-top: 10px;
    width: 100%;
    justify-content: flex-start !important;
    align-items: flex-start !important;
  }
`

const FooterForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 40%;

  @media (max-width: 768px) {
    display: flex;
    margin-top: 30px;
    width: 100%;
    justify-content: center !important;
    align-items: flex-start !important;
    flex-direction: column;
  }
`

const SubscribeForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: flex;
    margin-top: 10px;
    width: 100%;
    flex-direction: column;
    justify-content: center !important;
    align-items: flex-start !important;
  }
`

const FormInput = styled.input`
  display: flex;
  padding: 20px;
  width: 70%;
  outline: none;
  border: none;
  border-radius: 10px;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: center !important;
    align-items: flex-start !important;
  }
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

  @media (max-width: 768px) {
    display: flex;
    margin-top: 30px;
    width: 50%;
    justify-content: flex-start !important;
    align-items: flex-start !important;
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

  @media (max-width: 768px) {
    display: flex;
    margin-top: 20px;
    padding: 0px 0px;
    width: 100%;
    justify-content: flex-start !important;
    align-items: flex-start !important;
  }
`

const HR = styled.hr`
  border: none;
  height: 0.5px;
  background-color: #817dea;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: flex-start !important;
    align-items: flex-start !important;
  }
`

export default Footer;