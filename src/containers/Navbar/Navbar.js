import { useState } from "react";
import "./Navbar.css";
import Logo from "../../images/logo.png";

function Navbar(props) {
    console.log(props);
    const [selected, setSelected] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const [visableHeader, visableFeatures, visablePreview] = props.sections;

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
                        onClick={() => setActiveLink("home")}
                        href="/"
                        className={
                            activeLink === "home" || visableHeader
                                ? "active"
                                : ""
                        }
                    >
                        Home
                    </a>
                    <a
                        onClick={() => setActiveLink("features")}
                        href="#features"
                        className={
                            activeLink === "features" || visableFeatures
                                ? "active"
                                : ""
                        }
                    >
                        Features
                    </a>
                    <a
                        onClick={() => setActiveLink("preview")}
                        href="#preview"
                        className={
                            activeLink === "preview" || visablePreview
                                ? "active"
                                : ""
                        }
                    >
                        Preview
                    </a>
                    <a
                        onClick={() => setActiveLink("contact")}
                        href="#contact"
                        className={activeLink === "contact" && visablePreview ? "active" : ""}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
