import React from "react";
import { Link } from "react-router-dom";
import styles from "./Link.module.css";

const LinkComponent = ({ title, href }) => {
   return (
      <li className={styles.listItem}>
         <Link to={href}>
            {title}
         </Link>
      </li>
   );
}

export default LinkComponent;