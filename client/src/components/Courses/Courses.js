import React from 'react'
import styled from 'styled-components'

const Courses = () =>{
  return (
    <CoursesContainer>
      <Heading>Free Courses</Heading>
      <CourseCategoryWrapper>
        <Category></Category>
      </CourseCategoryWrapper>
    </CoursesContainer>
  )
}

const CoursesContainer = styled.div`
  display: flex;
  width: 100%;
`

const Heading = styled.h3`
  display: flex;
`

const CourseCategoryWrapper = styled.div`
  display: flex;
  width: 100%;
`

const Category = styled.div`
  display: flex;
`

export default Courses