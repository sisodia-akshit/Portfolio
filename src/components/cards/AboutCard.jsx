import React from 'react'
import { Code, FolderOpen, GraduationCap } from 'lucide-react'

const getIcon = (type) => {
    if (type === "language") return <Code />
    if (type === "education") return <GraduationCap />
    if (type === "projects") return <FolderOpen />
}

function AboutCard({ data }) {
    return (
        <div className="c1">
            <h3 style={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
                textTransform: "capitalize"
            }}>{getIcon(data.title)} {data.title}</h3>
            <p>{data.description}</p>
        </div>
    )
}

export default AboutCard