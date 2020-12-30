import { keyframes } from "styled-components";

const theme = {
  spacing: {
    sm: "0.65rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
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

      20% {
        opacity: 0;
        transform: translateY(10px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    `,
    // fadeInAlt is for elements already translated (-50%, -50%).
    fadeInAlt: keyframes`
      0% {
        opacity: 0;
        transform: translate(-50%, calc(-50% + 10px));
      }

      20% {
        opacity: 0;
        transform: translate(-50%, calc(-50% + 10px));
      }

      100% {
        opacity: 1;
        transform: translate(-50%, -50%);
      }
    `,
    modal: keyframes`
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    `,
  },
};

export default theme;
