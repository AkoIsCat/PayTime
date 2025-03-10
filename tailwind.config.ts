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
        detailToggle: '#164686',
        submitBtn: '#6490D1',
        resetBtn: '#ffffff',
      },
      width: {
        contentsWidth: '595px',
        input: '525px',
        submitBtn: '465px',
        resetBtn: '55px',
        select: '200px',
        detailForm: '420px',
        days: '55px',
        dayInput: '15px',
      },
      backgroundColor: {
        background: '#F5F5F5',
        mainBgColor: '#F6F6F6',
      },
      height: {
        input: '35px',
        select: '25px',
      },
      translate: {
        ['50%']: '50%',
      },
      inset: {
        ['50%']: '50%',
      },
      outlineWidth: {
        ['10px']: '10px',
      },
      fontSize: {
        ['10px']: '10px',
      },
    },
  },
  plugins: [],
};
export default config;
