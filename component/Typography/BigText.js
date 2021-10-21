import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import styles from "../../styles/BigText.module.scss";

const BigText = ({ ...props }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <section className={styles.section} {...props} data-aos="fade-up">
      <div className={styles.container}>
        <h1 data-aos="fade-up">
          Ready to start <strong>changing the way</strong> your consumers see
          your brand?
        </h1>
        <div className={styles.bigTextBtnWrapper} data-aos="fade-up">
          <a href="#">Get Started</a>
        </div>
      </div>
    </section>
  );
};

export default BigText;
