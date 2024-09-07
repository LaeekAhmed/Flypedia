"use client";

import * as React from "react";
import {Search, House, Bug, PackagePlus, Plane} from "lucide-react";
import {airlinesList} from "@/types";
import {useRouter} from "nextjs-toploader/app";
import {Button} from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export default function CommandSearch() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (url: string) => {
    router.push(url);
    setOpen(false);
  };

  return (
    <div className="ml-2 sm:ml-4">
      <Button
        className="px-2 text-muted-foreground text-xs sm:text-sm"
        variant="outline"
        onClick={() => setOpen(true)}
      >
        <Search className="size-3 sm:size-4 mr-1 sm:mr-2" />
        <span className="hidden sm:inline">Command Search</span>
        <span className="ml-2 sm:ml-5 inline-flex h-5 sm:h-6 items-center gap-1 sm:gap-2 rounded border bg-muted px-1.5 sm:px-3 font-mono text-[10px] sm:text-xs text-muted-foreground">
          <span className="text-lg sm:text-xl pt-0.5">⌘</span>K
        </span>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => handleSelect("/")}>
              <button
                onClick={() => handleSelect("/")}
                className="flex items-center w-full"
              >
                <House className="mr-2 h-4 w-4" />
                <span>Home</span>
              </button>
            </CommandItem>

            <CommandItem onSelect={() => handleSelect("/airlines")}>
              <Plane className="mr-2 h-4 w-4" />
              <span>View all Airlines</span>
            </CommandItem>

            <CommandItem
              onSelect={() =>
                window.open(
                  "https://github.com/LaeekAhmed/flypedia/issues/new",
                  "_blank"
                )
              }
            >
              <Bug className="mr-2 h-4 w-4" />
              <span>Report a bug</span>
            </CommandItem>

            <CommandItem
              onSelect={() =>
                window.open(
                  "https://github.com/LaeekAhmed/flypedia/issues/new",
                  "_blank"
                )
              }
            >
              <PackagePlus className="mr-2 h-4 w-4" />
              <span>Request a feature</span>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Airlines">
            {airlinesList.map((element) => (
              <CommandItem
                key={element.iataCode}
                onSelect={() => handleSelect(`/airlines/${element.iataCode}`)}
              >
                {element.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
