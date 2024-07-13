"use client";

import { Button } from "@/components/ui/button";
import { Footer } from "flowbite-react";
import { BsGithub, BsGlobe, BsLinkedin } from "react-icons/bs";

export default function FooterWithSocialMediaIcons() {
   const handleScroll = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   return (
      <Footer container>
         <div className='w-full'>
            <div className='flex justify-center mt-4'>
               <Button variant='secondary' onClick={handleScroll} aria-label='Scroll'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                     <path strokeLinecap='round' strokeLinejoin='round' d='M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75' />
                  </svg>
               </Button>
            </div>

            <Footer.Divider />

            <div className='w-full sm:flex sm:items-center sm:justify-between'>
               <div className='flex items-center'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-10 h-10 mr-3'>
                     <path strokeLinecap='round' strokeLinejoin='round' d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5' />
                  </svg>{" "}
                  <span className='text-2xl font-bold'>Flypedia</span>
               </div>

               <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
                  <Footer.Icon target='_blank' rel='noopener' href='https://www.linkedin.com/in/laeek-ahmed-shaikh/' icon={BsLinkedin} />
                  <Footer.Icon target='_blank' rel='noopener' href='https://github.com/LaeekAhmed' icon={BsGithub} />
                  <Footer.Icon target='_blank' rel='noopener' href='https://laeekahmed.github.io/Portfolio-React/' icon={BsGlobe} />
               </div>
            </div>
         </div>
      </Footer>
   );
}
