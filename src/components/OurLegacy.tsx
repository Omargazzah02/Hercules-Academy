"use client"
import '../app/globals.css'
import Image from 'next/image'
import Button from './utils/buttons/Button'
import GrayButton  from './utils/buttons/GrayButton'
const OurLegacy = () => {
    return (

        <section
    className="bg-[url('/images/background2.webp')] bg-cover  bg-top    h-screen  flex flex-col justify-end  pb-14 items-center  "
        >

        <div className='w- flex flex-col justify-center gap-y-10 '
        > 

            <div className='w-1/2 flex  flex-col gap-y-7'>
            <h1 className='text-white font-extrabold text-6xl'>
                    OUR LEGACY OF <span className='text-red-600'>EXELLENCE </span>
                    IN MMA
                </h1>

                <p className='text-gray-300 text-sm  '>With Years Of Experience Mentoring Fighters From All Over The World, Hercules Academy Has Produced Champions Who Have Made Their Mark In National And International Competitions.</p>
       <div className='flex space-x-2'>
       <Button
           label='Watch Story'
           onClick={() => {}}
           ></Button>
           <GrayButton
           label='Register Now'
           onClick={() => {}}></GrayButton>

       </div>

            </div>


            <div className='w-full p-4  flex  space-x-7 '>
            
            <div className='w-96 h-64 bg-[url("/images/videos/video1.jpg")] bg-cover bg-center flex flex-col justify-end p-6 hover-cursor' >

            <p className='font-bold text-white'><span className='text-red-600'>Semi Final </span> One</p>
            <p className='font-bold text-white'>Championship (UFC 2024)</p>
            
            </div>
         
            <div className='w-96 h-64 bg-[url("/images/videos/video1.jpg")] bg-cover bg-center flex flex-col justify-end p-6 hover-cursor' >

<p className='font-bold text-white'><span className='text-red-600'>Final battle </span> Ultimate</p>
<p className='font-bold text-white'>Fighting Championship (UFC 2023)</p>

</div>

<div className='w-96 h-64 bg-[url("/images/videos/video3.jpg")] bg-cover bg-center flex flex-col justify-end p-6 hover-cursor' >

<p className='font-bold text-white'><span className='text-red-600'>Semi Final </span> One</p>
<p className='font-bold text-white'>Championship (UFC 2024)</p>

</div>





           
</div>
            </div>

            </section>
    )

}

export default OurLegacy