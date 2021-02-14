import "./Features.css";
// Images
import Fast from "../../images/features/fast.png";
import Preview from "../../images/features/preview.png";
import Expiry from "../../images/features/expiry.png";
import Stats from "../../images/features/stats.png";
import Heading from "../../components/Heading/Heading";
// Components
import SectionTitle from "../../components/SectionTitle/SectionTitle";

function Features() {
    return (
        <section id="features">
            <SectionTitle title="Features"/>
            <div className="tu-features">
                <div className="tu-feature">
                    <img src={Fast} />
                    <Heading title="Easy and Fast"/>
                    <p>
                        Consectetur dolor nobis tempora expedita officiis
                        exercitati onem Accusamus officiis quo eaque eum non
                        Corporis ea repellend{" "}
                    </p>
                </div>
                <div className="tu-feature">
                    <img src={Preview} />
                    <Heading title="Preview URLs"/>
                    <p>
                        Consectetur dolor nobis tempora expedita officiis
                        exercitati onem Accusamus officiis quo eaque eum non
                        Corporis ea repellend{" "}
                    </p>
                </div>
                <div className="tu-feature">
                    <img src={Expiry} />
                    <Heading title="Expiry options"/>
                    <p>
                        Consectetur dolor nobis tempora expedita officiis
                        exercitati onem Accusamus officiis quo eaque eum non
                        Corporis ea repellend{" "}
                    </p>
                </div>
                <div className="tu-feature">
                    <img src={Stats} />
                    <Heading title="Analytics"/>
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
