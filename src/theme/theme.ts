import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      primaryHover: string;
      fontColorPrimary: string;
      fontColorSecondary: string;
      blue: string;
      blueHover: string;
      green: string;
      greenHover: string;
      red: string;
    };
    colorsRGB: {
      white: string;
    };
  }
}

// Theme
const theme = {
  // Colors
  colors: {
    // --- Theme Light ---
    // Backgrounds Colors
    primary: '#E4E6EB',
    secondary: '#FFFFFF',
    tertiary: '#F0F2F5',

    // Hovers - BgColors
    primaryHover: '#D8DADF',

    // Font Color
    fontColorPrimary: '#050505',
    fontColorSecondary: '#B0B3B8',

    // --- Theme Dark ---
    // Backgrounds Colors
    // primary: '#3A3B3C',
    // secondary: '#242526',
    // tertiary: '#18191A',

    // Hovers - BgColors
    // primaryHover: '#4E4F50',

    // Font Color
    // fontColorPrimary: '#E4E6EB',
    // fontColorSecondary: '#B0B3B8',

    // General Colors
    blue: '#1877F2',
    blueHover: '#1771E6',
    green: '#42B72A',
    greenHover: '#36A420',
    red: '#F02849',
  },
  colorsRGB: {
    white: '255,255,255',
  },
};

export default theme;
