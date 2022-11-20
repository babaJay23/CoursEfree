import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const courseCategories = [
  "Web Development",
  "Mobile Development",
  "Digital Marketing",
  "Web Design",
  "UI/UX Design",
  "Ethical Hacking",
];

const Courses = () => {
  return (
    <Slider autoplay={3000} style={{ height: '100px', backgroundColor: 'red' }}>
      <CourseCategoryWrapper>
      {courseCategories.map((category, index) => {
        return (
            <NavLink key={index} to="/category">{category}</NavLink>
        );
      })}
       </CourseCategoryWrapper>
    </Slider>
  );
};

const Heading = styled.h3`
  display: flex;
`;

const CourseCategoryWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: grey;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const NavLink = styled(Link)`
display: flex;
padding: 20px;
background-color: white;
`

const Category = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0bce97;
  color: #fff;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default Courses;
