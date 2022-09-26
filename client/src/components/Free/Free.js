import React, {useState} from 'react'
import styled from 'styled-components';
import Modal from '../../reusable/Modal';

const Free = () =>{

  const [show, setShow] = useState(false)

  const showModal = () => {
		setShow(true);
	};

	// function to close the modal
	const closeModal = () => {
		setShow(false);
	};

  return (
    <FreeContext className='free' id="free">
      <FreeImage className="free-image">
        <img src="/img/free.png" alt="free" />
      </FreeImage>
      <FreeText className="free-text">
        <FreeHeader>Win a FREE COURSE!</FreeHeader>
        <FreeDescription>Free courses contain industry-relevant content and practical tasks and projects.</FreeDescription>
        <Modal show={show} handleClose={closeModal} />
        <FreeButton onClick={showModal}>Good Luck!</FreeButton>
      </FreeText>
    </FreeContext>
  )
}

const FreeContext = styled.div`
  padding: 100px 0px;
  width: 100%;
  margin: auto;
  justify-content: center;
  display: flex;

  @media (max-width: 768px) {
    padding: 50px 20px;
    width: 100%;
    margin: auto;
    justify-content: flex-start;
    flex-direction: column;
    display: flex;
  }
`

const FreeImage = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const FreeText = styled.div`
  display: flex;
  margin-top: 30px;
  width: 50%;
  padding: 0px 30px;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 0px;
  }
`

const FreeHeader = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 2rem;
    font-weight: 700;
    width: 100% !important;
    display: flex;
  }
`

const FreeDescription = styled.p`
  display: flex;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5;
  width: 70%;

  @media (max-width: 768px) {
    display: flex;
    font-size: 1rem !important;
    font-weight: 400;
    line-height: 1.2;
    width: 100%;
  }
`

const FreeButton = styled.button`
  display: flex;
  margin-top: 30px;
  padding: 20px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  width: 30%;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  background-color: #817dea;
  border-radius: 10px;

  &:hover{
    background-color: #0bce97;
  }

  @media (max-width: 768px) {
    display: flex;
    margin-top: 30px;
    padding: 20px;
    width: 100%;
    justify-content: center !important;
    align-items: flex-start !important;
    font-weight: 700;
    font-size: 1rem;
  }
`
export default Free;