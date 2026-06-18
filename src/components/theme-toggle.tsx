"use client";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
export function ThemeToggle(){

    const {theme, setTheme} = useTheme();
    return(
        <div className="rounded-full flex items-center justify-center cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <i className="ri-sun-line  absolute text-xl rotate-0 scale-100 dark:rotate-90 dark:scale-0"></i>
        <i className="ri-moon-line  absolute text-xl rotate-90 scale-0 dark:rotate-0 dark:scale-100"></i>
        </div>
    )
}