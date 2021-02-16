import { useState, useEffect, useRef } from "react";

import "./App.css";

// Containers
import Navbar from "./containers/Navbar/Navbar";
import Header from "./containers/Header/Header";
import Features from "./containers/Features/Features";
import Preview from "./containers/Preview/Preview";
import Footer from "./containers/Footer/Footer";

function App() {
    // Ref for elements that we want to detect whether on screen.
    const refHeader = useRef();
    const refFeatures = useRef();
    const refPreview = useRef();
    const refFooter = useRef();

    // Observer which returns a boolean value if ref element is visable.
    const headerOnScreen = useOnScreen(refHeader);
    const featuresOnScreen = useOnScreen(refFeatures);
    const previewOnScreen = useOnScreen(refPreview);
    const footerOnScreen = useOnScreen(refFooter);

    // sections has been created to pass all ref elements to the navbar,
    // for handling scroll to ref element.
    const sections = [refHeader, refFeatures, refPreview, refFooter];

    // SectionsOnScreen has been created to pass boolean values on whether
    // the ref element is in view, to enable active classes on the navbar.
    const sectionsOnScreen = [
        headerOnScreen,
        featuresOnScreen,
        previewOnScreen,
        footerOnScreen,
    ];

    return (
        <div className="tu-app">
            <Navbar sections={sections} sectionsOnScreen={sectionsOnScreen} />
            <Header ref={refHeader} />
            <Features ref={refFeatures} />
            <Preview ref={refPreview} />
            <Footer ref={refFooter} />
        </div>
    );
}

// Hook
function useOnScreen(ref, rootMargin = "0px", threshold = 0.5) {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
                threshold,
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            observer.unobserve(ref.current);
        };
    }, []); // Empty array enures that effect is only run on mount and unmount

    return isIntersecting;
}

export default App;
