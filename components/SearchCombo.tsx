"use client";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { airlinesList } from ".";

interface props {
   airline: string;
   setAirline: (airline: string) => void;
}

const SearchCombo = ({ airline, setAirline }: props) => {
   const [query, setQuery] = useState("");

   const filteredAirlinesList =
      // If the search query is empty, show all the airlines, else filter accordingly ...
      query === ""
         ? airlinesList
         : airlinesList.filter((item) =>
              item.name
                 .toLowerCase()
                 .replace(/\s+/g, "") // remove empty spaces (`s` : space, `g` : global)
                 .includes(query.toLowerCase().replace(/\s+/g, ""))
           );

   return (
      <div className="">
         <Combobox value={airline} onChange={setAirline}>
            <div className="comboinput relative w-full">
               {/* Button for the combobox. Click on the icon to see the complete dropdown */}
               <Combobox.Button className="bg-gray-200 rounded-lg absolute inset-y-0 right-0 flex items-center px-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
               </Combobox.Button>

               {/* Input field for searching */}
               <Combobox.Input
                  className="w-full border-none align-center pl-3 pr-10"
                  displayValue={(item: string) => item}
                  onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
                  placeholder="Qatar Airways ..."
               />

               {/* Transition for displaying the options */}
               <Transition
                  as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setQuery("")} // Reset the search query after the transition completes
               >
                  <Combobox.Options static className="absolute max-h-60 mt-3 w-full overflow-auto rounded-lg bg-gray-200 py-2 text-base shadow-xl">
                     {filteredAirlinesList.length === 0 && query !== "" ? (
                        <Combobox.Option value={query} className="search-airline__option">
                           No results found for &ldquo;{query}&rdquo;
                        </Combobox.Option>
                     ) : (
                        filteredAirlinesList.map((item) => (
                           <Combobox.Option key={item.iataCode} className={({ active }) => `relative px-5 ${active ? "bg-gray-500 text-white" : "text-gray-900"}`} value={item.name}>
                              {({ selected, active }) => (
                                 <>
                                    <span className={`block truncate ${selected ? "font-bold" : "font-normal"}`}>{item.name}</span>

                                    {/* Show an active blue background color if the option is selected */}
                                    {selected ? <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "bg-violet"}`}></span> : null}
                                 </>
                              )}
                           </Combobox.Option>
                        ))
                     )}
                  </Combobox.Options>
               </Transition>
            </div>
         </Combobox>
      </div>
   );
};

export default SearchCombo;
