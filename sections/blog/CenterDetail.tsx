import React from "react";
import PopularPost from "../../components/PopularPost";
import styles from "../../styles/sections/blog/center-detail.module.scss";

interface PropsInterface {
  title: string;
  body: string
}

function CenterDetail({ title, body }: PropsInterface) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h4>{title}</h4>
        <br />
        <div className={styles.detail}>
          <p>
            {body}
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <PopularPost />
      </div>
    </div>
  );
}

export default CenterDetail;
