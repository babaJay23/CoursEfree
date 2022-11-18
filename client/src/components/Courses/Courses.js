import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const Courses = () => {
  const [showContent, setShowContent] = useState(false);

  const showList = () => {
    setShowContent(true);
  };
  return (
    <Slider autoplay={3000}>
      <Category>
        <h3>Web Development</h3>
      </Category>
      <Category>
        <h3>Mobile Development</h3>
      </Category>
      <Category>
        <h3>Digital Marketing</h3>
      </Category>
      <Category>
        <h3>Web Design</h3>
      </Category>
      <Category>
        <h3>UI/UX Design</h3>
      </Category>
      <Category>
        <h3>Ethical Hacking</h3>
      </Category>
    </Slider>
  );
};

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

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Heading = styled.h3`
  display: flex;
`;

const CourseCategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 20px;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

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
