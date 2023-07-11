import Image from 'next/image'
import { apiCall } from '../../../../utils'
import { FlightInfo, FlightCard} from '../../../../components/FlightCard';

// id corresponds to IATA code;
export default async function Airlines({params} : {params: {id : string}}) {

  const mappings: { [key: string]: string } = {
    "EK": "Emirates",
    "QR": "Qatar Airways",
    "SQ": "Singapore Airlines",
    "CX": "Cathay Pacific Airways",
    "LH": "Lufthansa",
    "BA": "British Airways",
    "AF": "Air France",
    "AA": "American Airlines",
    "UA": "United Airlines",
    "DL": "Delta AirLines"
  }
  

  const flight_data = await apiCall(params.id);
  
  const filteredFlights = flight_data.response.filter((flight: { status: string; }) => flight.status === "landed" || "en-route" || "scheduled");
  const count: number = filteredFlights.length;
  const data_empty = count === 0;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-3xl z-10 w-full max-w-5xl items-center justify-between font-mono lg:flex">
          viewing flights for&nbsp;
          {mappings[params.id]}
          &nbsp;
          <a className="underline" href="/airlines">← Go Back</a>
      </div>

      {data_empty ? 
      (<div className="relative flex place-items-center">loading ...</div>)
      : 
      (
        <section className='text-xl'>
          <p className="relative flex place-items-center"> 
            no. of flights: {count}
            <br />
            results :
          </p>
          <div>
            {filteredFlights.map((flight : FlightInfo) => <FlightCard flight={flight}/>)}
          </div>
        </section>
      )
      }

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
