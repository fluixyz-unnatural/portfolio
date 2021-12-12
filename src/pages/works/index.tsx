import { Wrap } from "@chakra-ui/layout";
import Head from "next/head";
import WorkCard from "src/components/WorkCard";
import WorksHeader from "src/components/WorksHeader";
import { client } from "src/libs/client";
import { WorkType } from "src/types/microcms";

interface WorkResponse {
    contents: WorkType
    totalCount: number,
    offset: number,
    limit: number
}

export const getStaticProps = async () => {
    const data: WorkResponse = await client
        .get({
            endpoint: 'works',
        })
    return ({
        props: {
            works: data.contents,
        }
    })
}

interface WorkProps {
    works: WorkType[]
}

const Works = ({ works }: WorkProps) => {
    const cards = works.map((elm: WorkType) => (
        <WorkCard
            key={elm.id}
            title={elm.title}
            summary={elm.summary}
            thumbnail={elm.thumbnail.url}
            tags={elm.tags.map((tag) => tag.name)}
            blog={elm.blog.id}
        />
    ))
    return (
        <>
            <Head>
                <title>{"fluixyz's works"}</title>
                <meta name="og:type" content="website" />
                <meta name="twitter:card" content="summary" />
                <meta name="description" content="fluixyzのポートフォリオ"></meta>
                <meta name="og:description" content="fluixyzのポートフォリオ"></meta>
                <meta name="og:title" content="fluixyz's works"></meta>
            </Head>
            <WorksHeader />
            <Wrap maxW="1280px" p={3} spacing={3} m="auto" justify="center">
                {cards}
            </Wrap>
        </>
    )
}

export default Works;