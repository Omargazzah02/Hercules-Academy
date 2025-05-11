"use client"
import '../app/globals.css'
import Image from 'next/image'
import Button from './utils/buttons/Button'
import GrayButton  from './utils/buttons/GrayButton'
const OurLegacy = () => {
    return (

        <section
    className="bg-[url('/images/background2.png')]   bg-cover  bg-top  h-full    flex flex-col justify-end   items-center p-8    "
        >

        <div className=' flex flex-col justify-center gap-y-10 w-[90%]  h-full   '
        > 

            <div className='lg:w-1/2 flex lg:text-left  flex-col gap-y-7 items-center lg:items-start '>
            <h1 className='text-white font-extrabold lg:text-6xl text-3xl'>
                    OUR LEGACY OF <span className='text-red-600'>EXELLENCE </span>
                    IN MMA
                </h1>

                <p className='text-gray-300 text-sm  '>With Years Of Experience Mentoring Fighters From All Over The World, Hercules Academy Has Produced Champions Who Have Made Their Mark In National And International Competitions.</p>
       <div className='flex space-x-2 '>
       <button
       className='p-3 bg-red-600 hover:bg-red-400 text-white'><i className="fa-brands fa-youtube"></i> Watch Stroy</button>
           <GrayButton
           label='Register Now'
           onClick={() => {}}></GrayButton>

       </div>

            </div>


            <div className='w-full p-4  flex  space-x-7 flex-wrap  justify-center'>
            
            <div className=' relative mb-3 w-80 lg:w-96 lg:h-64 h-52 bg-[url("/images/videos/video1.jpg")] bg-cover bg-center flex flex-col justify-end p-6 hover-cursor' >
            <i className="fas fa-play-circle  text-4xl text-red-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>

            <p className='font-bold text-white hidden lg:block'><span className='text-red-600'>Semi Final </span> One</p>
            <p className='font-bold text-white hidden lg:block'>Championship (UFC 2024)</p>
            
            </div>
         
            <div className=' relative mb-3 w-80 lg:w-96 lg:h-64 h-52    bg-[url("/images/videos/video1.jpg")] bg-cover bg-center flex flex-col justify-end p-6 hover-cursor' >
            <i className="fas fa-play-circle  text-4xl text-red-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>

<p   className='font-bold text-white hidden lg:block'><span className='text-red-600'>Final battle </span> Ultimate</p>
<p className='font-bold text-white hidden lg:block '>Fighting Championship (UFC 2023)</p>

</div>

<div className='relative mb-3 w-80 lg:w-96 lg:h-64 h-52  bg-[url("/images/videos/video3.jpg")] bg-cover bg-center flex flex-col justify-end p-6 hover-cursor' >
<i className="fas fa-play-circle  text-4xl text-red-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>
<p className='font-bold text-white hidden lg:block'><span className='text-red-600'>Semi Final </span> One</p>
<p className='font-bold text-white hidden lg:block'>Championship (UFC 2024)</p>

</div>





           
</div>
            </div>

            </section>
    )

}

export default OurLegacy