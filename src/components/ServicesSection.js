import React from "react";
//IMport ICons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.jpg";

//Styles
import { BasicLayout, Description, Hide, Image } from "../styles";
import styled from "styled-components";
import { scrollAnim } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <Services
      variants={scrollAnim}
      animate={controls}
      initial="hidden"
      ref={element}>
      <Description>
        <h2>
          My <span>Freelance</span> Services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Web Development</h3>
            </div>
            <p>Help you to build a professional website for your company.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Motion Designs</h3>
            </div>
            <p>
              Help you to create your promotional designs or animation for you.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="" />
              <h3>Videography</h3>
            </div>
            <p>
              Help you to create a professional video presentation which promote
              your product
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>3D Visualization</h3>
            </div>
            <p>
              Help you to create a 3D Visualization of your prouduts, interior
              or exterior of real estate.
            </p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="" />
      </Image>
    </Services>
  );
};

const Services = styled(BasicLayout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1400px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
  @media (max-width: 1400px) {
    margin: 2rem;
    img {
      width: 20%;
    }
  }
`;

export default ServicesSection;
