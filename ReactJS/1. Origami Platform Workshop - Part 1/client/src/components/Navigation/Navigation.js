import React from "react";
import Link from "../Link/Link";
import styles from "./Navigation.module.css";

function Header() {
   return (
      <nav className={styles.Navigation}>
         <ul>
            <img src="white-origami-bird.png" alt="Origami" />
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
         </ul>
      </nav>
   );
}

export default Header;