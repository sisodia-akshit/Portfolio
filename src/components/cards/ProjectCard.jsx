import React from 'react'
import { NavLink } from 'react-router-dom'

function ProjectCard({ data }) {
    return (
        <div className="project-card">
            <img src={data.image} alt={data.title} />

            <h3>{data.title}</h3>

            <p>{data.description}</p>

            <div className="skills">
                {data.skills.map((skill, i) => (
                    <span key={i}>{skill}</span>
                ))}
            </div>

            <div className="btns">
                <NavLink src={data.github} className="btn">GitHub</NavLink>
                <NavLink src={data.live} className="btn">Live Demo</NavLink>
            </div>
        </div>
    )
}

export default ProjectCard