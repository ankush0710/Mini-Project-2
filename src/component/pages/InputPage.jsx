import React from "react";

const InputPage = () => {
    return (
        <>
        <div>
            <div className="max-w-4xl mx-10 my-12 border border-gray-500">
                <div id="heading" className="">
                    <h1 className="text-4xl text-gray-500 font-bold">Input Score</h1>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="PlayerName">Player Name</label>
                    <input className="border border-gray-300 rounded-lg" type="text" placeholder="please Enter Name"/>
                    <label htmlFor="Score">Score</label>
                    <input type="number" placeholder="please Enter Score"/>
                    <label htmlFor="Match">Match No.</label>
                    <input type="number" placeholder="Please Enter Match Number"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default InputPage;