import React from "react"
import home1 from "../img/home1.jpg";
//Framer Motion
import {motion} from "framer-motion";

import {BasicLayout, Description, Hide, Image } from "../styles"


const AboutSection = () => {

    const titleAnimation = {
        hidden: {opacity:0},
        show: {opacity:1, transition: {duration:1}}
    }

    const container = {
        hidden: {x:100},
        show: {x:0, transition: {duration: 0.7, ease:"easeOut", staggerChildren: 1, when:"afterChildren"}}
    }
    return (
        <BasicLayout>
            <Description>
                <motion.div variants={container} initial="hidden" animate="show" className="title">
                    <Hide>
                        <motion.h3 variants={titleAnimation}>Hi, I'm Kumar.</motion.h3>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}> I build <span>value </span> </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>through design.</motion.h2>
                    </Hide>
                </motion.div>
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