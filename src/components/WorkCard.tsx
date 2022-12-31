import Image from 'next/image'
import Link from 'next/link'

interface Props {
  title: string
  summary: string
  thumbnail: string
  tags: Array<string>
  blog: string
  confidence: number
  firstView: boolean
}

const WorkCard = (props: Props) => {
  return (
    <Link passHref href={`/blog/${props.blog}`}>
      <div className="works-card">
        <Image
          src={props.thumbnail}
          alt="thumbnail"
          width="360"
          height="220"
          quality={75}
          priority={props.firstView}
          loading={props.firstView ? 'eager' : 'lazy'}
        />
        <div>
          <h2>{props.title}</h2>
          <p>{props.summary}</p>
        </div>
      </div>
    </Link>
  )
}

export default WorkCard
