import { Button } from "../ui/Button";
import { Icons } from "../icon";
import MenuList from "../ui/MenuList";
import ResumeButton from "../ui/ResumeButton";

interface Props {}

function Logo(props: Props) {
  const {} = props;
  return (
    <h1 className="text-2xl italic flex font-sans font-semibold space-x-3">
      Nadir.B
    </h1>
  );
}

export default Logo;
