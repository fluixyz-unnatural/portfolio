import Head from 'next/head'
import BlogHeader from 'src/components/BlogHeader'
import ArticleCard from 'src/components/ArticleCard'
import { MicroCMSListContent } from 'microcms-js-sdk'
import { BlogType, CategoryType } from 'src/types/microcms'
import { useRouter } from 'next/router'
import { client } from 'src/libs/client'

export const getStaticPaths = async () => {
  const articles = await client.get({
    endpoint: 'article',
    queries: { fields: 'id' },
  })
  const cnt =
    articles.totalCount % 10 > 0
      ? articles.totalCount / 10 + 1
      : articles.totalCount / 10
  const paths: Array<string> = []
  for (let i = 1; i <= cnt; i++) paths.push(`/blog/page/${i}`)
  return { paths, fallback: false }
}

interface staticPropsParams {
  page: number
}
interface staticProps {
  params: staticPropsParams
}

export const getStaticProps = async ({ params }: staticProps) => {
  const data = await client.get({
    endpoint: 'article',
    queries: {
      limit: 10,
      orders: '-publishedAt',
      offset: (Number(params.page) - 1) * 10,
    },
  })
  return {
    props: {
      page: Number(params.page),
      count:
        data.totalCount % 10 > 0
          ? Math.floor(data.totalCount / 10) + 1
          : Math.floor(data.totalCount / 10),
      articles: data.contents,
    },
  }
}

interface PageProps {
  page: number
  count: number
  articles: (BlogType & MicroCMSListContent)[]
}

const Page = (props: PageProps) => {
  const cards = props.articles.map((elm: BlogType & MicroCMSListContent) => (
    <ArticleCard
      key={elm.id}
      title={elm.title}
      tag={elm.category.map((cat: CategoryType & MicroCMSListContent) => {
        return { id: cat.id, name: cat.name }
      })}
      to={`/blog/${elm.id}`}
      thumbnail={elm.thumbnail ? elm.thumbnail.url : '/404.png'}
      publish={elm.publishedAt.split('T')[0]}
      revised={elm.revisedAt.split('T')[0]}
    />
  ))
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
      <section className="blog-section">
        {cards}
        <div className="blog-pagination">
          <button
            onClick={() => {
              routePage(-99999)
            }}
            disabled={props.page == 1}
            aria-label="first"
          >{`|<`}</button>
          <button
            onClick={() => {
              routePage(-1)
            }}
            disabled={props.page == 1}
            aria-label="previous"
          >{`<`}</button>
          <button
            onClick={() => {
              routePage(1)
            }}
            disabled={props.page == props.count}
            aria-label="next"
          >{`>`}</button>
          <button
            onClick={() => {
              routePage(99999)
            }}
            disabled={props.page == props.count}
            aria-label="last"
          >{`>|`}</button>
        </div>
      </section>
    </>
  )
}

export default Page
