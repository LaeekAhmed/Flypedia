"use client";
import Link from "next/link";
import { useState } from "react";

export default function Hero_tw() {
   return (
      <div className="bg-white">
         <div className="">
            <div className="mx-auto max-w-2xl py-10">
               <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                     <Link href="/airlines/QR" className="font-semibold text-indigo-600">
                        Checkout Qatar Airways! <span className="relative inset-0" aria-hidden="true" />
                        <span aria-hidden="true">&rarr;</span>
                     </Link>
                  </div>
               </div>
               <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                     Check flight status of world class airlines
                     <br />
                     <span className="text-indigo-600">with Flypedia!</span>{" "}
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                     Flypedia utilizes the{" "}
                     <a className="text-blue-600 underline underline-offset-4" href="https://airlabs.co/">
                        Airlabs
                     </a>{" "}
                     API for real-time flight details, including departure times, arrivals, and aircraft information.
                     <br />
                     To get airline information, it uses the{" "}
                     <a className="text-blue-600 underline underline-offset-4" href="https://api-ninjas.com/">
                        api-ninjas
                     </a>{" "}
                     API.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                     <Link href="/airlines" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Get started
                     </Link>
                     <a href="https://airlabs.co/" target="_blank" rel="noopener" className="text-sm font-semibold leading-6 text-gray-900">
                        Learn more <span aria-hidden="true">→</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
