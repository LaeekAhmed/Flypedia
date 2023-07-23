'use client'
import Image from 'next/image'
import { MouseEventHandler } from 'react';

interface Props {
    title: string;
    type?: "button" | "submit";
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    rightIcon?: string;
    style? : string;
}

export const Btn = ({title, type  ,handleClick, rightIcon, style} : Props) => {
  return (
    <button
        disabled={false}
        type={type || "button"}
        className="inline-block font-mono px-5 py-2 bg-transparent text-black text-xl no-underline border-2 border-black rounded-md transition duration-300 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white"
        onClick={handleClick}
    >
        <span>
            {title}
        </span>
        {/* {rightIcon && (
          <div className='relative w-6 h-6'>
            <Image src="/right-arrow.svg" alt="right icon" fill />
          </div>
        )} */}
    </button>
  )
}