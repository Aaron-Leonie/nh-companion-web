import App from 'next/app';
import { DefaultTheme } from '../themes/DefaultTheme';
import { ThemeProvider } from '@material-ui/styles';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from '../lib/apolloClient';
import '../styles.css';

const MyApp = ({ Component, pageProps }) => {

    return (
        <ApolloProvider client={client} >
            <ThemeProvider theme={DefaultTheme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </ApolloProvider>
    )
}

export default MyApp;