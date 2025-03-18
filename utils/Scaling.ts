import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const SCREEN_SIZE = Math.sqrt(width * height); // Diagonal size approximation

// Define breakpoints
const BREAKPOINTS = {
  smallPhone: 600, // Small phones (e.g., iPhone SE)
  mediumPhone: 900, // Medium phones (e.g., Pixel 6, iPhone 12)
  largePhone: 1200, // Large phones (e.g., iPhone 14 Pro Max)
  tablet: 1600, // Small tablets (e.g., iPad Mini)
  largeTablet: 2200, // Large tablets (e.g., iPad Pro 12.9)
};

/**
 * Scales size based on predefined breakpoints.
 * Ensures UI consistency across all screen sizes.
 * @param {number} size - The base size to scale.
 * @returns {number} - Scaled size based on the current screen.
 */
const ScaleSize = (size: number): number => {
  if (SCREEN_SIZE < BREAKPOINTS.smallPhone) return size * 0.8; // Extra small devices
  if (SCREEN_SIZE < BREAKPOINTS.mediumPhone) return size * 1.0; // Small to medium phones
  if (SCREEN_SIZE < BREAKPOINTS.largePhone) return size * 1.1; // Large phones
  if (SCREEN_SIZE < BREAKPOINTS.tablet) return size * 1.3; // Small tablets
  if (SCREEN_SIZE < BREAKPOINTS.largeTablet) return size * 1.6; // Large tablets
  return size * 1.9; // Extra-large screens
};

export default ScaleSize;
