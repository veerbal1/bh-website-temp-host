import React from "react";
import styles from "../../../styles/sliders/Sliders.module.scss";

function BannerSliderImage({ src }) {
  return (
    <figure
      className={styles.bannerSliderImage}
      style={{ backgroundImage: `url(${src})` }}
    >
      &nbsp;
    </figure>
  );
}

export default BannerSliderImage;
