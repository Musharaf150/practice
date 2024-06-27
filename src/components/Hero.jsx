import React from 'react'
import main from '../assets/mainimg.png';
import Navbar from './Navbar'
import Button from './Button';

const Hero = () => {
  return (
    <section className='w-full h-screen px-6 bg-[url("./assets/hero.svg")]'>
        <Navbar/>
        <div className='wrapper'>
        <h1 className='text-white font-extrabol text-7xl mb-5'>Your vision made real!</h1>
        <div className='grid grid-flow-col w-full gap-5'>
                <div className=''>
                <h1 className='text-7xl font-serif mb-4'>
                    Bespoke Party<br/> Stationary For<br/>Your Event
                </h1>
                <Button bg='text-pink' className="col-span-2 ml-3 py-3" title="Contac Us"/>

                </div>
                <img className='col-span-2 ml-6 -mt-16' src={main} alt="main" height={500} width={500} />
        </div>
        
        </div>
    </section>
  )
}

export default Hero