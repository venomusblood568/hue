
import GlimIcon from "../icon/glimicon";

export default function Leftsidebar() {
  return (
    <div>
      <div
        className="w-52 bg-[#151414] text-white p-4  shadow-lg overflow-y-auto rounded-2xl"
        style={{ height: "calc(100vh - 1rem)", margin: "0.5rem" }}
      >
        <div className="flex items-center justify-center w-full px-6 py-3 bg-[#1e1e1e] rounded-2xl shadow-md">
          <div className="flex items-center gap-2">
            <button
              className="text-white hover:text-indigo-400 bg-[#2a2a2a] p-2 rounded-xl transition duration-300 shadow hover:shadow-indigo-500/20"
              aria-label="Glim Icon"
            >
              <GlimIcon />
            </button>

            <span className="font-bold text-white text-3xl select-none tracking-wider">
              GLIM
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
