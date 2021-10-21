import React from "react";
import styles from "../../styles/Typography.module.scss";

function PrimaryParagraph({ children }) {
  return <p className={styles.primaryParagraph}>{children}</p>;
}

export default PrimaryParagraph;
