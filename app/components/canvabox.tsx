
import React, { useEffect, useRef, useState } from "react";


interface CanvaboxProps {}

const Canvabox = React.forwardRef<HTMLDivElement, CanvaboxProps>(
  (props, ref) => {
    const[dimension,setdimension] = useState({width:600,height:360})
    const dragInfo = useRef({
      isResizing:false,
      direction:"",
      startX: 0,
      startY: 0,
      startWidth: 600,
      startHeight:360,
    })
    const handleMouseDown = (
      direction:"right" | "bottom",
      e: React.MouseEvent
    ) => {
      dragInfo.current = {
        isResizing:true,
        direction,
        startX:e.clientX,
        startY:e.clientY,
        startWidth:dimension.width,
        startHeight:dimension.height,
      }
      document.body.style.userSelect = "none"
    }
    const handleMouseMove = (e:MouseEvent) => {
      if(!dragInfo.current.isResizing) return
      const deltaX = e.clientX - dragInfo.current.startX
      const deltaY = e.clientY - dragInfo.current.startY

      let newWidth = dragInfo.current.startWidth;
      let newHeight = dragInfo.current.startHeight;

      if(dragInfo.current.direction === "right"){
        newWidth = Math.max(200, dragInfo.current.startWidth + deltaX)
      }
      if(dragInfo.current.direction === "bottom"){
        newHeight = Math.max(200, dragInfo.current.startHeight + deltaY)
      }
      setdimension({width:newWidth, height:newHeight});
    }

    const handleMouseUp = () =>{
      dragInfo.current.isResizing = false;
      document.body.style.userSelect = "";
    }
    useEffect(() => {
      window.addEventListener("mousemove",handleMouseMove);
      window.addEventListener("mouseup",handleMouseUp);
      return() => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      }
    },[])
    return (
      <div
        className="flex-1 bg-[#151414] rounded-2xl p-4 overflow-hidden flex items-center justify-center"
        style={{ height: "calc(100vh - 1rem)", margin: "0.5rem" }}
      >
        <div
          ref={ref}
          className="relative rounded-xl bg-[#2c2c2e] p-4 flex items-center justify-center"
          style={{
            width: `${dimension.width}px`,
            height: `${dimension.height}px`,
          }}
        >
          <div className="absolute top-0 left-0 w-full px-4 py-2 flex items-center justify-between bg-[#2c2c2e] border-b border-[#3a3a3c] z-10 rounded-t-xl">
            <div className="flex gap-2 items-center">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex justify-center items-center w-full">
              <input
                type="text"
                defaultValue="Code Editor"
                className="text-xs text-gray-400 font-semibold tracking-wide bg-transparent focus:outline-none text-center"
              />
            </div>
            <div className="w-12" /> {/* For symmetry */}
          </div>
          <textarea
            className="absolute top-8 bottom-0 left-0 right-0 bg-transparent text-white font-mono text-sm resize-none outline-none placeholder-gray-500 p-4 overflow-auto"
            placeholder='print("Hello world")'
          />
          <div
            onMouseDown={(e) => handleMouseDown("right", e)}
            className="absolute right-0 inset-y-0 w-2 cursor-ew-resize bg-white/10 rounded-r-md
                    opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          ></div>
          <div
            onMouseDown={(e) => handleMouseDown("bottom", e)}
            className="absolute bottom-0 inset-x-0 h-2 cursor-ns-resize group"
          ></div>
        </div>
      </div>
    );
  }
);

Canvabox.displayName = "Canvabox"; // For better debugging in React DevTools

export default Canvabox;
