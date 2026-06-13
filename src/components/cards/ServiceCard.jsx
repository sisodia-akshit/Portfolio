import React from 'react'

function ServiceCard({ data }) {
    return (
        <div className="service-card">
            <img src={data.image} alt="Web Development" />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div>
    )
}

export default ServiceCard