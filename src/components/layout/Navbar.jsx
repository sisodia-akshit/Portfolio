
import NavbarButton from '../buttons/NavbarButton'

const NAVBAR = [
    {
        title: "home",
        link: "#home",
    },
    {
        title: "about",
        link: "#about",
    },
    {
        title: "projects",
        link: "#project",
    },
    {
        title: "services",
        link: "#services",
    },
    {
        title: "contact",
        link: "#contact",
    },
]

function Navbar() {
    return (
        <header className="header-list">
            <div className="div-list">
                <ul className="ul-list">
                    {NAVBAR.map((curr, i) => {
                        return (
                            <NavbarButton key={i} data={curr} />
                        )
                    })}
                </ul>
            </div>
        </header>
    );
}

export default Navbar;