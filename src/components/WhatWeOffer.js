import '../styles/WhatWeOffer.css'
import React from "react";

import brakes from '../images/brakes.jpg';
import engineWork from '../images/engine-work.jpeg';
import tyres from '../images/tyres.jpeg';

const WhatWeOffer = () => {
    return (
        <section
            id="services"
            className="elementor-section elementor-element elementor-element-6bd318ca elementor-section-boxed">
            <div className="elementor-shape elementor-shape-top" data-negative="false">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z"/>
                </svg>
            </div>
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-100 elementor-element elementor-element-26c8bfb1">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <section
                            className="elementor-section elementor-inner-section elementor-element elementor-element-74572657 elementor-section-content-middle elementor-section-boxed">
                            <div className="elementor-container elementor-column-gap-default">
                                <div
                                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1fc9ccb0">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-62637479 elementor-widget">
                                            <div className="elementor-widget-container">
                                                <h2 className="elementor-heading-title">What
                                                    We Offer</h2>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                    </div>
                                </div>
                                <div
                                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5a77d00">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-410872b7 elementor-widget elementor-widget-text-editor">
                                            <div className="elementor-widget-container">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Ut
                                                    elit tellus,
                                                    luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section
                            className="elementor-section elementor-inner-section elementor-element elementor-element-281e264a elementor-section-boxed">
                            <div className="elementor-container elementor-column-gap-default">
                                <div
                                    className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-3483e87e">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-61295c1e elementor-position-top elementor-widget elementor-widget-image-box">
                                            <div className="elementor-widget-container">
                                                <div className="elementor-image-box-wrapper">
                                                    <figure className="elementor-image-box-img">
                                                        <img loading="lazy"
                                                             decoding="async"
                                                             width="1335" height="2000"
                                                             src="https://show.moxcreative.com/carbon/wp-content/uploads/sites/61/2023/03/checking-motor-in-car-service.jpg"
                                                             className="size-full wp-image-23"
                                                             alt=""
                                                             sizes="(max-width: 1335px) 100vw, 1335px"/>
                                                    </figure>
                                                    <div className="elementor-image-box-content">
                                                        <h4 className="elementor-image-box-title">Diagnostics</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-d522f9c">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-46f0257 elementor-position-top elementor-widget elementor-widget-image-box">
                                            <div className="elementor-widget-container">
                                                <div className="elementor-image-box-wrapper">
                                                    <figure className="elementor-image-box-img">
                                                        <img
                                                            loading="lazy"
                                                            decoding="async"
                                                            width="1335" height="2000"
                                                            src={engineWork}
                                                            className="size-full wp-image-24"
                                                            alt="Engine Work"
                                                            sizes="(max-width: 1335px) 100vw, 1335px"
                                                        />
                                                    </figure>
                                                    <div className="elementor-image-box-content">
                                                        <h4 className="elementor-image-box-title">Engine Repair</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-4ad88b9e">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-65555ee4 elementor-position-top elementor-widget elementor-widget-image-box">
                                            <div className="elementor-widget-container">
                                                <div className="elementor-image-box-wrapper">
                                                    <figure className="elementor-image-box-img">
                                                        <img
                                                            loading="lazy"
                                                            decoding="async"
                                                            width="1335"
                                                            height="2000"
                                                            src={tyres}
                                                            className="size-full wp-image-22"
                                                            alt=""
                                                            sizes="(max-width: 1335px) 100vw, 1335px"
                                                        />
                                                    </figure>
                                                    <div className="elementor-image-box-content">
                                                        <h4 className="elementor-image-box-title">Tires
                                                            Services</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-47ac6dc4">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-274617ea elementor-position-top elementor-widget elementor-widget-image-box">
                                            <div className="elementor-widget-container">
                                                <div className="elementor-image-box-wrapper">
                                                    <figure className="elementor-image-box-img">
                                                        <img
                                                            loading="lazy"
                                                            decoding="async"
                                                            width="1334"
                                                            height="2000"
                                                            src={brakes}
                                                            className="size-full wp-image-25"
                                                            alt="Brake inspection"
                                                            sizes="(max-width: 1334px) 100vw, 1334px"
                                                        />
                                                    </figure>
                                                    <div className="elementor-image-box-content">
                                                        <h4 className="elementor-image-box-title">
                                                            Routine Servicing
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatWeOffer;
