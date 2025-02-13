interface Props {}

function MenuList(props: Props) {
  const {} = props
  return (
    <ul className="flex flex-col space-y-4  md:flex-row md:items-center md:space-x-8 md:space-y-0 !text-xl track-[2%] !font-semibold mt-10 md:mt-0">
      <li className="link">About Me</li>
      <li className="link">Skills</li>
      <li className="link">Project</li>
      <li className="link">Contact me</li>
    </ul>
  )
}

export default MenuList
