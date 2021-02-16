import PropTypes from "prop-types";
import "./SectionTitle.css";

function SectionTitle(props) {
    return (
        <div className="tu-section-title">
            <h2 className={props.color ? `tu-color--${props.color}` : ""}>
                {props.title}
            </h2>
            <hr />
        </div>
    );
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
        "light",
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

export default SectionTitle;
