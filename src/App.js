import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import About from './pages/About'; 
import MeetExecutives from './pages/MeetExecutives'; 
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />

          <Route index element={<About />} />
          <Route path='/about' element={<About/>} />
          
          <Route index element={<MeetExecutives />} />
          <Route path='/meetexecutives' element={<MeetExecutives/>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
