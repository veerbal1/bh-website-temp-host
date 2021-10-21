import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "../styles/footer/Footer.module.scss";
import IABMember from "../public/images/iab-member.gif";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, faCoffee);

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.leftElement}>
            <p>
              347 5th Avenue
              <br />
              New York, NY 10016
            </p>
          </div>
          <div className={styles.rightElement}>
            <h4 data-aos="fade-up">
              Drop us a line or two, we are open for new
              <br />
              projects and collaborations!
            </h4>
            <a href="mailto:contact@bighappy.co" data-aos="fade-up">contact@bighappy.co</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.container}>
          <div className={styles.socialLinks}>
            <ul>
              <li className={styles.btmLogo}>
                <a href="#">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IABMember.src} alt="Forbes" />
                </a>
              </li>
              <li>
                <a target="_blank">
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </a>
              </li>
              <li>
                <a target="_blank">
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.quickLinks}>
            <div className={styles.menuFooterMenuContainer}>
              <ul id="menu-footer-menu">
                <li>
                  <a href="https://bighappy.co/ad-studio/">Ad Studio</a>
                </li>
                <li>
                  <a href="https://bighappy.co/pub-tech/">Publisher Tech</a>
                </li>
                <li>
                  <a href="https://bighappy.co/contact/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>© 2021 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
