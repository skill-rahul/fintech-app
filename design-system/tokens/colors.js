/**
 * ============================================
 * Primitive Color Tokens
 * ============================================
 */

export const primitiveColors = {
  blue: {
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#3B82F6",
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A8A",
    950: "#172554",
  },

  gray: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
    950: "#020617",
  },

  green: {
    50: "#F0FDF4",
    100: "#DCFCE7",
    200: "#BBF7D0",
    300: "#86EFAC",
    400: "#4ADE80",
    500: "#22C55E",
    600: "#16A34A",
    700: "#15803D",
    800: "#166534",
    900: "#14532D",
    950: "#052E16",
  },

  amber: {
    50: "#FFFBEB",
    100: "#FEF3C7",
    200: "#FDE68A",
    300: "#FCD34D",
    400: "#FBBF24",
    500: "#F59E0B",
    600: "#D97706",
    700: "#B45309",
    800: "#92400E",
    900: "#78350F",
    950: "#451A03",
  },

  red: {
    50: "#FEF2F2",
    100: "#FEE2E2",
    200: "#FECACA",
    300: "#FCA5A5",
    400: "#F87171",
    500: "#EF4444",
    600: "#DC2626",
    700: "#B91C1C",
    800: "#991B1B",
    900: "#7F1D1D",
    950: "#450A0A",
  },

  sky: {
    50: "#F0F9FF",
    100: "#E0F2FE",
    200: "#BAE6FD",
    300: "#7DD3FC",
    400: "#38BDF8",
    500: "#0EA5E9",
    600: "#0284C7",
    700: "#0369A1",
    800: "#075985",
    900: "#0C4A6E",
    950: "#082F49",
  },

  white: "#FFFFFF",
  black: "#000000",
};

/**
 * ============================================
 * Semantic Color Tokens
 * ============================================
 */

export const semanticColors = {
  primary: {
    light: primitiveColors.blue[100],
    main: primitiveColors.blue[600],
    dark: primitiveColors.blue[700],
  },

  secondary: {
    light: primitiveColors.gray[100],
    main: primitiveColors.gray[600],
    dark: primitiveColors.gray[800],
  },

  success: {
    light: primitiveColors.green[100],
    main: primitiveColors.green[600],
    dark: primitiveColors.green[700],
  },

  warning: {
    light: primitiveColors.amber[100],
    main: primitiveColors.amber[500],
    dark: primitiveColors.amber[700],
  },

  danger: {
    light: primitiveColors.red[100],
    main: primitiveColors.red[600],
    dark: primitiveColors.red[700],
  },

  info: {
    light: primitiveColors.sky[100],
    main: primitiveColors.sky[600],
    dark: primitiveColors.sky[700],
  },

  background: {
    primary: primitiveColors.white,
    secondary: primitiveColors.gray[50],
  },

  surface: {
    primary: primitiveColors.white,
    secondary: primitiveColors.gray[100],
  },

  border: {
    light: primitiveColors.gray[200],
    medium: primitiveColors.gray[300],
    dark: primitiveColors.gray[400],
  },

  text: {
    primary: primitiveColors.gray[900],
    secondary: primitiveColors.gray[600],
    muted: primitiveColors.gray[500],
    inverse: primitiveColors.white,
  },
};