import "./Header.css";
import berty from "../../images/berty.png"

function Header() {
    return (
        <div className="tu-header">
            <div className="tu-header__image">
                <img src={berty} alt="mascot"/>
            </div>
            <div className="tu-header__intro">
                <h1>Welcome to teenyURL!</h1>
                <p>Consectetur dolor nobis tempora expedita officiis exercitati
                onem Accusamus officiis quo eaque eum non Corporis ea repellend
                us reprehenderit voluptate illum repellendus aliquam Expedita a
                ccusantium quaerat placeat ipsam quae! Ut sunt reiciendis.</p>
            </div>
        </div>
    );
}

export default Header;
