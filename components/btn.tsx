'use client'
import Image from 'next/image'
import { MouseEventHandler } from 'react';

interface Props {
    title: string;
    type?: "button" | "submit";
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

export const Btn = ({title, type  ,handleClick} : Props) => {
  return (
    <button
        disabled={false}
        type={type || "button"}
        className='btn'
        onClick={handleClick}
    >
        <span>
            {title}
        </span>
    </button>
  )
}