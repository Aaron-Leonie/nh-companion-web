import { createMuiTheme } from '@material-ui/core/styles';

export const DefaultTheme = createMuiTheme({
    overrides: {
        MuiFormLabel: {
            root: {
                color: '#148AA8',
            }
        },
        MuiTextField: {
            root: {
                color: '#148AA8', 
            },
        }
    },
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
        text: {
            primary: '#148AA8',
            secondary: '#68AD19',
            disabled: '#EEF7FF',
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