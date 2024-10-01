//import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export default function Header() {
  return (
    //classNameは{styles.header}にする
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        NaniwaNOG
      </Link>
    </header>
  );
}
