import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tour give you the opportunity to see a lot, within a time frame.</p>

            <DestinationData
                className="first-des"
                heading="Taal Volcano, Batangas"
                text="Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin."
                img1={Mountain1}
                img2={Mountain2}
            />

            <DestinationData
                className="first-des-reverse"
                heading="Taal Volcano, Batangas"
                text="Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin."
                img1={Mountain3}
                img2={Mountain4}
            />
        </div>
    )
}

export default Destination;