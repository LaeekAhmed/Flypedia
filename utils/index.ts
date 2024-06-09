// airline info API call (cached) :
export async function airlineInfo(name: string) {
  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/airlines?name=` + name,
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

// airline based flight info API call (not cached) :
export async function apiCall(airline: string) {
  const method = 'ping'
  const api_base = 'https://airlabs.co/api/v9/flights?';
  const params = { param1: 'value1', api_key: process.env.airlabs_api_key, airline_iata: airline }

  try {
    const response = await fetch(`${api_base}${method}`,
      {
        cache: 'no-store', method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(params)
      });

    const result = await response.json();
    console.log("fetched results");
    return result;
  }

  catch (error) {
    return error;
  }
}

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};