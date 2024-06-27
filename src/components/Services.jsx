import React from 'react'
import Card from './Card'
import pic from "../assets/photo.avif";

const Services = () => {
  return (
    <section className='h-screen w-full'>
        <div className='w-full h-3/5 bg-gradient-to-t from-cyan-200 to-pink-300'>
        <div className='wrapper'>
            <div className='xl:flex py-8'>
                <div className='w-full xl:pl-10 '>
                    <h1 className='text-white text-4xl md:text-7xl'>What We Do</h1>
                    <h3 className='text-3xl md:text-5xl lg:text-6xl  font-serif'>Bespoke Services</h3>
                </div>
                <div className='py-8 xl:-ml-20'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime numquam architecto assumenda in eligendi debitis, cupiditate, odio veritatis nemo, ut doloremque minima voluptatibus rem voluptas recusandae nulla mollitia. Odio, ratione!</p>
                </div>
            </div>
            <div className='grid gap-4 place-content-center sm:flex sm:flex-wrap place-items-center'>
            <Card img={pic} title='Anneversaries' des='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime numquam architecto assumenda in eligendi '/>
            <Card img={pic} title='Anneversaries' des='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime numquam architecto assumenda in eligendi '/>
            <Card img={pic} title='Anneversaries' des='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime numquam architecto assumenda in eligendi '/>
            </div>
        </div>

        </div>
    </section>
  )
}

export default Services