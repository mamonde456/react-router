import * as React from "react";

interface contextType {
  path: string;
  onChangePath: (path: string) => void;
}

export const routerContext = React.createContext<contextType>({
  path: "",
  onChangePath: () => {},
});
