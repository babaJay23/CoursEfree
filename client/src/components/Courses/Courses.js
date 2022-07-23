import React, { useState } from 'react'
import styled from 'styled-components'

const Courses = () =>{

  const [showContent, setShowContent] = useState(false);

  const showList = () =>{
    setShowContent(true)
  }
  return (
    <CoursesContainer>
      <Heading>Free Courses</Heading>
      <CourseCategoryWrapper>
        <Category>
          <h3>Web Development</h3>
        </Category>
        <Category>
        <h3>Digital Marketing</h3>
        </Category>
        <Category>
        <h3>Web Design</h3>
        </Category>
        <Category>
        <h3>Ethical Hacking</h3>
        </Category>
      </CourseCategoryWrapper>
    </CoursesContainer>
  )
}

const CoursesContainer = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
   margin-top: 30px;
   padding-bottom: 50px;
`

const Heading = styled.h3`
  display: flex;
`

const CourseCategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 20px;
  width: 100%;
`

const Category = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0bce97;
  color: #fff;
`

export default Courses