import React, { useState } from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

//Images

import {MovieState} from "../movieState";

//Animation
import {motion} from "framer-motion";
import {pageAnimation} from "../animation";


const MyWork = () => {

    const [movies,setMovies] = useState(MovieState);

    return (
        <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show" style={{background: "#fff"}}>
            {movies.map((movie)=>(<Movie>
                <h2>{movie.title}</h2>
                <div className="line"></div>
                <Link to={movie.url}>
                    <img src={movie.mainImg} alt={movie.url}/>
                </Link>
            </Movie>)
            )
            };
           
        </Work>

    );
};

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;

    h2{
        padding: 1rem 0rem;
    }

`;

const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        width:100%;
        height: 70vh;
        object-fit: cover;
    }

`;
export default MyWork;