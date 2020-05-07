import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';

export const DefaultTheme = createMuiTheme({
    palette: {
        primary: {
        // Purple and green play nicely together.
            main: '#11cb5f',
        },
        secondary: {
        // This is green.A700 as hex.
            main: '#11cb5f',
        },
  },
});