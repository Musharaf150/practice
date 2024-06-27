import React from 'react'
import abtimg from '../assets/photo.avif';
import { Button } from './ui/button';

const About = () => {
  return (
    <section className='wrapper h-screen flex px-10'>
        <div className='flex gap-x-16 justify-center flex-col-reverse sm:flex-row items-center overflow-hidden'>
            <div className='flex justify-end items-end rounded-md h-52 sm:w-80 sm:h-96 bg-gradient-to-b from-pink-800 to-cyan-500'>
                <img src={abtimg} alt="image" className='sm:w-80 sm:h-96 h-52 w-80 mb-6 rounded-md ml-6' />

            </div>
            <div className='text-wrap  -mt-6 sm:w-1/2'>
                <h1 className='text-pink-400 pt-4 font-semibold text-3xl sm:text-5xl mb-4'>About Us</h1>
                <h3 className=' text-2xl sm:text-4xl font-serif font-semibold mb-4'>Funky Factory</h3>
                <p className='mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur cupiditate natus saepe? Labore, in veritatis facere unde eos voluptatibus neque maxime doloribus asperiores harum porro voluptate nulla nemo perspiciatis excepturi.</p>
                <p className='sm:mb-10 mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus explicabo quod aspernatur adipisci! Sapiente vel illum officiis saepe molestiae natus tempora voluptatibus, quo aut expedita reprehenderit velit eos nemo!</p>
                <Button className='rounded-md mb-8 py-2 px-4 bg-gradient-to-b from-pink-800 to-cyan-500 ' variant="outline">Read More</Button>
            </div>
        </div>
    </section>
  )
}

export default About