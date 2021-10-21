import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Autoplay } from "swiper";
import styles from "../../../styles/sliders/SliderNav.module.scss";

const ProductSliderNav = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
    >
      <SwiperSlide className={styles.swiperSlide}>
        -
        <div className={styles.productSliderProgress}>
            <div className={styles.progress}></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductSliderNav;
