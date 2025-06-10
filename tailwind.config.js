// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
         fontSize:{
        'regular': 'clamp(24px, 3vw, 32px)',
        'button': 'clamp(14px, 3.5vw, 18px)',
        'heading': 'clamp(60px, 10vw, 90px)',
        'footer': 'clamp(50px, 8vw, 60px)',
        'heading2': 'clamp(45px, 8vw, 80px)',
        'para': 'clamp(18px, 1vw, 28px)',
      },
      lineHeight:{
         'heading': 'clamp(40px, 8vw, 130px)',
      },
      fontFamily:{
        'normal':['Helvetica_Neue, Helvetica'],
        'custom':['ivyMode','Helvetica_Neue', 'Helvetica'],
      }
    },
  },
 plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
