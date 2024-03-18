'use client';

import { createGlobalStyle } from 'styled-components';

import { PropsRootTheme } from './types';

const rootPathFonts = '/fonts/';

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 400;
    src: url('${rootPathFonts}quicksand/Quicksand-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 600;
    src: url('${rootPathFonts}quicksand/Quicksand-SemiBold.ttf') format('truetype');
  }

  :root {
    --primary: ${({ theme }: PropsRootTheme) => theme.palette.primary.main};
    --secondary: ${({ theme }: PropsRootTheme) => theme.palette.secondary.main};
  }

  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  body {
    word-wrap: break-word;
    word-break: normal;
    min-width: 320px;
    max-width: 100%;
    min-height: 100%;
    margin: 0;
    font-family: 'Quicksand';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button,
  div,
  
  a {
    outline: none;
  }

  /* ------------------ */
  /* Select Shadows */
  ::selection {
    background: rgba(0, 0, 0, 0.3);
  }
  ::-moz-selection {
    background: rgba(0, 0, 0, 0.5);
  }
  /* ------------------ */
  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--primary);
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background-color: var(--secondary);
  }
`;
