import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
    // Defaults
    let classes = ["tu-btn", "tu-btn--green"];
    let type = "button";
    let value = props.value ? props.value : "";
    let disabled = props.disabled ? true : false;

    // Options
    let colors = ["green", "yellow", "blue", "brown"];
    let types = ["button", "submit", "reset"];

    if (props.color && colors.includes(props.color)) {
        classes[1] = `tu-btn--${props.color}`;
    }

    if (props.type && types.includes(props.type)) {
        type = props.type;
    }

    return (
        <button
            className={classes.join(" ")}
            type={type}
            value={value}
            disabled={disabled}
        >
            {props.children}
        </button>
    );
}

Button.propTypes = {
    color: PropTypes.string,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    value: PropTypes.string,
    disabled: PropTypes.bool,
};

export default Button;
