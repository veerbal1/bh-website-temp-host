import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import StaticBanner from "../../component/Banner/StaticBanner";
import ProductSliderSection from "../../component/Slider/ProductSliderWrapper";
import BigText from "../../component/Typography/BigText";
import Layout from "../../component/Wrapper/Layout";
import Bag from "../../public/bag.png";
import SunImage from "../../public/images/sun.png";
import CarImage from "../../public/images/car.png";
import PostImageFour from "../../public/images/postimage-4.png";
import styles from "../../styles/AdStudio.module.scss";
import { showBodyBeforeElement } from "../../utils";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Autoplay } from "swiper";
import {withRouter} from "next/router";

SwiperCore.use([EffectFade, Autoplay, Navigation]);

const firstSlider = {
  sliderData: {
    sliderA: {
      type: "iframe",
      src: "https://player.vimeo.com/video/362891198?autoplay=1&background=1&loop=1&autopause=0",
      title: "Demand Their Attention, Don’t Ask For It",
      p: "Elicit a reaction from consumers with ads that bring your brand to life, across the consumers viewing experience, in an enjoyable and non-intrusive way.",
      list: [
        { icons: Bag, text: " UNITS RUN ACROSS MOBILE AND TABLET DEVICES" },
        {
          icons: Bag,
          text: " SOUND CAN BE LEVERAGED UPON USER ENGAGEMENT TO ENHANCE THE EXPERIENCES",
        },
        {
          icons: Bag,
          text: " UNITS CAN LEVERAGE  TOUCH TECHNOLOGY",
        },
      ],
    },
    sliderB: {
      type: "image",
      image: "https://bighappy.co/wp-content/uploads/2019/11/Picture1.png",
      title: "Augmented Reality Comes to Ad Units",
      p: "Bring your brands and products to life with front-facing placement or selfie Augmented Reality experiences created by the Big Happy team.",
      list: [
        {
          icons: Bag,
          text: " TURNKEY AUGMENTED REALITY  PLATFORM",
        },
        {
          icons: Bag,
          text: " AUGMENTED REALITY DRIVES SIGNIFICANTLY HIGHER LEVELS OF VISUAL ATTENTION IN PEOPLE'S BRAINS (SOURCE: BLIPPAR)",
        },
        {
          icons: Bag,
          text: " MEMORY ENCODING IS 70% HIGHER WITH AR EXPERIENCES",
        },
      ],
    },
    sliderC: {
      type: "iframe",
      noPhone: true,
      src: "https://player.vimeo.com/video/583369149?autoplay=1&background=1&loop=1&autopause=0",
      title: "Shoppers Demand Convenience",
      p: "360° shopping ads bring the showroom and environments to consumers, easily.",
      list: [
        {
          icons: Bag,
          text: " USERS SIMPLY MOVE THEIR DEVICE TO LOOK AROUND IN FULL 360°",
        },
        {
          icons: Bag,
          text: " BRING YOUR SHOPPING EXPERIENCES (SHOWROOMS, VEHICLES, VIEWS) TO LIFE IN FULL 360° EASILY FOR CONSUMERS",
        },
        {
          icons: Bag,
          text: " USERS CAN TAP ON HOTSPOT CONTENT TO PULL UP ADDITIONAL INFO",
        },
        {
          icons: Bag,
          text: " EXTREMELY HIGH PERFORMING UNIT IN THE RETAIL, AUTOMOTIVE AND TOURISM VERTICALS",
        },
      ],
    },
  },
};

function AdStudio() {
  useEffect(() => {
    showBodyBeforeElement();
    AOS.init({ duration: 1000 });
  });
  return (
    <Layout>
      <StaticBanner />
      <ProductSliderSection data={firstSlider.sliderData} />
      {/* <ProductSliderSection data={secondSlider.sliderData} /> */}
      <AdStudioPost></AdStudioPost>
      <BigText />
    </Layout>
  );
}

const AdStudioPost = () => {
  const posts = {
    postA: {
      title: "End to End Ad",
      description:
        "Big Happy creates these best in class units using its in-house ad studio and ad servers. Our ad engines create the most eye-catching and turn-key solutions for brands to tap into.",
      src: SunImage.src,
    },
    postB: {
      title: "3D Studio",
      description:
        "No Assets — no problem. Our Big Happy Studio tools allow brands to send over images of assets that can be recreated in RM formats in five business days or less.",
      src: PostImageFour.src,
    },
    postC: {
      title: "Augmented Reality",
      description:
        "With AR eliciting 7x the response in humans brains, Big Happy is here to help you understand and master this effective marketing technique that is now mainstream thanks to WebAR technology.",
      src: CarImage.src,
    },
  };

  return (
    <section className={styles.adStudioPostWrapper}>
      <div className={styles.container}>
        {Object.values(posts).map((list, key) => (
          <AdStudioPostItem
            key={key}
            title={list.title}
            description={list.description}
            src={list.src}
          />
        ))}
      </div>
    </section>
  );
};

const AdStudioPostItem = ({ title, description, src = "" }) => {
  return (
    <article className={styles.article} data-aos="fade-up">
      <figure style={{ backgroundImage: `url(${src})` }}></figure>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};
export default withRouter(AdStudio);
