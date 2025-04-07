import ThemeContext from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";

interface ThemeProviderProps {
  defaultTheme?: string;
  storageKey?: string;
  children: React.ReactNode;
}
type ThemeType = "dark" | "light" | "system";

export default function ThemeProvider({
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  children,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState(
    () => (localStorage.getItem(storageKey) as ThemeType) || defaultTheme
  );

  useEffect(() => {
    // console.log("effect");

    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme == "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      // console.log("setting ", systemTheme);

      return;
    }
    root.classList.add(theme);
    console.log("setting ", theme);
  }, [theme]);
  const value = {
    theme,
    setTheme: (theme: ThemeType) => {
      setTheme(theme);
      localStorage.setItem(storageKey, theme);
    },
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
