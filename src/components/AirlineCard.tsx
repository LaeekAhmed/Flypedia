import Image from "next/image";
import Link from "next/link";
import { airlineInfo } from "@/utils";
import { Button } from "@/components/ui/button";
import { Airline } from "@/types/index";
import { Plane, Tag, ArrowRight } from "lucide-react";

export interface AirlineInfo {
   iata: string;
   icao: string;
   fleet: {
      A359: number;
      A388: number;
      B38M: number;
      B738: number;
      B744: number;
      B772: number;
      B773: number;
      B77W: number;
      B78X: number;
      total: number;
   };
   logo_url?: string;
   name: string;
}

export async function AirlineCard({ airline }: { airline: Airline }) {
   const data: AirlineInfo[] = await airlineInfo(airline.iataCode);

   if (data.length == 0) {
      return <div>{airline.name}</div>;
   }

   let details = data[0];
   const { logo_url, name, fleet, iata } = details;

   return (
      <div className='bg-background rounded-lg shadow-md overflow-hidden border hover:border-gray-300 transition duration-150 ease-in-out'>
         <div className='flex items-center justify-between px-6 py-4 border-b'>
            {logo_url && <Image src={logo_url} alt={`${name} logo`} width={50} height={50} className='rounded-none' />}
            <h2 className='text-lg font-semibold'>{name}</h2>
         </div>
         <div className='px-6 py-4 space-y-2'>
            <div className='flex items-center justify-between'>
               <span className='text-muted-foreground'>
                  <Plane className='mr-2 inline-block h-4 w-4' />
                  Total Aircraft:
               </span>
               <span>{fleet.total}</span>
            </div>
            <div className='flex items-center justify-between'>
               <span className='text-muted-foreground'>
                  <Tag className='mr-2 inline-block h-4 w-4' />
                  IATA Code:
               </span>
               <span>{iata}</span>
            </div>
         </div>
         <div className='px-6 py-4'>
            <Link href={`/airlines/${iata}`} className='w-full'>
               <Button size='sm' variant='secondary' className='w-full'>
                  See Flights
                  <ArrowRight className='ml-2 inline-block h-4 w-4' />
               </Button>
            </Link>
         </div>
      </div>
   );
}
