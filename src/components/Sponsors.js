import '../styles/Sponsors.css';
import React from "react";

import facebook from '../images/facebook-logo.png';
import instagram from '../images/instagram-logo.png';
import google from '../images/google-reviews-logo.png';
import Nav from "react-bootstrap/Nav";

const Sponsors = () => (
    <section className="sponsors">
        <Nav.Link
            href="https://m.facebook.com/people/George-Automotive/61553637115420/"
            target="_blank"
        >
            <img
                alt="Facebook"
                className="facebook-logo"
                decoding="async"
                loading="lazy"
                src={facebook}
            />
        </Nav.Link>

        <Nav.Link
            href="https://www.instagram.com/georgeautomotive/"
            target="_blank"
        >
            <img
                alt="instagram"
                className="instagram-logo"
                decoding="async"
                loading="lazy"
                src={instagram}
            />
        </Nav.Link>

        <Nav.Link
            href="https://www.google.com/maps/place/George+Automotive/@50.9383327,-0.1082956,17z/data=!4m14!1m7!3m6!1s0x48758d865a1c1c95:0xeac87e14c835d771!2sGeorge+Automotive!8m2!3d50.9382076!4d-0.1053452!16s%2Fg%2F11lchm6c4d!3m5!1s0x48758d865a1c1c95:0xeac87e14c835d771!8m2!3d50.9382076!4d-0.1053452!16s%2Fg%2F11lchm6c4d?entry=ttu"
            target="_blank"
        >
            <img
                alt="Google Reviews"
                className="google-logo"
                decoding="async"
                loading="lazy"
                src={google}
            />
        </Nav.Link>
    </section>
);

export default Sponsors;
