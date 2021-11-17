import React from 'react';
import { Box, Divider, VStack, HStack, chakra, Link } from "@chakra-ui/react"

export default function Home() {
  return (
    <Box m={20}>
      <VStack spacing="30px">
        <chakra.h1 pointerEvents="none" fontSize={"4rem"} textAlign='center' >Fluixyz</chakra.h1>
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
  );
}
