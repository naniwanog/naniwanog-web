//import styles from "./index.module.css";
import "../../globals.css";
import type {} from "next/app";
export default function Footer() {
  return (
    <footer className="px-6 py-4 text-center text-[var(--color-text-sub)] text-sm mt-20">
      <nav className="mb-4">
        <ul className="flex justify-center gap-10 text-base whitespace-nowrap">
          <li className="w-1/2">
            <a href="https://www.facebook.com/people/Naniwanog/61565613396201/">
              FaceBook
            </a>
          </li>
          <li className="w-1/2">
            <a href="https://twitter.com/naniwanog">X(旧Twitter)</a>
          </li>
          <li className="w-1/2">
            <a href="https://nog-crew.slack.com/archives/C07KMD8ACUA">slack</a>
          </li>
        </ul>
      </nav>
      <p className="text-sm text-gray-500 text-center mt-5">© NaniwaNOG </p>
    </footer>
  );
}
