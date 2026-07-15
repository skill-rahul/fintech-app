/**
 * ============================================
 * Typography Tokens
 * ============================================
 */


// Font Family
export const fontFamily = {
  sans: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};


// Font Weights
export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};


// Font Sizes
export const fontSize = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",

  "2xl": "24px",
  "3xl": "30px",
  "4xl": "36px",
  "5xl": "48px",
};


// Line Heights
export const lineHeight = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.75,
};


// Text Styles
export const typography = {

  display: {
    fontSize: fontSize["5xl"],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
  },

  h1: {
    fontSize: fontSize["4xl"],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
  },

  h2: {
    fontSize: fontSize["3xl"],
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.normal,
  },

  h3: {
    fontSize: fontSize["2xl"],
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.normal,
  },

  body: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.normal,
  },

  caption: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.normal,
  },

  label: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
  },

};