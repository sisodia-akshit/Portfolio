import React, { useEffect, useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'

function BackToTopButton() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`back-to-top ${show ? "flex" : "hide"}`}
            onClick={() =>
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }
        >
            <FaChevronUp />
        </div>
    );
}

export default BackToTopButton;