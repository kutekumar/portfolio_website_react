import React from "react"
import home1 from "../img/home1.jpg";

//Styled Componenet
import styled from 'styled-components';
import {BasicLayout, Description, Hide, Image } from "../styles"


const AboutSection = () => {
    return (
        <BasicLayout>
            <Description>
                <div className="title">
                    <Hide>
                        <h3>Hi, I'm Kumar.</h3>
                    </Hide>
                    <Hide>
                        <h2> I build <span>value </span> </h2>
                    </Hide>
                    <Hide>
                        <h2>through design.</h2>
                    </Hide>
                </div>
                <p>I'm a Myanmar Citizen who has the passion of Photography & Designs.</p>
                <button>Contact Me</button>
            </Description>
            <Image>
                <img src={home1} alt="Me"/>
            </Image>
        </BasicLayout>
    )
}



export default AboutSection;