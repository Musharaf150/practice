import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import Button from './Button';
const Navbar = () => {
  return (
    <nav className='wrapper flex w-full pt-6 z-10  items-center justify-between px-6'>
        <img className='h-10 w-auto' src={logo} alt='logo' />
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
        <Button color='text-pink-400' title='Login'/>

    </nav>
  )
}

export default Navbar