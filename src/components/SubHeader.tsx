import Link from 'next/link'

const SubHeader = (props: { label: string; href: string }) => {
  return (
    <div className={'sub-header'}>
      <Link href={props.href}>
        <a>
          <h1>{props.label}</h1>
        </a>
      </Link>
    </div>
  )
}

export default SubHeader
