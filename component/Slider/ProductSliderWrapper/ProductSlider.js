import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ProductSliderItem from "./ProductSliderItem";
import MobileFrame from "../../Frame/MobileFrame";

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";
import styles from "../../../styles/sliders/ProductSlider.module.scss";

function ProductSlider({ data, type }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    const swiper = new Swiper(".product-swiper", {
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      loop: false,
      centeredSlides: true,
      slidesPerView: 1,

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);
  return (
    <div className={`product-swiper ${styles.swiper}`}>
      <div className="swiper-wrapper">
        {Object.values(data).map((list, key) => (
          <div key={key} className="swiper-slide">
            <ProductSliderItem
              data-aos="fade-up"
              title={list.title}
              p={list.p}
              list={list.list}
              component={
                list.type === "image" ? (
                  <figure>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={list.image} alt={"Bighappy"} />
                  </figure>
                ) : list.type === "bgImage" ? (
                  <figure
                    style={{ backgroundImage: `url('${list.image}')` }}
                  ></figure>
                ) : (
                  <figure>
                    <MobileFrame src={list.src} noPhone={list.noPhone} />
                  </figure>
                )
              }
            />
          </div>
        ))}
      </div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}

export default ProductSlider;
