import "./Header.css";
import berty from "../../images/berty.png";
import Button from "../../components/Button/Button";

function Header() {
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
                <form className="tu-header__form">
                    <label for="url_input">
                        Enter a long URL to make it a teenyURL
                    </label>
                    <input type="text" id="url_input" />
                    <Button>Create</Button>
                </form>
            </div>
        </div>
    );
}

export default Header;
