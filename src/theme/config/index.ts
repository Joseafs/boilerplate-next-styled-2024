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
      black: '#000',
      inherit: 'inherit',
      white: '#fff',
    },
    primary: {
      main: '#CD2323',
    },
    secondary: {
      main: '#0F1115',
    },

    error: {
      dark: '#AA0909',
      light: '#F76D6D',
      main: '#C20A0A',
      text: '#FEE7E7',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#666666',
      800: '#495057',
      900: '#333333',
      1000: '#111',
    },
    info: {
      main: '#E5ECFF',
    },
    success: {
      main: '#08916F',
    },
    warning: {
      main: '#FEF6E7',
    },

    background: {
      default: '#fff',
      divider: 'rgba(0,0,0,.1)',
      rgba: 'rgba(255,255,255,.7)',
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
