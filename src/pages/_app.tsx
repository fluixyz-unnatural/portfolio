import { AppProps } from 'next/app'
import Link from 'next/link'
import '../styles/index.css'
import 'src/styles/article.css'
import 'src/styles/top.css'
import 'src/styles/blog.css'
import 'src/styles/works.css'
import { useRouter } from 'next/router'
import { Fjalla_One } from '@next/font/google'
import { useEffect, useRef } from 'react'
import GoogleTagManager from 'src/components/GoogleTagManager'

const Fjalla_One_normal = Fjalla_One({
  weight: '400',
  display: 'swap',
})

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
      <GoogleTagManager googleTagManagerId="GTM-WMGB7PX" />
      <div ref={focusDummy} className="focus-dummy" tabIndex={-1}>
        focus
      </div>
      <main
        style={{ '--fjalla_one': Fjalla_One_normal.style.fontFamily } as any}
      >
        <Component {...pageProps} />
        <footer className="footer">
          <Link href="/">fluixyz</Link>
        </footer>
      </main>
    </>
  )
}

export default MyApp
