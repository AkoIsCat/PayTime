import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        splashStart: '#fdd6f1',
        splashEnd: '#feebf9',
      },
      width: {
        contentsWidth: '595px',
      },
      backgroundColor: {
        background: '#F5F5F5',
        mainBgColor: '#F6F6F6',
      },
      height: {
        header: '100px',
      },
    },
  },
  plugins: [],
};
export default config;
