import React from 'react'

function ContactForm() {
    return (
        <form id="contact-form">
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Your Name"
                    required
                    name="user_name"
                />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    placeholder="Your Email"
                    required
                    name="user_email"
                />
            </div>
            <div className="form-group">
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    required
                ></textarea>
            </div>
            <a
                href="mailto:aakshit905@gmail.com?subject=Portfolio Contact"
                className="btn-send"
            >
                Send Message
            </a>
        </form>
    )
}

export default ContactForm