import React from 'react'
import { projects } from '../../data/projects'
import ProjectCard from '../cards/ProjectCard'

function Projects() {
    return (
        <section className="project" id="project">
            <p>PROJECTS</p>
            <h1>Featured Work</h1>
            <hr />
            <div className="info-pro">
                <p>
                    A showcase of my recent projects demonstrating expertise in full-stack
                    F</p>
                <p>development, modern frameworks, and creative problem-solving.</p>
            </div>
            <div className="projects-container">
                {projects.map((curr, i) => (
                    <ProjectCard key={i} data={curr} />
                ))}
            </div>
        </section>
    )
}

export default Projects