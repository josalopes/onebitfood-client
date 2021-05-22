import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import { RecoilRoot } from 'recoil';

import '../styles/globals.scss'

import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OneBitFood V2</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <main>
        <RecoilRoot>
          <Header />
          <Container className='mt-6'>
              <Component {...pageProps} />
          </Container>
        </RecoilRoot>
      </main>
    </>
  )
}

export default MyApp
