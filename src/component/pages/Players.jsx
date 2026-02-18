import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Players = () => {
    return(
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
            <div id='card1' className='h-68 w-72 mx-auto bg-[#EDDCC6] mx-10 my-12 rounded-xl shadow-lg md:max-h-72 md:max-w-2xl md:'>
                <div id="heading-section" className='py-3 border-b-4 border-double border-[#262626]'>
                    <h1 className='text-2xl font-bold text-[#262626] text-center'>Player:-1</h1>
                </div>
                <div id="body-section" className='px-3 py-6 flex flex-col gap-4'>
                    <p className='text-lg text-[#262626] font-semibold'>Player's Name: Ankush Kurvey</p>
                    <p className='text-lg text-[#262626] font-semibold'>Score: 20 runs</p>
                    <p className='text-lg text-[#262626] font-semibold'>Match No.: 122</p>
                </div>
                <div id='footer-section' className='py-2 px-5 flex justify-between items-center gap-2 border-t-4 border-double border-[#262626]'>
                    <a href="" className='text-xl text-[#7AAACE]'><FontAwesomeIcon icon="fa-solid fa-pen-to-square"/></a>
                    <a href="" className='text-xl text-[#7AAACE]'><FontAwesomeIcon icon="fa-solid fa-trash" /></a>
                </div>
            </div>
            <div id='card2' className='h-68 w-72 mx-auto bg-[#EDDCC6] mx-10 my-12 rounded-xl shadow-lg md:max-h-72 md:max-w-2xl md:'>
                <div id="heading-section" className='py-3 border-b-4 border-double border-[#262626]'>
                    <h1 className='text-2xl font-bold text-[#262626] text-center'>Player:-1</h1>
                </div>
                <div id="body-section" className='px-3 py-6 flex flex-col gap-4'>
                    <p className='text-lg text-[#262626] font-semibold'>Player's Name: Ankush Kurvey</p>
                    <p className='text-lg text-[#262626] font-semibold'>Score: 20 runs</p>
                    <p className='text-lg text-[#262626] font-semibold'>Match No.: 122</p>
                </div>
                <div id='footer-section' className='py-2 px-5 flex justify-between items-center gap-2 border-t-4 border-double border-[#262626]'>
                    <a href="" className='text-xl text-[#7AAACE]'><FontAwesomeIcon icon="fa-solid fa-pen-to-square"/></a>
                    <a href="" className='text-xl text-[#7AAACE]'><FontAwesomeIcon icon="fa-solid fa-trash" /></a>
                </div>
            </div>
            <div id='card3' className='h-68 w-72 mx-auto bg-[#EDDCC6] mx-10 my-12 rounded-xl shadow-lg md:max-h-72 md:max-w-2xl md:'>
                <div id="heading-section" className='py-3 border-b-4 border-double border-[#262626]'>
                    <h1 className='text-2xl font-bold text-[#262626] text-center'>Player:-1</h1>
                </div>
                <div id="body-section" className='px-3 py-6 flex flex-col gap-4'>
                    <p className='text-lg text-[#262626] font-semibold'>Player's Name: Ankush Kurvey</p>
                    <p className='text-lg text-[#262626] font-semibold'>Score: 20 runs</p>
                    <p className='text-lg text-[#262626] font-semibold'>Match No.: 122</p>
                </div>
                <div id='footer-section' className='py-2 px-5 flex justify-between items-center gap-2 border-t-4 border-double border-[#262626]'>
                    <a href="" className='text-xl text-[#7AAACE]'><FontAwesomeIcon icon="fa-solid fa-pen-to-square"/></a>
                    <a href="" className='text-xl text-[#7AAACE]'><FontAwesomeIcon icon="fa-solid fa-trash" /></a>
                </div>
            </div>
            <div id='card4' className='h-68 w-72 mx-auto bg-[#EDDCC6] mx-10 my-12 rounded-xl shadow-lg md:max-h-72 md:max-w-2xl md:'>
                <div id="heading-section" className='py-3 border-b-4 border-double border-[#262626]'>
                    <h1 className='text-2xl font-bold text-[#262626] text-center'>Player:-1</h1>
                </div>
                <div id="body-section" className='px-3 py-6 flex flex-col gap-4'>
                    <p className='text-lg text-[#262626] font-semibold'>Player's Name: Ankush Kurvey</p>
                    <p className='text-lg text-[#262626] font-semibold'>Score: 20 runs</p>
                    <p className='text-lg text-[#262626] font-semibold'>Match No.: 122</p>
                </div>
                <div id='footer-section' className='py-2 px-5 flex justify-between items-center gap-2 border-t-4 border-double border-[#262626]'>
                    <a href="" className='text-xl text-[#7AAACE]'><FontAwesomeIcon icon="fa-solid fa-pen-to-square"/></a>
                    <a href="" className='text-xl text-[#7AAACE]'><FontAwesomeIcon icon="fa-solid fa-trash" /></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Players;