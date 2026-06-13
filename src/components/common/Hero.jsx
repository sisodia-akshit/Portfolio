import React, { useEffect, useState } from 'react'
import { SOCIALS } from "../../data/socials"

import heroImage from "../../../public/images/heroImage.jpg"
import SocialButton from '../buttons/SocialButton'

function Hero() {

    const words = ["Frontend Developer", "UI/UX Designer", "MERN Developer", "React Developer", "Fullstack Developer"];
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentWord.length) {
                    setCharIndex(prev => prev + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                if (charIndex > 0) {
                    setCharIndex(prev => prev - 1);
                } else {
                    setIsDeleting(false);
                    setWordIndex(prev => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex]);

    const displayedText = words[wordIndex].substring(0, charIndex);


    return (
        <section className="home" id="home">
            <p className="home-p">
                <span className="home-s">. </span>Available for freelance work
            </p>
            <div className="home-container">
                <div className="home-section">
                    <div className="info-home">
                        <h1>Hi, I'm Akshit</h1>
                        <h3>{displayedText} <span className="cursor">|</span></h3>
                        <div className="info-p">
                            <p>
                                I create beutiful, function, and user-centerd digital
                                experiences. React
                            </p>
                            <p>
                                React Frontend Developer — 2 years building web interfaces, I
                                bring ideas to life through
                            </p>
                            <p>clean code and thoughtful design</p>
                        </div>
                        <div className="info-p2">
                            <p><i className="fa-solid fa-location-dot"></i> Based in India</p>
                            <p><i className="fa-solid fa-briefcase"></i> Available Now</p>
                        </div>
                        <div className="btnn">
                            <a
                                href="./public/Akshit Sisodiya.pdf"
                                className="btn-home2"
                                download=""
                            >
                                <i className="fa-solid fa-download"></i> Download CV
                            </a>
                        </div>
                        <div className="hhr">
                            <hr />
                        </div>
                        <div className="follow">
                            <p className="followw">Follow me:</p>
                            <ul>
                                {SOCIALS.map((curr, i) => {
                                    return (
                                        <SocialButton key={i} data={curr} />
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <img src={heroImage} alt="Image" />
            </div>
        </section>
    )
}

export default Hero