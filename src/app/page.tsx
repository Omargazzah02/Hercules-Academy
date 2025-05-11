import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link"
import Nav from "../components/utils/Nav"
import BecomeStronger from  "../components/BecomeStronger"
import OurLegacy from "@/components/OurLegacy";
import LauraRodriguez from "@/components/LauraRodriguez"
import MemberShip from '../components/MemberShip'
import Footer from '@/components/Footer'
import MeetOurCoaches from "@/components/MeetOurCoaches";
export default function Home() {
  return (
 <div  >
<BecomeStronger></BecomeStronger>
<OurLegacy></OurLegacy>
<div className="w-full h-full max-lg:hidden">
<MeetOurCoaches></MeetOurCoaches>

</div>
<LauraRodriguez></LauraRodriguez>
<MemberShip></MemberShip>


 </div>
  );
}
