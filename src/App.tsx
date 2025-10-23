import Loginpage from './pages/login/Login';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Trainee from './pages/trainee/Trainee';
import Popup from './components/organisms/popup/Popup';
import HomePage from './pages/home/HomePage';

function App() {
  

  return (
    
      <div>
        <BrowserRouter>
         <Routes> 
            <Route path="/" element={<Loginpage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/train" element={<Trainee/>}/>
           </Routes> 
       </BrowserRouter>
      </div>
  );
};

export default App;
