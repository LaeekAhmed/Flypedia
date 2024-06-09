"use client";
import { useState } from "react";
import DetailsCard from "./DetailsCard";

export interface FlightInfo {
   hex: string;
   reg_number: string;
   flag: string;
   lat: number;
   lng: number;
   alt: number;
   dir: number;
   speed: number;
   v_speed: number;
   squawk: string;
   flight_number: string;
   flight_icao: string;
   flight_iata: string;
   dep_icao: string;
   dep_iata: string;
   arr_icao: string;
   arr_iata: string;
   airline_icao: string;
   airline_iata: string;
   aircraft_icao: string;
   updated: number;
   status: string;
}

interface Props {
   flight: FlightInfo;
   name: string;
}

export const FlightCard = ({ flight, name }: Props) => {
   // modal state;
   const [isOpen, setIsOpen] = useState(false);

   const { flight_iata, status, speed, dep_iata, arr_iata } = flight;

   return (
      <div className="card border-2 border-gray-300 hover:bg-gray-50 rounded-lg p-2 grid grid-cols-2 gap-1 items-center justify-center">
         <div className="m-1 col-span-2 flex justify-center">{status === "en-route" ? <div className="blinking-dot"></div> : <div className="grey-dot"></div>}</div>
         <div className="col-span-2 text-sm font-medium">
            <h2 className="m-2 text-lg font-bold">
               {name} {flight_iata}
            </h2>
            <p className="mb-4">
               currently <strong>{status}</strong>
               <br />
               speed : {speed} km/h
               <br />
               scheduled from {dep_iata} to {arr_iata}
            </p>
         </div>

         {/* {isOpen ? <p>yes</p> : <p>no</p>} */}

         <div className="mb-2 col-span-2 flex justify-center">
            <button type="button" onClick={() => setIsOpen(true)} className="rounded-md bg-black bg-opacity-80 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
               Show details
            </button>
         </div>

         <DetailsCard isOpen={isOpen} closeModal={() => setIsOpen(false)} flight={flight} name={name}></DetailsCard>
      </div>
   );
};
