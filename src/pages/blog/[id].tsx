import React from 'react'
import { client } from '../../libs/client'
import BlogHeader from 'src/components/BlogHeader'
import { MicroCMSListContent } from 'microcms-js-sdk'
import { BlogType, MicroCMSIdsList, IdObject } from 'src/types/microcms'
import Head from 'next/head'

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
      <article className="article-page">
        <div className="article-header">
          <h2>{article.title}</h2>
          <div className="article-date">
            <div>published: {article.publishedAt.split('T')[0]}</div>
            <div>revised: {article.revisedAt.split('T')[0]}</div>
          </div>
          <div>カテゴリ: {article.category.map((elm: any) => elm.name)}</div>
        </div>
        <div>
          <div
            className="blog-article"
            dangerouslySetInnerHTML={{
              __html: `${article.article}`,
            }}
          />
        </div>
      </article>
    </>
  )
}

export default Article
