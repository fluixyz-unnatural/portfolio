import { AppProps } from 'next/app'
import Link from 'next/link'
import Script from 'next/script'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/article.css'
import '../styles/index.css'

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
        <main>
          <Component {...pageProps} />
          <footer className="footer">
            <Link href="/">fluixyz</Link>
          </footer>
        </main>
      </ChakraProvider>
    </>
  )
}

export default MyApp
