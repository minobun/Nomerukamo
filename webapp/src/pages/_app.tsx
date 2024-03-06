import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider>
      <Head>
        <title>のめるかも</title>
      </Head>
      <Component {...pageProps} />
    </AppCacheProvider>
  );
}
