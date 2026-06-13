import React from 'react'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/common/Hero'
import About from '../components/common/About'
import Projects from '../components/common/Projects'
import Services from '../components/common/Services'
import Contact from '../components/common/Contact'
import Footer from '../components/layout/Footer'
import BackToTopButton from '../components/buttons/BackToTopButton'
import AnimateSection from '../components/layout/AnimateSection'

function Home() {
    return (
        <>
            <Navbar />
            <AnimateSection>
                <Hero />
            </AnimateSection>

            <AnimateSection>
                <About />
            </AnimateSection>

            <AnimateSection>
                <Projects />
            </AnimateSection>

            <AnimateSection>
                <Services />
            </AnimateSection>

            <AnimateSection>
                <Contact />
            </AnimateSection>
            <Footer />
            <BackToTopButton />
        </>
    )
}

export default Home 