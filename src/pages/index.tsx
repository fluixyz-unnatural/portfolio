import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Box, Divider, VStack, chakra } from '@chakra-ui/react'

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
            <Link href="/blog/page/1">blog</Link>
          </li>
          <li>
            <Link href="/works">works</Link>
          </li>
          <li>
            <Link href="https://github.com/fluixyz-unnatural">github</Link>
          </li>
          <li>
            <Link href="https://twitter.com/higara333">twitter</Link>
          </li>
        </ul>
      </section>
    </>
  )
}
