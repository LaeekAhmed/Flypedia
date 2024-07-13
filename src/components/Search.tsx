"use client";

import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchComponent({ placeholder }: { placeholder: string }) {
   const searchParams = useSearchParams();
   const pathname = usePathname();
   const router = useRouter();

   function handleSearch(term: string) {
      const params = new URLSearchParams(searchParams);
      if (term) {
         params.set("query", term);
      } else {
         params.delete("query");
      }
      // replace does not add a new entry to the history stack (push does)
      router.replace(`${pathname}?${params.toString()}`);
   }

   return (
      <div className='flex items-center w-full max-w-2xl space-x-4 my-5'>
         <div className='relative flex flex-1 items-center'>
            <Search className='absolute left-2 size-4 text-muted-foreground' />
            <Input type='text' placeholder={placeholder} onChange={(e) => handleSearch(e.target.value)} className='pl-10 w-full' defaultValue={searchParams.get("query")?.toString()} />
         </div>
      </div>
   );
}
