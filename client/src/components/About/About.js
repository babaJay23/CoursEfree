import React from 'react'
import styled from 'styled-components';
import {Link } from 'react-scroll';

const  About = () => {
  return (
    <AboutSection className='about' id="about">
      <AboutText className="about-text">
        <AboutHeading>Learn something new every day</AboutHeading>
        <AboutDescription>From marketing skills to dancing moves - our tutorials teach you how to do nearly everything. Start learning today!</AboutDescription>
        <AboutDescription>
          CoursEfree is dedicated to always provide an excellent level of teaching, innovative equipment and research, just as well as the personal intellectual growth for each of its students. All that is possible within our diverse academic community.
        </AboutDescription>
        <ActionContainer className="action">
            <TutorialListItem><Link to="tutorials">Tutorials</Link></TutorialListItem>
            <CategoryListItem style={{ marginLeft: '20px' }}><Link to="trial">Categories</Link></CategoryListItem>
        </ActionContainer>
      </AboutText>
      <SectionImage className="about-image">
        <img src="/img/new.png" alt="about" />
      </SectionImage>
    </AboutSection>
  )
}

const AboutSection = styled.div`
   display: flex;
   width: 80%;
   margin: auto;
   align-items: flex-start;
   justify-content: center;
   padding: 20px;
   margin-top: 120px;
   padding-bottom: 50px;


   @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
  }
`


const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 100px;
  margin-left: 70px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 50px;
    margin-left: 0px;
  }
`

const AboutHeading = styled.h1`
  margin-top: 70px
  font-weight: 900;
  font-size: 2.5rem;
  width: 90%;

  @media (max-width: 768px) {
    margin-top: 30px
    font-weight: 900;
    font-size: 2rem;
    width: 80%;
  }
  
`

const AboutDescription = styled.p`
  padding-top: 20px;
  width: 90%;
  line-height: 1.5;
  font-weight: 500;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const ActionContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  width: 70%;

  @media (max-width: 768px) {
    font-weight: 900;
    font-size: 2rem;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

const CategoryListItem = styled.button`
  padding: 20px;
  width: 50%;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 10px;
  font-weight: 700;
  color: #fff;
  background-color: #0bce97;

  &:hover{
    border: 2px solid #000;
    background-color: transparent;
    color: #000;
  }

  @media (max-width: 768px) {
    width: 50%;
    margin-left: 0px !important;
    margin-top: 20px;
  }
`

const TutorialListItem = styled.li`
  list-style: none;
  display:flex;
  font-size: .9rem;
  align-items: center;
  justify-content: center;
  padding: 15px;
  cursor: pointer;
  width: 50%;
  cursor: pointer;
  border: 2px solid #000;
  outline: none;
  border-radius: 10px;
  font-weight: 700;

  &:hover{
    border:2px solid #0bce97;;
    background-color: #0bce97;
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const SectionImage = styled.div`
  width: 100%;
  padding-left: 20px;

  @media (max-width: 768px) {
    width: 100% !important;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0 !important;
    margin-top: 30px;
  }
`
export default About;