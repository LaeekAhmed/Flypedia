"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchCombo from "./SearchCombo";
import { Btn } from "./btn";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button title="search" type='submit' className={`${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = () => {
    const [airline, setAirline] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (airline.trim() === "") {
        return alert("Please type something first");
      }

      updateSearchParams(airline.toLowerCase());
    };

    const updateSearchParams = (airline: string) => {
      // Create a new URLSearchParams object using the current URL search parameters
      const searchParams = new URLSearchParams(window.location.search);

      // Update or delete the 'airline' search parameter based on the 'airline' value
      if (airline) {
        searchParams.set("airline", airline);
      } else {
        searchParams.delete("airline");
      }

      // Generate the new pathname with the updated search parameters
      const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

      router.push(newPathname);
    };

    const handleClear = () => {
      setAirline(""); // Clear the airline state value
      updateSearchParams(""); // Clear the 'airline' search parameter
    };

    return (
      <form className='' onSubmit={handleSearch}>
          <div className='flex gap-2 align-center border-2 border-gray-300 rounded-full pl-5 pr-1 py-1'>
              <SearchCombo airline={airline} setAirline={setAirline}/>
              <SearchButton otherClasses='mx-2'/>
              <button className="px-5 bg-transparent text-base font-semibold text-gray-400 no-underline rounded-full border-2 border-gray-300 transition duration-300 hover:bg-purple-500 hover:border-purple-600 hover:text-white" onClick={handleClear} type="button">
                Clear
              </button>
          </div>
      </form>
    );
};

export default SearchBar;