import { useState } from "react"
import { Icons } from "../icon"
import Logo from "../ui/Logo"
import MenuList from "../ui/MenuList"
import ResumeButton from "../ui/ResumeButton"

interface Props {}

function Header(props: Props) {
  const [asideOpen, setAsideOpen] = useState(false)

  const handleAsideOpen = () => {
    setAsideOpen(!asideOpen)
  }

  return (
    <>
      <header className="md:flex hidden w-full items-center h-[104px] sticky top-0 z-50  bg-white">
        <nav className="w-full flex items-center justify-between @container container mx-auto">
          <Logo />
          <MenuList />
          <ResumeButton />
        </nav>
      </header>
      <header className="md:hidden px-5 flex w-full justify-between items-center h-[64px] border-primary-neutral  sticky top-0 z-50 bg-white">
        <Logo />
        <span onClick={handleAsideOpen} className="cursor-pointer">
          <Icons.Hamburger />
        </span>
      </header>
      <aside
        className={`fixed md:hidden h-screen w-1/2 md:w-1/5 pt-[84px] md:pt-[124px] bg-white top-0 right-0 z-40 px-5 shadow-lg transform transition-transform duration-300 ${
          asideOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ResumeButton />
        <MenuList />
      </aside>
    </>
  )
}

export default Header
