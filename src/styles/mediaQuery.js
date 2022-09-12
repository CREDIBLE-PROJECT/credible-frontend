/* eslint-disable import/no-unresolved */
const deviceBreakPoints = {
  mobile: 767,
  tablet: { min: 768, max: 1023 },
  desktop: 1024,
};

const deviceQuery = {
  mobile: `(max-width:${deviceBreakPoints.mobile}px)`,
  tablet: `(min-width:${deviceBreakPoints.tablet.min}px) and (max-width: ${deviceBreakPoints.tablet.max}px)`,
  desktop: `(min-width:${deviceBreakPoints.desktop}px)`,
};

const { mobile, tablet, desktop } = deviceQuery;

export const deviceMediaQuery = {
  mobile: `screen and ${mobile}`,
  tablet: `screen and ${tablet}`,
  desktop: `screen and ${desktop}`,
};

export const applyMediaQuery = device => `@media ${deviceMediaQuery[device]}`;
