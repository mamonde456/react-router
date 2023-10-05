import { useContext } from "react";

interface Props {
  path: string;
  components: JSX.Element | null;
}

export default function Route({ path, components }: Props) {
  // return <>{path === window.location.pathname ? components : null}</>;
}
