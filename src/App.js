import './App.css';
import {Routes, Route} from "react-router-dom"
import Plat from './pages/Plat';
import Boisson from './pages/Boisson';
import Contact from './pages/Contact';
import Accueil from './pages/Accueil';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Accueil/>}></Route>
      <Route path='/Plat' element={<Plat/>}></Route>
      <Route path='/Boisson' element={<Boisson/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;