"use client";
import { useCallback, useRef, useState } from "react";
import Canvabox from "./components/canvabox";
import Leftsidebar from "./components/leftsidebar";
import { toPng } from "html-to-image";
import { editorTheme } from "./components/theme";

// Define the ThemeType for clarity and reusability
type ThemeType = keyof typeof editorTheme;

export default function Home() {
  const canvaboxRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<ThemeType>("default");
  const [techstack, setTechStack] = useState("");

  const handleExport = useCallback(async () => {
    if (!canvaboxRef.current) return;
    try {
      const dataUrl = await toPng(canvaboxRef.current, {
        quality: 1,
        backgroundColor: "#2c2c2e",
        pixelRatio: 2,
      });

      const link = document.createElement("a");
      link.download = "glim-snipped.png";
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.log(`Error exporting image:`, error);
    }
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Leftsidebar
        onThemeChange={(theme) => setTheme(theme as ThemeType)} // Add type assertion here
        theme={theme}
        onExport={handleExport}
        onTechStackChange={setTechStack}
      />

      <Canvabox ref={canvaboxRef} theme={theme} techStack={techstack} />
    </div>
  );
}
