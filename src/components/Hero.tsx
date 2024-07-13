import Link from "next/link";
import { flightInfo } from "@/utils";
import { ArrowRight } from "lucide-react";
import { mappings, FlightInfo } from "@/types/index";
import { FlightCard } from "@/components/FlightCard";
import SearchSuggestions from "@/components/SearchSuggestions";

export default async function Component() {
   const flight_data = await flightInfo("AC");
   // const count: number = flight_data.response.length;
   const filteredFlights = flight_data.response.filter((flight: FlightInfo) => flight.flight_iata).slice(0, 8);
   let airline = "AC";

   return (
      <div className='flex flex-col items-center w-full min-h-screen p-8 space-y-12'>
         <header className='text-center pt-8'>
            <h1 className='text-5xl font-bold'>
               {" "}
               Check flight status of world class airlines
               <br />
               <span className='text-gray-400 text-6xl'>with Flypedia 🛫</span>{" "}
            </h1>
         </header>

         <SearchSuggestions placeholder='Search for airlines' />

         <div className='flex space-x-4'>
            <Link
               href='/airlines'
               className='inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
               prefetch={false}>
               Get Started
            </Link>
            <Link
               href='/airlines/QR'
               className='inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
               prefetch={false}>
               Qatar Airways Flights
            </Link>
         </div>

         <div className='w-full mx-auto px-8 md:px-8 py-8'>
            <div className='flex flex-col gap-2'>
               <div className='flex items-center justify-between'>
                  <h1 className='text-3xl font-bold'>{mappings[airline]} 🇨🇦</h1>
                  <Link
                     href='/airlines/AC'
                     className='inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
                     prefetch={false}>
                     View All Flights
                     <ArrowRight className='w-4 h-4 ml-2' />
                  </Link>
               </div>
               <p className='text-muted-foreground'>Track the current status of {mappings[airline]} flights.</p>
            </div>

            <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8'>
               {filteredFlights.map((flight: FlightInfo) => (
                  <FlightCard key={flight.flight_iata} flight={flight} name={mappings[airline]} />
               ))}
            </div>
         </div>
      </div>
   );
}
