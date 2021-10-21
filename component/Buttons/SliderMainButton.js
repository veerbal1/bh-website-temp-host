import React from "react";
import styles from "../../styles/Button.module.scss";

function SliderMainButton({ children }) {
  return (
    <a href="#" className={styles.slideMainButton}>
      {children}
    </a>
  );
}

export default SliderMainButton;
