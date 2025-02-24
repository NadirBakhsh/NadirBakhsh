import { Link } from "@remix-run/react"
import { Icons } from "~/components/icon"
import { SocialMediaLinks } from "~/json/portfolio.json"

interface Props {
  size?: "sm" | "lg"
}

function SocialMedia(props: Props) {
  const { size = "lg" } = props

  const className = size === "sm" ? "social-media-link-sm" : "social-media-link"

  return (
    <>
      {SocialMediaLinks.map(({ url, icon, title }, index) => {
        const SoicalMeadiaIcon = Icons[icon as keyof typeof Icons]
        return (
          <Link title={title} target="_blank" key={url + index} to={url}>
            <div className={className}>
              <SoicalMeadiaIcon  />
            </div>
          </Link>
        )
      })}
    </>
  )
}

export default SocialMedia
