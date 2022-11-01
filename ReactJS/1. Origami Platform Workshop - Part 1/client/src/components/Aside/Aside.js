import React from "react";
import Link from "../Link/Link";
import styles from "./Aside.module.css";

function Aside() {
   return (
      <aside className={styles.Aside}>
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
         </ul>
      </aside>
   );
}

export default Aside;