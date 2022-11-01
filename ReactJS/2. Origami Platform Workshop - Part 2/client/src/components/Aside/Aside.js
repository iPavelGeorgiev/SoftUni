import React from "react";
import Link from "../Link/Link";
import styles from "./Aside.module.css";

function Aside() {
   return (
      <aside className={styles.Aside}>
         <ul>
            <Link title="Publications" href="/" />
            <Link title="Share your thoughts" href="/share" />
            <Link title="Profile" href="/profile/:userID" />
            <Link title="Login" href="/login" />
            <Link title="Register" href="/register" />
         </ul>
      </aside>
   );
}

export default Aside;