import "./TripStyle.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/6.jpg";
import Trip3 from "../assets/8.jpg";

function Trip(){
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>Recent Trip unique destination using Google Maps.</p>
            <div className="tripcard">
                <TripData
                    image={Trip1}
                    heading = "Trip in Indonesia"
                    text = "Build real time tour and travel website using react js project from scratch. In this course, we will build responsive beginner react js website. We will learn react basic to advance concepts while building this react project."
                />
                <TripData
                    image={Trip2}
                    heading = "Trip in Indonesia"
                    text = "Build real time tour and travel website using react js project from scratch. In this course, we will build responsive beginner react js website. We will learn react basic to advance concepts while building this react project."
                />
                <TripData
                    image={Trip3}
                    heading = "Trip in Indonesia"
                    text = "Build real time tour and travel website using react js project from scratch. In this course, we will build responsive beginner react js website. We will learn react basic to advance concepts while building this react project."
                />
            </div>
        </div>
    )
}

export default Trip;