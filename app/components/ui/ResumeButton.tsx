import { Icons } from "../icon"
import { Button } from "./AppButton"

const RESUME_PATH = "/cv/Nadir-Bakhsh-CV-2026.pdf"

function ResumeButton() {
  return (
    <a
      href={RESUME_PATH}
      className="w-full md:w-auto"
      download="Nadir-Bakhsh-CV-2026.pdf"
    >
      <Button size="sm" className="flex items-center justify-center gap-2">
        <span>Resume</span>
        <Icons.Download />
      </Button>
    </a>
  )
}

export default ResumeButton
