import { useState } from "react";
import "./Header.css";
import berty from "../../images/berty.png";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Gap from "../../components/Gap/Gap";

function validURL(str) {
    var pattern = new RegExp(
        /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i
    );
    return !!pattern.test(str);
}

function Header() {
    const [value, setValue] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [feedback, setFeedback] = useState(null);

    function handleBlur() {
        if (value === "") {
            setIsValid(false);
            setFeedback("A valid URL is required.");
        } else if (!validURL(value)) {
            setIsValid(false);
            setFeedback("A valid URL is required.");
        } else {
            setIsValid(true);
            setFeedback(null);
        }
    }

    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("submit was clicked");
        console.log(value);
    }

    return (
        <div className="tu-header">
            <div className="tu-header__image">
                <img src={berty} alt="mascot" />
            </div>
            <div className="tu-header__intro">
                <h2>Welcome to</h2>
                <h1>teenyURL!</h1>
                <p>
                    Consectetur dolor nobis tempora expedita officiis exercitati
                    onem Accusamus officiis quo eaque eum non Corporis ea
                    repellend us reprehenderit voluptate illum repellendus
                    aliquam Expedita a ccusantium quaerat placeat ipsam quae! Ut
                    sunt reiciendis.
                </p>
                <form onSubmit={handleSubmit} className="tu-header__form">
                    <Input
                        isValid={isValid}
                        feedback={feedback}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={value}
                        label="Enter a long URL to make it a teenyURL"
                        type="text"
                        id="url_input"
                    />
                    <Gap />
                    <Button type="submit" displayBlock={true}>
                        Create
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Header;
