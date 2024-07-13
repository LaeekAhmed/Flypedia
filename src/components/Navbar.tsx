import Link from "next/link";
// import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";
import CommandSearch from "./CommandSearch";

export default function Navbar() {
   return (
      <header className='sticky top-0 z-50 w-full bg-background border-b'>
         <div className='flex justify-between items-center h-16 px-4 md:px-6'>
            <Link href='/' className='flex items-center gap-2 text-lg font-semibold' prefetch={false}>
               <div className='flex items-center'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-8 h-8 mr-2'>
                     <path strokeLinecap='round' strokeLinejoin='round' d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5' />
                  </svg>{" "}
                  <span className='text-xl font-bold'>Flypedia</span>
               </div>
            </Link>

            {/* <nav className='hidden ml-5 md:flex items-center gap-4 text-sm font-medium'>
               <Link href='/airlines' className='text-muted-foreground hover:text-foreground' prefetch={false}>
                  Airlines
               </Link>
               <Link href='/airlines/QR' className='text-muted-foreground hover:text-foreground' prefetch={false}>
                  Flights
               </Link>
            </nav> */}

            <div className='ml-auto'>
               <CommandSearch />
            </div>

            {/* <div className='ml-2 flex items-center'>
               <Sheet>
                  <SheetTrigger asChild>
                     <Button variant='outline' size='icon' className='md:hidden mr-2'>
                        <MenuIcon className='w-6 h-6' />
                        <span className='sr-only'>Toggle navigation</span>
                     </Button>
                  </SheetTrigger>

                  <SheetContent side='right' className='sm:max-w-xs'>
                     <nav className='grid gap-4 p-4 text-sm font-medium'>
                        <Link href='#' className='flex items-center gap-2 text-muted-foreground hover:text-foreground' prefetch={false}>
                           <PlaneIcon className='w-5 h-5' />
                           Flights
                        </Link>
                        <Link href='/airlines' className='flex items-center gap-2 text-muted-foreground hover:text-foreground' prefetch={false}>
                           <CloudIcon className='w-5 h-5' />
                           Airlines
                        </Link>

                        <Link href='#' className='flex items-center gap-2 text-muted-foreground hover:text-foreground' prefetch={false}>
                           <InfoIcon className='w-5 h-5' />
                           About
                        </Link>
                     </nav>
                  </SheetContent>
               </Sheet>
            </div> */}
         </div>
      </header>
   );
}
