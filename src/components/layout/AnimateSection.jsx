import useReveal from "../../hooks/useReveal";

function AnimateSection({ children }) {
    const { ref, visible } = useReveal();

    return (
        <div ref={ref} className={`reveal ${visible ? "active-reveal" : ""}`}>
            {children}
        </div>
    );
}

export default AnimateSection;