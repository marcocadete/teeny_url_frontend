import PropTypes from "prop-types";
import "./ButtonLink.css";

function ButtonLink(props) {
    // Defaults
    let classes = ["tu-btn-link", "tu-btn-link--green"];

    // Options
    let colors = ["green", "yellow", "blue", "brown"];

    if (props.color && colors.includes(props.color)) {
        classes[1] = `tu-btn-link--${props.color}`;
    }

    return (
        <a
            className={classes.join(" ")}
            href={props.href ? props.href : "/"}
        >
            {props.children}
        </a>
    );
}

ButtonLink.propTypes = {
    color: PropTypes.string,
    href: PropTypes.string
};

export default ButtonLink;
