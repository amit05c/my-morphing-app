import React, { useState, useEffect } from "react";
import MorphingSphere from "./components/MorphingSphere";
import CustomCursor from "./components/CustomCursor";
import Second from "./components/SecondComp/Second";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";


function App() {
  const [backgroundStyle, setBackgroundStyle] = useState({ class: "bg-slate-900" });

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "second-component", background: { class: "bg-white" } },
        {
          id: "third-component",
          background: { class: "bg-slate-900" },
        },
        {
          id: "fourth-component",
          background: {
            style: {
              backgroundImage: "linear-gradient(to right, black, #1c1c1c, #2b2b2b, #1c1c1c, black)",
              backgroundSize: "200% 200%",
            },
          },
        },
        { id: "fifth-component", background: { class: "bg-gradient-to-bl from-slate-800 via-gray-900 to-black" } },
      ];

      let activeBackground = { class: "bg-slate-900" }; // Default background
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
            activeBackground = section.background;
          }
        }
      });

      setBackgroundStyle(activeBackground);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-all duration-1000 ${
        backgroundStyle.class || ""
      }`}
      style={backgroundStyle.style || {}}
    >
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
      <div id="fourth-component">
        <FourthSection />
      </div>
      <div id="fifth-component">
        <FifthSection />
      </div>
    </div>
  );
}

export default App;

// bg-slate-900
// bg-white
// bg-gradient-to-r from-yellow-400 via-red-400 to-purple-500
// style={{
//   backgroundImage: "linear-gradient(to right, black, #1c1c1c, #2b2b2b, #1c1c1c, black)",
//   backgroundSize: "200% 200%",
// }}
// bg-gradient-to-bl from-slate-800 via-gray-900 to-black
