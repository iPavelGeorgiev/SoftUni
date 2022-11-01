import React from "react"
import styles from "./Title.module.css";

const Title = ({ title, size }) => {
   const Size = size;
   
   return (
      <Size className={styles.Title}>{title}</Size>
   );
}

export default Title;