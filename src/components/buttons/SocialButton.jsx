import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const getSocialIcons = (type) => {
    if (type === "github") return <BsGithub />
    if (type === "linkedIn") return <BsLinkedin />
    if (type === "instagram") return <BsInstagram />
    if (type === "whatsapp") return <BsWhatsapp />
}

function SocialButton({ data, showStyle = false }) {
    return (
        <NavLink
            to={data.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={showStyle ? "social-link" : ""}
        >
            {getSocialIcons(data.title)}
        </NavLink>
    )
}

export default SocialButton