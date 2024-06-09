"use client";
import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ele {
   name: string;
   href: string;
   current: boolean;
   ext: boolean;
}

const navigation: ele[] = [
   { name: "Home", href: "/", current: false, ext: false },
   { name: "Airlines", href: "/airlines", current: true, ext: false },
   { name: "GitHub", href: "https://github.com/LaeekAhmed/flypedia", current: false, ext: true },
   { name: "Analytics", href: "https://analytics.umami.is/share/FQL7KD5bhI2SRfIe/flypedia", current: false, ext: true },
];

function classNames(...classes: string[]) {
   return classes.filter(Boolean).join(" ");
}

export default function Example() {
   const [updatedNavigation, setUpdatedNavigation] = useState<ele[]>(navigation);

   useEffect(() => {
      const currentPath = window.location.pathname;

      // Clone the original navigation array and update the current property
      const updatedNav = navigation.map((item) => ({
         ...item,
         current: item.href === currentPath,
      }));

      setUpdatedNavigation(updatedNav);
   }, []);

   return (
      <Disclosure as="nav" className="z-10 sticky top-0 bg-white border-b-[2px] border-black ">
         {({ open }) => (
            <>
               <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                  <div className="relative flex h-16 items-center justify-between">
                     <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                           <span className="sr-only">Open main menu</span>
                           {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                        </Disclosure.Button>
                     </div>
                     <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                           <Link href="/">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                              </svg>
                           </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                           <div className="flex space-x-4">
                              {updatedNavigation.map((item) => (
                                 <a
                                    key={item.name}
                                    href={item.href}
                                    target={item.ext ? "_blank" : "_self"}
                                    rel={item.ext ? "noopener" : undefined}
                                    className={classNames(item.current ? "bg-gray-900 text-white" : "text-black hover:bg-indigo-600 hover:text-white", "rounded-md px-3 py-2 text-sm font-medium")}
                                    aria-current={item.current ? "page" : undefined}>
                                    {item.ext ? (
                                       <>
                                          {item.name}
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block ml-2">
                                             <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                          </svg>
                                       </>
                                    ) : (
                                       item.name
                                    )}
                                 </a>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2">
                     {updatedNavigation.map((item) => (
                        <Disclosure.Button
                           key={item.name}
                           as="a"
                           href={item.href}
                           className={classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium")}
                           aria-current={item.current ? "page" : undefined}>
                           {item.name}
                        </Disclosure.Button>
                     ))}
                  </div>
               </Disclosure.Panel>
            </>
         )}
      </Disclosure>
   );
}
