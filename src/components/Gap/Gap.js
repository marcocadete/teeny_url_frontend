import PropTypes from "prop-types";

function Gap(props) {
    return (
        <br
            style={{
                marginTop: props.top ? props.top : "5px",
                marginBottom: props.bottom ? props.bottom : "5px",
                display: "block"
            }}
        />
    );
}

Gap.propTypes = {
    marginTop: PropTypes.string,
    marginBottom: PropTypes.string,
};

export default Gap;
