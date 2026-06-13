import React from 'react'
import { SOCIALS } from '../../data/socials'
import ContactForm from '../forms/ContactForm'
import SocialButton from '../buttons/SocialButton'

function Contact() {
    return (
        <section className="contact" id="contact">
            <p>CONTACT</p>
            <h1>Get in Touch with Us</h1>
            <div className="contact-content">
                <div className="contact-info slide-in-left">
                    <p>
                        I'm always open to discuss exciting projects and new opportunities.
                        Let's collaborate!
                    </p>
                    <div className="contact-details">
                        <div className="contact-item">
                            <i className="fa-solid fa-envelope"></i>
                            <span>akshit.sisodia.dev@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <i className="fa-solid fa-phone"></i>
                            <span>+91 7877 660 991</span>
                        </div>
                        <div className="contact-item">
                            <i className="fa-solid fa-location-dot"></i>
                            <span>India, Rajasthan</span>
                        </div>
                    </div>

                    <div className="social-links">
                        {SOCIALS.map((curr, i) => {
                            return (
                                <SocialButton key={i} data={curr} showStyle />
                            )
                        })}
                    </div>
                </div>

                <div className="contact-form slide-in-right">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contact