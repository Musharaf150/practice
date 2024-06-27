import React from 'react'
import main from '../assets/mainimg.png';
import Navbar from './Navbar'
import { Button } from "@/components/ui/button"


const Hero = () => {
  return (
    <section className='w-full h-screen bg-[url("./assets/hero.svg")] bg-no-repeat'>
        <Navbar/>
        <div className='wrapper w-4/5'>
        <h1 className='text-white text-4xl md:text-7xl mb-5'>Your vision made real!</h1>
        <div className='grid sm:grid-flow-col w-full gap-5'>
                <div className=''>
                <h1 className='text-3xl md:text-5xl lg:text-6xl  font-serif mb-4'>
                    Bespoke <span className='font-extrabold'>Party</span> <br/> Stationary For<br/>Your <span className='font-extrabold'>Event</span>
                </h1>
                <Button className="bg-slate-300" variant="outline">Contact Us</Button>


                </div>
                <img className='col-span-4  m-auto h-3/4 -mt-20 sm:-mt-8 lg:-mt-28 lg:mr-4 sm:h-4/5' src={main} alt="main"/>
        </div>
        
        </div>
    </section>
  )
}

export default Hero