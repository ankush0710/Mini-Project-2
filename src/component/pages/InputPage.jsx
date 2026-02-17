import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const InputPage = () => {
    return (
        <>
        <div className="mx-10 my-12">
            <div className="max-w-4xl py-3 border border-gray-500 rounded-xl shadow-xl md:mx-auto">
                <div id="heading" className="border-b border-gray-400 text-center py-5">
                    <h1 className="text-4xl text-[#0992C2] font-bold">Score Form</h1>
                </div>
                <div className="flex flex-col px-2 py-4 gap-4 justify-center md:py-8 px-4">
                    <label htmlFor="PlayerName" className="font-semibold text-lg text-[#547792]">Player's Name</label>
                    <input className="border border-gray-300 rounded-lg p-3 focus:border-[#547792] focus:border-outline-2" type="text" placeholder="Please Enter Name"/>
                    <label htmlFor="Score" className="font-semibold text-lg text-[#547792]">Score</label>
                    <input className="border border-gray-300 rounded-lg p-3 focus:border-[#547792] focus:border-outline-2" type="number" placeholder="Please Enter Score"/>
                    <label htmlFor="Match" className="font-semibold text-lg text-[#547792]">Match No.</label>
                    <input className="border border-gray-300 rounded-lg p-3 focus:border-[#547792] focus:border-outline-2" type="number" placeholder="Please Enter Match Number"/>
                </div>
                <div className="my-3 text-end mx-5 flex gap-3 items-center justify-end">
                    <button type="submitt" className="bg-[#0992C2] px-3 py-1 text-white font-semibold text-center text-lg rounded rounded-lg hover:bg-[#0B2D72] md:px-4 md:text-xl">Reset</button>
                    <Link className='font-bold text-lg text-[#547792] md:text-xl' to={"/Form"}><FontAwesomeIcon icon="fa-solid fa-plus"/>ADD</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default InputPage;