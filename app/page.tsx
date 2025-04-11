"use client"
import { useCallback, useRef } from "react";
import Canvabox from "./components/canvabox";
import Leftsidebar from "./components/leftsidebar";
import RightSidebar from "./components/rightsidebar";
import { toPng } from "html-to-image";

export default function Home() {
  const canvaboxRef = useRef<HTMLDivElement>(null)
  const handleExport = useCallback(async () => {
    if(!canvaboxRef.current) return;
    try {
      const dataUrl = await toPng(canvaboxRef.current, {
        quality: 1,
        backgroundColor: "#2c2c2e",
        pixelRatio: 2,
      });

      const link = document.createElement("a");
      link.download = 'glim-snipped.png'
      link.href = dataUrl;
      link.click()
    } catch (error) {
      console.log(`Erro Exporting imgae:`,error)
    }
  },[])
  return (
    <div className="flex h-screen overflow-hidden">
      <Leftsidebar />
      <Canvabox ref={canvaboxRef}/>
      <RightSidebar onExport={handleExport} />
    </div>
  );
}
