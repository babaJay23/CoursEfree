import React, {useState, useEffect } from 'react'
import styled from 'styled-components';
import Modal from '../../reusable/Modal';


const  sectionContents = [
  {
    title: "Digital Marketing",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "
  },
  {
    title: "UI/UX Designer",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    title: "Financial Planner",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "
  },
  {
    title: "English Learning",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "
  },
  {
    title: "Photography Basic",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "
  },
  {
    title: "Logo Creation",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "
  }
]

const colors = ['green', 'red', 'blue'];



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
    <TutorialSection className='tutorial-section'>
      <TutorialHeading>Our Best Tutorials</TutorialHeading>
      <HeaderDescription>From marketing skills to dancing moves - our tutorials teach you how to do nearly everything. Start learning today!</HeaderDescription>
      <DescriptionContainer DescriptionContainer className="section-description">
        {
          sectionContents.map((item, index) => {
            return(
              <SectionContents className='tutes' key={index}>
                <h1>{item.title}</h1>
                <p style={{ 
                  marginTop: '20px', 
                  lineHeight: 1.5, 
                  width: '100%', 
                  fontWeight: 500,
                  fontSize: '1.2rem'  
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
  width: 60%;
  flex-direction: column;
  margin: auto;
  padding: 100px 0px;
  justify-content: center;
  align-items: center;
`

const TutorialHeading = styled.h1`
  font-size: 3rem;
  display: flex;
`

const HeaderDescription = styled.p`
  display: flex;
  width: 70%;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 20px;
  line-height: 1.5;
`

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 50px;
  grid-gap: 20px;
`

const SectionContents = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 50px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 30px;
  margin-top: 30px;
  border-radius: 10px;
  height: 280px;
  overflow: auto;
`

const TutorialButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #0bce97;
  border: none;
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
`



export default Tutorial;