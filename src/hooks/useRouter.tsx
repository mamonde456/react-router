import { useContext } from "react";
import { routerContext } from "../contexts/RouterContext";

export default function useRouter() {
  const { path, onChangePath } = useContext(routerContext);

  const push = (nextPath: string) => {
    if (nextPath === path) return;
    onChangePath(nextPath);
  };

  return { push };
}
