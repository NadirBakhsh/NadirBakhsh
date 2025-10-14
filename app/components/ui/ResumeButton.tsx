import { Icons } from "../icon"
import { Button } from "./AppButton"
import { Link } from "@remix-run/react"

interface Props {}

function ResumeButton(props: Props) {
  const {} = props
  return (
    <a
      href="../../../cv/Nadir-Bakhsh-CV.pdf"
      className="w-full md:w-auto"
      download="Nadir-Bakhsh-CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button size="sm" className="flex items-center justify-center gap-2">
        <span>Resume</span>
        <Icons.Download />
      </Button>
    </a>
  )
}

export default ResumeButton
