import 'bootstrap/dist/css/bootstrap.min.css';

import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import CopyRight from "./components/CopyRight";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowCanWeHelp from "./components/HowCanWeHelp";
import Navigation from "./components/Navigation";
import News from "./components/News";
import React from 'react';
import Sponsors from "./components/Sponsors";
import WhatClientsSay from "./components/WhatClientsSay";
import WhatWeOffer from "./components/WhatWeOffer";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
    return (
        <React.Fragment>
            <Navigation/>
            <div className="single elementor-kit-6 elementor-page">
                <div className="elementor elementor-17">
                    <Hero/>
                    <AboutUs/>
                    <WhatWeOffer/>
                    <WhyChooseUs/>
                    <WhatClientsSay/>
                    <News/>
                    <Sponsors/>
                    <HowCanWeHelp/>
                </div>
            </div>

            <div className="elementor elementor-14 elementor-location-footer">
                <ContactUs/>
                <Footer/>
                <CopyRight/>
            </div>
        </React.Fragment>
    );
}

export default App;
