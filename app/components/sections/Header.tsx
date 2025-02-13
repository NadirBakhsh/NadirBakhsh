import { Button } from "../ui/Button";
import { Icons } from "../icon";
import MenuList from "../ui/MenuList";
import ResumeButton from "../ui/ResumeButton";
import Logo from "../ui/Logo";

interface Props {}

function Header(props: Props) {
  const {} = props;
  return (
    <header className="w-full flex items-center h-[104px] sticky top-0 z-50 bg-white">
      <nav className="w-full flex items-center justify-between @container container mx-auto">
        <Logo />
        <MenuList />
        <ResumeButton />
      </nav>
    </header>
  );
}

export default Header;
