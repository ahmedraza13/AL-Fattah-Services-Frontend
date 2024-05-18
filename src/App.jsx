import Home from "./pages/Landingpage";
import TyppingandProServices from "./pages/TyppingandProServices";
import VisaServicePage from "./pages/VisaServiePage";
import TranslationPage from "./pages/Translationpage";
import BusinessSetup from "./pages/Businesssetup";
import About from "./pages/Aboutus";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/visa-service" element={<VisaServicePage />} />
      <Route path="/pro-service" element={<TyppingandProServices />} />
      <Route path="/translation-service" element={<TranslationPage />} />
      <Route path="/business-setup" element={<BusinessSetup />} />
      <Route path="/about-us" element={<About />} />
   </Routes>
  );
};

export default App;
