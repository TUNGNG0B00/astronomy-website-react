import React, { useEffect } from 'react';
import liamSmithImage from './img/liam-smith.png';
import aymanGhanaiImage from './img/ayman-ghanai.png';
import sashaDenisImage from './img/sasha-denis.png'; 
import ethanBookerImage from './img/ethan-booker.png'; 
export default function() {

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
              <div className='logo'>
        DAL ASTRONOMY SOCIETY
      </div>
            <nav className="nav">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/meetexecutives">Meet the Executives</a>
            </nav>

            <div className="main fade-rise-in">
                {/* Executive 1: Liam Smith */}
                <div className="executive fade-rise-in">
                    <div className='executive-image'> 
                        <img className='executive-portrait' src={liamSmithImage} alt='portrait of an executive'></img>
                    </div>
                    <div className='executive-paragraph'> 
                        <p className="subheading">Founder/President</p>
                        <h2 className='executive-1-name'>LIAM SMITH</h2>
                        <p className="paragraph">
                            I started this society out of love for astronomy and the night 
                            sky in general. I got into amateur astronomy in high school 
                            and my passion for it has grown ever since. Looking up at the stars 
                            and considering our place among them is a spiritual experience which has
                            positively changed my outlook on life and broadened my perspective on the world
                            around me. The goal of this society is to make that experience easy and accessible for the 
                            entire Dalhousie and Kings Community.
                        </p>
                    </div>
                </div>

                {/* Executive 2: Ayman Ghanai */}
                <div className="executive fade-rise-in">
                    <div className='executive-image'> 
                        <img className='executive-portrait' src={aymanGhanaiImage} alt='portrait of an executive'></img>
                    </div>
                    <div className='executive-paragraph'> 
                        <p className="subheading">Vice President</p>
                        <h2 className='executive-1-name'>AYMAN GHANAI</h2>
                        <p className="paragraph">
                            I became hooked on astronomy and astrophotography once I learned that it is possible to take photos of
                            distant galaxies and nebulae with just a normal DSLR camera. Since then, I have become invested in learning as much as I can
                            about astronomy, and I’m looking forward to spreading this enthusiasm with the society.
                        </p>
                    </div>
                </div>

                {/* Executive 3: Sasha Denis */}
                <div className="executive fade-rise-in">
                    <div className='executive-image'> 
                        <img className='executive-portrait' src={sashaDenisImage} alt='portrait of an executive'></img>
                    </div>
                    <div className='executive-paragraph'> 
                        <p className="subheading">Vice President</p>
                        <h2 className='executive-1-name'>SASHA DENIS</h2>
                        <p className="paragraph">
                            "We are all in the gutter, but some of us are looking at the stars" - Oscar Wilde. I love astronomy because I enjoy looking at the beauty of the stars and knowing that it’s the same view seen by people before us and after us.
                        </p>
                    </div>
                </div>

                {/* Executive 4: Ethan Booker */}
                <div className="executive fade-rise-in">
                    <div className='executive-image'> 
                        <img className='executive-portrait' src={ethanBookerImage} alt='portrait of an executive'></img>
                    </div>
                    <div className='executive-paragraph'> 
                        <p className="subheading">Treasurer</p>
                        <h2 className='executive-1-name'>ETHAN BOOKER</h2>
                        <p className="paragraph">
                            I have a passion for astronomy. This society and the events we run are a great way to feed that passion. I’m majoring in Finance so the treasurer position is a nice intersection between my professional and pastime interests.
                        </p>
                    </div>
                </div>
            </div>

            <footer className="fade-rise-in">
                <div className="footer-nav fade-rise-in">
                    <div className="nav-footer">
                        <a href="/home">Home</a>
                        <a href="/about">About</a>
                        <a href="/meetexecutives">Meet the Executives</a>
                    </div>

                    <div className="social-media">
                        <a href="/home">Instagram</a>
                        <a href="/about">Twitter</a>
                        <a href="/meetexecutives">Facebook</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
