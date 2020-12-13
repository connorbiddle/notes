import { keyframes } from "styled-components";

const theme = {
  spacing: {
    sm: "0.65rem",
    md: "1rem",
    lg: "2rem",
  },
  colors: {
    primary: "#403380",
    light: "#FFFFFF",
    success: "#64A764",
    danger: "#B75050",
    dark: "#111111",
    darkGrey: "#7E7E7E",
    lightGrey: "#D5D5D5",
  },
  sizes: {
    sm: "500px",
    md: "768px",
    lg: "1000px",
    xl: "1200px",
  },
  animations: {
    fadeIn: keyframes`
      0% {
        opacity: 0;
        transform: translateY(10px);
      }

      15% {
        opacity: 0;
        transform: translateY(10px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    `,
  },
};

export default theme;
