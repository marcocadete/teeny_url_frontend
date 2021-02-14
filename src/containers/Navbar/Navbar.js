import { useState } from "react";
import "./Navbar.css";
import Logo from "../../images/logo.png";

function Navbar() {
    const [selected, setSelected] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    return (
        <nav className="tu-nav">
            <div className="tu-nav__container">
                <div
                    className={
                        selected ? "tu-nav__left tu-selected" : "tu-nav__left"
                    }
                >
                    <span className="tu-nav__logo">
                        <a href="/">
                            <img src={Logo} />
                        </a>
                    </span>
                    <button
                        className="tu-nav__burger"
                        onClick={() => setSelected(!selected)}
                    >
                        <div
                            className={
                                selected
                                    ? "tu-nav__burger-bar1 tu-selected"
                                    : "tu-nav__burger-bar1"
                            }
                        ></div>
                        <div
                            className={
                                selected
                                    ? "tu-nav__burger-bar2 tu-selected"
                                    : "tu-nav__burger-bar2"
                            }
                        ></div>
                        <div
                            className={
                                selected
                                    ? "tu-nav__burger-bar3 tu-selected"
                                    : "tu-nav__burger-bar3"
                            }
                        ></div>
                    </button>
                </div>
                <div className="tu-nav__links">
                    <a
                        onClick={() => setActiveLink("features")}
                        href="#features"
                        className={activeLink === "features" ?  "active" : ""}
                    >
                        Features
                    </a>
                    <a
                        onClick={() => setActiveLink("about")}
                        href="#about"
                        className={activeLink === "about" ? "active" : ""}
                    >
                        About
                    </a>
                    <a
                        onClick={() => setActiveLink("contact")}
                        href="#contact"
                        className={activeLink === "contact" ? "active" : ""}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
