import '../styles/WhatClientsSay.css';
import React from "react";

const WhatClientsSay = () => {
    return (
        <section id="reviews" className="elementor-section elementor-element elementor-element-2a2cbd80 elementor-section-boxed">
            <div className="elementor-background-overlay"></div>
            <div className="elementor-shape elementor-shape-top" data-negative="false">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z"/>
                </svg>
            </div>
            <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-top-column elementor-element elementor-element-28069df0">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-1982473e elementor-widget">
                            <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title">
                                    What Clients Say
                                </h2>
                            </div>
                        </div>
                        <div className="divider"></div>

                        <div id="feedbackComponent" className="elfsight-app-cdf579c0-90d5-45e5-b78e-1b4c108ac2ca" data-elfsight-app-lazy></div>
                        {/*<div id="feedbackComponentOverlay"></div>*/}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatClientsSay;
