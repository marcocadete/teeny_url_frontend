import PropTypes from "prop-types";
import "./Input.css";

function Input(props) {
    let valid = true;

    if (props.isValid !== undefined && !props.isValid) {
        valid = false;
    }

    return (
        <>
            <label className="tu-input__label" htmlFor={props.id}>
                {props.label}
            </label>
            <input
                onBlur={props.onBlur}
                onChange={props.onChange}
                value={props.value}
                className={valid ? "tu-input" : "tu-input tu-input--invalid"}
                type={props.type ? props.type : "text"}
                id={props.id}
            />
            {props.feedback && (
                <small className="tu-mb tu-input__feedback">
                    {props.feedback}
                </small>
            )}
        </>
    );
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    isValid: PropTypes.bool,
    touched: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    feedback: PropTypes.string,
};

export default Input;
