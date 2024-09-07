import {AirlineCard} from "@/components/AirlineCard";
import {airlinesList, Airline} from "@/types/index";
import SearchComponent from "@/components/Search";

interface props {
  searchParams: {
    query: string;
  };
}

export default function Airlines({searchParams}: props) {
  let filteredList = airlinesList;

  if (searchParams.query) {
    filteredList = airlinesList.filter((airline: Airline) =>
      airline.name.toLowerCase().includes(searchParams.query.toLowerCase())
    );
  }

  const count: number = filteredList.length;

  return (
    <main className="w-full mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-0">
          Airlines
        </h1>
        <div className="bg-muted px-3 py-1 rounded-md text-sm font-medium">
          {count} Total Airlines
        </div>
      </div>

      <SearchComponent placeholder="Search for airlines" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredList.map((airline: Airline) => (
          <AirlineCard key={airline.iataCode} airline={airline} />
        ))}
      </div>
    </main>
  );
}
