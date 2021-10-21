import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../../Wrapper/Banner";
import styles from "../../../styles/staticBanner/StaticBanner.module.scss";
import MobileFrame from "../../Frame/MobileFrame";
import PrimaryTitle from "../../Typography/PrimaryTitle";
import PrimaryParagraph from "../../Typography/PrimaryParagraph";
import BigTextSecondary from "../../Typography/BigTextSecondary";

const StaticBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <>
      <Banner data-aos="fade-up">
        <div className={styles.bannerItem}>
          <div className={styles.leftElement}>
            <MobileFrame
              staticBanner
              src="https://player.vimeo.com/video/362891198?autoplay=1&background=1&loop=1&autopause=0"
            />
          </div>
          <div className={styles.rightElement} data-aos="fade-up">
            <PrimaryTitle>
              Our <span>Happy</span> Ad Suite
            </PrimaryTitle>
            <PrimaryParagraph>
              Limited assets with big ad dreams? Don’t worry — our Happy Studio
              can take almost no assets and create a captivating, engaging
              campaign from scratch.
            </PrimaryParagraph>
          </div>
        </div>
        <section className={styles.bigText}>
          <div className={styles.container}>
            <BigTextSecondary className={styles.bigText} data-aos="fade-up">
              <strong>Big Happy </strong>
              makes sure your consumers have an impactful experience that
              matters with your brand.
            </BigTextSecondary>
          </div>
        </section>
      </Banner>
    </>
  );
};

export default StaticBanner;
