import Header from "../layout/Header";
import Navbar from "../layout/Navbar";
import Probanner from "../components/Propagecomponents/Probanner";
import Prointro from "../components/Propagecomponents/Prointro";
import Prooverview from "../components/Propagecomponents/Prooverview"
import ProDocuments from "../components/Propagecomponents/Prodocuments";
import Probenefits from "../components/Propagecomponents/Probenefits"; 
import BestProService from "../components/Propagecomponents/BestProService";
import AlFattahHelp from "../components/Propagecomponents/AlFattahHelp";
import Footer from "../layout/Footer";

const ProServicesPage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Probanner />
      <Prointro/>
      <Prooverview/>
      <ProDocuments/>
      <Probenefits/>
      <BestProService/>
      <AlFattahHelp/>
      <Footer/>
    
    </div>
  );
};
export default ProServicesPage;