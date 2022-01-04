import { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { ChakraProvider, Link } from '@chakra-ui/react'
import '../styles/article.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WFQ64DF55H"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WFQ64DF55H');
          `}
      </Script>
      <ChakraProvider>
        <div
          style={{
            minHeight: '100vh',
            position: 'relative',
            paddingBottom: '120px',
            boxSizing: 'border-box',
          }}
        >
          <Component {...pageProps} />
          <footer
            style={{
              width: '100%',
              background: '#eeeeee',
              textAlign: 'center',
              height: '120px',
              position: 'absolute',
              bottom: 0,
              lineHeight: '120px',
            }}
          >
            <Link href="/">fluixyz</Link>
          </footer>
        </div>
      </ChakraProvider>
    </>
  )
}

export default MyApp
