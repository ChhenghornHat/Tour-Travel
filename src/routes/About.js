import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/1.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg="https://images.unsplash.com/photo-1571844088753-73ca0880bcd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
                title="About"
                btnClass="hide"
            />
            <AboutUs/>
            <Footer/>
        </>
    );
}

export default About;