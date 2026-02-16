import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return(
        <>
        <div id="footer" className='max-h-3xl w-full p-5 bg-[#0992C2]'>
            <div>
                <div className=''>
                    <img className='w-12 h-12' src="./public/Logo.jpg" alt="Footer_logo" />
                </div>
                <div className='flex flex-col gap-3'>
                    <p className=''>Find us in social media</p>
                    <ul className='flex items-center gap-4'>
                        <li><a href="#" className='border border-[#ACBAC4]-solid rounded-full p-1'><FontAwesomeIcon icon="fa-brands fa-instagram"/></a></li>
                        <li><a href="#" className='border border-[#ACBAC4]-solid rounded-full p-1'><FontAwesomeIcon icon="fa-brands fa-facebook"/></a></li>
                        <li><a href="#" className='border border-[#ACBAC4]-solid rounded-full p-1'><FontAwesomeIcon icon="fa-brands fa-twitter"/></a></li>
                        <li><a href="#" className='border border-[#ACBAC4]-solid rounded-full p-1'><FontAwesomeIcon icon="fa-brands fa-linkedin"/></a></li>
                    </ul>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        </>
    )
}

export default Footer;