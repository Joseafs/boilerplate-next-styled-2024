import { PropsTheme } from './types';

export const theme: PropsTheme = {
  name: 'default',

  animation: {
    active: ['transform: scale(0.94); transition: unset;', 'transform: scale(0.99); transition: unset;'],
    hover: [
      `
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        transform: translateY(-4px);
      `,
    ],
    transition: ['transition: all 0.2s ease-in-out', 'transition: all 0.4s ease-in-out'],
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],

    values: {
      lg: 1280,
      md: 1024,
      sm: 768,
      xl: 1536,
      xs: 512,
    },
    width: {
      desktop: '1120px',
      mobile: '360px',
      tablet: '740px',
    },
  },
  palette: {
    mode: 'light',

    common: {
      black: 'rgb(0, 0, 0)',
      inherit: 'inherit',
      white: 'rgb(255, 255, 255)',
    },
    primary: {
      main: 'rgb(205, 35, 35)',
    },
    secondary: {
      main: 'rgb(15, 17, 21)',
    },

    error: {
      dark: 'rgb(170, 9, 9)',
      light: 'rgb(247, 109, 109)',
      main: 'rgb(194, 10, 10)',
      text: 'rgb(254, 231, 231)',
    },
    grey: {
      50: 'rgb(250, 250, 250)',
      100: 'rgb(245, 245, 245)',
      200: 'rgb(238, 238, 238)',
      300: 'rgb(224, 224, 224)',
      400: 'rgb(189, 189, 189)',
      500: 'rgb(158, 158, 158)',
      600: 'rgb(117, 117, 117)',
      700: 'rgb(102, 102, 102)',
      800: 'rgb(73, 80, 87)',
      900: 'rgb(51, 51, 51)',
      1000: 'rgb(17, 17, 17)',
    },
    info: {
      main: 'rgb(229, 236, 255)',
    },
    success: {
      main: 'rgb(8, 145, 111)',
    },
    warning: {
      main: 'rgb(254, 246, 231)',
    },

    background: {
      default: 'rgb(255, 255, 255)',
      divider: 'rgba(0,0,0,.1)',
    },
  },
  shadows: [
    'none',
    '0 4px 8px rgba(0, 0, 0, 0.1)',
    '0 -4px 8px 0 rgba(0, 0, 0, 0.08)',
    '0 0 6px 0px rgba(0, 0, 0, .4)',
    '0 6px 8px rgba(0, 0, 0, 0.2)',
  ],
  shape: {
    radius: 4,
  },
  space: 8,
  zindex: {
    appBar: 1100,
    menu: 2000,
    modal: 1300,
    screen: 1000,
    snackbar: 1400,
    tooltip: 1500,
  },
};

export default theme;
