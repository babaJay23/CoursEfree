import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";

const Home = () => {

  const { register, handleSubmit, formState: { errors, success } } = useForm();

  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value)
  }

  const handleFormSubmit = (e) => {

    if(email !== ''){

      Swal.fire({
        title: 'Wow!',
        timer: 2000,
        position: 'fixed',
        text: 'Thank you for subscribing to our course! Please check your email to find course details.',
      })

    }
    setEmail("");
  }


  return (
    <HomeContainer className='home'>
      <SectionImage className="section-image">
        <Image src="/img/trial.png" alt="home" />
      </SectionImage>
      <SectionDescription className="section-description">
        <Heading>Start learning for free!</Heading>
        <Description>Subscribe and start learning today! Your free trial includes 14-day unlimited watches.</Description>
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <Input type="email"
            value={email}
            {...register('email', {
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
            onChange={handleInputChange}
            placeholder='Enter your e-mail here*'
          />
          {errors.email && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '10px' }}>Please enter valid Email*</p>}
          <Button type='submit'>Subscribe</Button>
        </Form>
      </SectionDescription>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 30px;
  height: 80vh;
  margin-top: 30px;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
  }
`
const SectionImage = styled.div`
  display: flex;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

const Image = styled.img`
  display: flex;
  align-items: center;
  max-width: 100%;
  position: absolute;
  left: -200px;
  top: 120px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    max-width: 100%;
    position: absolute;
    left: 0px;
    top: 100px;
    z-index: -1;
  }
`

const SectionDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: auto;
  margin-left: 50px;

  @media (max-width: 768px) {
    display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-left: 0px;
  margin-top: 170px;
  }
`
const Heading = styled.h1`
  margin-top: 30px;
  font-size: 3rem;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 50px;
  font-size: 2rem;
  width: 100%;
  font-weight: 700;
  }
`

const Description = styled.p`
  font-size: 1rem;
  width: 70%;
  padding-top: 30px; 
  font-weight: 500;
  line-height: 1.5;
  height: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  width: 100%;
  padding-top: 20px; 
  font-weight: 500;
  line-height: 1.5;
  height: auto;
  }
`

const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 15px !important;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

const Input = styled.input`
  padding: 20px;
  outline: none;
  border: 1px solid #817dea;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 15px !important;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

const Button = styled.button`
 width: 40%;
 padding: 20px;
 margin-top: 20px;
 outline: none;
 background-color: #817dea;
 cursor: pointer;
 border: none;
 color: #fff;
 font-weight: 600;
 font-size: 1rem;
 border-radius: 10px;
 transition: 0.3s;

 &:hover{
  background-color: #0bce97;
 }

 @media (max-width: 768px) {
  width: 50%;
  margin-top: 20px !important;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
`
export default Home