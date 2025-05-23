export type ThemeType =
  | "default"
  | "white"
  | "black"
  | "orange"
  | "react"
  | "rimless"
  | "betterblack"
  | "cyberNeon"
  | "sakuraPink"
  | "royallink"
  | "terminal";

export const editorTheme = {
  default: {
    bg: "#2c2c2e",
    border: "#3a3a3c",
    text: "white",
    placeholder: "#6b7280",
    borderThickness: "1px",
    borderRadius: "8px",
  },
  orange: {
    bg: "#0d0d0d",
    border: "#ff8c00",
    text: "#fefefe",
    placeholder: "#9ca3af",
    borderThickness: "1px",
    borderRadius: "8px",
  },
  black: {
    bg: "#0d0d0d",
    border: "black",
    text: "#fefefe",
    placeholder: "#9ca3af",
    borderThickness: "1px",
    borderRadius: "8px",
  },
  white: {
    bg: "#FFFFFF",
    border: "#f0f0f0",
    text: "black",
    placeholder: "#9ca3af",
    borderThickness: "2px",
    borderRadius: "8px",
  },
  react: {
    bg: "#0f1117", // deep twilight
    border: "#00ffff", // neon cyan
    text: "#ffffff", // crisp white
    placeholder: "#6ee7b7", // minty fresh
    borderThickness: "2px",
    borderRadius: "16px",
  },
  rimless: {
    bg: "#0f1117",
    border: "#00ffff",
    text: "#ffffff",
    placeholder: "#6ee7b7",
    borderThickness: "0px",
    borderRadius: "16px",
  },
  betterblack: {
    bg: "black",
    border: "#3a3a3c",
    text: "#f0f0f0",
    placeholder: "#6b7280",
    borderThickness: "1px",
    borderRadius: "12px",
  },
  cyberNeon: {
    bg: "#184c87",
    border: "#2730cf",
    text: "#00ffe1",
    placeholder: "#5effe3",
    borderThickness: "2px",
    borderRadius: "14px",
  },
  sakuraPink: {
    bg: "#ffd1df",
    border: "#ff85a2",
    text: "black",
    placeholder: "#ffb6c1",
    borderThickness: "2px",
    borderRadius: "12px",
  },
  royallink: {
    bg: "#1e1b3a",
    border: "#635bff",
    text: "#ffffff",
    placeholder: "#a1a1ff",
    borderThickness: "1px",
    borderRadius: "10px",
  },
  terminal: {
    bg: "#000000",
    border: "#00ff00",
    text: "#00ff00",
    placeholder: "#33ff33",
    borderThickness: "1px",
    borderRadius: "8px",
  },
};
