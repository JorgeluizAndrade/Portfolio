import type { Config } from 'tailwindcss';
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    keyframes:{
      blob: {
        "0%": {
          transform: "translate(0px, 0px) ",
        },
        "33%": {
          transform: "translate(4px, -4px) ",
        },
        "66%": {
          transform: "translate(-8px, 8px) ",
        },
        "100%": {
          transform: "translate(0px, 0px) ",
        },
      },
    }
  },
  darkMode:"class",
  plugins: [nextui()],
}
export default config
