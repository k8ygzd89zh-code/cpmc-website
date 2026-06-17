import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        metallic: {
          silver: '#888888',
          light: '#555555',
          dark: '#333333',
          gold: '#C8A951',
          rose: '#B76E79',
          bronze: '#CD7F32',
        },
        space: {
          black: '#FFFFFF',
          dark: '#F5F5F7',
          card: '#FFFFFF',
          border: '#E5E5E7',
        },
        accent: {
          primary: '#C8A951',
          secondary: '#1A3A5C',
          warm: '#D4887A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        chinese: ['"Noto Sans SC"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(200, 169, 81, 0.1)' },
          '100%': { boxShadow: '0 0 40px rgba(200, 169, 81, 0.25)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'metal-gradient': 'linear-gradient(135deg, #1a3a5c 0%, #2a5a8c 50%, #1a3a5c 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C8A951 0%, #F0D68A 50%, #C8A951 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
