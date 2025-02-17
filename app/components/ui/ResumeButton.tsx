import { Icons } from "../icon"
import { Button } from "./AppButton"

interface Props {}

function ResumeButton(props: Props) {
  const {} = props
  return (
    <Button
      className="w-full md:w-auto flex items-center justify-center"
      size="md"
    >
      <span className="h-full">Resume</span>
      <Icons.Download />
    </Button>
  )
}

export default ResumeButton
