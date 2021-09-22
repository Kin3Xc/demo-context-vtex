import { createContext } from "react";

const context = createContext<Partial<any> | undefined>({});

export default context;
