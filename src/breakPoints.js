// constants.js

// For this example, I'm going mobile-first.
const BREAKPOINTS = {
  phone: 37.5,
  tablet: 59.375,
  laptop: 81.25,
};

export const QUERIES = {
  phoneAndUp: `(min-width: ${BREAKPOINTS.phone}px)`,
  tabletAndUp: `(min-width: ${BREAKPOINTS.tablet}px)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptop}px)`,
};
