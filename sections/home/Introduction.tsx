import React from "react";
import SectionContainer from "../../components/SectionContainer";
import Button from "../../components/Button";
import { BannerDataType, introductionData } from "../../utils/data";
//STYLE
import styles from "../../styles/sections/home/introduction.module.scss";
import Card from "../../components/Card";

const v: BannerDataType[] = introductionData;

export default function Introduction() {
  return (
    <SectionContainer>
      <h4 className={styles.h4}>
        Why Choose <span className={styles.span}>Our Web?</span>
      </h4>
      <div className={styles.container}>
        <div className={styles.left}>
          <p>
            Our website provides a variety of interesting information and is currently being discussed by the public.
          </p>
          <p>
            By using our site, you can easily get the information you want, of course, with clear and concise
            information
          </p>
          <Button title="Learn More" />
        </div>
        <div className={styles.right}>
          <div className={styles.grid1}>
            <Card width="100%">
              <div className={styles.row}>
                <div>{v[0].icon}</div>
                <p>{v[0].title}</p>
              </div>
              <br />
              <p>{v[0].description}</p>
            </Card>
            <Card width="100%">
              <div className={styles.row}>
                <div>{v[1].icon}</div>
                <p>{v[1].title}</p>
              </div>
              <br />
              <p>{v[1].description}</p>
            </Card>
          </div>
          <div className={styles.grid2}>
            <Card height="100%">
              <div className={styles.row}>
                <div>{v[2].icon}</div>
                <p>{v[2].title}</p>
              </div>
              <br />
              <p>{v[2].description}</p>
            </Card>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
