import React from "react";
import styles from "./Link.module.css";

function Link({href, title}) {
   return (
      <li className={styles.listItem}>
         <a href={href}>{title}</a>
      </li>
   );
}

export default Link;