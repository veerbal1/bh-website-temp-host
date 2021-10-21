import React from "react";
import styles from "../../../styles/sliders/Sliders.module.scss";
import ProductSliderNav from "../ProductSliderNav";
import ProductSlider from "./ProductSlider";

function ProductSliderSection({ data, type }) {
  return (
    <section className={styles.productSliderSection}>
      <div className={styles.container}>
        <div className={styles.productSliderWrapper}>
          <div className={styles.slider || "slider"}>
            {/* <div className={`${styles.productSliderNav}`}></div> */}
            {/** Nav Slider */}
            <ProductSliderNav />
            <ProductSlider data={data} type={type} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSliderSection;
