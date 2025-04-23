import React, { useCallback } from "react";
import HueIcon from "../icon/hueicon";

interface leftsideProp {
  onThemeChange: (theme: string) => void;
  theme: string;
  onExport: () => void;
}

const Leftsidebar = React.memo(({ onThemeChange, onExport }: leftsideProp) => {
  const handleThemeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onThemeChange(e.target.value);
    },
    [onThemeChange]
  );

  return (
    <div>
      <div
        className="w-52 bg-[#151414] text-white p-4 shadow-lg overflow-y-auto rounded-2xl"
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
            <option value="blue" className="bg-[#3a3a3a]">
              Blue
            </option>
            <option value="cyberNeon" className="bg-[#3a3a3a]">
              cyber Neo
            </option>
            <option value="sakuraPink" className="bg-[#3a3a3a]">
              sakura Pink
            </option>
          </select>
        </div>

        {/* Tech Stack Dropdown */}
        <div className="mb-4">
          <select
            id="techstack"
            className=" w-full bg-[#2a2a2a] text-white p-4 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-[#6184ec]"
          >
            <option value="">Language</option>
            <option value="react">React</option>
            <option value="nextjs">Next.js</option>
            <option value="node">Node.js</option>
            <option value="mongo">MongoDB</option>
            <option value="tailwind">Tailwind CSS</option>
            <option value="express">Express</option>
            <option value="typescript">TypeScript</option>
          </select>
        </div>

        {/* Dimension Dropdown */}
        <div className="mb-4">
          <select
            id="dimension"
            className=" w-full bg-[#2a2a2a] text-white p-4 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-[#6184ec]"
          >
            <option value="">Default</option>
            <option value="16:9">16:9 (1920×1080)</option>
            <option value="3:2">3:2 (1920×1280)</option>
            <option value="4:3">4:3 (1920×1440)</option>
            <option value="5:4">5:4 (1920×1536)</option>
            <option value="1:1">1:1 (1920×1920)</option>
            <option value="4:5">4:5 (1080×1350)</option>
            <option value="3:4">3:4 (1080×1440)</option>
            <option value="2:3">2:3 (1080×1620)</option>
            <option value="9:16">9:16 (1080×1920)</option>
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
