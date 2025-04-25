import React, { useEffect, useRef, useState } from "react";
import { editorTheme } from "./theme";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CanvaboxProps {
  theme?: keyof typeof editorTheme;
  techStack ?: string;
}

const Canvabox = React.memo(
  React.forwardRef<HTMLDivElement, CanvaboxProps>(
  ({theme="default", techStack = ""}, ref) => {
    const[dimension,setdimension] = useState({width:600,height:360})
    const currentTheme = editorTheme[theme] || editorTheme.default;
    const[code,setCode] = useState("")
    const[language, setLanguage] = useState("text")

    const dragInfo = useRef({
      isResizing:false,
      direction:"",
      startX: 0,
      startY: 0,
      startWidth: 600,
      startHeight:360,
    })

    useEffect(() => {
      const detectLanguage = () => {
        if (!techStack) {
          if (code.includes("def ") || code.includes("import "))
            return "python";
          if (code.includes("function ") || code.includes("const "))
            return "javascript";
          if (code.includes("public class ")) return "java";
          if (code.includes("#include ")) return "c";
          if (code.includes("using namespace ")) return "cpp";
          return "text";
        }
        return techStack === "cpp" ? "cpp" : techStack;
      };
      setLanguage(detectLanguage());
    }, [techStack, code]);

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
          className="relative rounded-xl  p-4 flex items-center justify-center"
          style={{
            width: `${dimension.width}px`,
            height: `${dimension.height}px`,
            backgroundColor: currentTheme.bg,
            color: currentTheme.text,
            border: `${currentTheme.borderThickness} solid ${currentTheme.border}`,
            borderRadius: currentTheme.borderRadius,
          }}
        >
          <div
            style={{
              backgroundColor: currentTheme.bg,
              color: currentTheme.text ?? "#e5e5e5",
              ...(currentTheme?.border && {
                borderBottomColor: currentTheme.border,
              }),
              ...(currentTheme?.borderThickness && {
                borderBottomWidth: currentTheme.borderThickness,
              }),
            }}
            className="absolute top-0 left-0 w-full px-4 py-2 flex items-center justify-between  z-10 rounded-t-xl"
          >
            {theme === "default" && (
              <div className="flex gap-2 items-center">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            )}
            <div className="flex justify-center items-center w-full">
              <input
                type="text"
                defaultValue="Hue Editor"
                className="text-xs text-gray-400 font-semibold tracking-wide bg-transparent focus:outline-none text-center"
                style={{
                  color: currentTheme.text,
                  
                }}
              />
            </div>
            <div className="w-12" /> {/* For symmetry */}
          </div>
          <div className="absolute top-8 bottom-0 left-0 right-0 overflow-hidden">
            <SyntaxHighlighter
              language={language}
              style={darcula}
              customStyle={{
                backgroundColor: "transparent",
                padding: "1rem",
                fontFamily: "monospace",
                fontSize: "14px",
                margin: 0,
                height: "100%",
                color: currentTheme.text,
              }}
              codeTagProps={{
                style: {
                  fontFamily: "monospace",
                  lineHeight: "1.5",
                },
              }}
            >
              {code || " "}
            </SyntaxHighlighter>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="absolute top-0 left-0 w-full h-full bg-transparent text-transparent caret-white font-mono text-sm resize-none outline-none p-4"
              placeholder='print("Hello world")'
              style={{
                zIndex: 1,
                lineHeight: "1.5",
              }}
              spellCheck={false}
            />
          </div>
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
  })
);

Canvabox.displayName = "Canvabox"; 

export default Canvabox;
