"use client";

import { Button } from "@/components/ui/button";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface ShowMoreProps {
   pageNumber: number;
   isNext: boolean;
}

export default function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
   const searchParams = useSearchParams();
   const pathname = usePathname();
   const router = useRouter();

   const handleNavigation = () => {
      const newLimit = (pageNumber + 1) * 30;
      const params = new URLSearchParams(searchParams);
      params.set("limit", newLimit.toString());

      router.replace(`${pathname}?${params.toString()}`);
   };

   return (
      <div className='mt-10 flex flex-col items-center'>
         {!isNext && (
            <Button onClick={handleNavigation}>
               <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 mr-2'>
                  <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     d='M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z'
                  />
               </svg>
               Show More
            </Button>
         )}
      </div>
   );
}
