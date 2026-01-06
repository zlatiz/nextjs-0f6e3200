import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffd000',
        muted: '#777777',
        brandText: '#111827'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Manrope', 'DM Sans', 'Sora', 'Space Grotesk', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
