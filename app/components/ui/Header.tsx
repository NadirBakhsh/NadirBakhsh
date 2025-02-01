import { Button } from "./button";
import { Icons } from "../icon";

interface Props {}

function Header(props: Props) {
	const {} = props;

	return (
		<header className="w-full flex items-center h-[104px] sticky top-0 z-50 bg-white">
			<nav className="w-full flex items-center justify-between @container container mx-auto">
				<div>
					<h1 className="text-2xl italic flex font-sans font-semibold space-x-3">
						<Icons.Logo />
						<span>Nadir.B</span>
					</h1>
				</div>
				<ul className="flex items-center space-x-8 !text-xl track-[2%]  !font-semibold">
					<li className="link">About Me</li>
					<li className="link">Skills</li>
					<li className="link">Project</li>
					<li className="link">Contact me</li>
				</ul>
				<div>
					<Button size="md">
						<span>Resume</span>
						<Icons.Download />
					</Button>
				</div>
			</nav>
		</header>
	);
}

export default Header;
