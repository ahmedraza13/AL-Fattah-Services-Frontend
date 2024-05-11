import Home from './pages/Landingpage'
import TyppingandProServices from './pages/TyppingandProServices';
import VisaServicePage from './pages/VisaServiePage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return(
   <Routes>
    <Route index element={<Home/>}/>
    <Route path='/visa-service' element={<VisaServicePage/>}/>
    <Route path='/pro-service' element={<TyppingandProServices/>}/>
   </Routes>
     
  )
}

export default App;