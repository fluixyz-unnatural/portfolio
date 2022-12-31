import Link from 'next/link'

const WorksHeader = () => {
  return (
    <Link href="/blog/page/1">
      <a>
        <h1 className={'blog-header'}>{"fluixyz's works"}</h1>
      </a>
    </Link>
  )
}

export default WorksHeader
