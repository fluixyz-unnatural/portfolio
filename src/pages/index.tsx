import React from 'react';
import { Box, VStack, chakra, Link } from "@chakra-ui/react"

export default function Home() {
  return (
    <div>
      <chakra.h1 pointerEvents="none" fontSize={32} textAlign='center'>Fluixyz</chakra.h1>
      <VStack>
        <Box><Link href="/blog">blog</Link></Box>
        <Box><Link href="/works">works</Link></Box>
      </VStack>
    </div>
  );
}
