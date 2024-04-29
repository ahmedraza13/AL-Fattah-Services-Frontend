import Header from "../components/Landingpagecomponents/Header";
import Slider from "../components/Landingpagecomponents/Slider";
import EntitiesCard from "../components/Landingpagecomponents/EntitiesCard";
import ServiceCard from "../components/Landingpagecomponents/ServicesCard";
import AboutSection from "../components/Landingpagecomponents/AboutSection";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <EntitiesCard />
      <ServiceCard />
      <AboutSection />
    </>
  );
};

export default Home;
