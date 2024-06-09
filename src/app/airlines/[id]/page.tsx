// import Image from "next/image";
import { apiCall } from "../../../../utils";
import { FlightInfo, FlightCard } from "../../../../components/FlightCard";
import { Hero } from "../../../../components";
import ShowMore from "./ShowMore";

interface searchParams {
   limit: number;
}

// id corresponds to IATA code;
export default async function Airlines({ params, searchParams }: { params: { id: string }; searchParams: searchParams }) {
   // mappings for airline IATA codes;
   const mappings: { [key: string]: string } = {
      EK: "Emirates",
      QR: "Qatar Airways",
      SQ: "Singapore Airlines",
      CX: "Cathay Pacific",
      AC: "Air Canada",
      LH: "Lufthansa",
      BA: "British Airways",
      AF: "Air France",
      AA: "American Airlines",
      UA: "United Airlines",
      DL: "Delta",
      JL: "Japan Airlines",
      AI: "Air India",
      QF: "Qantas",
      EY: "Etihad Airways",
      TK: "Turkish Airlines",
      WN: "Southwest Airlines",
      FR: "Ryanair",
      LX: "Swiss",
      AK: "AirAsia",
   };

   const flight_data = await apiCall(params.id);

   const count: number = flight_data.response.length;
   const data_empty = count === 0;

   const filteredFlights = flight_data.response.filter((flight: { status: string }) => flight.status === "landed" || flight.status === "en-route" || flight.status === "scheduled").slice(0, searchParams.limit || 20);

   return (
      <main className="flex min-h-screen flex-col justify-between p-7 bg-white">
         <div className="text-xl w-full max-w-5xl items-center justify-between lg:flex">
            <p className="">
               Viewing flights for <strong className="text-indigo-600">{mappings[params.id]}</strong>
            </p>
            <Hero msg="Back" path="/airlines/" />
         </div>

         {data_empty ? (
            <div className="relative flex place-items-center">loading ...</div>
         ) : (
            <section className="">
               <p className="mb-3 relative flex place-items-center">
                  Active flights:<strong> {count}</strong>
               </p>

               <div className="grid text-center lg:mb-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:text-left gap-5">
                  {filteredFlights.map((flight: FlightInfo) => (
                     <FlightCard key={flight.flight_iata} flight={flight} name={mappings[params.id]} />
                  ))}
               </div>

               <ShowMore pageNumber={(searchParams.limit || 20) / 20} isNext={(searchParams.limit || 20) > filteredFlights.length} />
            </section>
         )}
      </main>
   );
}
