import React from 'react'
import { SOCIALS } from '../../data/socials'
import SocialButton from '../buttons/SocialButton'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h2 className="footer-logo">Akshit</h2>
                <ul className="footer-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="footer-social">
                    {SOCIALS.map((curr, i) => {
                        return (
                            <SocialButton key={i} data={curr} />
                        )
                    })}
                </div>
                <p className="footer-copy">&copy; 2025 Akshit. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer