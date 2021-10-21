import React from "react";
import BigTextSecondary from "../../component/Typography/BigTextSecondary";
import Layout from "../../component/Wrapper/Layout";
import styles from "../../styles/Careers.module.scss";
import PrimaryParagraph from "../../component/Typography/PrimaryParagraph";

function Careers() {
  return (
    <Layout>
      <div id="primary" className={styles.contentArea}>
        <main>
          <section>
            <div className={styles.container}>
              <article>
                <header>
                  <BigTextSecondary>Careers</BigTextSecondary>
                </header>
                <div className={styles.entryContent}>
                  <h2>ABOUT BIG HAPPY</h2>
                  <PrimaryParagraph>
                    Big Happy combines the next generation of mobile focused
                    creative with publisher media to create an interaction
                    across publisher web pages that wows the modern-day consumer
                    and drives brand outcomes.
                  </PrimaryParagraph>
                  <PrimaryParagraph>
                    As the leader in building highly engaging mobile ad
                    creatives, Fortune 500 brand partners are constantly tapping
                    into our end-to-end mobile targeting and creative platforms
                    to reach their audiences on the go, or at home – wherever
                    they may be. Brands are turning time and time again to Big
                    Happy to guide their mobile advertising into the future.
                  </PrimaryParagraph>
                  <PrimaryParagraph>
                    With teams spanning five different cities and 25+ team
                    members, Big Happy is growing rapidly. Big Happy is
                    headquartered in beautiful New York City on Madison Avenue,
                    with views of Rockefeller Center. Our team brings the energy
                    every day, producing best in class work for our brands and
                    we have some fun doing it as well.
                  </PrimaryParagraph>
                  <PrimaryParagraph>
                    With teams Big Happy offers a variety of benefits, including
                    401k, Health Insurance, Dental Insurance, Eye Insurance and
                    many additional other benefits our Happies love!
                  </PrimaryParagraph>
                  <div className={styles.awesomeJobsWrapper}>
                    <AwesomeFilterWrapper
                      className={styles.awesomeFilterWrapper}
                    />
                    <AwesomeJobListingWrapper
                      className={styles.awesomeJobListing}
                    />
                  </div>
                </div>
              </article>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}

const AwesomeFilterWrapper = ({ ...props }) => {
  return (
    <div {...props}>
      <AwesomeFilterItem />
      <AwesomeFilterItem />
      <AwesomeFilterItem />
    </div>
  );
};

const AwesomeFilterItem = () => {
  return (
    <div className={styles.awesomeFilterItem}>
      <div className={styles.awsmSelectricWrapper}>
        <div>
          <select>
            <option value="">All Job Category</option>
            <option value="9">Engineering</option>
            <option value="8">Sales</option>
            <option value="10">Support</option>
          </select>
        </div>
      </div>
    </div>
  );
};

const AwesomeJobListingWrapper = ({ ...props }) => {
  return (
    <div {...props}>
      <AwesomeJobListingItem />
      <AwesomeJobListingItem />
      <AwesomeJobListingItem />
      <AwesomeJobListingItem />
      <AwesomeJobListingItem />
      <AwesomeJobListingItem />
    </div>
  );
};

const AwesomeJobListingItem = () => {
  return (
    <div className={styles.awesomeJobListingItem}>
      <div className={styles.awesomeJobItem}>
        <div className={styles.awesomeListLeft}>
          <h2 className={styles.awsmJobPostTitle}>Platform Engineer</h2>
        </div>
        <div className={styles.awesomeListRight}>
          <div className={styles.AwsmJobSpecificationWrapper}>
            <div className={styles.AwsmJobSpecificationItem}>
              <span>Engineering</span>
            </div>
            <div className={`${styles.AwsmJobSpecificationItem}`}>
              <span>New York City</span>
            </div>
          </div>
          <div className={styles.awsmJobMoreContainer}>
            <a href="#">More Details  <span></span></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
