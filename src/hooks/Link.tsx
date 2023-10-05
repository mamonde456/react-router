import { useContext } from "react";
import { routerContext } from "../contexts/RouterContext";

interface ILinkProps {
  children: string;
  to: string;
}

export default function Link({ children, to }: ILinkProps) {
  const { onChangePath } = useContext(routerContext);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onChangePath(to);
  };

  return <a onClick={handleClick}>{children}</a>;
}
