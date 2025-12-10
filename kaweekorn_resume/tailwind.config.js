/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom Colors matching your design system
      colors: {
        primary: {
          DEFAULT: '#FAFAF9',
          dark: '#374151'
        },
        secondary: '#6366F1',
        accent: '#EF4444',
        gold: '#D4AF37',            // gold hover color
        bronze: '#C5A059',          // bronze border color
        cream: '#FAFAF9',           
        'cream-alt': '#F3F4F6',     
        navy: '#0A2341',            // navbar text color
        charcoal: '#1A1A1A'         // main text color
      },
      // Custom spacing for your grid system
      spacing: {
        'gutter': '1.5rem',     // 24px
        'margin': '5rem',       // 80px
        '2.25': '2.25rem',      // 36px - padding ฝั่งละ
        'xl': '3rem',           // 48px
        '2xl': '4rem',          // 64px
        '3xl': '5rem',          // 80px
        '4xl': '6rem',          // 96px
        '18': '4.5rem',         // 72px
        '88': '22rem',          // 352px
        '128': '32rem'          // 512px
      },
      // Container settings for your 12-column grid
      maxWidth: {
        'container': '1440px',  // Your content width
        'grid': '90rem'         // 1440px in rem
      },
      // Custom Font Sizes
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1' }],
        'section-title': ['2.25rem', { lineHeight: '1.2' }],
        'card-title': ['1.25rem', { lineHeight: '1.3' }]
      },
      // Custom Font Families - Your Design System
      fontFamily: {
        'heading': ['"Playfair Display"', 'serif'],     // Elegant serif for headings
        'body': ['system-ui', 'sans-serif'],           // Clean sans-serif for body
        'mono': ['"JetBrains Mono"', 'Consolas', 'Monaco', 'monospace'], // Code font
        'display': ['"Playfair Display"', 'serif'],    // Same as heading, for clarity
      },
      // Grid gap that matches your gutter
      gap: {
        'gutter': '1.5rem'      // 24px
      }
    },
  },
  plugins: [],
}

