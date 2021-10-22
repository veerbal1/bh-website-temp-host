import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Autoplay } from "swiper";
import ProductSliderItem from "./ProductSliderItem";
import MobileFrame from "../../Frame/MobileFrame";

SwiperCore.use([EffectFade, Autoplay, Navigation]);

function ProductSlider({ data, type }) {
  useEffect(() => {
    // Swiper.
    AOS.init({ duration: 1000 });
  });
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      navigation={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
    >
      {Object.values(data).map((list, key) => (
        <SwiperSlide key={key}>
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductSlider;
