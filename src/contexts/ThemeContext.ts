import { createContext } from "react";
type Theme = "dark" | "light" | "system";

interface ThemContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export default createContext<ThemContextType>({
  theme: "system",
  setTheme: () => null,
});
