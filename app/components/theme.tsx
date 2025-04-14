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
    bg: "#0f1117", // deep twilight
    border: "#00ffff", // neon cyan
    text: "#ffffff", // crisp white
    placeholder: "#6ee7b7", // minty fresh
    borderThickness: "0px",
    borderRadius: "16px",
  },
  blue: {
    bg: "#0f172a", // Midnight galaxy
    border: "#38bdf8",
    text: "#e0f2fe",
    placeholder: "#7dd3fc",
    decor: `
      box-shadow: 0 4px 30px rgba(56, 189, 248, 0.15);
      background-image: 
        linear-gradient(30deg, #0f172a 0%, #1e293b 100%),
        repeating-linear-gradient(
          45deg,
          transparent,
          transparent 25px,
          #38bdf811 25px,
          #38bdf811 50px
        );
      background-blend-mode: multiply;
      &::after {
        content: '✦';
        position: absolute;
        right: 12px;
        bottom: 8px;
        color: #38bdf844;
        font-size: 1.5rem;
      }
    `,
    borderThickness: "1px",
    borderRadius: "14px",
    animation: "sparkle 4s infinite",
  },
  betterblack: {
    bg: "linear-gradient(195deg, #2c2c2e 0%, #1f1f21 100%)",
    border: "#3a3a3c",
    text: "#f0f0f0",
    placeholder: "#6b7280",
    borderThickness: "1px",
    borderRadius: "12px",
  },
};
