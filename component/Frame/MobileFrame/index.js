/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../../styles/frames/MobileFrame.module.scss";
import iPhoneCopy from "../../../public/images/iphone-copy.png";

const MobileFrame = ({ src, noPhone, staticBanner }) => {
  return (
    <>
      {!noPhone && (
        <img className={styles.phone} src={iPhoneCopy.src} alt="iPhone" />
      )}
      <div
        className={staticBanner ? styles.iframePhoneStatic : styles.iframePhone}
      >
        <iframe src={src} style={{ pointerEvents: "none" }}></iframe>
      </div>
    </>
  );
};

export default MobileFrame;
