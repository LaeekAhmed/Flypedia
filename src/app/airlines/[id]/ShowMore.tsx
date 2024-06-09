"use client";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "../../../../utils/index";

interface ShowMoreProps {
   pageNumber: number;
   isNext: boolean;
}

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
   const router = useRouter();

   const handleNavigation = () => {
      // Calculate the new limit based on the page number and navigation type
      const newLimit = (pageNumber + 1) * 20;

      // Update the "limit" search parameter in the URL with the new value
      const newPathname = updateSearchParams("limit", `${newLimit}`);

      router.push(newPathname);
   };

   return (
      <div className="mt-10 flex flex-col items-center">
         {!isNext && (
            <button
               disabled={false}
               type={"button"}
               onClick={handleNavigation}
               className="m-1 inline-flex font-semibold items-center px-5 py-2 bg-transparent text-black text-base no-underline border-2 border-black rounded-lg transition duration-300 hover:bg-indigo-600 hover:border-white hover:text-white">
               Show More
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                  />
               </svg>
            </button>
         )}
      </div>
   );
};

export default ShowMore;
