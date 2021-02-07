const breakpoints = {
  xs: '575px',
  sm: '767px',
  md: '991px',
  lg: '1199px',
};

export const respondAbove = {
  xs: `@media screen and (min-width: ${breakpoints.xs})`,
  sm: `@media screen and (min-width: ${breakpoints.sm})`,
  md: `@media screen and (min-width: ${breakpoints.md})`,
  lg: `@media screen and (min-width: ${breakpoints.lg})`,
};
