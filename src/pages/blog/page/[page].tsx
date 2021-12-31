import Head from "next/head"
import { Box, VStack, HStack, IconButton, useBreakpointValue } from "@chakra-ui/react"
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import BlogHeader from "src/components/BlogHeader"
import ArticleCard from "src/components/ArticleCard"
import Profile from "src/components/Profile"
import { MicroCMSListContent } from "microcms-js-sdk"
import { BlogType, CategoryType } from "src/types/microcms"
import { useRouter } from "next/router"
import { client } from "src/libs/client"

export const getStaticPaths = async () => {
    const articles = await client.get({
        endpoint: 'article',
        queries: { fields: 'id' }
    })
    const cnt = articles.totalCount % 10 > 0 ? articles.totalCount / 10 + 1 : articles.totalCount / 10
    const paths: Array<string> = []
    for (let i = 1; i <= cnt; i++)paths.push(`/blog/page/${i}`)
    return ({ paths, fallback: false })
}

interface staticPropsParams {
    page: number;
}
interface staticProps {
    params: staticPropsParams;
}

export const getStaticProps = async ({ params }: staticProps) => {
    const data = await client.get({
        endpoint: 'article',
        queries: { limit: 10, orders: '-createdAt', offset: (Number(params.page) - 1) * 10 }
    })
    return ({
        props: {
            page: Number(params.page),
            count: data.totalCount % 10 > 0 ? Math.floor(data.totalCount / 10) + 1 : Math.floor(data.totalCount / 10),
            articles: data.contents
        }
    })
}

interface PageProps {
    page: number;
    count: number;
    articles: (BlogType & MicroCMSListContent)[]
}

const Page = (props: PageProps) => {
    const cards = props.articles.map((elm: BlogType & MicroCMSListContent) => (
        <ArticleCard
            key={elm.id}
            title={elm.title}
            tag={elm.category.map((cat: CategoryType & MicroCMSListContent) => {return {id: cat.id,name:cat.name}})}
            to={`/blog/${elm.id}`}
            thumbnail={elm.thumbnail ? elm.thumbnail.url : "/404.png"}
            publish={elm.publishedAt.split('T')[0]}
            revised={elm.revisedAt.split('T')[0]}
        />
    ))
    const isDesktop = useBreakpointValue({base:false,md:true})
    const router = useRouter()
    const routePage = (offset: number) => {
        let to = props.page + offset
        to = Math.max(0, to)
        to = Math.min(props.count, to)
        router.push(`/blog/page/${to}`)
    }
    return (
        <>
            <Head>
                <title>{"fluixyz's log"}</title>
                <meta name="og:type" content="website" />
                <meta name="twitter:card" content="summary" />
                <meta name="description" content="fluixyzのブログ"></meta>
                <meta name="og:description" content="fluixyzのブログ"></meta>
                <meta name="og:title" content="fluixyz's log"></meta>
            </Head>
            <BlogHeader />
            <Box width={["100%","80%"]} maxW="1280px" margin="auto" >
                <HStack align="start" justify={"center"} spacing={4}>
                    <VStack maxW="630px" spacing={4} >
                        {cards}
                        <HStack maxW="630px" m="auto" mb="2rem" justify="space-between" width="100%" pb="30px">
                            <IconButton onClick={() => { routePage(-99999) }} isDisabled={props.page == 1} w="100%" aria-label="first" icon={<ArrowLeftIcon />} />
                            <IconButton onClick={() => { routePage(-1) }} isDisabled={props.page == 1} w="100%" aria-label="previous" icon={<ChevronLeftIcon />} />
                            <IconButton onClick={() => { routePage(1) }} isDisabled={props.page == props.count} w="100%" aria-label="next" icon={<ChevronRightIcon />} />
                            <IconButton onClick={() => { routePage(99999) }} isDisabled={props.page == props.count} w="100%" aria-label="last" icon={<ArrowRightIcon />} />
                        </HStack>
                    </VStack>
                    {isDesktop?<Profile />:""}
                </HStack>
            </Box>
        </>
    )
}

export default Page