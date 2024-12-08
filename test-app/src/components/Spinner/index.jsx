import React from "react";
import styles from "./index.module.css";

const Spinner = ({ size = 50, color = "#4CAF50" }) => {
  return (
    <div
      className={styles.spinner}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderColor: `${color} transparent transparent transparent`,
      }}
    ></div>
  );
};

export default Spinner;
