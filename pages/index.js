import AOS from "aos";
import "aos/dist/aos.css";

import BannerSliderWrapper from "../component/Slider/BannerSliderWrapper";
import ProductSliderSection from "../component/Slider/ProductSliderWrapper";
import BigText from "../component/Typography/BigText";
import Banner from "../component/Wrapper/Banner";
import Layout from "../component/Wrapper/Layout";

/**Assets */
import ScaleImage from "../public/scale.jpeg";
import AudienceImage from "../public/audience.jpeg";
import TechImage from "../public/tech-image.jpeg";
import IdeaGirlImage from "../public/idea-girl-image.jpeg";
import Bag from "../public/bag.png";
import styles from "../styles/Home.module.scss";
import { useEffect } from "react";

const data = {
  sliderData: {
    sliderA: {
      type: "bgImage",
      image: ScaleImage.src,
      title: "Scale Ad Units Across Big Happy’s Pub Platform",
      p: "Our Big Happy SSP allows brands to access unique first-priority supply of premium publishers, with advanced audience and contextual targeting.",
      list: [
        { icons: Bag, text: " HAND-SELECTED PUBLISHER AND APP LISTS" },
        { icons: Bag, text: " NEXT-GENERATION HIGH IMPACT UNITS" },
        {
          icons: Bag,
          text: " ALL CREATIVE BUILT BY BIG HAPPY’S END TO END AD STUDIO",
        },
        { icons: Bag, text: " AUDIENCE AND VERTICAL BASED TARGETING" },
      ],
    },
    sliderB: {
      type: "bgImage",
      image: AudienceImage.src,
      title: "Reach Your Desired Audience",
      p: "Each Big Happy campaign can target custom publisher lists, custom data segments, and your 1st party data.",
      list: [
        {
          icons: Bag,
          text: " AUDIENCE AND CONTEXTUAL VERTICAL BASED INVENTORY",
        },
        {
          icons: Bag,
          text: " LEVERAGE FIRST OR THIRD PARTY SEGMENTS VIA MANAGED SERVICE OR PROGRAMMATIC",
        },
        {
          icons: Bag,
          text: " CUSTOM AUDIENCE ENGAGEMENT DASHBOARD",
        },
        { icons: Bag, text: " BIG HAPPY REACHES CONSUMERS ACROSS ALL DEVICES" },
      ],
    },
    sliderC: {
      type: "bgImage",
      image: TechImage.src,
      title: "Real Impact, Real Results",
      p: "Our units deliver best in class performance, meeting and exceeding your rich media KPI’s, while driving action from your consumers.",
      list: [
        {
          icons: Bag,
          text: " XR (AR,VR) CAMPAIGNS ILLICIT A 7X  RETENTION RATE  OVER TRADITIONAL CONTENT (SOURCE: BLIPPAR)",
        },
        {
          icons: Bag,
          text: " CUSTOM AUDIENCE ENGAGEMENT DASHBOARD WITH REAL-TIME METRICS",
        },
        {
          icons: Bag,
          text: " BIG HAPPY SSP HAS A 88% VIEWABILITY RATE VIA DOUBLEVERIFY PINNACLE",
        },
        {
          icons: Bag,
          text: " CREATIVE  TAGGED VIA DCM FOR TRANSPARENT REPORTING.  TAGLESS INTEGRATIONS INTO DSP'S ALSO AVAILABLE",
        },
      ],
    },
    sliderD: {
      type: "bgImage",
      image: IdeaGirlImage.src,
      title: "We’re Here To Help",
      p: "Limited or no assets with big ad dreams? Don’t worry — our Happy Studio can take almost no assets and create an incredibly captivating campaign for you from scratch.",
      list: [
        {
          icons: Bag,
          text: " OUR STUDIO CAN CREATE ALL OF YOUR BRAND ASSETS FROM SCRATCH WITHIN DAYS",
        },
        {
          icons: Bag,
          text: " TAKE YOUR TRADITIONAL ASSETS AND RUN THEM THROUGH OUR STUDIO TO CREATE ROBUST HIGH IMPACT EXPERIENCES",
        },
        {
          icons: Bag,
          text: " CUSTOM BIG HAPPY TOOL ALLOWS YOU TO UPLOAD STATIC PHOTOS OR IMAGES  TO BE MADE INTO 3D",
        },
        {
          icons: Bag,
          text: " CREATIVE  TAGGED VIA DCM FOR TRANSPARENT REPORTING.  TAGLESS INTEGRATIONS INTO DSP'S ALSO AVAILABLE",
        },
      ],
    },
  },
};

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <Layout title="Big Happy">
      <Banner data-aos="fade-up">
        <BannerSliderWrapper />
      </Banner>
      <section className={styles.bigPadding}></section>
      <ProductSliderSection data={data.sliderData} />
      <BigText data-aos="fade-up" />
    </Layout>
  );
}
