import React from "react";
import styles from "../../styles/wrapper/Banner.module.scss";

function Banner({ children,...props }) {
  return (
    <div className={styles.banner} {...props}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

export default Banner;
