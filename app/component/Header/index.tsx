//import Image from "next/image";
import Link from "next/link";
//import styles from "./index.module.css";
import "../../globals.css";
import type {} from "next/app";

export default function Header() {
  return (
    <header className="subpixel-antialiased flex h-[70px] md:h-[60px] sm:h-[50px] px-6 py-4 z-1000 items-center justify-center bg-gradient-to-b from-[#c9a080] to-white">
      <Link href="/" className="text-3xl font-bold text-white">
        NaniwaNOG
      </Link>
    </header>
  );
}
