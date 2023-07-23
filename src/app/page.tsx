// import Image from 'next/image'
// import { Hero, Btn } from '../../components'
import Hero_tw from '../../components/hero'

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 ">
      {/* <Hero msg='Checkout Qatar Airways!' path='/airlines/QR'/> */}
      <Hero_tw/>
      {/* <Image src="/hero.jpg" alt="Vercel Logo" className="dark:invert" width={100} height={24} /> */}
    </main>
  )
}
