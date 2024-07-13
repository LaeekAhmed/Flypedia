export interface Airline {
   name: string;
   iataCode: string;
}

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
   { name: "IndiGo", iataCode: "6E" },
   { name: "SpiceJet", iataCode: "SG" },
   { name: "Vistara", iataCode: "UK" },
   { name: "Saudi Arabian Airlines", iataCode: "SV" },
   { name: "Kuwait Airways", iataCode: "KU" },
   { name: "Oman Air", iataCode: "WY" },
   { name: "SriLankan Airlines", iataCode: "UL" },
   { name: "Bangladesh Biman", iataCode: "BG" },
   { name: "Garuda Indonesia", iataCode: "GA" },
   { name: "Philippine Airlines", iataCode: "PR" },
   { name: "Vietnam Airlines", iataCode: "VN" },
   { name: "Korean Air", iataCode: "KE" },
   { name: "China Airlines", iataCode: "CI" },
   { name: "EVA Air", iataCode: "BR" },
];

// mappings for airline IATA codes;
export const mappings: { [key: string]: string } = {
   QR: "Qatar Airways",
   SQ: "Singapore Airlines",
   CX: "Cathay Pacific",
   AC: "Air Canada",
   LH: "Lufthansa",
   BA: "British Airways",
   EK: "Emirates",
   AF: "Air France",
   AA: "American Airlines",
   UA: "United Airlines",
   DL: "Delta",
   JL: "Japan Airlines",
   AI: "Air India",
   MS: "EgyptAir",
   QF: "Qantas",
   EY: "Etihad Airways",
   TK: "Turkish Airlines",
   WN: "Southwest Airlines",
   LX: "Swiss",
   AK: "AirAsia",
   KL: "KLM",
   VS: "Virgin Atlantic",
   AS: "Alaska Airlines",
   B6: "JetBlue Airways",
   TG: "Thai Airways",
   NH: "All Nippon Airways",
   GF: "Gulf Air",
   MH: "Malaysia Airlines",
   FR: "Ryanair",
   U2: "easyJet",
   NZ: "Air New Zealand",
   SK: "SAS",
   "6E": "IndiGo",
   SG: "SpiceJet",
   UK: "Vistara",
   SV: "Saudi Arabian Airlines",
   KU: "Kuwait Airways",
   WY: "Oman Air",
   UL: "SriLankan Airlines",
   BG: "Bangladesh Biman",
   GA: "Garuda Indonesia",
   PR: "Philippine Airlines",
   VN: "Vietnam Airlines",
   KE: "Korean Air",
   CI: "China Airlines",
   BR: "EVA Air",
};