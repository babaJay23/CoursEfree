import React, {useState} from 'react'
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const Modal = () =>{

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (e) =>{
    setName(e.target.value);
  }

  const handlePhoneChange = (e) =>{
    setPhone(e.target.value);
  }

  const onFormSubmit = (event) =>{
    event.preventDefault();
  }
  return (
    <ModalContainer className='modal'>
      <Heading>Request a Callback</Heading>
      <ModalDescription>We can call you in 30 seconds, just enter  your number below</ModalDescription>
      <ModalForm onSubmit={handleSubmit(onFormSubmit)}>
        <ModalFormInput 
        type="text" 
        value={name}
        onChange={handleNameChange}
        {...register('name', {
          required: true
        })}
        placeholder='Name*'
        />
        {errors.name && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '10px' }}>Please enter Name*</p>}
        <ModalFormInput 
        type="tel" 
        value={phone}
        onChange={handlePhoneChange}
        {...register('phone', {
          required: true,
          maxLength: 10
        })}
        placeholder='Phone*'
        />
        {errors.phone && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '10px' }}>Please enter valid Phone*</p>}
        <ModalButton type='submit'>Request</ModalButton>
      </ModalForm>
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border-top: 10px solid  #817dea;
  margin: auto;
  padding: 30px;
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

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
`

const ModalFormInput = styled.input`
  padding: 20px;
  outline: none;
  border: 1px solid #817dea;
  border-radius: 10px;
  margin-top: 20px;
  width: 100%;
`

const ModalButton = styled.button`
  display: flex;
  margin-top: 20px;
  padding: 20px;
  justify-content: center;
  width: 40%;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  background-color: #817dea;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover{
    background-color: #0bce97;
  }
`

export default Modal;