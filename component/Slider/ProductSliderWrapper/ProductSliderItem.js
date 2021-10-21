import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

/** Styting */
import styles from "../../../styles/sliders/Sliders.module.scss";

/** Assets */
import Bag from "../../../public/bag.png";

function ProductSliderItem({ sliderImage, title, p, list, component,...props }) {
  console.log(sliderImage);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div className={styles.productSliderItem} {...props}>
      <div className={styles.leftElement}>
        {React.cloneElement(component, { className: styles.productItemFigure })}
        {/* <figure style={{ backgroundImage: `url('${sliderImage}')` }}></figure> */}
      </div>
      <div className={styles.rightElement}>
        <h2 data-aos="fade-up">{title}</h2>
        <p data-aos="fade-up">{p}</p>
        <ul>
          {list.map((listItem, key) => (
            <li key={key} data-aos="fade-up">
              <figure>
                <Image
                  className={styles.bagImage}
                  src={listItem.icons}
                  alt=""
                  width="36"
                  height="36"
                />
              </figure>
              {listItem.text}
            </li>
          ))}

          {/* <li>
            <figure className="bag-image-wrapper">
              <Image
                className="alignnone size-full wp-image-185"
                src={Bag}
                alt=""
                width="32"
                height="32"
              />
            </figure>
            NEXT-GENERATION HIGH IMPACT UNITS
          </li>
          <li>
            <figure>
              <Image
                className="alignnone size-full wp-image-185"
                src={Bag}
                alt=""
                width="32"
                height="32"
              />
            </figure>
            ALL CREATIVE BUILT BY BIG HAPPY’S END TO END AD STUDIO
          </li>
          <li>
            <figure>
              <Image
                className="alignnone size-full wp-image-185"
                src={Bag}
                alt=""
                width="32"
                height="32"
              />
            </figure>
            AUDIENCE AND VERTICAL BASED TARGETING
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default ProductSliderItem;
