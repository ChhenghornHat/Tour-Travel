import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg="https://images.pexels.com/photos/5769408/pexels-photo-5769408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="Service"
                btnClass="hide"
            />
            <Trip/>
            <Footer/>
        </>
    );
}

export default Service;