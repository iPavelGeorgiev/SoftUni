import React from "react";
import Link from "../Link/Link";
import styles from "./Header.module.css";

function Header() {
   return (
      <nav className={styles.Header}>
         <ul>
            <img src="white-origami-bird.png" alt="Origami" />
            <Link title="Publications" href="/" />
            <Link title="Share your thoughts" href="/share" />
            <Link title="Profile" href="/profile/:userID" />
            <Link title="Login" href="/login" />
            <Link title="Register" href="/register" />
         </ul>
      </nav>
   );
}

export default Header;