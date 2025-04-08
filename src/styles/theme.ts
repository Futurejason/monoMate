import { css } from '@linaria/core';

const whiteTheme = css`
  --text-color-1: #000;
  --text-color-2: #333;
  --text-color-3: #666;

  --background-color-1: #fff;
  --background-color-2: #ddd;
`;

const blackTheme = css`
  --text-color-1: #fff;
  --text-color-2: #ddd;
  --text-color-3: #999;

  --background-color-1: #000;
  --background-color-2: #333;
`;

// const breakpoints = {
//   xs: '733px',
//   md: '1280px',
//   ml: '1520px',
// };

// export const xsDown = css`
//   @media (max-width: ${breakpoints.xs});
// `;

export const themes = {
  white: whiteTheme,
  black: blackTheme,
};
