import Link from "next/link";
import ThemeToggle from "./toggleTheme";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";

function Header() {
  return (
    <>
      <header className="fixed inset-x-0  top-0 z-50 bg-background/30 py-6 backdrop-blur-sm ">
        <nav className="container flex max-w-4xl items-center justify-between mx-auto">
          <MainNav />
          <MobileNav />
        </nav>
      </header>
    </>
  );
}

export default Header;
