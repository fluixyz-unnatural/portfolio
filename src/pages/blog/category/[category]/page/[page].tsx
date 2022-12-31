import Head from 'next/head'
import BlogHeader from 'src/components/BlogHeader'
import ArticleCard from 'src/components/ArticleCard'
import { MicroCMSListContent } from 'microcms-js-sdk'
import { BlogType, CategoryType } from 'src/types/microcms'
import { useRouter } from 'next/router'
import { client } from 'src/libs/client'

export const getStaticPaths = async () => {
  const paths: Array<string> = []

  const categories = await client.get({
    endpoint: 'category',
    queries: { limit: 100 },
  })
  for (let i = 0; i < categories.totalCount; i++) {
    const category = categories.contents[i]
    const articles = await client.get({
      endpoint: 'article',
      queries: {
        limit: 1000,
        filters: `category[contains]${category.id}`,
        fields: 'id',
      },
    })
    const cnt =
      articles.totalCount % 10 > 0
        ? articles.totalCount / 10 + 1
        : articles.totalCount / 10
    for (let j = 1; j <= cnt; j++)
      paths.push(`/blog/category/${category.id}/page/${j}`)
  }
  console.log(paths)
  return { paths, fallback: false }
}

interface staticPropsParams {
  category: string
  page: number
}
interface staticProps {
  params: staticPropsParams
}

export const getStaticProps = async ({ params }: staticProps) => {
  console.log({
    endpoint: 'article',
    queries: {
      limit: 10,
      orders: '-createdAt',
      offset: (Number(params.page) - 1) * 10,
      filters: 'category[contains]diary',
    },
  })
  const data = await client.get({
    endpoint: 'article',
    queries: {
      limit: 10,
      orders: '-createdAt',
      offset: (Number(params.page) - 1) * 10,
      filters: `category[contains]${params.category}`,
    },
  })

  return {
    props: {
      category: params.category,
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
  category: string
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
      publish={elm.publishedAt?.split('T')[0]!}
      revised={elm.revisedAt?.split('T')[0]!}
    />
  ))
  const router = useRouter()
  const routePage = (offset: number) => {
    let to = props.page + offset
    to = Math.max(1, to)
    to = Math.min(props.count, to)
    router.push(`/blog/category/${props.category}/page/${to}`)
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
          >
            {'|<'}
          </button>
          <button
            onClick={() => {
              routePage(-1)
            }}
            disabled={props.page == 1}
            aria-label="previous"
          >
            {'<'}
          </button>
          <button
            onClick={() => {
              routePage(1)
            }}
            aria-label="next"
            disabled={props.page == props.count}
          >
            {'>'}
          </button>
          <button
            onClick={() => {
              routePage(99999)
            }}
            aria-label="last"
            disabled={props.page == props.count}
          >
            {'>|'}
          </button>
        </div>
      </section>
    </>
  )
}

export default Page
