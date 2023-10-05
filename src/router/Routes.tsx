import { useContext } from "react";
import { routerContext } from "../contexts/RouterContext";

interface RoutesProps {
  children: React.ReactNode | null;
}

export default function Routes({ children = null }: RoutesProps) {
  const { path } = useContext(routerContext);
  if (!children) return;

  const childArray = Array.isArray(children) ? children : [children];
  const currentRenderComponent = () => {
    const current = childArray.find((el) => el.props.path === path);
    if (!current) return <ErrorPage />;
    return current.props.components;
  };
  return currentRenderComponent();
}

function ErrorPage() {
  return <h1>404</h1>;
}
