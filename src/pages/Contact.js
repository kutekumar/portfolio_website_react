import React from 'react';
//Animation
import {motion} from "framer-motion";
import {pageAnimation} from "../animation";

const Contact = () => {
    return (
        <motion.div 
        exit="exit" 
        variants={pageAnimation} 
        initial="hidden" 
        animate="show"
        style={{background: "#fff"}}
        >
            <h1> Contact Me</h1>
        </motion.div>

    );
};

export default Contact;