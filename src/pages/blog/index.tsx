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

function Blog({ articles }: any) {
    console.log(articles)
    const cards = articles.map((elm: any) => (
        <ArticleCard
            key={elm.id}
            title={elm.title}
            tag={elm.category.map((cat:any) => cat.name)}
            to={`/blog/${elm.id}`}
            thumbnail={elm.thumbnail.url}
        />
    ))
    return (
        <Box m="10">
            <Heading mb={6}>{"Fluixyz's blog"}</Heading>
            <VStack mx="10">
                {cards}
            </VStack>

        </Box>
    )
}

export default Blog;