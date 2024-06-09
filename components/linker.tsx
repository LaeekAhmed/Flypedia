"use client";

import Link from "next/link";

// import Image from "next/image";

interface HeroProps {
   msg: string;
   path: string;
}

export const Hero = ({ msg, path }: HeroProps) => {
   // const handleScroll = () => {
   //    window.scrollTo({
   //       top: document.body.scrollHeight,
   //       behavior: "smooth",
   //    });
   // };

   return (
      <div className="text-black flex items-center">
         <Link className="m-1 inline-flex font-semibold items-center px-5 py-2 bg-transparent text-black text-base no-underline border-2 border-black rounded-lg transition duration-300 hover:bg-indigo-600 hover:border-white hover:text-white" href={`${path}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
               <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>
            {msg}
         </Link>

         {/* <button disabled={false} type={"button"} onClick={handleScroll} className="m-1 inline-flex font-semibold items-center px-5 py-2 bg-transparent text-black text-base no-underline border-2 border-black rounded-lg transition duration-300 hover:bg-indigo-600 hover:border-white hover:text-white">
            Scroll 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
            </svg>
         </button> */}
      </div>
   );
};
