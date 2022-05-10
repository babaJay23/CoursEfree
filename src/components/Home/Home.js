import React, {useState} from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
const Home = ()  =>{

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [email, setEmail] = useState("");

  const handleInputChange = (event) =>{
      setEmail(event.target.value)
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <HomeContainer className='home'>
      <SectionImage className="section-image">
        <Image src="/img/trial.png" alt="home" />
      </SectionImage>
      <SectionDescription className="section-description">
        <Heading>Start your free trial</Heading>
        <Description>Subscribe and start learning today! Your free trial includes 14-day unlimited watches.</Description>
        <Form  onSubmit={handleSubmit(handleFormSubmit)}>
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
  padding-top: 70px;
  height: 80vh;
`
const SectionImage = styled.div`
  display: flex;
  width: 40%;
`

const Image = styled.img`
  display: flex;
  align-items: center;
  max-width: 100%;
  position: absolute;
  left: -140px;
`

const SectionDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
`
const Heading = styled.h1`
  margin-top: 30px;
  font-size: 3.5rem;
  width: 100%;
`

const Description = styled.p`
  font-size: 1rem;
  width: 60%;
  padding-top: 30px; 
  font-weight: 500;
  line-height: 1.5;
`

const Form= styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 60%;
`

const Input = styled.input`
  padding: 20px;
  outline: none;
  border: 1px solid #817dea;
  border-radius: 10px;
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
`

export default Home