import '../styles/ContactUs.css';
import React from "react";
import {Call, Location, Mail} from "react-ionicons";

const ContactUs = () => {
    return (
        <section id="contact-us" className="elementor-section elementor-element">
            <div className="elementor-container">
                <div className="elementor-column elementor-col-50 elementor-element">
                    <iframe
                        allowFullScreen=""
                        height="450"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10056.866316619697!2d-0.1053452!3d50.9382076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48758d865a1c1c95%3A0xeac87e14c835d771!2sGeorge%20Automotive!5e0!3m2!1sen!2suk!4v1703073746945!5m2!1sen!2suk"
                        style={{border: 0}}
                        title="Google Map Location"
                        width="600"
                    />
                </div>

                <div className="contact-details-column elementor-column elementor-col-50">
                    <div className="elementor-element elementor-widget">
                        <div className="elementor-widget-container">
                            <h1 className="elementor-heading-title">Contact Us</h1>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <ul className="contact-details-list">
                        <li className="contact-details">
                            <Location
                                color="#FFFFFF"
                                height="30px"
                                width="30px"
                            />
                            Unit 1, The Oaks Poultry Farm, Common Lane, Ditchling, BN6 8TN
                        </li>
                        <li className="contact-details">
                            <Mail
                                color="#FFFFFF"
                                height="30px"
                                width="30px"
                            />
                            georgeautomotive@yahoo.com
                        </li>
                        <li className="contact-details">
                            <Call
                                color="#FFFFFF"
                                height="30px"
                                width="30px"
                            />
                            07557 737924
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
}

export default ContactUs;
