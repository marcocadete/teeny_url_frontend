import "./Footer.css";
import githubLogo from "../../images/github.png";
// Components
import Heading from "../../components/Heading/Heading";

function Footer() {
    return (
        <footer className="tu-footer">
            <Heading title="Contact" color="dark-yellow" />
            <div className="tu-footer__content">
                <div id="contact" className="tu-footer__contact">
                    <a href="https://github.com/marcocadete">
                        <img src={githubLogo} />
                        Get in touch with the developer on Github
                    </a>
                </div>
                <div className="tu-footer__copyright">
                    &copy; Copyright teenyURL 2021. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
