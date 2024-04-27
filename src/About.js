
import React, { useEffect } from 'react';
import blackHoleImage from './img/black-hole-image.png';
import marsImage from './img/mars.png';
import neptuneImage from './img/neptune.png';
import saturnImage from './img/saturn.png';
import jupiterImage from './img/jupiter.png';
import uranusImage from './img/uranus.png';
import observatoryImage from './img/observatory.png';


export default function(){
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

  

  
    return(
    
        <div className="App">


      <div className="main ">
      <div className="about-us ">

      <div className='black-hole-image'> 
      <img className='black-hole' src={blackHoleImage} alt='image of a blackhole'></img>
      </div>
      
      <div className="about-us-2-section fade-rise-in">
      <h1 className="head-about-us">ABOUT US</h1>
  <p className="paragraph-about-us">
    We're a student-run society led by students from all majors who are passionate about astronomy. Join us to explore the wonders of the universe!
  </p>
</div>

      </div>


    {/* add icon */}
    <div className="quick-information-wrapper ">
    <h1 className="subheading fade-rise-in">QUICK INFORMATION ABOUT US</h1>
    <div className="quick-information">

        <div className="info-1 fade-rise-in">
          <div className="mars-image"> 
          <img className='mars' src={marsImage} alt='image of mars'></img>
          </div>
        <div className="info-heading">COMMUNITY OUTREACH</div>
         
        <p>
            We're a student-run society led by students from all majors who are 
            passionate about astronomy. Join us to 
            explore the wonders of the universe!
        </p>
    </div>

    <div className="info-2 fade-rise-in">
    <div className="neptune-image"> 
          <img className='neptune' src={neptuneImage} alt='image of neptune'></img>
          </div>
        <div className="info-heading">GUEST SPEAKERS & WORKSHOPS</div>
         
        <p>
        We invite experts in the field of astronomy to speak at our meetings and host
         workshops to teach members how to take photos of distant nebulae and galaxies.
        </p>
    </div>

    <div className="info-3 fade-rise-in">
    <div className="saturn-image"> 
          <img className='saturn' src={saturnImage} alt='image of saturn'></img>
          </div>
        <div className="info-heading">ASTRONOMY IN THE DIGITAL AGE</div>
         
        <p>
        We explore the intersection of astronomy and technology, including how digital tools 
        and data are transforming our understanding of the universe.
        </p>
    </div>

    <div className="info-4 fade-rise-in">
    <div className="jupiter-image"> 
          <img className='jupiter' src={jupiterImage} alt='image of jupiter'></img>
          </div>
        <div className="info-heading">ASTRONOMY IN THE DIGITAL AGE</div>
         
        <p>
        We explore the intersection of astronomy and technology, including how digital 
        tools and data are transforming our understanding of the universe.
        </p>
    </div>

    <div className="info-5 fade-rise-in">
    <div className="uranus-image"> 
          <img className='uranus' src={uranusImage} alt='image of uranus'></img>
          </div>
        <div className="info-heading">REAL-TIME UPDATES ON ASTRONOMICAL EVENTS</div>
         
        <p>
        Stay informed about upcoming astronomical events, such as meteor 
        showers and eclipses, sign up to join our email list today!
        </p>
    </div>
</div>
</div>
{/* Second mini-info section */}

<div className="about-observatory ">

<div className='observatory-image'> 
      <img className='observatory' src={observatoryImage} alt='image of an observatory'></img>
      </div>
        <h1 className="observatory-heading fade-rise-in">BURKE-GAFFNEY OBSERVATORY</h1>
        <p className="paragraph-observatory fade-rise-in">
        Our society provides frequent visits to the Burke-Gaffney 
        Observatory, where members can observe deep space objects (DSO) 
        and learn about the latest astronomical research and discoveries.
        </p>
      </div>
      </div>
    </div>
   

    )
}
