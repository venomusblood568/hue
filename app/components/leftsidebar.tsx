import React, { useCallback } from "react";
import HueIcon from "../icon/hueicon";

interface leftsideProp {
  onThemeChange: (theme: string) => void;
  theme: string;
  onExport: () => void;
  onTechStackChange: (techStack:string) => void 
}

const Leftsidebar = React.memo(({ onThemeChange, onExport, onTechStackChange }: leftsideProp) => {
  const handleThemeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onThemeChange(e.target.value);
    },
    [onThemeChange]
  );
  const handleTechStackChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onTechStackChange(e.target.value);
    },
    [onTechStackChange]
  )
  return (
    <div>
      <div
        className="w-56 bg-[#151414] text-white p-4 shadow-lg overflow-y-auto rounded-2xl"
        style={{ height: "calc(100vh - 1rem)", margin: "0.5rem" }}
      >
        {/* Header */}
        <div className="flex items-center justify-center w-full px-6 py-3 bg-[#1e1e1e] rounded-2xl shadow-md mb-4">
          <div className="flex items-center gap-2">
            <button
              className="text-white hover:text-indigo-400 bg-[#2a2a2a] p-2 rounded-xl transition duration-300 shadow hover:shadow-indigo-500/20 cursor-pointer"
              aria-label="Hue Icon"
            >
              <HueIcon />
            </button>
            <span className="font-bold text-white text-3xl select-none tracking-wider">
              HUE
            </span>
          </div>
        </div>

        {/* Theme Dropdown */}
        <div className="mb-4">
          <select
            id="theme"
            onChange={handleThemeChange}
            className=" w-full bg-[#2a2a2a] text-white p-4 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-[#6184ec]"
          >
            <option value="default" className="bg-[#3a3a3a]">
              Default Theme
            </option>
            <option value="orange" className="bg-[#3a3a3a]">
              Orange
            </option>
            <option value="betterblack" className="bg-[#3a3a3a]">
              Better Black
            </option>
            <option value="black" className="bg-[#3a3a3a]">
              Black
            </option>
            <option value="white" className="bg-[#3a3a3a]">
              White
            </option>
            <option value="react" className="bg-[#3a3a3a]">
              React
            </option>
            <option value="rimless" className="bg-[#3a3a3a]">
              Rimless
            </option>
            <option value="cyberNeon" className="bg-[#3a3a3a]">
              cyber Neo
            </option>
            <option value="sakuraPink" className="bg-[#3a3a3a]">
              Sakura Pink
            </option>
            <option value="royallink" className="bg-[#3a3a3a]">
              Royal Link
            </option>
            <option value="terminal" className="bg-[#3a3a3a]">
              Terminal
            </option>
          </select>
        </div>

        {/* Tech Stack Dropdown */}
        <div className="mb-4">
          <select
            id="techstack"
            onChange={handleTechStackChange}
            className=" w-full bg-[#2a2a2a] text-white p-4 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-[#6184ec]"
          >
            <option value="">Auto-Detect</option>
            <option value="typescript">TypeScript</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="c">C</option>
            <option value="c++">C++</option>
            
          </select>
        </div>

        {/* Export Button */}
        <div className="mt-auto">
          <button
            onClick={onExport}
            className="flex items-center justify-center w-full px-6 py-3 bg-[#1e1e1e] rounded-xl shadow-md cursor-pointer hover:bg-[#616060]"
          >
            Export
          </button>
        </div>
      </div>
    </div>
  );
});

Leftsidebar.displayName = "Leftsidebar";
export default Leftsidebar;
