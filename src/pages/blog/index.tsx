import React from "react"
import { Box, VStack } from "@chakra-ui/react"
import ArticleCard from "src/components/articleCard";
import { client } from "../../libs/client"
import BlogHeader from "src/components/blogHeader";
import { MicroCMSListContent, MicroCMSListResponse } from "microcms-js-sdk";
import { BlogType, CategoryType } from "src/types/microcms";
import Head from "next/head";

export const getStaticProps = async () => {
    const data: MicroCMSListResponse<BlogType> = await client.get({
        endpoint: 'article',
    })

    return ({
        props: {
            articles: data.contents,
        }
    })
}

interface BlogProps {
    articles: (BlogType & MicroCMSListContent)[]
}

function Blog({ articles }: BlogProps) {
    console.log(articles)
    const cards = articles.map((elm: BlogType & MicroCMSListContent) => (
        <ArticleCard
            key={elm.id}
            title={elm.title}
            tag={elm.category.map((cat: CategoryType & MicroCMSListContent) => cat.name)}
            to={`/blog/${elm.id}`}
            thumbnail={elm.thumbnail.url}
            publish={elm.publishedAt.split('T')[0]}
            revised={elm.revisedAt.split('T')[0]}
        />
    ))
    return (
        <>
            <Head>
                <title>{"fluixyz's log"}</title>
                <meta name="description" content="fluixyzのブログ"></meta>
                <meta name="og:description" content="fluixyzのブログ"></meta>
                <meta name="og:title" content="fluixyz's log"></meta>
            </Head>
            <BlogHeader />
            <Box m="1rem">
                <VStack maxW="630px" m="auto" >
                    {cards}
                </VStack>
            </Box>
        </>
    )
}

export default Blog;