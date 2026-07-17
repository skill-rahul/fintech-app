/**
 * ============================================
 * Motion Tokens
 * ============================================
 */


// Animation Duration
export const duration = {
  fast: "150ms",

  normal: "250ms",

  slow: "350ms",
};


// Animation Easing
export const easing = {
  linear: "linear",

  easeIn: "cubic-bezier(0.4, 0, 1, 1)",

  easeOut: "cubic-bezier(0, 0, 0.2, 1)",

  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
};


// Common Transitions
export const transition = {
  default: `${duration.normal} ${easing.easeInOut}`,

  fast: `${duration.fast} ${easing.easeOut}`,

  slow: `${duration.slow} ${easing.easeInOut}`,
};