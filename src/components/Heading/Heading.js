import PropTypes from "prop-types";
import "./Heading.css";

function Heading(props) {
    return (
        <div className="tu-heading">
            <h5
                className={
                    props.color
                        ? `tu-color--${props.color}`
                        : ""
                }
            >
                {props.title}
            </h5>
        </div>
    );
}

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
        "green",
        "dark-green",
        "yellow",
        "dark-yellow",
        "blue",
        "dark-blue",
        "brown",
        "dark-brown",
    ]),
};

export default Heading;
