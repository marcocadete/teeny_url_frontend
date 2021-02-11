import PropTypes from "prop-types";

function Gap(props) {
    let lineColor = "blue";

    if (props.lineColor !== undefined) {
        lineColor = props.lineColor;
    }

    return (
        <hr
            style={{
                marginTop: props.top ? props.top : "10px",
                marginBottom: props.bottom ? props.bottom : "10px",
                display: "block",
                border: props.showLine
                    ? `1px solid var(--${lineColor})`
                    : "none",
            }}
        />
    );
}

Gap.propTypes = {
    marginTop: PropTypes.string,
    marginBottom: PropTypes.string,
    showLine: PropTypes.bool,
    lineColor: PropTypes.oneOf(["green", "yellow", "blue", "brown"]),
};

export default Gap;
