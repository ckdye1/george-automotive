import '../styles/ContactUs.css';
import React from "react";

const ContactUs = () => {
    return (
        <section
            id="contact-us"
            className="elementor-section elementor-element elementor-element-4b41d0b0 elementor-section-full_width">
            <div className="elementor-container elementor-column-gap-no">
                <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4a0f36c5">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-4da739e9 elementor-widget elementor-widget-google_maps">
                            <div className="elementor-widget-container">
                                <div className="elementor-custom-embed">
                                    <iframe
                                        title="Google Map Location"
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10056.866316619697!2d-0.1053452!3d50.9382076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48758d865a1c1c95%3A0xeac87e14c835d771!2sGeorge%20Automotive!5e0!3m2!1sen!2suk!4v1703073746945!5m2!1sen!2suk"
                                        width="600" height="450" style={{border: 0}} allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-413bd935">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-29dc4e85 elementor-widget">
                            <div className="elementor-widget-container">
                                <h1 className="elementor-heading-title">Contact Us</h1>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div
                            className="elementor-element elementor-element-73979b34 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                            data-id="73979b34" data-element_type="widget" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                                <ul className="elementor-icon-list-items">
                                    <li className="elementor-icon-list-item">
                                        <span className="elementor-icon-list-text">Unit 1, The Oaks Poultry Farm, Common Lane, Ditchling, BN6 8TN</span>
                                    </li>
                                    <li className="elementor-icon-list-item">
                                                <span
                                                    className="elementor-icon-list-text">georgeautomotive@yahoo.com</span>
                                    </li>
                                    <li className="elementor-icon-list-item">
                                        <span className="elementor-icon-list-text">07557 737924</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ContactUs;
