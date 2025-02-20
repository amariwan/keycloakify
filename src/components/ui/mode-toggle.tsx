import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./dropdown-menu";

type ThemeMode = "light" | "dark" | "system";

export interface ModeToggleProps {
  className?: string;
}

export function ModeToggle({ className = "" }: ModeToggleProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const setTheme = (mode: ThemeMode) => {
    // Speichere den ausgewählten Modus im Local Storage
    localStorage.setItem("app-theme", mode);

    switch (mode) {
      case "light":
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
        break;
      case "dark":
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
        break;
      case "system": {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDarkMode(prefersDark);
        document.documentElement.classList.toggle("dark", prefersDark);
        break;
      }
      default:
        break;
    }
  };

  // Beim ersten Rendern den gespeicherten Theme-Modus laden oder auf "system" zurückgreifen
  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme") as ThemeMode | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("system");
    }
  }, []);

  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon">
            {isDarkMode ? (
              <Moon className="w-[1.2rem] transition-all" />
            ) : (
              <Sun className="w-[1.2rem] transition-all" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
