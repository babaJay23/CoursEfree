import React, {useState} from 'react'
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import './Modal.css';

const Modal = ({ handleClose, show }) =>{

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

  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <ModalContainer className={showHideClassName}>
      <ModalContent>
      <CloseIcon onClick={handleClose}>X</CloseIcon>
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
      </ModalContent>
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
  display: flex;
`

const ModalContent = styled.div`
  position: fixed;
	background: white;
	width: 30%;
	height: auto;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	padding: 30px;
`

const CloseIcon = styled.div`
  position: absolute;
  top: 0;
  cursor: pointer;
  background-color: red;
  color: #fff;
  padding: 5px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  right: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 0.8rem;
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