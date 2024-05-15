import Header from "../layout/Header";
import Navbar from "../layout/Navbar";
import BusinessSetupIntro from "../components/Businesssetup/BusinessSetupIntro";
import BusinessSetupMainland from "../components/Businesssetup/BusinessSetupMainland";
import BusinessSetupFreezone from "../components/Businesssetup/BusinessSetupFreezone";
import AlFattah from "../components/Businesssetup/AlFattah";
import Footer from "../layout/Footer"

const BusinessSetup = () => {
  return (
    <>
      <Header />
      <Navbar />
      <BusinessSetupIntro />
      <BusinessSetupMainland />
      <BusinessSetupFreezone/>
      <AlFattah/>
      <Footer/>
    </>
  );
};

export default BusinessSetup;
