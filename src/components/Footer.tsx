
"use client"
import Button from "@/components/utils/buttons/Button"
const Footer = () => {
    return(
       <section className="bg-black h-screen  ">
         <div className=" flex flex-row p-20 w-full">
            <div className="basis-1/2 h-full  space-y-5 " >
                <h1 className="font-extrabold text-3xl text-white ">NEWSLETTER</h1>



                <form action="" className="grid grid-cols-2  gap-5 w-[70%]  " >
                    <div  className="col-span-2 w-full flex flex-col">
                        <label  className=" text-white font-bold">Name*</label>
                    <input type="text" placeholder="Enter Your Name"  required />

                        
                    </div>
                    <div  className=" w-full  flex flex-col row-start-2" >
                        <label className=" text-white font-bold">Email*</label>
                    <input type="email"  placeholder="Enter Your Email" required/>

                        
                    </div>

                    <div  className=" w-full   flex flex-col  row-start-2">
                        <label className=" text-white font-bold" >Phone Number*</label>
                    <input type="number" placeholder="Enter Phone Number" required />

                        
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


            <div className="basis-1/2    h-full  flex space-x-16 justify-center">

            <div className="space-y-2" >
                <h3 className="text-white font-bold">Follow Us</h3>
                <ul className=" space-y-3">
                    <li>
                        <a href="#" className="footer-link">Instagram</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Facebook</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Dribble</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Behance</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">LinkedIn</a>
                    </li>
                </ul>
            </div>


            <div className="space-y-2">
                <h3 className="text-white font-bold">Navigation</h3>
                <ul className="space-y-3">
                    <li>
                        <a href="#" className="footer-link">Home</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">About Us</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Coaches</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Service</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Pricing</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Our Store</a>
                    </li>


                    
                </ul>
            </div>



            <div className="space-y-2">
                <h3 className="text-white font-bold">Contact Us</h3>
                <ul className="space-y-3">
                    <li>
                        <a href="#" className="footer-link">upnormalstudio@gmail.com</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">+62185252025</a>
                    </li>
                    


                    
                </ul>
            </div>

            </div>


 
        </div>

        <div className="grid grid-cols-2 space-y-4">
            <hr className="border-red-400 opacity-30 col-span-2"  />
            <div className="col-start-2 row-start-2 flex justify-end p-7 "> 
            <p className="text-white ">© 2024 Hercules Academy. All Rights Reserved.</p>
            </div>

        </div>




       </section>
    )
}

export default Footer