import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <a href="/facebook">FaceBook</a>
          </li>
          <li className={styles.item}>
            <a href="/X">X(旧Twitter)</a>
          </li>
          <li className={styles.item}>
            <a href="/slack">slack</a>
          </li>
        </ul>
      </nav>
      <p className={styles.cr}>© NaniwaNOG </p>
    </footer>
  );
}
