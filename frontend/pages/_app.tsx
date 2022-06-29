import '@fontsource/amatic-sc/700.css';
import '@fontsource/poppins/400.css';

import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import client from '../apollo-client';
import theme from '../theme/theme.chakra';

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
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </>
  )
}

export default App;
