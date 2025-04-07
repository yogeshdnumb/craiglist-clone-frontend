import { createContext } from "react";
const context = createContext<{
  isAuthenticated: boolean;
  user:
    | { name: string; profilePicUrl: string; authIs: string; id: number }
    | {};
}>({ isAuthenticated: false, user: {} });

export default context;
