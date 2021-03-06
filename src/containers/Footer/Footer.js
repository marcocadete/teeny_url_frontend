import React from "react";
import "./Footer.css";
import githubLogo from "../../images/github.png";
// Components
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Footer = React.forwardRef((props, ref) => {
    return (
        <footer id="contact" className="tu-footer" ref={ref}>
            <div>
                <SectionTitle title="Contact" color="light" />
                <div className="tu-footer__container">
                    <div className="tu-footer__content">
                        <div className="tu-footer__contact">
                            <a href="https://github.com/marcocadete">
                                <img src={githubLogo} alt="github" />
                                Get in touch with the developer on Github
                            </a>
                        </div>
                    </div>
                    <div className="tu-footer__copyright">
                        &copy; Copyright teenyURL 2021. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
});

export default Footer;
