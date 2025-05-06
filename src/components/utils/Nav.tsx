"use client"
import Link from "next/link"
import Button from "./Button"

const Nav = () => {

    return (
        <nav className="px-16 p-4 flex justify-between    ">
    <ul className="flex space-x-5">
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
        <Link href="/"  className="text-white" > Our Store </Link>
      </li>
    </ul>

     <Button label="Continue"  onClick ={ () => {}}></Button>

   </nav>
    )
}

export default Nav