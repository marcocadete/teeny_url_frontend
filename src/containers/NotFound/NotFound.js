import "./NotFound.css";
import ButtonLink from "../../components/ButtonLink/ButtonLink";

const NotFound = () => (
    <div className="tu-notfound">
        <div className="tu-notfound__content">
            <h2>Unable to find URL to redirect to.</h2>
            <p>Please check that the URL entered is correct.</p>
            <ButtonLink>Home Page</ButtonLink>
        </div>
    </div>
);

export default NotFound;
