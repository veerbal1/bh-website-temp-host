import React from "react";
import styles from "../../../styles/sliders/Sliders.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BannerSlideItem from "./BannerSlide";

import IdeaImage from "../../../public/idea-image.jpeg";
import FiveGImage from "../../../public/5g.png";

SwiperCore.use([EffectFade, Autoplay]);

function BannerSliderWrapper() {
  return (
    <div className={styles.bannerSliderWrapper}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide style={{backgroundColor:"#fff"}}>
          <BannerSlideItem
            // smallText="5G READY CREATIVE"
            title="Deliver Experiences Through Ads"
            description="Big Happy Creates Beautiful Marketing Experiences That Consumers Love and Remember."
            imageSrc={FiveGImage.src}
            buttonText="Learn More"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerSlideItem
            smallText="THE FUTURE IS HERE"
            title="Augmented Reality, Meet Ad Unit"
            description="Turnkey Approach to Augmented Reality Ad Units at Scale."
            imageSrc={IdeaImage.src}
            buttonText="Learn More"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BannerSliderWrapper;
