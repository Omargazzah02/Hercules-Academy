"use client"
import Button from "./utils/buttons/Button";
const MemberShip = () => {
    return (
      <section className="relative lg:h-screen">
        <div className="absolute inset-0 bg-[url('/images/background4.jpg')] bg-cover bg-center z-0"></div>
  
        {/* Couche noire avec moins d'opacité */}
        <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
  
        <div className="relative z-20 text-white p-10 flex flex-col items-center gap-y-6" >
          <h1 className="font-extrabold lg:text-6xl">
            MEMBERSHIP <span className="text-red-600">PRICING</span>
          </h1>
          <p className="text-gray-400 ">
            Unlock Your Full Potential With Flexible Membership Options Tailored To Fit Your Goals And Commitment Level.
          </p>
  
          {/* Divs flexibles pour la mise en page */}
          <div className="w-full flex justify-center   ">

            <div className="w-1/4 h-[500px] bg-gradient-to-br from-gray-900 to-gray-950 flex flex-col justify-center items-center p-3 gap-y-4">
            <h1 className="text-red-600 font-extrabold text-2xl">MONTHLY PACKAGE</h1>
            <p className="text-gray-400 text-center">Perfect For Beginners Or Those Looking To Experience High-Level Training Without Long-Term Commitment.</p>

            <h2 className="text-red-600 font-bold text-xl">INCLUDES</h2>

            <ul className="text-gray-400">




                <li>   Access To 12 Group Classes  </li>
                <li>1 Private Coaching Session
                </li>
                <li>Exclusive Member Events
                </li>
                <li>Full Use Of Gym Facilities
                </li>

                <li>Exclusive Member Events
                </li>
            </ul>

            <p className="text-sm text-gray-400">3 Days Free Trial </p>

<Button onClick={() => {}} label="Unleash Your Inner Fighter"></Button>

            </div>
            <div className=" w-1/4  h-[500px] bg-[url('/images/images-noir-blanc/mma-sport.jpg')] lg:flex flex-col justify-end items-center p-7 hidden  ">
            <h1 className="font-extrabold text-xl"><span className="text-red-600">QUARTERLY</span> PACKAGE</h1>
            
            </div>
            <div className="w-1/4 h-[500px]  bg-[url('/images/images-noir-blanc/Lucie_bertaud.jpg')] lg:flex flex-col justify-end items-center p-7 hidden">
            <h1 className="font-extrabold text-xl"><span className="text-red-600">YEARLY</span> PACKAGE</h1>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default MemberShip;
  