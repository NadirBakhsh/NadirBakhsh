import { Button } from "../ui/Button";
import { Icons } from "../icon";
import MenuList from "../ui/MenuList";

interface Props {}

function ResumeButton(props: Props) {
  const {} = props;
  return (
    <Button size="md">
      <span>Resume</span>
      <Icons.Download />
    </Button>
  );
}

export default ResumeButton;
