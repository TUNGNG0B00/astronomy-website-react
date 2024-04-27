import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import MeetExecutives from './MeetExecutives';
import './App.css';

function App() {
  return (
    <div>
      <HashRouter>
        <nav className="nav fade-rise-in">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/meetexecutives" className="nav-link">Meet the Executives</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/meetexecutives" element={<MeetExecutives />} />
        </Routes>

        <footer className="fade-rise-in">
          <div className="footer-nav fade-rise-in">
            <div className="nav-footer">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/meetexecutives" className="nav-link">Meet the Executives</Link>
            </div>
            <div className="social-media">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </footer>
      </HashRouter>
    </div>
  );
}

export default App;
