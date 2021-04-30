import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Images

import { MovieState } from "../movieState";

//Animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAinm,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/useScroll";
import { scrollAnim } from "../animation";
import ScrollTop from "../components/ScrollTop";

const MyWork = () => {
  const [movies, setMovies] = useState(MovieState);
  const [element1, controls1] = useScroll({ threshold: 0.3 });
  const [element2, controls2] = useScroll({ threshold: 0.3 });
  const [element3, controls3] = useScroll({ threshold: 0.3 });
  const elements = [element1, element2, element3];
  const controls = [controls1, controls2, controls3];

  return (
    <Work
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}>
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      {movies.map((movie, index) => (
        <Movie
          ref={elements[index]}
          variants={scrollAnim}
          animate={controls[index]}
          initial="hidden">
          <motion.h2 variants={fade}>{movie.title}</motion.h2>
          <motion.div variants={lineAinm} className="line"></motion.div>
          <Link to={movie.url}>
            <Hide>
              <motion.img
                variants={photoAnim}
                src={movie.mainImg}
                alt={movie.url}
              />
            </Hide>
          </Link>
        </Movie>
      ))}
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1400px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default MyWork;
