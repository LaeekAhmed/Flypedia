// import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { airlineInfo } from "../utils";
import DetailsCard from "./AirlineDetails";

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

export interface Airline {
   name: string;
   iataCode: string;
}

interface Props {
   airline: Airline;
}

export async function AirlineCard({ airline }: Props) {
   const data = await airlineInfo(airline.name);

   if (data.length == 0) {
      return <div>{airline.name}</div>;
   }

   let details;
   for (const ele of data) {
      if (ele.iata === airline.iataCode) {
         details = ele;
         break;
      }
   }
   const { logo_url, name, fleet, iata } = details;

   // modal state;
   // const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="card border-2 border-gray-300 hover:bg-gray-50 rounded-lg p-5 flex flex-col justify-between">
         {logo_url && (
            <div className="">
               <Image src={logo_url} alt={`${name} logo`} quality={100} width={100} height={100} />
            </div>
         )}

         <div className="mt-2 text-sm font-medium">
            <h2 className="text-xl font-bold mb-1">{name}</h2>
            <p className="">Total Aircrafts: {fleet.total}</p>
            <p className="">IATA Code: {iata}</p>
            <br />
         </div>

         <div className="flex mt-auto transition duration-300 hover:font-bold">
            <Link className="font-mono" href={`/airlines/${airline.iataCode}`}>
               See Flights{" "}
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
         </div>

         {/* <div className="mb-2 col-span-2 flex justify-center">
            <button
               type="button"
               onClick={() => setIsOpen(true)}
               className="rounded-md bg-black bg-opacity-80 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
               Show details
            </button>
         </div>

         <DetailsCard
            isOpen={isOpen}
            closeModal={() => setIsOpen(false)}
            airline={data.response}
         ></DetailsCard> */}
      </div>
   );
}
