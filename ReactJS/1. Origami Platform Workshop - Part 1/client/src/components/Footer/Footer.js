import React from "react";
import Link from "../Link/Link";
import styles from "./Footer.module.css";

function Footer() {
   return (
      <footer className={styles.Footer}>
         <ul>
            <Link title="Going to 1" href="#" />
            <Link title="Going to 2" href="#" />
            <Link title="Going to 3" href="#" />
            <Link title="Going to 4" href="#" />
            <Link title="Going to 5" href="#" />
            <Link title="Going to 6" href="#" />
            <Link title="Going to 7" href="#" />
            <Link title="Going to 8" href="#" />
            <Link title="Going to 9" href="#" />
            <Link title="Going to 10" href="#" />
            <Link title="Going to 11" href="#" />
            <img src="blue-origami-bird-flipped.png" alt="Origami" />
         </ul>
         <p>Software University @ 2019</p>
      </footer>
   );
}

export default Footer;