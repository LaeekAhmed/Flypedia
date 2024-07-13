"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState, useRef } from "react";
import { airlinesList, Airline } from "@/types/index";
import { useRouter } from "next/navigation";

export default function SearchSuggestions({ placeholder }: { placeholder: string }) {
   const [searchTerm, setSearchTerm] = useState(""); // Step 1: Initialize searchTerm state
   const [suggestions, setSuggestions] = useState<Airline[]>([]); // Step 2: Initialize suggestions state
   const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0); // State to track the active suggestion
   const suggestionsListRef = useRef<HTMLUListElement>(null);
   const router = useRouter();
   const keyPressing = useRef<{ [key: string]: boolean }>({});

   function handleSearch(term: string) {
      setSearchTerm(term); // Step 3: Update searchTerm state
   }

   useEffect(() => {
      if (searchTerm !== "") {
         // TODO: search via API for flight number
         const filteredSuggestions = airlinesList.filter((suggestion) => suggestion.name.toLowerCase().includes(searchTerm.toLowerCase()));
         setSuggestions(filteredSuggestions); // Step 4: Update suggestions state
         setActiveSuggestionIndex(0); // Reset active suggestion index
      } else {
         setSuggestions([]); // Step 5: Reset suggestions state
      }
   }, [searchTerm]); // Step 6: Add searchTerm as a dependency

   useEffect(() => {
      const activeItem = suggestionsListRef.current?.children[activeSuggestionIndex];
      if (activeItem) {
         activeItem.scrollIntoView({
            block: "nearest",
            behavior: "smooth",
         });
      }
   }, [activeSuggestionIndex]);

   function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
      if (keyPressing.current[e.key]) return;

      keyPressing.current[e.key] = true;

      if (e.key === "ArrowDown") {
         setActiveSuggestionIndex((prevIndex) => (prevIndex + 1) % suggestions.length);
      } else if (e.key === "ArrowUp") {
         setActiveSuggestionIndex((prevIndex) => (prevIndex === 0 ? suggestions.length - 1 : prevIndex - 1));
      } else if (e.key === "Enter" && suggestions.length > 0) {
         router.replace(`/airlines/${suggestions[activeSuggestionIndex].iataCode}`);
      }
   }

   function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
      keyPressing.current[e.key] = false;
   }

   return (
      <div className='relative flex flex-col items-center w-full max-w-2xl my-5'>
         <div className='relative w-full flex items-center'>
            <Search className='absolute left-2 size-4 text-muted-foreground' />
            <Input type='text' placeholder={placeholder} onChange={(e) => handleSearch(e.target.value)} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} className='pl-10 w-full' value={searchTerm} />
            {/* Suggestions block */}
            {suggestions.length > 0 && (
               <div className='absolute z-10 w-full mt-1 bg-background shadow-lg top-full rounded-md'>
                  <ul className='list-none rounded-md' ref={suggestionsListRef} style={{ maxHeight: "195.5px", overflowY: "auto" }}>
                     {suggestions.map((suggestion, index) => (
                        <li key={suggestion.iataCode} className={`border-b last:border-b-0 ${index === activeSuggestionIndex ? "bg-gray-100" : ""}`}>
                           <Link href={`/airlines/${suggestion.iataCode}`} passHref>
                              <div className='block px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-muted-foreground'>{suggestion.name}</div>
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
            )}
         </div>
      </div>
   );
}
