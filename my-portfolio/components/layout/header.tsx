import Link from "next/link";
import React from "react";
import ThemeToggle from "./toggleTheme";

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/30 py-6 backdrop-blur-sm ">
      <nav className="container flex max-w-3xl items-center justify-between mx-auto">
        <div>
          <Link href={"/"} className="text-2xl font-thin tracking-widest">
            sourav
          </Link>
        </div>

        <div>
          <ul className="flex items-center gap-6 text-sm font-light text-muted-foreground">
            <li className="transition-colors hover:text-foreground">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className="transition-colors hover:text-foreground">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="transition-colors hover:text-foreground">
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
