import Link from 'next/link'
import Image from 'next/image'
import { TimeIcon, RepeatClockIcon } from '@chakra-ui/icons'
import { CategoryType } from 'src/types/microcms'
interface Props {
  title: string
  tag: Array<CategoryType>
  thumbnail: string
  to: string
  publish: string
  revised: string
}

function ArticleCard(props: Props) {
  return (
    <div className={'article-card'}>
      <div>
        <a href={props.to}>
          <h3>{props.title}</h3>
        </a>
        <div className={'flex'}>
          <TimeIcon />
          <p>{props.publish}</p>
          {props.publish == props.revised ? (
            <p></p>
          ) : (
            <>
              <RepeatClockIcon />
              <p> {props.revised}</p>
            </>
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
      <Image
        width="100"
        height="100"
        objectFit="cover"
        src={props.thumbnail}
        alt="thumbnail"
      />
    </div>
  )
}

export default ArticleCard
