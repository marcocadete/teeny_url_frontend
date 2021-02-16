import React, { useState } from "react";
import "./Header.css";
import berty from "../../images/berty.png";
// Components
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Gap from "../../components/Gap/Gap";
// Helper Functions
import { validURL } from "../../HelperFunctions/HelperFunctions";

const Header = React.forwardRef((props, ref) => {
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
        <div id="home" className="tu-header" ref={ref}>
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
});

export default Header;
