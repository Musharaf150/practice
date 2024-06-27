import React from 'react'
import abtimg from '../assets/photo.avif';

const About = () => {
  return (
    <section className='wrapper h-screen place-items-center flex px-10'>
        <div className='flex gap-x-16'>
            <div className='rounded-md w-80 h-96 bg-gradient-to-b from-pink-800 to-cyan-500'>
                <img src={abtimg} alt="image" className='w-80 h-96 -mt-4 rounded-md ml-6' />

            </div>
            <div className='text-wrap -mt-6 w-1/2'>
                <h1 className='text-pink-400 font-semibold text-5xl mb-4'>About Us</h1>
                <h3 className='text-4xl font-serif font-semibold mb-4'>Funky Factory</h3>
                <p className='mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur cupiditate natus saepe? Labore, in veritatis facere unde eos voluptatibus neque maxime doloribus asperiores harum porro voluptate nulla nemo perspiciatis excepturi.</p>
                <p className='mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus explicabo quod aspernatur adipisci! Sapiente vel illum officiis saepe molestiae natus tempora voluptatibus, quo aut expedita reprehenderit velit eos nemo!</p>

                <button className='rounded-md py-2 px-4 bg-gradient-to-b from-pink-800 to-cyan-500 '>Read More</button>
            </div>
        </div>
    </section>
  )
}

export default About