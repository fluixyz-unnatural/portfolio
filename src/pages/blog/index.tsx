import React from "react"
import { Box, chakra, VStack, Heading } from "@chakra-ui/react"
import ArticleCard from "src/components/articleCard";
import { client } from "../../libs/client"

export const getStaticProps = async () => {
    const data = await client.get({
        endpoint: 'article',
    })

    return ({
        props: {
            articles: data.contents,
        }
    })
}

function Blog({ articles }) {
    console.log(articles)
    const cards = articles.map((elm) => (<ArticleCard title={elm.title} summary="" to={`/blog/${elm.id}`} thumbnail={elm.thumbnail.url} />))
    return (
        <Box m="10">
            <Heading>{"Fluixyz's blog"}</Heading>
            <VStack mx="10">
                {cards}
            </VStack>

        </Box>
    )
}

export default Blog;