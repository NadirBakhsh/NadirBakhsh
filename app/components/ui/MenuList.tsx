import { Link } from '@remix-run/react';

interface Props {}

function MenuList(props: Props) {
  const {} = props;
  return (
    <>
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
      <ul className="flex flex-col space-y-4  md:flex-row md:items-center md:space-x-8 md:space-y-0 !text-xl track-[2%] !font-semibold mt-10 md:mt-0">
        <li className="link">
          <Link to="#about">About Me</Link>
        </li>
        <li className="link">
          <Link to="#skills">Skills</Link>
        </li>
        <li className="link">
          <Link to="#projects">Project</Link>
        </li>
        <li className="link">
          <Link to="#contact">Contact me</Link>
        </li>
      </ul>
    </>
  );
}

export default MenuList;
