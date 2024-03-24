import { motion } from 'framer-motion'
import React from 'react'
import { Parallax } from 'react-scroll-parallax'

function Marquee() {
    return (
        <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] overflow-hidden'>
            <div className='border-t-2 border-b-2 border-zinc-300 flex justify-between whitespace-nowrap'>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 8.5}} className='text-[20vw] -tracking-[0.085em] pt-4 pb-5 uppercase leading-none font-roboto font-semibold'>we are ochi</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 8.5}} className='text-[20vw] -tracking-[0.085em] pt-4 pb-5 uppercase leading-none font-roboto font-semibold'>we are ochi</motion.h1>
            </div>
        </div>
    )
}

export default Marquee