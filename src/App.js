import './App.css';
import LandingPage from './stores/pages/LandingPage';
import {Routes, Route} from 'react-router-dom';
import MobilePage from './stores/pages/MobilePage';
import FurniturePage from './stores/pages/FurniturePage';
import AirConditionerPage from './stores/pages/AirConditionerPage';
import ComputersPage from './stores/pages/ComputersPage';
import WatchesPage from './stores/pages/WatchesPage';
import MenFashionPage from './stores/pages/MenFashionPage';
import WomanFashionPage from './stores/pages/WomanFashionPage';
import KitchenPage from './stores/pages/KitchenPage';
import MobileSingle from './singles/MobileSingle';
import UserCart from './stores/UserCart';
import ComputersSingle from './singles/ComputersSingle';
import FurnitureSingle from './singles/FurnitureSingle';
import KitchenSingle from './singles/KitchenSingle';
import AirConditionerSingle from './singles/AirConditionerSingle';
import MenFashionSingle from './singles/MenFashionSingle';
import WatchesSingle from './singles/WatchesSingle';
import WomanFashionSingle from './singles/WomanFashionSingle';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/mobile' element={<MobilePage/>} />
        <Route path='/computer' element={<ComputersPage/>} />
        <Route path='/watches' element={<WatchesPage/>} />
        <Route path='/menfashion' element={<MenFashionPage />} />
        <Route path='/womanfashion' element={<WomanFashionPage />} />
        <Route path='/furniture' element={<FurniturePage/>} />
        <Route path='/kitchen' element={<KitchenPage />} />
        <Route path='/conditioner' element={<AirConditionerPage/>} />
        <Route path='/mobile/:id' element={<MobileSingle/>} />
        <Route path='/computer/:id' element={<ComputersSingle/>} />
        <Route path='/furniture/:id' element={<FurnitureSingle/>} />
        <Route path='/kitchen/:id' element={<KitchenSingle/>} />
        <Route path='/conditioner/:id' element={<AirConditionerSingle/>} />
        <Route path='/menfashion/:id' element={<MenFashionSingle/>} />
        <Route path='/womanfashion/:id' element={<WomanFashionSingle/>} />
        <Route path='/watches/:id' element={<WatchesSingle/>} />
        <Route path='/cart' element={<UserCart/>} />  
      
      </Routes>
      
    </div>
  );
}

export default App;
