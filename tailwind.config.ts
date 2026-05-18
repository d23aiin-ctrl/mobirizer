import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', '"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
      colors: {
        primary: {
          blue: '#6366f1',
          light: '#818cf8',
          dark: '#4f46e5',
        },
        accent: {
          green: '#22c55e',
          'green-light': '#4ade80',
          teal: '#14b8a6',
          orange: '#f97316',
          purple: '#a855f7',
          pink: '#ec4899',
          cyan: '#0891b2',
          red: '#dc2626',
        },
        text: {
          dark: 'rgb(var(--text-dark) / <alpha-value>)',
          muted: 'rgb(var(--text-muted) / <alpha-value>)',
        },
        bg: {
          light: 'rgb(var(--bg-light) / <alpha-value>)',
          white: 'rgb(var(--bg-surface) / <alpha-value>)',
        },
        border: {
          DEFAULT: 'rgb(var(--border) / <alpha-value>)',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'primary-glow': '0 0 0 1px rgba(99, 102, 241, 0.4)',
        'primary-glow-hover': '0 0 0 1px rgba(99, 102, 241, 0.6)',
        'green-glow': '0 0 0 1px rgba(34, 197, 94, 0.3)',
        'purple-glow': '0 0 0 1px rgba(168, 85, 247, 0.3)',
        'orange-glow': '0 0 0 1px rgba(249, 115, 22, 0.3)',
        'cyan-glow': '0 0 0 1px rgba(8, 145, 178, 0.3)',
        'pink-glow': '0 0 0 1px rgba(236, 72, 153, 0.3)',
        'blue-glow': '0 0 0 1px rgba(59, 130, 246, 0.3)',
      },
      borderRadius: {
        xl: '10px',
        '2xl': '12px',
        '3xl': '14px',
        '4xl': '16px',
      },
      screens: {
        xs: '576px',
        sm: '768px',
        md: '992px',
        lg: '1200px',
        xl: '1400px',
        // Max-width screens for responsive design
        'max-xs': { max: '575px' },
        'max-sm': { max: '767px' },
        'max-md': { max: '991px' },
        'max-lg': { max: '1199px' },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'fade-in-left': 'fadeInLeft 0.8s ease-out',
        'fade-in-right': 'fadeInRight 0.8s ease-out',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 1.5s infinite',
        'gradient-shift': 'gradientShift 5s ease infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        'scale-in': 'scaleIn 0.5s ease-out',
        'accordion-down': 'accordionDown 0.3s ease-out',
        'accordion-up': 'accordionUp 0.3s ease-out',
        marquee: 'marquee linear infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          from: { opacity: '0', transform: 'translateX(40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        accordionDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        accordionUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
        'gradient-hero': 'linear-gradient(180deg, #08080a 0%, #0f0f14 60%, #151523 100%)',
        'gradient-stats': 'linear-gradient(180deg, #08080a 0%, #0f0f14 100%)',
        'gradient-footer': 'linear-gradient(180deg, #05050a 0%, #0a0a10 100%)',
        'gradient-green': 'linear-gradient(135deg, #22c55e 0%, #4ade80 100%)',
        'gradient-purple': 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
        'gradient-orange': 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
        'gradient-red': 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
        'gradient-whatsapp': 'linear-gradient(135deg, #128C7E 0%, #25d366 100%)',
        'gradient-whatsapp-commerce': 'linear-gradient(135deg, #075e54 0%, #25d366 100%)',
        'gradient-pink': 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
        'gradient-teal': 'linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%)',
        'gradient-amber': 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
        'gradient-blue': 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};

export default config;
