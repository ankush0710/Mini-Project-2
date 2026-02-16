import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div className='bg-[#0992C2] p-3 flex justify-between items-center'>
            <div id="logo" className='w-8 h-8 md:w-12 md:h-12'>
                <img src="../public/Logo.jpg" alt="Logo" />
            </div>
            <div id="navLink">
                <ul className='flex justify-center items-center gap-4 md:gap-10 md:mx-5'>
                    <li className='text-[#F6E7BC] font-semibold md:text-xl nav-item'><Link className='nav-link' to={"/Score"}>Input Score</Link></li>
                    <li className='text-[#F6E7BC] font-semibold md:text-xl nav-item'><Link className='nav-link' to={"/Players"}>Player's section</Link></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar;