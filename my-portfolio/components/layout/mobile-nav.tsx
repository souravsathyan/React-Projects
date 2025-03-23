import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify, HomeIcon } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
  return (
    <div className="sm:hidden ">
      <Sheet>
        <SheetTrigger className="m-4">
          <AlignJustify />
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/">
            <HomeIcon className="text-white" />
          </Link>
          <nav className="flex flex-col gap-3 lg:gap-4 mt-6">
            <Link href="/project">Project</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
