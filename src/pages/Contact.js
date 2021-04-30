import React from "react";
//Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnim, photoAnim } from "../animation";
import styled from "styled-components";
import profile from "../img/profile.jpg";
import { Link } from "react-router-dom";

//Import Icons
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const Contact = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}>
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch with me.</motion.h2>
        </Hide>
      </Title>
      <Container>
        <Hide>
          <ProfileStyle variants={photoAnim}>
            <img src={profile} />
          </ProfileStyle>
          <Social variants={titleAnim}>
            <Link to="https://facebook.com/kumars3ddesign">
              {" "}
              <FacebookIcon style={{ fontSize: "500%" }} />
            </Link>
            <Link to="https://instagram.com/kosmic_kumar">
              <InstagramIcon style={{ fontSize: "500%" }} />
            </Link>
            <Link to="https://twitter.com/kutekumar">
              <TwitterIcon style={{ fontSize: "500%" }} />
            </Link>
          </Social>
        </Hide>
      </Container>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1400px) {
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1400px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  h2 {
    margin: 2rem;
  }
  a {
    text-decoration: none;
  }
  a:link {
    color: gray;
  }
`;

const ProfileStyle = styled(motion.div)`
  img {
    border-radius: 50%;
  }
`;

const Container = styled.div`
  display: inline-block;
  align-items: center;
`;
export default Contact;
