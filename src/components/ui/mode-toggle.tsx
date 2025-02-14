import { Moon, Sun } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./dropdown-menu";

type ThemeMode = "light" | "dark" | "system";

export function ModeToggle() {
  // Lese den initialen Theme-Wert (falls vorhanden) oder default auf "system"
  const getInitialTheme = (): ThemeMode => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "light" || storedTheme === "dark" || storedTheme === "system") {
        return storedTheme;
      }
    }
    return "system";
  };

  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme());
  // Dieser State wird genutzt, um die UI (Animation) zu triggern
  const [_isDarkMode, setIsDarkMode] = useState(() => {
    if (theme === "dark") return true;
    if (theme === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Wendet das gewünschte Theme an
  const applyTheme = useCallback((mode: ThemeMode) => {
    switch (mode) {
      case "light":
        document.documentElement.classList.remove("dark");
        setIsDarkMode(false);
        break;
      case "dark":
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
        break;
      case "system": {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.classList.toggle("dark", prefersDark);
        setIsDarkMode(prefersDark);
        break;
      }
      default:
        break;
    }
  }, []);

  // Wende das Theme an und speichere es in localStorage, wenn sich der Wert ändert
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme, applyTheme]);

  // Falls der Benutzer "system" gewählt hat, reagiert die Komponente auf Änderungen des OS-Themes
  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (e: MediaQueryListEvent) => {
        document.documentElement.classList.toggle("dark", e.matches);
        setIsDarkMode(e.matches);
      };
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
    return undefined;
  }, [theme]);

  const handleThemeChange = (mode: ThemeMode) => {
    setTheme(mode);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon">
          <Sun className="w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleThemeChange("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
