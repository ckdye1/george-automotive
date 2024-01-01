import React from "react";

const Hero = () => {

    const style = `
    .elementor-heading-title {
        padding: 0;
        margin: 0;
        line-height: 1
    }
`;

    return (
        <section className="elementor-section elementor-element elementor-element-5c7d55cf elementor-section-items-bottom elementor-section-boxed">
            <div className="elementor-background-overlay"></div>
            <div className="elementor-shape elementor-shape-bottom" data-negative="false">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z"/>
                </svg>
            </div>
            <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-aeee7d0">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-6cba7690 elementor-widget">
                            <div className="elementor-widget-container">
                                <h1 className="elementor-heading-title">
                                    George Automotive
                                </h1>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-2ba35694 elementor-widget">
                            <div className="elementor-widget-container">
                                <style>{style}</style>
                                <h3 className="elementor-heading-title">
                                    MOT . SERVICING . REPAIR
                                </h3>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-align-center elementor-widget elementor-widget-button">
                            <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                    <a className="elementor-button elementor-size-md"
                                       href="#">
						                    <span className="elementor-button-content-wrapper">
						                        <span className="elementor-button-text">Learn More</span>
		                                    </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-6bff978c elementor-widget elementor-widget-image">
                            <div className="elementor-widget-container">
                                <img decoding="async" width="800" height="520"
                                     src="https://show.moxcreative.com/carbon/wp-content/uploads/sites/61/2023/03/car-image-transparent-background-8.png"
                                     className="attachment-large size-large wp-image-19"
                                     alt=""
                                     sizes="(max-width: 800px) 100vw, 800px"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
