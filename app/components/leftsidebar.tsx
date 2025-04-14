import HueIcon from "../icon/hueicon";

export default function Leftsidebar() {
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
      </div>
    </div>
  );
}
