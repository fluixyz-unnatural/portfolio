import Image from 'next/image'
import Link from 'next/link'

interface Props {
  title: string
  summary: string
  thumbnail: string
  tags: Array<string>
  blog: string
  confidence: number
}

const WorkCard = (props: Props) => {
  return (
    <Link href={`/blog/${props.blog}`}>
      <a>
        <div className="works-card">
          <Image
            src={props.thumbnail}
            alt="thumbnail"
            width={360}
            height={220}
            layout="responsive"
          />
          <div>
            <h3>{props.title}</h3>
            <p>{props.summary}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default WorkCard
