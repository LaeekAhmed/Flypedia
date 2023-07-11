"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Btn } from "./btn";
import { PropsFromToggle } from "react-bootstrap/esm/DropdownToggle";
import Link from 'next/link'

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
};

export interface Airline {
    name : string,
    iataCode : string
}

interface props {
    airline : Airline
}

export const AirlineCard = ({ airline } : props) => {
    return (
      <div className="flight_card">
        {airline.name}
        <br />
        <Link href={`/airlines/${airline.iataCode}`}>
            See Flights →
        </Link>
      </div>
    );
  };
  
