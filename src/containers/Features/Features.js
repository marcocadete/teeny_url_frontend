import "./Features.css";
// Images
import Fast from "../../images/features/fast.png";
import Preview from "../../images/features/preview.png";
import Expiry from "../../images/features/expiry.png";
import Stats from "../../images/features/stats.png";
// Components
import SectionTitle from "../../components/SectionTitle/SectionTitle";

function Features() {
    return (
        <section id="features">
            <SectionTitle title="Features"/>
            <div className="tu-features">
                <div className="tu-feature">
                    <img src={Fast} />
                    <p>
                        Consectetur dolor nobis tempora expedita officiis
                        exercitati onem Accusamus officiis quo eaque eum non
                        Corporis ea repellend{" "}
                    </p>
                </div>
                <div className="tu-feature">
                    <img src={Preview} />
                    <p>
                        Consectetur dolor nobis tempora expedita officiis
                        exercitati onem Accusamus officiis quo eaque eum non
                        Corporis ea repellend{" "}
                    </p>
                </div>
                <div className="tu-feature">
                    <img src={Expiry} />
                    <p>
                        Consectetur dolor nobis tempora expedita officiis
                        exercitati onem Accusamus officiis quo eaque eum non
                        Corporis ea repellend{" "}
                    </p>
                </div>
                <div className="tu-feature">
                    <img src={Stats} />
                    <p>
                        Consectetur dolor nobis tempora expedita officiis
                        exercitati onem Accusamus officiis quo eaque eum non
                        Corporis ea repellend{" "}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Features;
