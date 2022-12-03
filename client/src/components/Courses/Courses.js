import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-animated-slider/build/horizontal.css";
import { courseCategories } from "../../data/courses";


const Courses = () => {
  const options = {
    margin: 38,
    responsiveClass: true,
    autoWidth: true,
    loop: true,
    pullDrag: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight: false,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <CourseCategoryWrapper>
      <OwlCarousel className='owl-carousel' {...options}>
      {courseCategories.map((category, index) => {
        return (
            <Category key={index}>
              <i>{category.icon}</i>
              <NavLink to="/category">
                {category.name}
              </NavLink>
            </Category>
        );
      })}
    </OwlCarousel>
    </CourseCategoryWrapper>
  );
};

const CourseCategoryWrapper = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
padding: 48px 128px;
margin-right: auto;
margin-left: auto;
overflow: hidden;

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
flex-direction: column;
text-decoration: none;
text-align: center;
align-items: center;
font-weight: 700;
color: #333;
margin-top: 15px;
`

const Category = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eaf0f3;
  color: #fff;
  width: 200px;
  height: 200px;
  padding: 32px 24px 16px;
  margin: 0px !important;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  i{
    position: relative;
    height: 75px;
    width: 75px;
    display: flex;
    border: none;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    background: #333;
    color: #fff;
  }

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
