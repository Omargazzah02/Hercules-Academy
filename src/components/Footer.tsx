
"use client"
import Button from "@/components/utils/buttons/Button"
const Footer = () => {
    return(
        <section className="bg-black h-screen  flex flex-row p-14">
            <div className="basis-1/2 h-full  space-y-5 " >
                <h1 className="font-extrabold text-3xl text-white ">NEWSLETTER</h1>



                <form action="" className="grid grid-cols-2  gap-5 w-[70%]  " >
                    <div  className="col-span-2 w-full flex flex-col">
                        <label  className=" text-white font-bold">Name*</label>
                    <input type="text" placeholder="Enter Your Name"  required />

                        
                    </div>
                    <div  className=" w-full  flex flex-col row-start-2" >
                        <label className=" text-white font-bold">Email*</label>
                    <input type="text"  placeholder="Enter Your Email" required/>

                        
                    </div>

                    <div  className=" w-full   flex flex-col  row-start-2">
                        <label className=" text-white font-bold" >Phone Number*</label>
                    <input type="text" placeholder="Enter Phone Number" required />

                        
                    </div>
                   

                    <div  className="col-span-2 w-full flex flex-col ">
                        <label className=" text-white  font-bold">Message*</label>
                        <textarea
                        onChange={() => {}}
                        placeholder="Enter Your Message"
                        required
                        rows={4}
                        />

                        
                    </div>
                    <div className="col-span-1">
                        <Button label="Submit" onClick={() => {}}></Button>

                    </div>



                </form>
                
            </div>


            <div className="basis-1/2    h-full">

            </div>

        </section>
    )
}

export default Footer