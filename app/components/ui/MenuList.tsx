import { Button } from "./Button";
import { Icons } from "../icon";

interface Props {}

function MenuList(props: Props) {
  const {} = props;
  return (
    <ul className="flex items-center space-x-8 !text-xl track-[2%] !font-semibold">
      <li className="link">About Me</li>
      <li className="link">Skills</li>
      <li className="link">Project</li>
      <li className="link">Contact me</li>
    </ul>
  );
}

export default MenuList;
