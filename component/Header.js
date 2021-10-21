/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header/Header.module.scss";
import { routes } from "../config/routes";
import MenuItem from "./MenuItem";
import logo from "../public/images/bighappy-logo.png";
import logoWhite from "../public/images/bighappy-logo-white.png";
import fb from "../public/images/fb.png";
import insta from "../public/images/insta.png";
import linkedin from "../public/images/linkedin.png";
import twitter from "../public/images/twitter.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(()=>{
    (function(){

      var doc = document.documentElement;
      var w = window;
    
      var prevScroll = w.scrollY || doc.scrollTop;
      var curScroll;
      var direction = 0;
      var prevDirection = 0;
    
      var header = document.getElementById('site-header');
    
      var checkScroll = function() {
    
        /*
        ** Find the direction of scroll
        ** 0 - initial, 1 - up, 2 - down
        */
    
        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) { 
          //scrolled up
          direction = 2;
        }
        else if (curScroll < prevScroll) { 
          //scrolled down
          direction = 1;
        }
    
        if (direction !== prevDirection) {
          toggleHeader(direction, curScroll);
        }
    
        prevScroll = curScroll;
      };
    
      var toggleHeader = function(direction, curScroll) {
        if (direction === 2 && curScroll > 52) { 
    
          //replace 52 with the height of your header in px
    
          header.classList.add('hide');
          prevDirection = direction;
        }
        else if (direction === 1) {
          header.classList.remove('hide');
          prevDirection = direction;
        }
      };
    
      window.addEventListener('scroll', checkScroll);
    
    })();
  },[])
  return (
    <header id="site-header" className={styles.header}>
      <nav>
        <div className={styles.container}>
          <div className={styles.logoWrapper}>
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={menuOpen ? logoWhite.src : logo.src} />
            </Link>
          </div>
          <div
            className={`${styles.collapseBar} ${
              menuOpen ? styles.collapseBarVisible : styles.collapseBarHidden
            }`}
          >
            <div className={styles.menuMainMenuContainer}>
              <ul>
                {routes.map((route, id) => (
                  <li key={id}>
                    <MenuItem route={route} />
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.socialLinks}>
              <ul>
                <li>
                  <Image src={twitter.src} width="18" height="18" />
                </li>
                <li>
                  <Image src={linkedin.src} width="18" height="18" />
                </li>
                <li>
                  <Image src={fb.src} width="18" height="18" />
                </li>
                <li>
                  <Image src={insta.src} width="18" height="18" />
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.toggleBtnWrapper}>
            <button
              id="toggle-btn"
              className={`${styles.toggleBtn} ${
                menuOpen ? styles.toggleBtnOpen : styles.toggleBtnClosed
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              &nbsp;
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
