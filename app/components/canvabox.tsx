import React from "react";

interface CanvaboxProps {
  // Add any props here if needed
}

const Canvabox = React.forwardRef<HTMLDivElement, CanvaboxProps>(
  (props, ref) => {
    return (
      <div
        className="flex-1 bg-[#151414] rounded-2xl p-4 overflow-hidden"
        style={{ height: "calc(100vh - 1rem)", margin: "0.5rem" }}
      >
        <div ref={ref} className="w-full h-full rounded-xl bg-[#2c2c2e] p-4 ">
          <textarea
            className="w-full h-full bg-transparent text-white font-mono text-sm resize-none outline-none placeholder-gray-500 overflow-auto scrollbar-none"
            placeholder="// Paste your code here..."
          />
        </div>
      </div>
    );
  }
);

Canvabox.displayName = "Canvabox"; // For better debugging in React DevTools

export default Canvabox;
