import React from "react";
import styles from "./Input.module.css";

const Input = ({title, type}) => {
   return (
      <div className={styles["form-control"]}>
         <label htmlFor={title}>{title}</label>
         <input type={type} id={title} />
      </div>
   );
}

export default Input;