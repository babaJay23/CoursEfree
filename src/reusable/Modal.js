import React, {useState} from 'react'
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { AiFillCloseCircle } from 'react-icons/ai';
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
    <div className={showHideClassName}>
      <ModalForm onSubmit={handleSubmit(onFormSubmit)}>
      <Heading>Request a Callback</Heading>
      <ModalDescription>We can call you in 30 seconds, just enter  your number below</ModalDescription>
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
        <CloseIcon onClick={handleClose}><AiFillCloseCircle /></CloseIcon>
      </ModalForm>
    </div>
  )
}

const ModalForm = styled.form`
  position: fixed;
	background: white;
  border-top: 10px solid  #817dea;
	width: 30%;
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