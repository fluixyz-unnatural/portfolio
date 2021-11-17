import React from "react"
import { useRouter } from "next/dist/client/router"
import { Box, Heading, Text, VStack, Divider } from "@chakra-ui/react"
import { client } from "../../libs/client"

export const getStaticPaths = async () => {
    const data = await client.get({
        endpoint: 'article',
        queries: { fields: 'id' }
    })
    const paths = data.contents.map((elm:any) => '/blog/' + elm.id)
    return { paths, fallback: false }
}

export const getStaticProps = async ({ params }:any) => {
    const data = await client.get({
        endpoint: 'article',
        queries: { ids: params.id }
    })

    return ({
        props: {
            article: data.contents[0],
        }
    })
}

function Article({ article }) {
    console.log(article)
    return (
        <Box mt={10}>
            <VStack>
                <Heading>
                    {article.title}
                </Heading>
                <Divider />
                <Text>カテゴリ: {article.category.map((elm) => elm.name)}</Text>
                <Text>published: {article.publishedAt}</Text>
                <div dangerouslySetInnerHTML={{
                    __html: `${article.article}`,
                }} />
            </VStack>
        </Box>
    )
}

export default Article