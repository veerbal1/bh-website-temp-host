import React from "react";
import styles from "../../styles/Typography.module.scss";

function PrimaryTitle({ children }) {
  return <h1 className={styles.primaryTitle}>{children}</h1>;
}

export default PrimaryTitle;
