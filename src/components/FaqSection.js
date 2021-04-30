import React from "react";
import styled from "styled-components";
import { BasicLayout } from "../styles";

import Toggle from "./Toggle";

import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollAnim } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollAnim}
      animate={controls}
      initial="hidden"
      ref={element}>
      <h2>
        Special <span>Training</span> Sessions
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Basic Web Development">
          <div className="answer">
            <p>Learn to build the stunning websites.</p>
            <p>
              You will learn basic HTML, CSS and Javascript and you will know
              how to create a stunning website of your own
            </p>
          </div>
        </Toggle>
        <Toggle title="Creative Designs">
          <div className="answer">
            <p>Lear the basic of Design Principles.</p>
            <p>
              You will learn how to create a eye-candy design using with
              Photoshop and Illustrator.
            </p>
          </div>
        </Toggle>
        <Toggle title="Creative Video Production">
          <div className="answer">
            <p>Learn to create an engaging video presentation.</p>
            <p>
              You will learn the basic of video editing in Adobe Premiere and a
              little bit of visual effect in Adobe After Effect.
            </p>
          </div>
        </Toggle>
        <Toggle title="3D Modeling and Compositing">
          <div className="answer">
            <p>Learn to create 3D environments and objects.</p>
            <p>
              You will learn how to create 3D designs using with Blender3D and
              other tools.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(BasicLayout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
  h4 {
    cursor: pointer;
  }
`;

export default FaqSection;
