import { useCallback, useEffect, useState } from "react";
import { routerContext } from "../contexts/RouterContext";

interface RouterProps {
  children: React.ReactNode | null;
  basename?: string;
}

export default function Router({ children }: RouterProps) {
  const [path, setPath] = useState(window.location.pathname);
  const onChangePath = useCallback((path: string) => {
    window.history.pushState({ path }, "", path);
    setPath(path);
  }, []);

  useEffect(() => {
    const onPopState = (event: PopStateEvent) => {
      setPath(event.state?.path || "/");
    };

    window.addEventListener("popstate", onPopState);

    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <routerContext.Provider value={{ path, onChangePath }}>
      {children}
    </routerContext.Provider>
  );
}
