import React from "react";

import engine from '../images/engine-block.jpeg';
import turbo from '../images/turbo.jpg';

const AboutUs = () => (
    <section
        id="about-us"
        className="elementor-section elementor-element elementor-element-78de8a8e elementor-section-content-middle elementor-section-boxed">
        <div className="elementor-background-overlay"></div>
        <div className="elementor-shape elementor-shape-top" data-negative="false">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z"/>
            </svg>
        </div>
        <div className="elementor-shape elementor-shape-bottom" data-negative="false">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z"/>
            </svg>
        </div>
        <div className="elementor-container elementor-column-gap-default">
            <div
                className="elementor-column elementor-col-33 elementor-element elementor-element-3dc9e8b4">
                <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                        className="elementor-element elementor-element-1cd00c79 elementor-widget elementor-widget-image">
                        <div className="elementor-widget-container">
                            <img
                                decoding="async"
                                width="682"
                                height="1024"
                                src={turbo}
                                className="attachment-large size-large wp-image-21"
                                alt="Turbo"
                                sizes="(max-width: 682px) 100vw, 682px"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="elementor-column elementor-col-33 elementor-element elementor-element-2780d8a">
                <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                        className="elementor-element elementor-element-28c8f7d7 elementor-widget elementor-widget-image">
                        <div className="elementor-widget-container">
                            <img
                                loading="lazy"
                                decoding="async"
                                width="684"
                                height="1024"
                                src={engine}
                                className="attachment-large size-large wp-image-22"
                                alt="Engine"
                                sizes="(max-width: 684px) 100vw, 684px"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="elementor-column elementor-col-33 elementor-element elementor-element-417155e7">
                <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                        className="elementor-element elementor-element-b0743b9 elementor-widget"
                        data-id="b0743b9" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title">About Us</h2>
                        </div>
                    </div>
                    <div className="divider"/>
                </div>
                <div
                    className="elementor-element-populated">
                    <p>Aliquet potenti facilisis integer imperdiet sed a risus nam hac. Varius a
                        nisi
                        ante
                        fermentum aptent class scelerisque.</p>
                    <p>Finibus posuere amet litora faucibus sodales porta tempus hendrerit blandit.
                        Consectetur
                        turpis faucibus netus quis dignissim litora est. Nisi erat lobortis amet
                        magna
                        ligula
                        malesuada posuere. Donec commodo magnis rutrum curabitur facilisis at.</p>
                </div>
            </div>
        </div>
    </section>
);

export default AboutUs;
