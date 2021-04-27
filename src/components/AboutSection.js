import React from "react"
import home1 from "../img/home1.png";
//Styled Componenet
import styled from 'styled-components';


const AboutSection = () => {
    return (
        <About>
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
                <p>I'm a Myanmar Citizen who has the passion of creating digital products & designs.</p>
                <button>Contact Me</button>
            </Description>
            <Image>
                <img src={home1} alt="Me"/>
            </Image>
        </About>
    )
}

//Styled components

const About = styled.div `
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5rem 10rem;
    color: white;

`;

const Description = styled.div `
    flex:1;
    padding-right: 5rem;
    h2{
        font-weight: lighter;

    }
`;

const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }

`;

const Hide = styled.div`
    overflow: hidden;
`


export default AboutSection;