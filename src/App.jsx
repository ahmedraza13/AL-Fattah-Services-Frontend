import Home from "./pages/Landingpage";
import TyppingandProServices from "./pages/TyppingandProServices";
import VisaServicePage from "./pages/VisaServiePage";
import TranslationPage from "./pages/Translationpage";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/visa-service" element={<VisaServicePage />} />
      <Route path="/pro-service" element={<TyppingandProServices />} />
      <Route path="/translation-service" element={<TranslationPage />} />
    </Routes>
  );
};

export default App;
