import React, { useState, useEffect } from 'react';
import MorphingSphere from './components/MorphingSphere';
import CustomCursor from './components/CustomCursor';
import Second from './components/SecondComp/Second';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import FifthSection from './components/FifthSection';

function App() {
  const [backgroundClass, setBackgroundClass] = useState('bg-slate-900'); // Initial background

  useEffect(() => {
    const handleScroll = () => {
      const secondComponent = document.getElementById('second-component');

      if (secondComponent) {
        const secondRect = secondComponent.getBoundingClientRect();
        if (
          secondRect.top <= window.innerHeight * 0.5 &&
          secondRect.bottom >= window.innerHeight * 0.5
        ) {
          setBackgroundClass('bg-white'); // Change to white when Second component is in view
          return;
        }
      }

      setBackgroundClass('bg-slate-900'); // Default background for all other sections
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-1000 ${backgroundClass}`}>
      {/* Sticky header */}
      <div className="sticky top-4 left-4">
        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
          <span className="text-white/50 text-xs">ILAB</span>
        </div>
      </div>
      
      <CustomCursor />
      <MorphingSphere />

      {/* Sections */}
      <div id="second-component">
        <Second />
      </div>
      <div id="third-component">
        <ThirdSection />
      </div>
      <FourthSection />
      <FifthSection />
    </div>
  );
}

export default App;
