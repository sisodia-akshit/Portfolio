import React from 'react';

import { SERVICES } from "../../data/servicesData"
import ServiceCard from '../cards/ServiceCard';

function Services() {
    return (
        <section className="services" id="services">
            <p>SERVICES</p>
            <h1>S E R V I C E S</h1>
            <hr />
            <div className="services-container">
                {SERVICES.map((curr, i) => {
                    return (
                        <ServiceCard key={i} data={curr} />
                    )
                })}
            </div>
        </section>
    )
}

export default Services