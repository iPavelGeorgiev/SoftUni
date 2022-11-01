import React from "react"
import styles from "./Input.module.css";

const Input = ({ label, name, type, value, onChange }) => {

   return (
      <div className={styles["form-control"]}>
         <label>
            {label}
         </label>
         <input
            type={type || 'text'}
            name={name}
            value={value}
            onChange={onChange}
         />
      </div>
   )
}

export default Input