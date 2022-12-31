import Link from 'next/link'

const BlogHeader = () => {
  return (
    <Link href="/blog/page/1">
      <a>
        <h1 className={'blog-header'}>{"fluixyz's log"}</h1>
      </a>
    </Link>
  )
}

export default BlogHeader
