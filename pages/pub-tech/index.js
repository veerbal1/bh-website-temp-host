import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerSlideItem from "../../component/Slider/BannerSliderWrapper/BannerSlide";
import BigTextSecondary from "../../component/Typography/BigTextSecondary";
import Banner from "../../component/Wrapper/Banner";
import Layout from "../../component/Wrapper/Layout";
import ProductSliderSection from "../../component/Slider/ProductSliderWrapper";
import styles from "../../styles/pubTech.module.scss";
import Bag from "../../public/bag.png";

import TechImage from "../../public/tech-image.jpeg";
import BigText from "../../component/Typography/BigText";

const slider = {
  sliderData: {
    sliderA: {
      type: "image",
      src: `Big Happy allows brands to tap into a variety of premium and contextually\n
       relevant inventory with over 700 mobile web publisher integrations`,
      title: "Inventory Matters",
      p: "Elicit a reaction from consumers with ads that bring your brand to life, across the consumers viewing experience, in an enjoyable and non-intrusive way.",
      list: [
        { icons: Bag, text: " DELIVER HIGHLY EYE-CATCHING CREATIVE AT SCALE" },
        {
          icons: Bag,
          text: " PRE-BID INTEGRATIONS ENABLE CURATED INVENTORY SUPPLY SENT TO YOUR DSP SEAT",
        },
        {
          icons: Bag,
          text: " CURATED INVENTORY ALLOWS BRANDS TO INCLUDE/EXCLUDE PUBLISHERS FOR THEIR AUDIENCES",
        },
      ],
    },
    sliderB: {
      type: "image",
      image: "",
      title: "Customized To Your Brands Needs",
      p: "Our ads work.  That means that however you want to target, track, and measure — our tags can take your pixels.  It’s a match made in heaven.  Don’t “make sacrifices” for rich media partners anymore.",
      list: [
        {
          icons: Bag,
          text: " WORKS SEAMLESSLY IN A MANAGED SERVICE OR PROGRAMMATIC ASPECT",
        },
        {
          icons: Bag,
          text: " ALLOWS BRANDS TO RECEIVE HIGHLY TARGETED WHITELIST AND PRE-VETTED AUDIENCE SEGMENTS",
        },
        {
          icons: Bag,
          text: " MEASURE WITH VERIFICATION PARTNERS FOR VIEWABILITY AND DEMO DATA",
        },
        {
          icons: Bag,
          text: " MEASURE WITH YOUR PRE-APPROVED THIRD-PARTY MEASUREMENT AND FOOT TRAFFIC PARTNERS",
        },
      ],
    },
    sliderC: {
      type: "image",
      src: "",
      title: "Bring Creative Impact to Programmatic",
      p: "No longer sacrifice high impact across mobile when running programmatically.",
      list: [
        {
          icons: Bag,
          text: " BIG HAPPY INTEGRATES INTO ALL MAJOR DSPs",
        },
        {
          icons: Bag,
          text: " ABILITY TO RUN ON CURATED INVENTORY IN PMP DEALS",
        },
        {
          icons: Bag,
          text: " LEVERAGE HIGH IMPACT UNITS ACROSS PUBLISHERS",
        },
        {
          icons: Bag,
          text: " BIG HAPPY'S SEAMLESS PROGRAMMATIC PLATFORM MAKES LOADING IN AD TAGS A BREEZE",
        },
      ],
    },
  },
};

function PubliserTech() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <Layout>
      <Banner data-aos="fade-up">
        <BannerSlideItem
          smallText="CERTIFIED PREMIUM INVENTORY"
          // title={`Big Happy \nPublisher Technology`}
          title={
            <div data-aos="fade-up">
              <strong
                style={{
                  color: "#F15050",
                  marginBottom: "20px",
                  display: "inline-block",
                }}
              >
                Big Happy
              </strong>
              {"  "}
              Publisher Technology
            </div>
          }
          description="Big Happy is a unique publisher platform that allows experiences to come to life in a mutually beneficial way for publishers, brands, and most importantly the consumer."
          imageSrc={TechImage.src}
        />
      </Banner>
      <section className={styles.bigText} data-aos="fade-up">
        <div className={styles.container}>
          <BigTextSecondary className={styles.bigText}>
            Our premium publishers and first to market custom units allow brands
            to <strong>stick out</strong> and create rich, brand-driving
            experiences.
          </BigTextSecondary>
        </div>
      </section>
      <ProductSliderSection data={slider.sliderData} />
      <BigText />
    </Layout>
  );
}

export default PubliserTech;
