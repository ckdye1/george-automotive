import '../styles/Footer.css';
import React from "react";
import logo from '../images/logo.png';
import Nav from "react-bootstrap/Nav";

const Footer = () => {
    return (
        <section className="elementor-section elementor-element elementor-element-2f2d3df2 elementor-section-boxed">
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-36712176">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <img src={logo}
                             className="attachment-large size-large wp-image-10" alt="George Automotive" loading="lazy"
                        />
                        <div
                            className="elementor-element elementor-element-4fd2e109 elementor-widget elementor-widget-text-editor">
                            <div className="elementor-widget-container">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                                    ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-418892f0">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-45c474ce elementor-widget">
                            <div className="elementor-widget-container">
                                <h4 className="elementor-heading-title">Company.</h4>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div
                            className="elementor-element elementor-element-5c0eb2ed elementor-widget elementor-widget-nav-menu">
                            <div className="elementor-widget-container">
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#about-us">About Us</Nav.Link>
                                    <Nav.Link href="#services">Services</Nav.Link>
                                    <Nav.Link href="#reviews">Reviews</Nav.Link>
                                    <Nav.Link href="#contact-us">Contact Us</Nav.Link>
                                </Nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-3b1d8fe1">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-133be5c elementor-widget">
                            <div className="elementor-widget-container">
                                <h4 className="elementor-heading-title">Socials.</h4>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div
                            className="elementor-element elementor-element-76a53625 elementor-widget elementor-widget-nav-menu">
                            <div className="elementor-widget-container">
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <Nav.Link
                                        href="https://www.instagram.com/georgeautomotive/"
                                        target="_blank"
                                    >
                                        Instagram
                                    </Nav.Link>

                                    <Nav.Link
                                        href="https://m.facebook.com/people/George-Automotive/61553637115420/"
                                        target="_blank"
                                    >
                                        Facebook
                                    </Nav.Link>

                                    <Nav.Link
                                        href="https://www.google.com/maps/place/George+Automotive/@50.9383327,-0.1082956,17z/data=!4m14!1m7!3m6!1s0x48758d865a1c1c95:0xeac87e14c835d771!2sGeorge+Automotive!8m2!3d50.9382076!4d-0.1053452!16s%2Fg%2F11lchm6c4d!3m5!1s0x48758d865a1c1c95:0xeac87e14c835d771!8m2!3d50.9382076!4d-0.1053452!16s%2Fg%2F11lchm6c4d?entry=ttu"
                                        target="_blank"
                                    >
                                        Google Reviews
                                    </Nav.Link>
                                </Nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
