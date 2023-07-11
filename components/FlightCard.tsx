"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Btn } from "./btn";

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

interface Props {
    flight : FlightInfo
}

export const FlightCard = ({ flight } : Props ) => {

    const {flag, flight_iata, airline_iata, status, speed, v_speed, dep_iata, arr_iata} = flight

    return (
    <div className="flight_card">
        {status === "en-route" ? (<div className="blinking-dot"></div>) : (<div className="grey-dot"></div>)}
        <br />
        flight <strong>{flight_iata}</strong> currently {status} with speed {speed} km/h and is
        <br />
        scheduled from {dep_iata} to {arr_iata}
    </div>
    )
}
