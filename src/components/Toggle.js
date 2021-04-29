import React, { useState } from 'react';
import { motion } from "framer-motion";
import { fade } from "../animation";


const Toggle = ({children, title}) =>
{
    const [toggle, setToggle] = useState(false);
    return (
        <motion.div variants={fade} initial="hidden" animate="show" layout className="question" onClick={() => setToggle(!toggle)}>
            <motion.h4 layout>{title}</motion.h4>
                
                {toggle && children}
              
            <div className="faq-line"></div>
        </motion.div>
    )
}
export default Toggle;