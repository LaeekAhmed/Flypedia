"use client"
import Image from "next/image"
import {Fragment} from "react"
import { Dialog, Transition } from "@headlessui/react"
import { Btn } from "./Btn"
import { FlightInfo } from "./FlightCard"

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  flight : FlightInfo,
  name : string
}

const DetailsCard = ({ isOpen, closeModal, flight, name }: CarDetailsProps) => (
  <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-indigo-600"
                  >
                    Flight Details
                </Dialog.Title>

                <button type="button" className="absolute top-2 right-2 z-10 w-fit rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" onClick={closeModal}>
                  Esc
                </button>

                {/* <div className='flex-1 flex flex-col gap-3'>
                  <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                    <Image src={generateCarImageUrl(car)} alt='car model' fill priority className='object-contain' />
                  </div>

                  <div className='flex gap-3'>
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                      <Image src={generateCarImageUrl(car, "29")} alt='car model' fill priority className='object-contain' />
                    </div>
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                      <Image src={generateCarImageUrl(car, "33")} alt='car model' fill priority className='object-contain' />
                    </div>
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                      <Image  src={generateCarImageUrl(car, "13")} alt='car model' fill priority className='object-contain' />
                    </div>
                  </div>
                </div> */}

                <div className='flex-1 flex flex-col gap-2'>
                  <h2 className='font-semibold text-xl capitalize'>
                    {name} flight #{flight.flight_iata}
                  </h2>

                  <div className='mt-3 flex flex-wrap gap-4'>

                    {Object.entries(flight).map(([key, value]) => 
                    (
                      <div className='flex justify-between gap-5 w-full text-right' key={key} >
                        <h4 className='text-grey capitalize'>
                          {key.split("_").join(" ")}
                        </h4>

                        <p className='text-black-100 font-semibold'>
                          {value}
                        </p>
                        
                      </div>
                    ))}
        
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
);

export default DetailsCard;