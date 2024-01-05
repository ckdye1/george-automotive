import '../styles/Hero.css';
import React from "react";
import logo from '../images/logo-large.png';

const Hero = () => {
    return (
        <section id="home" className="elementor-section elementor-element elementor-element-5c7d55cf">
            <div className="elementor-background-overlay"></div>
            <div className="elementor-shape elementor-shape-bottom" data-negative="false">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z"/>
                </svg>
            </div>

            <div className="heroImage">
                <img src={logo} alt="George Automotive"/>
            </div>
        </section>
    )
}

export default Hero;
