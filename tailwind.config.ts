import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react"
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6F61',
        secondary: '#D32F2F', 
        accent: '#FFC107', 
        background: '#F9F3F0', 
        'primary-text': '#333333', 
        'secondary-text': '#F5F5F5',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(45deg, #FF6F61, #FF9A8B)',
        'secondary-gradient': 'linear-gradient(45deg, #D32F2F, #FF6F61)', 
        'accent-gradient': 'linear-gradient(45deg, #FFC107, #FF9A8B)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
