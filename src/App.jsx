import Home from './pages/Landingpage'
import VisaServicePage from './pages/VisaServiePage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return(
   <Routes>
    <Route index element={<Home/>}/>
    <Route path='/visa-service' element={<VisaServicePage/>}/>
   </Routes>
     
  )
}

export default App;