const api_base = 'https://airlabs.co/api/v9/flights?';


// airline info API call :
export async function airlineInfo(name : string)
{
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

// airline based flight info API call :
export async function apiCall(airline : string) {
  const method = 'ping'
  const params = { param1: 'value1', api_key : process.env.airlabs_api_key, airline_iata : airline }

  try {
    const response = await fetch(`${api_base}${method}`, 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    const result = await response.json();
    console.log("fetched results");
    return result;
  }

  catch (error) {
    return error;
  }
}

// get location based on coordinates
export function getLocation() {

}