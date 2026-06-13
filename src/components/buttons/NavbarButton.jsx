import React, { useEffect, useState } from 'react'
import { FaAddressCard, FaCode, FaEnvelope, FaFolderOpen } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'
import { useLocation } from 'react-router-dom'

const getIcon = (type, isActive) => {
    if (type === "home") return <FaHouse color={isActive ? "#fff" : "#000"} />
    if (type === "about") return <FaAddressCard color={isActive ? "#fff" : "#000"} />
    if (type === "projects") return <FaCode color={isActive ? "#fff" : "#000"} />
    if (type === "services") return <FaFolderOpen color={isActive ? "#fff" : "#000"} />
    if (type === "contact") return <FaEnvelope color={isActive ? "#fff" : "#000"} />
}

function NavbarButton({ data }) {
    const location = useLocation();

    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);
    return (
        <li className={activeSection === data.link.replace("#", "") ? "active" : ""} style={{textTransform:"capitalize"}}>
            {getIcon(data.title, activeSection === data.link.replace("#", ""))}
            <a href={data.link}>{data.title}</a>
        </li>
    )
}

export default NavbarButton