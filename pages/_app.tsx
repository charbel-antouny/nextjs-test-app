import Navbar from '@/components/Navbar';
import { AppStateProvider } from '@/providers/AppState';
import '@/styles/globals.css';
import { client } from '@/utils/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <ChakraProvider>
          <AppStateProvider>
            <Navbar />
            <Component {...pageProps} />
          </AppStateProvider>
        </ChakraProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}
