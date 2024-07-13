// airline info API call (cached) :
export async function airlineInfo(name: string) {
  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/airlines?iata=` + name,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': process.env.ninja_api_key || ''
        }
      });

    const result = await response.json();
    console.log("fetched results");
    return result;
  }

  catch (error) {
    return error;
  }
}

// airline based flight info API call (updated to use query parameters):
export async function flightInfo(airline_iata: string) {
  const api_base = 'https://airlabs.co/api/v9/flights';
  const api_key: string = process.env.airlabs_api_key || '';
  const params = new URLSearchParams({ api_key, airline_iata });

  try {
    const response = await fetch(`${api_base}?${params.toString()}`,
      {
        next: { revalidate: 5 },
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

    const result = await response.json();
    console.log("fetched results");
    return result;
  } catch (error) {
    return error;
  }
}