import React, { useEffect } from 'react';
import moonImage from './img/moon.png';
import telescopeImage from './img/telescope.png';

export default function App() {
  // Fade-in animation effect on component mount
  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll('.fade-rise-in');
    elementsToAnimate.forEach((element, index) => {
      element.style.opacity = 0;
      element.style.transform = 'translateY(20px)';
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          element.style.transition = `opacity 0.8s ease-in-out ${index * 0.2}s, transform 1s ease-in-out ${index * 0.2}s`;
          element.style.opacity = 1;
          element.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        });
      });
      observer.observe(element);
    });
  }, []);

  return (
    <div className="App">
      {/* Logo */}
      <div className='logo'>
        DAL ASTRONOMY SOCIETY
      </div>
    
      {/* Main content */}
      <div className="main fade-rise-in">
        <div className="subheading fade-rise-in">Welcome To</div>
        <h2 className="heading fade-rise-in">DALHOUSIE ASTRONOMY<br /> SOCIETY</h2>
        <div className="moon fade-rise-in" id="moon">
          <img className="image-moon fade-rise-in" src={moonImage} alt="Image of the moon" id="moon-image" />
        </div>
        <p className="subheading fade-rise-in">
          Explore the mysteries of the universe with us
        </p>
        <button href="#" className="join-us-btn fade-rise-in">join us</button>
      </div>
      {/* Why Join Us section */}
      <div className="why-join-us fade-rise-in">
        <div className="about-us-section fade-rise-in">
          <div className="fade-rise-in">
            <p className="paragraph fade-rise-in">
              <h1 className="subheading fade-rise-in">WHY JOIN US?</h1>
              We are a group of university students passionate about astronomy and the world around us. <br /><br />
              We offer a unique opportunity to explore the universe with like-minded individuals. <br /><br />
              Learn from experienced guest speakers, and participate in exciting activities such as observing and photographing planets, galaxies, and emission nebulae
            </p>
            <button href="" className="join-us-btn-paragraph fade-rise-in">Join Us</button>
          </div>
          <img className="image-telescope fade-rise-in" src={telescopeImage} alt="Image of the telescope" />
        </div>
      </div>

    
    </div>
  );
}
