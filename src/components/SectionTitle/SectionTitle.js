import PropTypes from "prop-types";
import "./SectionTitle.css";

function SectionTitle(props) {
    return (
        <div className="tu-section-title">
            <h2>{props.title}</h2>
            <hr />
        </div>
    );
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default SectionTitle;
