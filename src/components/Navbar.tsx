import Link from "next/link";
// import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";
import CommandSearch from "./CommandSearch";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b">
      <div className="flex justify-between items-center h-16 px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold"
          prefetch={false}
        >
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 sm:w-8 sm:h-8 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>{" "}
            <span className="text-lg sm:text-xl font-bold">Flypedia</span>
          </div>
        </Link>

        <div className="ml-auto">
          <CommandSearch />
        </div>
      </div>
    </header>
  );
}
