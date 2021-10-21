import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SwiperSlide } from "swiper/react";
import SliderMainButton from "../../Buttons/SliderMainButton";
import PrimaryParagraph from "../../Typography/PrimaryParagraph";
import PrimaryTitle from "../../Typography/PrimaryTitle";
import SmallText from "../../Typography/SmallText";
import styles from "../../../styles/sliders/Sliders.module.scss";
import BannerSliderImage from "./BannerSliderImage";

function BannerSlideItem({
  imageSrc,
  smallText,
  title,
  description,
  buttonText,
}) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <>
      <SwiperSlide className={styles.bannerSlideItem}>
        <div className={styles.leftElement}>
          <BannerSliderImage src={imageSrc} />
        </div>
        <div className={styles.rightElement} data-aos="fade-up">
          <SmallText>{smallText}</SmallText>
          <PrimaryTitle>{title}</PrimaryTitle>
          <PrimaryParagraph>{description}</PrimaryParagraph>
          {buttonText && <SliderMainButton>{buttonText}</SliderMainButton>}
        </div>
      </SwiperSlide>
    </>
  );
}

export default BannerSlideItem;
