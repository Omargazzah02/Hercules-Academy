import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link"
import Nav from "../components/utils/Nav"
import BecomeStronger from  "../components/BecomeStronger"
import OurLegacy from "@/components/OurLegacy";

export default function Home() {
  return (
 <div  >
<BecomeStronger></BecomeStronger>
<OurLegacy></OurLegacy>



 </div>
  );
}
