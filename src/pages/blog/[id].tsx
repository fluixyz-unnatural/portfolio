import React from 'react'
import { Box, Heading, Text, VStack, HStack } from '@chakra-ui/react'
import { client } from '../../libs/client'
import BlogHeader from 'src/components/BlogHeader'
import { MicroCMSListContent } from 'microcms-js-sdk'
import { BlogType, MicroCMSIdsList, IdObject } from 'src/types/microcms'
import Head from 'next/head'
import TweetButton from 'src/components/TweetButton'

export const getStaticPaths = async () => {
  const data: MicroCMSIdsList = await client
    .get({
      endpoint: 'article',
      queries: { fields: 'id', limit: 1000 },
    })
    .catch((err) => {
      console.log(err)
      console.log(err.message)
    })
  const paths = data.contents.map((elm: IdObject) => '/blog/' + elm.id)
  return { paths, fallback: false }
}

interface staticPropsParams {
  id: string
}
interface staticProps {
  params: staticPropsParams
}

export const getStaticProps = async ({ params }: staticProps) => {
  const data = await client.get({
    endpoint: 'article',
    queries: { ids: params.id },
  })

  return {
    props: {
      article: data.contents[0],
    },
  }
}

interface Props {
  article: BlogType & MicroCMSListContent
}

function Article({ article }: Props) {
  return (
    <>
      <Head>
        <title>{`${article.title} | fluixyz'log`}</title>
        <meta name="og:type" content="article" />
        <meta name="twitter:card" content="summary" />
        <meta name="og:image" content={`${article.thumbnail}`} />
        <meta name="og:title" content={`${article.title} | fluixyz'log`} />
      </Head>
      <BlogHeader />
      <Box mt={10} maxW="630px" m="auto" mb={16}>
        <VStack align="flex-start" spacing="2rem" m="20px">
          <Box>
            <Heading mb="1rem" fontSize="1.6rem" textAlign="left">
              {article.title}
            </Heading>
            <HStack>
              <Text fontSize="sm">
                published: {article.publishedAt.split('T')[0]}
              </Text>
              <Text fontSize="sm">
                revised: {article.revisedAt.split('T')[0]}
              </Text>
              <Text fontSize="sm">
                カテゴリ: {article.category.map((elm: any) => elm.name)}
              </Text>
            </HStack>
          </Box>
          <Box>
            <div
              className="blog-article"
              dangerouslySetInnerHTML={{
                __html: `${article.article}`,
              }}
            />
          </Box>
          <HStack justify={'end'} w={'full'} px={4}>
            <TweetButton />
          </HStack>
        </VStack>
      </Box>
    </>
  )
}

export default Article
