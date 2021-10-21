import React from "react";
import styles from "../../styles/typography/BigTextSecondary.module.scss";

const BigTextSecondary = ({ children, ...props }) => {
  return (
    <h1 {...props} className={styles.main}>
      {children}
    </h1>
  );
};

export default BigTextSecondary;
