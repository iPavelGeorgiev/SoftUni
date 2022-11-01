import React from "react";
import Link from "../Link/Link";
import styles from "./Footer.module.css";

function Footer() {
   return (
      <footer className={styles.Footer}>
         <ul>
            <Link title="Publications" href="/" />
            <Link title="Share your thoughts" href="/share" />
            <Link title="Profile" href="/profile/:userID" />
            <Link title="Login" href="/login" />
            <Link title="Register" href="/register" />
            <img src="blue-origami-bird-flipped.png" alt="Origami" />
         </ul>
         <p>Software University @ 2019</p>
      </footer>
   );
}

export default Footer;