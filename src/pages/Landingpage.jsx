import Header from '../components/Landingpagecomponents/Header'
import Navbar from "../components/Landingpagecomponents/Navbar";
import Slider from "../components/Landingpagecomponents/Slider";
import FeatureCard from "../components/Landingpagecomponents/FeatureCard";
import BusinessSetupSection from '../components/Landingpagecomponents/BusinessSetupSection';
import AboutSection from '../components/Landingpagecomponents/AboutSection';
import ServiceCard from '../components/Landingpagecomponents/ServicesCard';
import EntitiesCard from '../components/Landingpagecomponents/EntitiesCard';
// import ContactSection from '../components/Landingpagecomponents/ContactSection';
const Home = () => {
  return (
    <div >
      <Header />
      <Navbar />
      <Slider />
      <FeatureCard />
      <BusinessSetupSection />
      <AboutSection />
      <ServiceCard />
      <EntitiesCard />
      {/* <ContactSection /> */}
     
    </div>
  );
};

export default Home;
