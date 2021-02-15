import React, { useState } from "react";
import "./Preview.css";
// Components
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Input from "../../components/Input/Input";
import Gap from "../../components/Gap/Gap";
import Button from "../../components/Button/Button";
// Helper Functions
import { validURL } from "../../HelperFunctions/HelperFunctions";

const Preview = React.forwardRef((props, ref) => {
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
        <section id="preview" className="tu-preview" ref={ref}>
            <div>
                <SectionTitle title="Preview" />
                <div className="tu-preview__content">
                    <p className="tu-preview__intro">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <form onSubmit={handleSubmit} className="tu-preview__form">
                        <Input
                            isValid={isValid}
                            feedback={feedback}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={value}
                            label="Enter a teenyURL to view the long URL"
                            type="text"
                            id="teeny_input"
                        />
                        <Gap />
                        <Button type="submit" displayBlock={true}>
                            Preview
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
});

export default Preview;
