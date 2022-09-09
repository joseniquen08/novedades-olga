import '@fontsource/amatic-sc';
import '@fontsource/poppins';

import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from '@store/index';
import '@theme/styles.css';
import theme from '@theme/theme.chakra';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import client from '../apollo-client';

function App ({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title>Novedades Olga</title>
        <meta name="description" content="Tienda electrónica." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ChakraProvider>
      </ApolloProvider>
    </>
  )
}

export default App;
