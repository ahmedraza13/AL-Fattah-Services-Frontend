import Header from '../components/Landingpagecomponents/Header'
import Navbar from "../components/Landingpagecomponents/Navbar";
import Slider from "../components/Landingpagecomponents/Slider";
import EntitiesCard from "../components/Landingpagecomponents/EntitiesCard";
import ServiceCard from "../components/Landingpagecomponents/ServicesCard";
import AboutSection from "../components/Landingpagecomponents/AboutSection";
// import ContactSection from "../components/Landingpagecomponents/ContactSection";
import Footer from "../components/Landingpagecomponents/Footer";

const Home = () => {
  return (
    <div >
      <Header />
      <Navbar />
      <Slider />
      <EntitiesCard />
      <ServiceCard />
      <AboutSection />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
};

export default Home;
