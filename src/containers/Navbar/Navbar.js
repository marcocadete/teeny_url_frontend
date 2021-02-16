import { useState } from "react";
import "./Navbar.css";
import Logo from "../../images/logo.png";

function Navbar(props) {
    console.log(props);
    const [selected, setSelected] = useState(false);
    const [refHeader, refFeatures, refPreview, refFooter] = props.sections;
    const [
        visableHeader,
        visableFeatures,
        visablePreview,
        visableContact,
    ] = props.sectionsOnScreen;

    return (
        <nav className="tu-nav">
            <div className="tu-nav__container">
                <div
                    className={
                        selected ? "tu-nav__left tu-selected" : "tu-nav__left"
                    }
                >
                    <span className="tu-nav__logo">
                        <a href="#home">
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
                        onClick={() => refHeader.current.scrollIntoView()}
                        href="#0"
                        className={visableHeader ? "active" : ""}
                    >
                        Home
                    </a>
                    <a
                        onClick={() => refFeatures.current.scrollIntoView()}
                        href="#0"
                        className={visableFeatures ? "active" : ""}
                    >
                        Features
                    </a>
                    <a
                        onClick={() => refPreview.current.scrollIntoView()}
                        href="#0"
                        className={visablePreview ? "active" : ""}
                    >
                        Preview
                    </a>
                    <a
                        onClick={() => refFooter.current.scrollIntoView()}
                        href="#0"
                        className={visableContact ? "active" : ""}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
