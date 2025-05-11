import ImageCarousel from './utils/ImageCarousel'

const images = [
   '/images/fighter-images/image1.webp' ,
   '/images/fighter-images/image2.webp' ,
   '/images/fighter-images/image3.webp' ,
   '/images/fighter-images/image4.jpg' 




]
const MeetOurCoaches = () => {
return(
    <section className='w-full    bg-gradient-to-b from-black to-red-950 space-y-6 flex flex-col items-center p-10 h-full ' 
    >
        <div className='text-center space-y-6 '>
            <h1 className='font-extrabold lg:text-6xl text-3xl text-white' >MEET OUR < span className='text-red-600'>COACHES</span></h1>
            <p className='text-gray-300 text-sm'>Master The Techniques And Strategies That Are Commited To Your Success</p>
        </div>
        <div className='lg:w-full  '
        ><ImageCarousel images={images} ></ImageCarousel></div>
    </section>

)
}

export default MeetOurCoaches