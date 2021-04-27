import React from "react"
import home1 from "../img/home1.png";

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>Hi, I'm Kumar.</h2>
                    </div>
                    <div className="hide">
                        <h2> I build <span>value </span> </h2>
                    </div>
                    <div className="hide">
                        <h2>through design.</h2>
                    </div>
                </div>
                <p>I'm a Myanmar Citizen who has the passion of creating digital products & designs.</p>
                <button>Contact Me</button>
            </div>
            <div className="image">
                <img src={home1} alt="Me"/>
            </div>
        </div>
    )
}

export default AboutSection;