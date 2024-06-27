import React from 'react';
import logo from '../assets/logo.png';
import { Button } from "@/components/ui/button"
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className='wrapper flex w-full pt-6 z-10  items-center justify-between px-10'>
        <MobileNav/>
        <img className='md:visible invisible md:h-10 md:w-auto' src={logo} alt='logo' />
        <div>
            <ul className='gap-6 hidden md:flex'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About US</a>
                </li>
                <li>
                    <a href="/">Services</a>
                </li>
                <li>
                    <a href="/">Gallery</a>
                </li>
                <li>
                    <a href="/">Courses</a>
                </li>
                <li>
                    <a href="/">Contac Us</a>
                </li>
            </ul>
        </div>
        <Button className="text-pink-500 bg-slate-400" variant="outline">Login</Button>

        

    </nav>
  )
}

export default Navbar