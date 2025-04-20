import React, { useCallback } from "react";
import HueIcon from "../icon/hueicon";


interface leftsideProp{
  onThemeChange:(theme:string) => void
  theme:string;
}

const Leftsidebar = React.memo(({ onThemeChange }: leftsideProp) => {
  const handleThemeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onThemeChange(e.target.value); // Trigger the theme change on parent
    },
    [onThemeChange] // Dependency array ensures that this callback will update only when `onThemeChange` changes
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
        {/* Theme Dropdown*/}
        <div className="w-full">
          <select
            id="theme"
            onChange={handleThemeChange}
            className="w-full gap-2 bg-[#2a2a2a] text-white p-3 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-[#616060]"
          >
            <option value="default">Default Theme</option>
            <option value="orange">Orange</option>
            <option value="betterblack">Better Black</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="react">React</option>
            <option value="rimless">Rimless</option>
            <option value="blue">Blue</option>
          </select>
        </div>
        {/* Tech Stack Dropdown */}
        <div className="w-full">
          <label
            htmlFor="techstack"
            className="block text-sm font-medium text-gray-300 mb-2"
          ></label>
          <select
            id="techstack"
            className="w-full bg-[#2a2a2a] text-white p-3 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-[#616060]"
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
        <div className="w-full">
          <label
            htmlFor="dimension"
            className="block text-sm font-medium text-gray-300 mb-2"
          ></label>
          <select
            id="dimension"
            className="w-full bg-[#2a2a2a] text-white p-3 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-[#616060]"
          >
            <option value="">Default</option>
            <option value="">16:9 (1920 * 1080)</option>
            <option value="react">3:2 (1920 * 1280)</option>
            <option value="nextjs">4:3 (1920 * 1440)</option>
            <option value="node">5:4 (1920 * 1536)</option>
            <option value="mongo">1:1 (1920 * 1920)</option>
            <option value="tailwind">4:5 (1080 * 1350)</option>
            <option value="express">3:4 (1080 * 1440)</option>
            <option value="typescript">2:3 (1080 * 1620)</option>
            <option value="typescript">9:16 (1080 * 1920)</option>
          </select>
        </div>
      </div>
    </div>
  );
});

Leftsidebar.displayName = "Leftsidebar";
export default Leftsidebar