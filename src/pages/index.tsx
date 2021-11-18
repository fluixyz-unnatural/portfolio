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
      <Box m={20}>
        <VStack spacing="30px">
          <chakra.h1 fontFamily={"Fjalla One"} pointerEvents="none" fontSize={"4rem"} textAlign='center' >fluixyz</chakra.h1>
          <Divider />
          <VStack>
            <Box ><Link fontSize="1.5rem" href="/blog">blog</Link></Box>
            <Box><Link fontSize="1.5rem" href="/works">works</Link></Box>
          </VStack>
          <Divider />
          <HStack>
            <Link href="https://github.com/fluixyz-unnatural">github</Link>
            <Link href="https://twitter.com/higara333">twitter</Link>
          </HStack>
        </VStack>
      </Box>
    </>
  );
}
