import React from "react";
import { Link } from "react-router-dom";
import styles from "./Link.module.css";

const LinkComponent = ({ key, title, href }) => {
   return (
      <li key={key} className={styles.listItem}>
         <Link to={href}>
            {title}
         </Link>
      </li>
   );
}

export default LinkComponent;