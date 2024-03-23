import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    return (
        <div className='w-full h-screen bg-black pt-1'>
            <div className="textStructure mt-52 px-20">
                {["We Create", "Eye Opening", "Presentation"].map((item,index)=>{
                    return (<div className="masker">
                        <div className='w-fit flex items-center'>
                            {index===1 && (
                                <div className='w-[8.5vw] h-[4.8vw] mr-5 rounded-md bg-red-500 relative'></div>
                                )}
                            <h1 className="flex items-center h-full uppercase text-[6.5vw] leading-[6vw] tracking-tighter font-roboto font-medium">
                                {item}
                            </h1>
                        </div>
                    </div>);
                })}
            </div>
            <div className='border-t-2 border-zinc-800 mt-40 flex justify-between items-center py-5 px-20'>
                {["For public and private companies", "From the first patch to IPO"].map((item, index)=>
                    <p className='text-md font-light tracking-tighter leading-none'>{item}</p>
                )}
                <div className="start flex items-center gap-5">
                    <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-md rounded-full uppercase'>start the project</div>
                    <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage