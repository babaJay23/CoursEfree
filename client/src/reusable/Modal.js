import React, {useState} from 'react'
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { AiFillCloseCircle } from 'react-icons/ai';
import Swal from "sweetalert2";
import './Modal.css';

const Modal = ({ handleClose, show }) =>{

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (event) =>{
    setName(event.target.value);
  }

  const handlePhoneChange = (event) =>{
    setPhone(event.target.value);
  }

  const onFormSubmit = () =>{
    setName("");
    setPhone("");

    if(name !== '' && phone !== ''){

      Swal.fire({
        title: 'Wow!',
        timer: 2000,
        text: 'We will get back to you soon!',
      })

    }
    setName("");
    setPhone("");
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
        {...register('name', {
          required: true
        })}
        onChange={handleNameChange}
        placeholder='Name*'
        />
        {errors.name && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '10px' }}>Please enter Name*</p>}
        <ModalFormInput 
        type="tel" 
        value={phone}
        {...register('phone', {
          required: true,
          maxLength: 10
        })}
        onChange={handlePhoneChange}
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