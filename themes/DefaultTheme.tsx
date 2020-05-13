import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';

export const DefaultTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#1F8FAC',
            main: '#148AA8',
            dark: '#0F586B',
        },
        secondary: {
            light: '#85CE46',
            main: '#68AD19',
            dark: '#199319',
        },
        warning: {
            light: '#E3BD52',
            main: '#E1B137',
            dark: '#B89432',

        },
  },
  typography: {
      fontFamily: [
          'Arial',
          'Helvetica',
          'sans-serif',
      ].join(','),
  }
});