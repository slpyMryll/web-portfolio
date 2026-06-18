"use client";

import React, { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "../ui/button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "home", label: "Home" },
    { href: "about", label: "About Me" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact Me" },
  ];

  const toggleNavbar = () => setOpen((prev) => !prev);
  const closeNavbar = () => setOpen(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full backdrop-blur px-4 sm:px-6">
      
      {/* TOP BAR */}
      <div className="max-w-5xl mx-auto flex items-center justify-between h-16">

        {/* LOGO */}
        <Button className="sm:min-w-36 bg-background text-foreground font-bold sm:text-xl hover:bg-background cursor-pointer hover:text-foreground text-lg min-w-26">
          SlpyMryll
        </Button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-14">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-700 group"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-foreground text-gray-600 transition-all duration-700 group-hover:w-full hover:text-foreground" />
                </a>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>

        {/* MOBILE CONTROLS */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={toggleNavbar}
            className="text-foreground text-2xl min-w-16 transition-all duration-200"
          >
            {open ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>}
          </button>
        </div>

      </div>

      {/* MOBILE NAV (STRUCTURE ONLY, NO NEW STYLES ADDED) */}
      {open && (
        <nav className="md:hidden absolute top-16 right-4 ">
          <ul className="flex flex-col gap-8 p-6 min-w-64 rounded-lg border border-foreground/90 bg-background items-center justify-center h-60">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeNavbar}
                  className="relative text-[18px] text-foreground/80 transition-colors duration-700 group "
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-foreground text-gray-600 transition-all duration-700 group-hover:w-full hover:text-foreground" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}