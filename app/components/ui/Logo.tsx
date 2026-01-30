import { Link } from "@remix-run/react"


interface Props {}

function Logo(props: Props) {
  const {} = props
  return (
    <h1 className="text-2xl  flex font-sans font-bold space-x-3">
      <Link to="#home" className="text-primary-neutral">
      Nadir.B
      </Link>
    </h1>
  )
}

export default Logo
