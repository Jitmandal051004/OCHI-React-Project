import React from 'react'

function About() {
    return (
        <div className='w-full p-20 text-left bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className='font-["Neue_Montreal"] text-[3.6vw] leading-[3.6vw] pt-12 mr-[15vw] mb-[2.75vw]'>
                Ochi is a strategic partner for fast-growing tech
                businesses that need to raise funds, sell products, 
                explain complex ideas, and hire great people.
            </h1>
            <div className='w-full border-t-2 mt-20 pt-10 border-[#a1b562] flex justify-evenly'>
                <div className="w-1/2">
                    <h1 className='text-6xl font-["Neue_Montreal"]'>Our approach :</h1>
                    <button className='px-10 py-6 bg-zinc-900 rounded-full mt-7 text-white flex gap-10 items-center uppercase'>
                        Read More 
                        <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                    </button>
                </div>
                <div className="w-1/2 h-[70vh] rounded-3xl bg-red-400">

                </div>
            </div>
        </div>
    )
}

export default About