import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'; 
import About from './About'; 
import MeetExecutives from './MeetExecutives'; 
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
