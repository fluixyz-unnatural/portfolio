import Link from 'next/link'

const SubHeader = (props: { label: string; href?: string }) => {
  return (
    <div className={'sub-header'}>
      {props.href ? (
        <Link passHref href={props.href}>
          <h1>{props.label}</h1>
        </Link>
      ) : (
        <h1>{props.label}</h1>
      )}
    </div>
  )
}

export default SubHeader
