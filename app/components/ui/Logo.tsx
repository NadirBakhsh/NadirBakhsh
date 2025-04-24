import { Link } from "@remix-run/react"


interface Props {}

function Logo(props: Props) {
  const {} = props
  return (
    <h1 className="text-2xl italic flex font-sans font-semibold space-x-3">
      <Link to="#home" className="text-primary-neutral">
      Nadir.B
      </Link>
    </h1>
  )
}

export default Logo
