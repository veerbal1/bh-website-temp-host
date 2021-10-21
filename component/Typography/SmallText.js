import React from "react";
import styles from "../../styles/Typography.module.scss";

function SmallText({ children }) {
  return <small className={styles.smallText}>{children}</small>;
}

export default SmallText;
