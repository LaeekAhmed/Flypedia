import Image from 'next/image'
import { apiCall } from '../../../utils'
import { FlightInfo, FlightCard} from '../../../components/FlightCard';
import { AirlineCard, Airline } from '../../../components/AirlineCard';
import { Btn, Hero, airlinesList } from '../../../components';
import SearchBar from '../../../components/SearchBar';

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
