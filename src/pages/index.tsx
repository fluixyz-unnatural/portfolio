import React from 'react';
import Head from 'next/head'
import { Box, Divider, VStack, HStack, chakra, Link } from "@chakra-ui/react"

export default function Home() {
  return (
    <>
      <Head>
        <title>fluixyz</title>
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="description" content="fluixyzのブログ兼ポートフォリオサイトです。"></meta>
        <meta name="og:description" content="fluixyzのブログ兼ポートフォリオサイトです。"></meta>
        <meta name="og:title" content="fluixyz"></meta>
      </Head>
      <Box p={[10,20]}>
        <VStack h={["50vh"]} justify="space-between">
          <chakra.h1 fontFamily={"Fjalla One"} pointerEvents="none" fontSize={"4rem"} textAlign='center' >fluixyz</chakra.h1>
          <Divider />
          <VStack fontSize="1.5rem" spacing="2rem" >
            <Link href="/blog/page/1">blog</Link>
            <Link href="/works">works</Link>
            <Link href="https://github.com/fluixyz-unnatural">github</Link>
            <Link href="https://twitter.com/higara333">twitter</Link>
          </VStack>
        </VStack>
      </Box>
    </>
  );
}
