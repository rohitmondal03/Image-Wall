import { Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/theme-provider"


export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <>
            {theme === "dark" ? (
                <Sun
                    onClick={() => setTheme("light")}
                    className="cursor-pointer"
                />
            ) : (
                <Moon
                    onClick={() => setTheme("dark")}
                    className="cursor-pointer"
                />
            )}
        </>
    )
}
