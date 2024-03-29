import Link from 'next/link'
import Image from 'next/image'
import { CategoryType } from 'src/types/microcms'
interface Props {
  title: string
  tag: Array<CategoryType>
  thumbnail: string
  to: string
  publish: string
  revised: string
  firstView: boolean
}

function ArticleCard(props: Props) {
  return (
    <div className={'article-card'}>
      <div>
        <Link passHref href={props.to}>
          <h2>{props.title}</h2>
        </Link>
        <div className={'flex'}>
          <p>published: {props.publish}</p>
          {props.publish == props.revised ? (
            <p></p>
          ) : (
            <p>revised: {props.revised}</p>
          )}
        </div>
        <div className="flex">
          <p>カテゴリ: </p>
          {props.tag.map((elm, index) => (
            <Link href={`/blog/category/${elm.id}/page/1`} key={index}>
              {elm.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="image-wrapper">
        <Image
          priority={props.firstView}
          loading={props.firstView ? 'eager' : 'lazy'}
          width="100"
          height="100"
          src={props.thumbnail}
          quality={75}
          alt="thumbnail"
        />
      </div>
    </div>
  )
}

export default ArticleCard
