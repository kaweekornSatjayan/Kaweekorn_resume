// Design System Constants - Synchronized with design-system.css
// Use this for component props and JavaScript calculations

export const COLORS = {
  primary: '#FAFAF9',      // Same as --color-primary
  primaryDark: '#374151',  // Same as --color-primary-dark
  secondary: '#6366F1',    // Same as --color-secondary
  accent: '#EF4444',       // Same as --color-accent
  text: {
    primary: '#1A1A1A',     // Same as --color-text-primary
    secondary: '#0A2341'    // Same as --color-text-secondary
  },
  background: {
    primary: '#FAFAF9',     // Same as --color-background
    alt: '#F3F4F6'         // Same as --color-background-alt
  }
} as const;

export const TYPOGRAPHY = {
  fontFamily: {
    heading: '"Playfair Display", serif',           // Same as --font-family-heading
    body: 'system-ui, sans-serif',                 // Same as --font-family-body
    mono: '"JetBrains Mono", Consolas, Monaco, monospace' // Same as --font-family-mono
  },
  fontSize: {
    hero: '3.5rem',    // Same as --font-size-hero
    h1: '2.25rem',     // Same as --font-size-h1
    h2: '1.875rem',    // Same as --font-size-h2
    h3: '1.5rem',      // Same as --font-size-h3
    body: '1rem',      // Same as --font-size-body
    small: '0.875rem'  // Same as --font-size-small
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700'
  }
} as const;

export const SPACING = {
  gutter: '1.5rem',   // Same as --space-gutter (24px)
  margin: '5rem',     // Same as --space-margin (80px)
  xs: '0.25rem',      // Same as --space-xs (4px)
  sm: '0.5rem',       // Same as --space-sm (8px)
  md: '1rem',         // Same as --space-md (16px)
  lg: '2rem',         // Same as --space-lg (32px)
  xl: '3rem',         // Same as --space-xl (48px)
  '2xl': '4rem',      // Same as --space-2xl (64px)
  '3xl': '5rem'       // Same as --space-3xl (80px)
} as const;

export const GRID = {
  containerMaxWidth: '1280px',  // Same as --container-max-width
  columns: 12,                  // Same as --grid-columns
  gutter: '1.5rem',            // Same as --grid-gutter
  margin: '5rem'               // Same as --grid-margin
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
} as const;