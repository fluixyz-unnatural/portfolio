import { AppProps } from 'next/app'
import Link from 'next/link'
import Script from 'next/script'
import '../styles/index.css'
import 'src/styles/article.css'
import 'src/styles/top.css'
import 'src/styles/blog.css'
import 'src/styles/works.css'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const focusDummy = useRef<HTMLDivElement>(null)
  useEffect(() => {
    router.events.on('routeChangeComplete', (e) => {
      if (focusDummy.current) {
        focusDummy.current.focus()
        focusDummy.current.blur()
      }
    })
  }, [router])
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
      <div ref={focusDummy} className="focus-dummy" tabIndex={-1}>
        focus
      </div>
      <main>
        <Component {...pageProps} />
        <footer className="footer">
          <Link href="/">fluixyz</Link>
        </footer>
      </main>
    </>
  )
}

export default MyApp
