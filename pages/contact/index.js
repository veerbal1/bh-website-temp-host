import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { TextField } from "@mui/material";

import BigTextSecondary from "../../component/Typography/BigTextSecondary";
import Layout from "../../component/Wrapper/Layout";
import styles from "../../styles/Contact.module.scss";
import { hideBodyBeforeElement } from "../../utils";
import ContactForm from "../../component/Form/ContactForm";

function Contact() {
  useEffect(() => {
    hideBodyBeforeElement();
    AOS.init({ duration: 1000 });
  });

  return (
    <Layout title="Contact - Big Happy">
      <section className={styles.bigText} data-aos="fade-up">
        <div className={styles.container}>
          <BigTextSecondary className={styles.bigText}>
            We enjoy interacting with people. So any question{" "}
            <strong>big</strong> or small, drop us a note.
          </BigTextSecondary>
        </div>
      </section>
      <section className={styles.contactForm}>
        <div className={styles.container}>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
