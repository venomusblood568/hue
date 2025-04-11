
export default function Canvabox() {
  

  return (
    <div
      className="flex-1 bg-[#151414] rounded-2xl p-4 overflow-hidden"
      style={{ height: "calc(100vh - 1rem)", margin: "0.5rem" }} // 1rem total = top + bottom
    >
      <div className="w-full h-full rounded-xl bg-[#2c2c2e] p-4 overflow-auto">
        <textarea
          className="w-full h-full bg-transparent text-white font-mono text-sm resize-none outline-none placeholder-gray-500"
          placeholder="// Paste your code here..."
        />
      </div>
    </div>
  );
}
