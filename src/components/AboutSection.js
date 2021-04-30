import React from "react";
import home1 from "../img/home1.jpg";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

import { BasicLayout, Description, Hide, Image } from "../styles";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <BasicLayout>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h3 variants={titleAnim}>Hi, I'm Kumar.</motion.h3>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              {" "}
              I build <span>value </span>{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>through design.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          I'm a Myanmar Citizen who has the passion of Photography, Designs &
          Web Development
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </Description>
      <Image variants={photoAnim}>
        <img src={home1} alt="Me" />
      </Image>
      <Wave />
    </BasicLayout>
  );
};

export default AboutSection;
