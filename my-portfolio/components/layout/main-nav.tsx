import Link from "next/link";
import ThemeToggle from "./toggleTheme";

const MainNav = () => {
  return (
    <div className="hidden sm:flex w-full justify-between ">
      <div>
        <Link href={"/"} className="text-2xl font-thin tracking-widest">
          sourav
        </Link>
      </div>

      <div>
        <ul className="flex items-center gap-6 font-light text-muted-foreground">
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
    </div>
  );
};

export default MainNav;
