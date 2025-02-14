// modeDecorator.tsx
import  { useState } from "react";
import { Button } from "../src/components/ui/button";

export const ModeDecorator = (Story: any) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark", !isDarkMode);
    };

    return (
        <>
            <Button
                onClick={toggleMode}
                style={{
                    position: "fixed",
                    top: 10,
                    right: 10,
                    zIndex: 9999,
                    padding: "8px 12px",
                    backgroundColor: isDarkMode ? "#333" : "#fff",
                    color: isDarkMode ? "#fff" : "#333",
                    border: "none",
                    borderRadius: "5px"
                }}
            >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </Button>
            <Story />
        </>
    );
};
