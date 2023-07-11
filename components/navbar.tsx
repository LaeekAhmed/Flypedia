import Link from "next/link";
import Image from "next/image";

import { Btn } from "./btn";
import { Sign_in } from "./sign_in";

const Navbar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='navbar max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
        <Link href='/' className='flex justify-center items-center'>
            <Image
            src='/logo.png'
            alt='logo'
            width={50}
            height={50}
            className='object-contain'
            />
        </Link>

        <Sign_in/>
    </nav>

  </header>
);

export default Navbar;