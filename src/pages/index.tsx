import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>fluixyz</title>
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="description"
          content="fluixyzのブログ兼ポートフォリオサイトです。"
        ></meta>
        <meta
          name="og:description"
          content="fluixyzのブログ兼ポートフォリオサイトです。"
        ></meta>
        <meta name="og:title" content="fluixyz"></meta>
      </Head>
      <section>
        <h1 className="title-logo">fluixyz</h1>
        <ul className="top-links">
          <li>
            <Link href="/works">works</Link>
          </li>
          <li>
            <Link href="https://github.com/fluixyz-unnatural">github</Link>
          </li>
        </ul>
      </section>
    </>
  )
}
