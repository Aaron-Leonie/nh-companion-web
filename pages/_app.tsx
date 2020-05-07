import App from 'next/app';
import { DefaultTheme } from '../themes/DefaultTheme';
import { ThemeProvider } from '@material-ui/styles';

const MyApp = ({ Component, pageProps }) => {

    return (
        <ThemeProvider theme={DefaultTheme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp;