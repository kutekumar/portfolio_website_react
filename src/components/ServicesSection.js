import React from "react";
//IMport ICons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";


const ServicesSection = () => {
    return(
        <div className="services">
            <div className="description">
                <h2>Hight <span>quality</span> Services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt=""/>
                            <h3>Efficient</h3>
                            <p></p>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt=""/>
                            <h3>Diaphragm</h3>
                            <p></p>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt=""/>
                            <h3>Afforadable</h3>
                            <p></p>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt=""/>
                            <h3>Team Work</h3>
                            <p></p>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} alt=""/>
            </div>
        </div>
    )
}

export default ServicesSection;