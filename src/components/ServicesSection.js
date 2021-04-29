import React from "react";
//IMport ICons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.jpg";

//Styles
import {BasicLayout, Description, Hide, Image } from "../styles";
import styled from "styled-components";
import { scrollAnim } from "../animation";
import { useScroll } from "./useScroll";



const ServicesSection = () =>
{
    
    const [element, controls] = useScroll();

    return(
        <Services variants={scrollAnim} animate={controls} initial="hidden" ref={element}>
            <Description>
            <h2>High <span>Quality</span> Services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt=""/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt=""/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt=""/>
                            <h3>Afforadable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt=""/>
                            <h3>Team Work</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt=""/>
            </Image>
        </Services>
    )
}

const Services = styled(BasicLayout)`


    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }

`;


const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;

`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }

    }
`;


export default ServicesSection;
