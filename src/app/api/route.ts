import { airlineInfo, apiCall } from "../../../utils";

// test AIRLABS API-1 :
async function flightInfo () 
{
    const data = await airlineInfo("Qatar airways")
    return data
}

async function flightInfo2 (status : string, airline : string)
{
    const data = await apiCall(airline);

    const filteredFlights1 = data.response.filter((flight: { status: string; }) => flight.status === "en-route");
    const filteredFlights2 = data.response.filter((flight: { status: string; }) => flight.status === "landed");
    const filteredFlights3 = data.response.filter((flight: { status: string; }) => flight.status === "scheduled");

    const count1 : number = filteredFlights1.length;
    const count2 : number = filteredFlights2.length;
    const count3 : number = filteredFlights3.length;
  
    const responsePayload = {
      count1,
      count2,
      count3,
      flights: data,
    };
  
    return responsePayload
}

export async function GET(request: Request)
{
    const responsePayload = await flightInfo2("landed","UA");
    return new Response(JSON.stringify(responsePayload),
    {
      headers: { 'Content-Type': 'application/json' },
    });
}
