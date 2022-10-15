import React, {useState, useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Modal from '../../reusable/Modal';


const  sectionContents = [
  {
    title: "Digital Marketing",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    bg:'#817dea'
  },
  {
    title: "UI/UX Designer",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    bg:'#f9ca63'
  },
  {
    title: "Programming",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ",
    bg:'#7db6ea'
  },
  {
    title: "English Learning",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ",
    bg:'#63def9'
  },
  {
    title: "Photography Basic",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ",
    bg:'#ea7d7d'
  },
  {
    title: "Logo Creation",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ",
    bg:'#e873c7'
  }
]


const Tutorial = ({text}) =>{

  const [show, setShow] = useState(false)

  const showModal = () => {
		setShow(true);
	};

	// function to close the modal
	const closeModal = () => {
		setShow(false);
	};



  return (
    <TutorialSection className='tutorial-section' id="tutorials">
      <TutorialHeading>Our Best Tutorials</TutorialHeading>
      <HeaderDescription>From marketing skills to dancing moves - our tutorials teach you how to do nearly everything. Start learning today!</HeaderDescription>
      <DescriptionContainer DescriptionContainer className="section-description">
        {
          sectionContents.map((item, index) => {
            return(
              <SectionContents className='tutes' key={index} style={{ borderTop: `10px solid ${item.bg}` }}>
                <h1>{item.title}</h1>
                <p style={{ 
                  marginTop: '20px', 
                  lineHeight: 1.5, 
                  width: '100%', 
                  fontWeight: 500,
                  fontSize: '1rem'  
                  }}>{item.description}</p>
                  <Modal show={show} handleClose={closeModal} />
                <TutorialButton onClick={showModal}>{text}</TutorialButton>
              </SectionContents>
            )
          })
        }
      </DescriptionContainer>
    </TutorialSection>
  ) 
}

const TutorialSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: auto;
  padding: 100px 0px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 20px;
  }
`

const TutorialHeading = styled.h1`
  font-size: 3rem;
  display: flex;

  @media (max-width: 768px) {
    width: 100% !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }
`

const HeaderDescription = styled.p`
  display: flex;
  width: 70%;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 20px;
  line-height: 1.5;

  @media (max-width: 768px) {
    width: 100%;
  text-align: center;
  font-size: 1rem !important;
  font-weight: 400;
  margin-top: 20px;
  line-height: 1.2;
  }
`

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30px;
  grid-gap: 20px;
  padding: 50px;
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
  }
`

const SectionContents = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 50px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 50px 20px;
  margin-top: 30px;
  border-radius: 10px;
  overflow: auto;

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const TutorialButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #0bce97;
  border: 2px solid #0bce97;
  border-radius: 10px;
  outline: none;
  padding: 13px;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  margin-top: 20px;
  float: right;
  width: 30%;
  cursor: pointer;
  justify-content: center;

  &:hover{
    background-color: transparent;
    color: #000;
    border: 2px solid #000;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`



export default Tutorial;