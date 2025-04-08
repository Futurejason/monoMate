const breakpointWidth = {
  lg: '1920px',
  md: '1280px',
  sm: '734px',
};

const mediaObj = {
  xl: `@media (min-width: ${breakpointWidth.lg})`,
  lg: `@media (min-width: ${breakpointWidth.md}) and (max-width: ${breakpointWidth.lg})`,
  md: `@media (min-width: ${breakpointWidth.sm}) and (max-width: ${breakpointWidth.md})`,
  sm: `@media (max-width: ${breakpointWidth.sm})`,
  lgDown: `@media (max-width: ${breakpointWidth.lg})`,
  lgUp: `@media (min-width: ${breakpointWidth.sm})`,
  mdDown: `@media (max-width: ${breakpointWidth.md})`,
  mdUp: `@media (min-width: ${breakpointWidth.sm})`,
};

export const mediaWidth = (size: keyof typeof mediaObj) => {
  return mediaObj[size];
};
