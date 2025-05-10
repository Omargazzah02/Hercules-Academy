"use client"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from "next/link"

import Button from "./buttons/Button"
import { useState , useRef } from "react"

const Nav = () => {

  const [menuVisible, setMenuVisible] = useState<boolean> (false)

  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setMenuVisible(lastState => !lastState);
  };

    return (
        <div className="flex flex-col w-full   ">

          <div className="px-16 p-4 justify-between lg:flex hidden absolute top-0 w-full z-10">
    <ul className="flex space-x-5">
      <li>
        <Link href="/"  className="text-white hover:text-gray-400" > Home </Link>
      </li>
      <li>
        <Link href="/"  className="text-white hover:text-gray-400 " > About Us </Link>
      </li>

      <li>
        <Link href="/"  className="text-white  hover:text-gray-400" > Coaches </Link>
      </li>

      <li>
        <Link href="/"  className="text-white  hover:text-gray-400" > Service </Link>
      </li>

      <li>
        <Link href="/"  className="text-white  hover:text-gray-400" > Pricing </Link>
      </li>

      <li>
        <Link href="/"  className="text-white hover:text-gray-400" > Our Store </Link>
      </li>
    </ul>


    <button className="p-3 bg-red-600 hover:bg-red-400 text-white">Continue  <i className="fas fa-arrow-right"></i></button>

     </div>



<div className='fas fa-ellipsis-h  absolute right-7 top-4 cursor-pointer  text-3xl text-white  lg:hidden' onClick={toggleMenu}></div>


   


     <div className={`lg:hidden p-6 flex  flex-col   bg-gray-900   w-full ${menuVisible ? '' : 'hidden' }`} ref={menuRef}>
   

    <ul className="flex space-y-2 flex-col">
      <li>
        <Link href="/"  className="text-white" > Home </Link>
      </li>
      <li>
        <Link href="/"  className="text-white" > About Us </Link>
      </li>

      <li>
        <Link href="/"  className="text-white" > Coaches </Link>
      </li>

      <li>
        <Link href="/"  className="text-white" > Service </Link>
      </li>

      <li>
        <Link href="/"  className="text-white" > Pricing </Link>
      </li>

      <li>
        <Link href="/"  className="text-white  " > Our Store </Link>
      </li>

<li>         <button className="p-3 bg-red-600 text-white">Continue  <i className="fas fa-arrow-right"></i></button>

</li>
    </ul>

     </div>
   </div>
    )
}

export default Nav