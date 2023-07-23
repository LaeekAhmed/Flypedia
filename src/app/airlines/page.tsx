import Image from 'next/image'
import { apiCall } from '../../../utils'
import { FlightInfo, FlightCard} from '../../../components/FlightCard';
import { AirlineCard, Airline } from '../../../components/AirlineCard';
import { Btn, Hero } from '../../../components';
import SearchBar from '../../../components/SearchBar';

export const airlinesList: Airline[] = [
  { name: "Qatar Airways", iataCode: "QR" },
  { name: "Singapore Airlines", iataCode: "SQ" },
  { name: "Cathay Pacific", iataCode: "CX" },
  { name: "Air Canada", iataCode: "AC" },
  { name: "Lufthansa", iataCode: "LH" },
  { name: "British Airways", iataCode: "BA" },
  { name: "Emirates", iataCode: "EK" },
  { name: "Air France", iataCode: "AF" },
  { name: "American Airlines", iataCode: "AA" },
  { name: "United Airlines", iataCode: "UA" },
  { name: "Delta", iataCode: "DL" },
  { name: "Japan Airlines", iataCode: "JL" },
  { name: "Air India", iataCode: "AI" },
  { name: "EgyptAir", iataCode: "MS" },
  { name: "Qantas", iataCode: "QF" },
  { name: "Etihad Airways", iataCode: "EY" },
  { name: "Turkish Airlines", iataCode: "TK" },
  { name: "Southwest Airlines", iataCode: "WN" },
  { name: "Swiss", iataCode: "LX" },
  { name: "AirAsia", iataCode: "AK" },
  { name: "KLM", iataCode: "KL" },
  { name: "Virgin Atlantic", iataCode: "VS" },
  { name: "Alaska Airlines", iataCode: "AS" },
  { name: "JetBlue Airways", iataCode: "B6" },
  { name: "Thai Airways", iataCode: "TG" },
  { name: "All Nippon Airways", iataCode: "NH" },
  { name: "Gulf Air", iataCode: "GF" },
  { name: "Malaysia Airlines", iataCode: "MH" },
  { name: "Ryanair", iataCode: "FR" },
  { name: "easyJet", iataCode: "U2" },
  { name: "Air New Zealand", iataCode: "NZ" },
  { name: "SAS", iataCode: "SK" },
];

interface props {
  searchParams : { airline : string }
}

export default function Airlines({ searchParams} : props) {

  let filteredList = airlinesList
  
  if(searchParams.airline){
    filteredList = airlinesList.filter((airline : Airline) => airline.name.toLowerCase().includes(searchParams.airline.toLowerCase()))
  }

  return (
    <main className="flex min-h-screen flex-col p-7">
      
      <div className="flex text-3xl pb-10 max-w-5xl items-center justify-between">
          <SearchBar/>
          <Hero msg='Back' path='/'/>
      </div>

      <div className='grid text-center gap-5 lg:grid-cols-5 lg:text-left'>
            {filteredList.map((airline : Airline) => <AirlineCard key={airline.iataCode} airline={airline}/>)}
      </div>

    </main>
  )
}
