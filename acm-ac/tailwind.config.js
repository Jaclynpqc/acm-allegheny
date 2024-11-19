export const content = [
  "./index.html",
  "./src/**/*.{js,jsx}",
];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      acmblue: "#4200F6",
      acmneon: "#CFF665",
      acmpink: "#F238A7",
      acmorange: "#F37826",
      acmred: "#FF4733",
      acmyellow: "#FFDE00",
      acmlightpink: "#F8C9DD",
      acmturquoise: "#9CF0E3",
      acmblack: "#1B1515"
    },
    screens: {
      'xs': "450px",
      '3xl': "2160px",
    },
    backgroundImage: {
      "hero-pattern": "",
    },
    keyframes: {
      textRotate1: {
        '0%, 40%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
        '60%, 100%': { transform: 'translate3d(0, -100%, 0) rotateX(-90deg)' },
      },
      textRotate2: {
        '0%, 40%': { transform: 'translate3d(0, 100%, 0) rotateX(-90deg)' },
        '60%, 100%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
      },
    },
    animation: {
      textRotate1: 'textRotate1 2.4s infinite alternate',
      textRotate2: 'textRotate2 2.4s infinite alternate',
    },
    fontSize: {
      title: '2rem',
      subtitle: '1.5rem',
    },
  },
};
export const plugins = [];