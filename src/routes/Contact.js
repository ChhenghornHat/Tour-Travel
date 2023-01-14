import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg="https://images.unsplash.com/photo-1609949165382-2e442783c8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
                title="Contact"
                btnClass="hide"
            />
            <ContactForm/>
            <Footer/>
        </>
    );
}

export default Contact;