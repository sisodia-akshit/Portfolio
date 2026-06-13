import React, { useEffect, useRef, useState } from 'react'
import aboutImage from "../../../public/images/aboutImage.jpg"
import { ABOUT } from "../../data/aboutData"
import AboutCard from '../cards/AboutCard'

function About() {
    return (
        <section className="about" id="about">
            <p id="about">ABOUT ME</p>
            <div className="title">
                <h1>Building Meaningful</h1>
                <h1>Digital Experiences</h1>
            </div>
            <div className="hrrr">
                <hr />
            </div>
            <div className="about-container">
                <div className="info-about">
                    <div className="about-info">
                        <p>
                            I'm a creative front-end developer passionate about building
                            modern and responsive web experiences.
                            <br />My journey began with a love for design and evolved into a
                            deep curiosity for how the web works — combining <br />
                            logic with creativity to bring ideas to life.
                        </p>
                        <p>
                            When I'm not coding, I enjoy learning new technologies, improving
                            my projects, <br />
                            and exploring better ways to make the web faster and more
                            engaging. <br />I believe in continuous learning, attention to
                            detail, and the power of clean, meaningful design
                        </p>
                    </div>
                    <h2>What Drives Me</h2>
                    <div className="card">
                        {ABOUT.map((curr, i) => {
                            return (
                                <AboutCard key={i} data={curr} />
                            )
                        })}
                    </div>
                </div>
                <img src={aboutImage} alt="Image" />
            </div>
        </section>
    )
}

export default About