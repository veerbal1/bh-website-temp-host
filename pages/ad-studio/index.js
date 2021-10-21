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
const secondSlider = {
  sliderData: {
    sliderA: {
      type: "iframe",
      src: "https://player.vimeo.com/video/362891198?autoplay=1&background=1&loop=1&autopause=0",
      title: "Capture Attention as Users Scroll",
      p: "Leverage Big Happy Touch Technology to bring experiences to life over mobile and tablet as the users are scrolling.",
      list: [
        {
          icons: Bag,
          text: " RESPONSIVE TO THE USERS TOUCH, ADS CAN CHANGE BASED ON THE USER'S INTERACTION WITH THEIR PHONE",
        },
        {
          icons: Bag,
          text: " CREATE GAMES AND MORE CONSUMER FOCUSED RICH MEDIA UNITS AT EASE WITHIN A FEW DAYS",
        },
        {
          icons: Bag,
          text: " THESE UNITS HAVE A 30% HIGHER AD RECALL THAN TRADITIONAL AD UNITS",
        },
        {
          icons: Bag,
          text: " LESS THAN 6 BUSINESS DAY TURNAROUND",
        },
      ],
    },
    sliderB: {
      type: "iframe",
      src: "https://player.vimeo.com/video/362891198?autoplay=1&background=1&loop=1&autopause=0",
      title: "The Bigger the Better",
      p: "Leverage the Big Happy platform to create awareness and branding for your products with our Full Screen Interscroller Ads.  These units allow brands more time to drive product info and showcase benefits without intruding on the users experience.",
      list: [
        {
          icons: Bag,
          text: " TURNKEY CREATIVE PRODUCTION, THAT CAN BE SET LIVE IN LESS THAN 72 HOURS ONCE RECEIPT OF ASSETS",
        },
        {
          icons: Bag,
          text: " HIGH-QUALITY ANIMATIONS WITH LARGE UNIQUE MOBILE BASED INVENTORY TO DRIVE AWARENESS",
        },
        {
          icons: Bag,
          text: " CUSTOM-BUILT SIZES THAT WILL STICK OUT TO CONSUMERS",
        },
        {
          icons: Bag,
          text: " ANIMATED 320X100 AND 320X150 BANNERS STICK OUT AND DRIVE INCREASED BRAND RECALL AND MESSAGING",
        },
      ],
    },
    sliderC: {
      type: "iframe",
      src: "https://player.vimeo.com/video/362891198?autoplay=1&background=1&loop=1&autopause=0",
      title: "Supercharge Standard TVC Spots",
      p: "Big Happy video units allow brands to showcase messaging in an efficiently branded way.",
      list: [
        {
          icons: Bag,
          text: " AMPLIFY VIDEO MESSAGING WITH CUSTOM BRANDED SKINS AND END CARDS TO ATTRACT EYES TO THE VIDEO SPOT AND AN END CARD TO DRIVE USERS DOWN THE PURCHASE FUNNEL",
        },
        {
          icons: Bag,
          text: " DEPLOY VIDEOS AN ARRAY OF VIEWABLE AD FORMATS WITH STICKY ADHESIVE TECHNOLOGY TO DRIVE STRONG VCRS AND ENGAGEMENT",
        },
        {
          icons: Bag,
          text: " DRIVE AND TRACK QUARTERLY VIEW GOALS TO MEET INTENDED ENGAGEMENT METRICS",
        },
        {
          icons: Bag,
          text: " ANIMATED 320X100 AND 320X150 BANNERS STICK OUT AND DRIVE INCREASED BRAND RECALL AND MESSAGING",
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
export default AdStudio;
