import { FaCode, FaLaptopCode, FaReact } from "react-icons/fa";

function LoadingScreen() {
    return (
        <div id="loading-screen" className="loading-screen">
            <h1 className="loading-title">AKSHIT</h1>

            <div className="loading-main-icon">
                <FaLaptopCode />
            </div>

            <div className="loading-icons">
                <FaCode />
                <FaReact />
            </div>

            <h2>Full Stack Developer</h2>
        </div>
    );
}

export default LoadingScreen;